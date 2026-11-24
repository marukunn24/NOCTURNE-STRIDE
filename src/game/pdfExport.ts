import { drawEnemyPortrait } from './enemyPortrait';
import {
  CONSOLIDATED_PROMPT_TEXT,
  DAMAGE_TABLE,
  ENEMY_ENCYCLOPEDIA,
  STAGE_ENCYCLOPEDIA,
} from './gameData';
import {
  WORLD_1_ENCOUNTERS,
  WORLD_2_ENCOUNTERS,
  WORLD_3_ENCOUNTERS,
  WORLD_4_ENCOUNTERS,
  WORLD_5_ENCOUNTERS,
} from './levels';
import {
  drawEnemyAttackDiagram,
  drawStageBlueprintDiagram,
  getCachedStageDef,
  getStageBlueprintBands,
} from './specDiagrams';

const A4_W = 1240;
const A4_H = 1754;
const MARGIN = 64;
const CONTENT_W = A4_W - MARGIN * 2;

export interface EncodedPdfPage {
  jpgBytes: Uint8Array;
  width: number;
  height: number;
}

function createA4Page(
  pageNo: number,
  totalPages: number
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = A4_W;
  canvas.height = A4_H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D context unavailable');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, A4_W, A4_H);

  ctx.fillStyle = '#0b1126';
  ctx.fillRect(0, 0, A4_W, 56);
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(0, 56, A4_W, 3);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '700 16.5px "JetBrains Mono", "Noto Sans JP", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(
    `NOCTURNE STRIDE // COMPLETE DESIGN BIBLE (W1-W5 · ${ENEMY_ENCYCLOPEDIA.length} UNITS · ${STAGE_ENCYCLOPEDIA.length} STAGES + 15 ENCOUNTERS)`,
    MARGIN,
    35
  );

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 14px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText(`PAGE ${pageNo} / ${totalPages}`, A4_W - MARGIN, 35);

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(MARGIN, A4_H - 50);
  ctx.lineTo(A4_W - MARGIN, A4_H - 50);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '500 12.5px "Noto Sans JP", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(
    `W1〜W5完全設計仕様書（全${ENEMY_ENCYCLOPEDIA.length}種攻撃図解・実画面風CADステージ設計図・各面400字+解説・累積プロンプト全文）`,
    MARGIN,
    A4_H - 26
  );
  ctx.textAlign = 'right';
  ctx.fillText(`Nocturne Stride Spec — P.${pageNo}`, A4_W - MARGIN, A4_H - 26);

  ctx.textAlign = 'left';
  return { canvas, ctx };
}

function drawSectionTitle(ctx: CanvasRenderingContext2D, y: number, title: string, sub?: string): number {
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(MARGIN, y, 6, 30);
  ctx.fillStyle = '#0f172a';
  ctx.font = '700 23px "Noto Sans JP", sans-serif';
  ctx.fillText(title, MARGIN + 16, y + 23);
  if (sub) {
    ctx.fillStyle = '#0284c7';
    ctx.font = '600 13.5px "JetBrains Mono", monospace';
    ctx.fillText(sub, MARGIN + 16, y + 46);
    return y + 60;
  }
  return y + 42;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let current = '';
  for (const ch of text) {
    if (ch === '\n') {
      lines.push(current);
      current = '';
      continue;
    }
    const next = current + ch;
    if (ctx.measureText(next).width > maxWidth && current.length > 0) {
      lines.push(current);
      current = ch;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function encodeAndReleaseCanvas(canvas: HTMLCanvasElement): EncodedPdfPage {
  const dataUrl = canvas.toDataURL('image/jpeg', 0.86);
  const b64 = dataUrl.split(',')[1] ?? '';
  const binStr = atob(b64);
  const jpgBytes = new Uint8Array(binStr.length);
  for (let k = 0; k < binStr.length; k++) jpgBytes[k] = binStr.charCodeAt(k);
  const width = canvas.width;
  const height = canvas.height;
  // Release GPU/RAM immediately so 140+ A4 pages stay lightweight
  canvas.width = 0;
  canvas.height = 0;
  return { jpgBytes, width, height };
}

function paginatePromptText(): string[][] {
  const measureCanvas = document.createElement('canvas');
  measureCanvas.width = 100;
  measureCanvas.height = 40;
  const mctx = measureCanvas.getContext('2d');
  if (!mctx) return [[CONSOLIDATED_PROMPT_TEXT]];

  mctx.font = '500 13px "JetBrains Mono", "Noto Sans JP", monospace';
  const maxW = CONTENT_W - 44;
  const allWrapped = wrapText(mctx, CONSOLIDATED_PROMPT_TEXT, maxW);
  measureCanvas.width = 0;
  measureCanvas.height = 0;

  const linesPerPage = 70;
  const pages: string[][] = [];
  for (let i = 0; i < allWrapped.length; i += linesPerPage) {
    pages.push(allWrapped.slice(i, i + linesPerPage));
  }
  return pages.length > 0 ? pages : [['']];
}

function buildPdfFromEncodedPages(pages: EncodedPdfPage[]): Blob {
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [0];
  let bytePos = 0;

  const pushBytes = (bytes: Uint8Array) => {
    chunks.push(bytes);
    bytePos += bytes.length;
  };
  const pushStr = (s: string) => pushBytes(encoder.encode(s));

  pushStr('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n');

  const pageCount = pages.length;
  const pageObjIds: number[] = [];
  for (let i = 0; i < pageCount; i++) {
    pageObjIds.push(3 + i * 3);
  }

  offsets[1] = bytePos;
  pushStr('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  offsets[2] = bytePos;
  pushStr(
    `2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageCount} >>\nendobj\n`
  );

  const ptW = 595.28;
  const ptH = 841.89;

  for (let i = 0; i < pageCount; i++) {
    const pg = pages[i];
    const pageId = 3 + i * 3;
    const contentId = 4 + i * 3;
    const imageId = 5 + i * 3;

    offsets[pageId] = bytePos;
    pushStr(
      `${pageId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${ptW} ${ptH}] /Resources << /XObject << /Im${i} ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`
    );

    const streamCmd = `q\n${ptW} 0 0 ${ptH} 0 0 cm\n/Im${i} Do\nQ\n`;
    offsets[contentId] = bytePos;
    pushStr(`${contentId} 0 obj\n<< /Length ${streamCmd.length} >>\nstream\n${streamCmd}endstream\nendobj\n`);

    offsets[imageId] = bytePos;
    pushStr(
      `${imageId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${pg.width} /Height ${pg.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${pg.jpgBytes.length} >>\nstream\n`
    );
    pushBytes(pg.jpgBytes);
    pushStr('\nendstream\nendobj\n');
  }

  const xrefPos = bytePos;
  const maxId = 2 + pageCount * 3;
  pushStr(`xref\n0 ${maxId + 1}\n0000000000 65535 f \n`);
  for (let id = 1; id <= maxId; id++) {
    const off = String(offsets[id] ?? 0).padStart(10, '0');
    pushStr(`${off} 00000 n \n`);
  }

  pushStr(`trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`);

  const merged = new Uint8Array(bytePos);
  let cursor = 0;
  for (const c of chunks) {
    merged.set(c, cursor);
    cursor += c.length;
  }
  return new Blob([merged], { type: 'application/pdf' });
}

export async function exportSpecPdfAsync(
  onProgress?: (cur: number, total: number, label: string) => void
): Promise<void> {
  const allEncounters = [
    ...WORLD_1_ENCOUNTERS,
    ...WORLD_2_ENCOUNTERS,
    ...WORLD_3_ENCOUNTERS,
    ...WORLD_4_ENCOUNTERS,
    ...WORLD_5_ENCOUNTERS,
  ];
  const encounterPageCount = Math.ceil(allEncounters.length / 2);
  const promptPages = paginatePromptText();
  const stageBandSets = STAGE_ENCYCLOPEDIA.map((st) => ({
    st,
    bands: getStageBlueprintBands(st.id),
  }));
  // 1 zoomed game-screen band per A4 page for crystal-clear full coordinate manifests (300+ pages)
  const stageBandPagesCount = stageBandSets.reduce((acc, item) => acc + item.bands.length, 0);

  const totalPages =
    2 +
    ENEMY_ENCYCLOPEDIA.length +
    STAGE_ENCYCLOPEDIA.length +
    stageBandPagesCount +
    encounterPageCount +
    promptPages.length;

  const encodedPages: EncodedPdfPage[] = [];
  let currentPage = 0;

  const yieldTick = async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  };

  // ==================== PAGE 1: COVER, W1-W5 ARCHITECTURE & BOSS TABLE ====================
  {
    currentPage++;
    onProgress?.(currentPage, totalPages, '表紙・W1〜W5全体設計・ボス一覧を生成中...');
    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;

    ctx.fillStyle = '#0b1126';
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, 146, 12);
    ctx.fill();

    ctx.fillStyle = '#38f2ff';
    ctx.font = '700 15px "JetBrains Mono", monospace';
    ctx.fillText('URBAN FANTASY 2D ACTION // UNABRIDGED W1-W5 MASTER SPECIFICATION', MARGIN + 26, y + 34);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 34px "Noto Sans JP", sans-serif';
    ctx.fillText('NOCTURNE STRIDE 完全設計仕様書', MARGIN + 26, y + 80);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '500 15px "Noto Sans JP", sans-serif';
    ctx.fillText(
      `W1〜W5全${STAGE_ENCYCLOPEDIA.length}面＋${allEncounters.length}エリア戦 / 全${ENEMY_ENCYCLOPEDIA.length}種攻撃図解 / 実画面風CAD設計図 / 400字+解説`,
      MARGIN + 26,
      y + 112
    );
    ctx.fillStyle = '#7dd3fc';
    ctx.font = '600 13px "JetBrains Mono", monospace';
    ctx.fillText(`TOTAL VOLUME: ${totalPages} A4 PAGES (UNRESTRICTED EDITION)`, MARGIN + 26, y + 134);
    y += 164;

    y = drawSectionTitle(ctx, y, '1. W1〜W5 ワールド構成・設計鉄則・操作体系', 'WORLD ARCHITECTURE & CORE INVARIANTS');
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, 240, 10);
    ctx.fill();
    ctx.stroke();

    const coreLines = [
      '■ W1 境界都市ネオン(9面)：直感マルチタッチ操作。1-4隠し→1-S、1-3隠し→2-2ワープ、1-BOSSアークメイジ全域弾。',
      '■ W2 黄金歯車と雷鳴(9面)：2-1〜2-7+2-BOSS。歯車踏破・サンダーレール・落雷高速道・2-7/2-城上ステ・2-3/2-5隠し。',
      '■ W3 翡翠樹海と結晶聖域(10面)：3-1/3-2＆3-4/3-5分岐・砦×2・3-6垂直降下・3-7二層回廊・3-3/3-6隠し→W4。',
      '■ W4 蒼氷と絶対零度の王城(9面)：4-4水中相転移＆4-5強風ブリザード分岐・4-6氷柱垂直降下・4-3/4-5隠し→W5。',
      '■ W5 深紅覇王城と熾天の聖域(12面)：5-1〜5-8＋砦×3＋5-城。スカーレットスリング・5-7弾幕前奏曲・5-砦3熾天使セラフ。',
      '■ 統合ワールドマップ：W1〜W5を9,680pxへシームレス統合。9箇所の隠しゴールによるクロスワールドワープ網を金色破線表示。',
      '■ ボス・エリア戦鉄則：全ボスワープ禁止＆壁端まで突進完走。全15エリア戦は中ボス流用なし＆撃破後回復オーブ(+16HP)。',
      '■ 全49面400字+解説：各ステージの全体印象・区間地形・上下分岐・敵・ギミック配置を1頁1拡大図＋全座標台帳で完全記録。',
    ];
    ctx.fillStyle = '#1e293b';
    ctx.font = '500 13px "Noto Sans JP", sans-serif';
    let cy = y + 26;
    for (const line of coreLines) {
      ctx.fillText(line, MARGIN + 16, cy);
      cy += 26;
    }
    y += 256;

    y = drawSectionTitle(ctx, y, '2. 全ワールド 主要ボス＆固有ギミック統括表', 'WORLD BOSS ROSTER & EXCLUSIVE MECHANICS');
    const worldSummaries: [string, string, string, string][] = [
      [
        'WORLD 1 (9面 + 3戦)',
        '電脳蒼都市＆魔導飛行船',
        '加速板・反転重力・隠し1-S(→2-1)/1-3(→2-2)・アークメイジ(HP11全域弾) / 試作機皇',
        '#0284c7',
      ],
      [
        'WORLD 2 (9面 + 3戦)',
        '黄金歯車・雷鳴時計塔',
        'クロックワークコア(移動レーザー)・雷帝クロノス(HP14・3形態) / 秘密2-3(→3-1)/2-5(→3-4)',
        '#d97706',
      ],
      [
        'WORLD 3 (10面 + 3戦)',
        '翡翠樹海＆結晶聖域',
        '翠風輪・共鳴花粉・茨ピストン・3-6降下・3-7二層 / ワーデン・キメラ・翠帝 / 秘密→W4',
        '#059669',
      ],
      [
        'WORLD 4 (9面 + 3戦)',
        '蒼氷と絶対零度の王城',
        '滑走氷・冷水相転移・ブリザード・氷騎士・コキュートス・氷帝グレイシス / 秘密→W5',
        '#2563eb',
      ],
      [
        'WORLD 5 (12面 + 3戦)',
        '深紅覇王城と熾天の聖域',
        '紅蓮スリング・マグマベルト・溶岩間欠泉・5-4秘密(→5-7)・5-砦3熾天使セラフ(24HP)・覇王(26HP)',
        '#e11d48',
      ],
    ];

    for (const [wName, theme, desc, col] of worldSummaries) {
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.roundRect(MARGIN, y, CONTENT_W, 74, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = col;
      ctx.fillRect(MARGIN, y, 8, 74);

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 15.5px "Noto Sans JP", sans-serif';
      ctx.fillText(`${wName}  —  ${theme}`, MARGIN + 22, y + 27);

      ctx.fillStyle = '#334155';
      ctx.font = '500 13px "Noto Sans JP", sans-serif';
      ctx.fillText(desc, MARGIN + 22, y + 54);
      y += 84;
    }

    y += 10;
    y = drawSectionTitle(ctx, y, '3. 300+ページ構成ガイド', 'DOCUMENT STRUCTURE');
    const stStart = 3 + ENEMY_ENCYCLOPEDIA.length;
    const stEnd = stStart + STAGE_ENCYCLOPEDIA.length + stageBandPagesCount - 1;
    const encStart = stEnd + 1;
    const encEnd = encStart + encounterPageCount - 1;
    const prStart = encEnd + 1;
    const tocLines = [
      `・P.1         : 表紙 / W1〜W5統合設計思想 / 全ワールドボス統括表`,
      `・P.2         : 全ダメージ1刻み一覧表（雑魚・特殊・W1〜W5罠・全ボス・回復オーブ）`,
      `・P.3〜P.${2 + ENEMY_ENCYCLOPEDIA.length}   : 全${ENEMY_ENCYCLOPEDIA.length}種キャラクター図鑑（1体1頁：大型肖像＋実戦戦闘キャプチャ＋AI＋殴り書き）`,
      `・P.${stStart}〜P.${stEnd} : 全${STAGE_ENCYCLOPEDIA.length}面(400字+解説)＋実画面風拡大CAD設計図(${stageBandPagesCount}頁)＋全座標台帳`,
      `・P.${encStart}〜P.${encEnd} : 全${allEncounters.length}エリア戦（W1〜W5徘徊ミニボス）アリーナ設計図`,
      `・P.${prStart}〜P.${totalPages} : 累積システムプロンプト＆こだわり殴り書き全文`,
    ];
    ctx.fillStyle = '#0f172a';
    ctx.font = '600 13.5px "JetBrains Mono", "Noto Sans JP", sans-serif';
    for (const tl of tocLines) {
      ctx.fillText(tl, MARGIN + 12, y);
      y += 26;
    }

    encodedPages.push(encodeAndReleaseCanvas(canvas));
  }

  // ==================== PAGE 2: COMPLETE 1-INCREMENT DAMAGE TABLE ====================
  {
    currentPage++;
    onProgress?.(currentPage, totalPages, '1刻みダメージ完全一覧表を生成中...');
    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;
    y = drawSectionTitle(
      ctx,
      y,
      '4. HP100/100 1刻み被弾ダメージ ＆ 回復数値完全表',
      'GRANULAR 1-INCREMENT DAMAGE TABLE (WORLD 1 TO WORLD 5)'
    );

    const damageRows: [string, string, string][] = [
      ['スライムミニ / ホロデコイ / ネオンバット', `-${DAMAGE_TABLE.mini_slime} / -${DAMAGE_TABLE.holo_decoy} / -${DAMAGE_TABLE.neon_bat}`, 'W1 軽量・奇襲系 (8〜10)'],
      ['巡回ドローン / ギアローラー / スパークジェリー', `-${DAMAGE_TABLE.patrol_drone} / -${DAMAGE_TABLE.gear_roller} / -${DAMAGE_TABLE.spark_jelly}`, '巡回＆W2機械敵 (11〜22)'],
      ['レーザードローン(射撃) / サンダーインプ(雷)', `-${DAMAGE_TABLE.laser_drone_beam} / -${DAMAGE_TABLE.thunder_imp_bolt}`, 'W2高出力砲撃 (24〜27)'],
      ['反発バウンサー / テザー電線 / 突撃ラマー', `-${DAMAGE_TABLE.spring_bumper} / -${DAMAGE_TABLE.tether_spark_wire} / -${DAMAGE_TABLE.dash_rammer}`, '物理・ワイヤー・突進 (15〜24)'],
      ['磁力クレーン / 鏡面歯車 / 反重力装置', `-${DAMAGE_TABLE.magnet_crane} / -${DAMAGE_TABLE.mirror_gear} / -${DAMAGE_TABLE.gravity_flipper}`, 'W2特殊ギミック敵 (16〜21)'],
      ['感電橋 / 高出力レーザー / 狙い落雷 / 強制圧壊', `-${DAMAGE_TABLE.shock_platform} / -${DAMAGE_TABLE.beam_laser} / -${DAMAGE_TABLE.lightning_strike} / -${DAMAGE_TABLE.scroll_crush}`, 'W2環境ギミック (25〜30)'],
      ['ブルドーザー(通常/突進) / ゴーレムナイト', `-${DAMAGE_TABLE.bulldozer_patrol} / -${DAMAGE_TABLE.bulldozer_charge} / -${DAMAGE_TABLE.golem_knight}`, '重装甲突進 (21〜30)'],
      ['スナイパー狙撃弾 / プリズム反射 / レールガン', `-${DAMAGE_TABLE.sniper_turret_shot} / -${DAMAGE_TABLE.prism_reflector_beam} / -${DAMAGE_TABLE.railgun_mech_shot}`, '高速レーザー・反射 (21〜33)'],
      ['垂下電線 / 落下 / 砦トゲ / 回転レーザー / 大砲', `-${DAMAGE_TABLE.cable_shock} / -${DAMAGE_TABLE.pitfall} / -${DAMAGE_TABLE.spike_trap} / -${DAMAGE_TABLE.airship_cannon}`, 'W1環境罠＆重砲 (24〜32)'],
      ['1-砦ガーディアン / 1-BOSSアークメイジ(11HP)', `-${DAMAGE_TABLE.mid_guardian_contact} / -${DAMAGE_TABLE.archmage_homing_orb} / -${DAMAGE_TABLE.archmage_contact}`, 'W1ボス (17〜28・全域弾幕)'],
      ['2-砦クロックワーク / 2-BOSSクロノス(14HP)', `-${DAMAGE_TABLE.clockwork_core_laser} / -${DAMAGE_TABLE.thunder_kronos_sweep} / -${DAMAGE_TABLE.thunder_kronos_blitz}`, 'W2ボス＆移動レーザー (17〜26)'],
      ['W3雑魚：ウィーバー / マンティス / ヒュドラ / 狙撃', `-${DAMAGE_TABLE.thorn_weaver_seed} / -${DAMAGE_TABLE.emerald_mantis_slash} / -${DAMAGE_TABLE.bio_hydra_wave} / -${DAMAGE_TABLE.jade_sniper_beam}`, 'W3翡翠樹海エネミー (16〜26)'],
      ['W3専用罠：咬み罠 / 胞子噴射 / 茨ピストン / 大鎌', `-${DAMAGE_TABLE.snap_trap} / -${DAMAGE_TABLE.spore_jet} / -${DAMAGE_TABLE.thorn_piston} / -${DAMAGE_TABLE.scythe_pendulum}`, 'W3固有トラップ (19〜24)'],
      ['W3ボス：ワーデン / キメラ / 翠帝エメラルド', `-${DAMAGE_TABLE.verdant_warden_laser} / -${DAMAGE_TABLE.jade_chimera_beam} / -${DAMAGE_TABLE.emerald_emperor_laser}`, 'W3ボス3体・非ワープ (20〜28)'],
      ['W4雑魚：氷霊 / 蝙蝠 / 氷河巨兵 / 氷砲台 / 妖精', `-${DAMAGE_TABLE.frost_wraith_shard} / -${DAMAGE_TABLE.icicle_bat_crystal} / -${DAMAGE_TABLE.glacier_golem_boulder} / -${DAMAGE_TABLE.cryo_turret_nova}`, 'W4蒼氷エネミー (16〜27)'],
      ['W4高速＆特殊：スケーター / 鏡氷 / 凍土ワーム', `-${DAMAGE_TABLE.ice_skater} / -${DAMAGE_TABLE.mirror_frost} / -${DAMAGE_TABLE.permafrost_wyrm_contact}`, 'W4滑走・反射・潜行 (19〜23)'],
      ['W4固有罠：冷凍ビーム / 落下ツララ / 氷振子 / 機雷', `-${DAMAGE_TABLE.freeze_beam} / -${DAMAGE_TABLE.falling_icicle} / -${DAMAGE_TABLE.ice_pendulum} / -${DAMAGE_TABLE.frost_mine}`, 'W4固有トラップ (19〜25)'],
      ['W4ボス：氷騎士 / コキュートス / 蒼氷王グレイシス', `-${DAMAGE_TABLE.glacia_knight_lance} / -${DAMAGE_TABLE.cocytus_core_beam} / -${DAMAGE_TABLE.glacies_emperor_wave}`, 'W4ボス3体・非ワープ (24〜30)'],
      ['W5雑魚：槍兵 / 熔岩小鬼 / 紅玉砲台 / 大鎌 / 爆撃', `-${DAMAGE_TABLE.crimson_lancer_lunge} / -${DAMAGE_TABLE.magma_imp_glob} / -${DAMAGE_TABLE.ruby_turret_shot} / -${DAMAGE_TABLE.scarlet_reaper_wave}`, 'W5深紅軍エネミー (21〜26)'],
      ['W5特殊：血鏡騎士 / 紅蓮飛龍 / 煌砲 / 弾幕結晶', `-${DAMAGE_TABLE.blood_mirror} / -${DAMAGE_TABLE.inferno_wyvern_feather} / -${DAMAGE_TABLE.valkyrie_bit_danmaku} / -${DAMAGE_TABLE.danmaku_emitter_orb}`, 'W5反射・飛行弾幕 (18〜20)'],
      ['W5固有罠：溶岩間欠泉 / 断罪大刃振子', `-${DAMAGE_TABLE.magma_geyser} / -${DAMAGE_TABLE.pendulum_blade}`, 'W5深紅専用トラップ (25〜26)'],
      ['W5ボス：処刑官 / 溶鉱巨神 / 熾天使 / 紅蓮覇王', `-${DAMAGE_TABLE.ruby_executor_slash} / -${DAMAGE_TABLE.furnace_titan_ember} / -${DAMAGE_TABLE.scarlet_seraph_danmaku} / -${DAMAGE_TABLE.crimson_sovereign_flare}`, 'W5ボス4体 (5-砦3超高密度弾幕)'],
      ['エリア戦：ゴライアス/センチュリオン/翠獣/氷巨人/紅衛', `-${DAMAGE_TABLE.iron_goliath_mortar} / -${DAMAGE_TABLE.volt_centurion_disc} / -${DAMAGE_TABLE.emerald_stalker_spore} / -${DAMAGE_TABLE.frost_titan_wave} / -${DAMAGE_TABLE.scarlet_sentinel_wave}`, 'W1-W5専用ミニボス (21〜24)'],
      ['星幽機皇オーヴァーロード（拡散/スラム/接触）', `-${DAMAGE_TABLE.overlord_core_spread} / -${DAMAGE_TABLE.overlord_core_slam} / -${DAMAGE_TABLE.overlord_core_contact}`, '試作大ボス (27〜36)'],
      ['金色オーブ / エリア戦撃破後・回復オーブ', `+${DAMAGE_TABLE.bonus_orb_heal} HP 回復`, '最大100まで即時回復'],
    ];

    const colW = (CONTENT_W - 16) / 2;
    const rowH = 104;
    damageRows.forEach((row, idx) => {
      const col = idx % 2;
      const rIdx = Math.floor(idx / 2);
      const rx = MARGIN + col * (colW + 16);
      const ry = y + rIdx * (rowH + 8);

      const isHeal = idx === damageRows.length - 1;
      ctx.fillStyle = isHeal ? '#ecfdf5' : rIdx % 2 === 0 ? '#f8fafc' : '#f1f5f9';
      ctx.strokeStyle = isHeal ? '#34d399' : '#cbd5e1';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(rx, ry, colW, rowH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 13px "Noto Sans JP", sans-serif';
      ctx.fillText(row[0], rx + 12, ry + 28);

      ctx.fillStyle = isHeal ? '#059669' : '#e11d48';
      ctx.font = '700 14px "JetBrains Mono", monospace';
      ctx.fillText(`${row[1]} HP`, rx + 12, ry + 58);

      ctx.fillStyle = '#475569';
      ctx.font = '600 11.5px "Noto Sans JP", sans-serif';
      ctx.fillText(row[2], rx + 12, ry + 86);
    });

    encodedPages.push(encodeAndReleaseCanvas(canvas));
  }

  // ==================== PAGES 3..82: 1 UNIT PER PAGE WITH ATTACK SCHEMATICS & SCRIBBLES ====================
  for (let i = 0; i < ENEMY_ENCYCLOPEDIA.length; i++) {
    const en = ENEMY_ENCYCLOPEDIA[i];
    currentPage++;
    onProgress?.(currentPage, totalPages, `敵図鑑 [${en.code}] ${en.name} (${i + 1}/${ENEMY_ENCYCLOPEDIA.length})`);

    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;
    y = drawSectionTitle(
      ctx,
      y,
      `敵キャラクター図鑑 [${i + 1}/${ENEMY_ENCYCLOPEDIA.length}] : ${en.name}`,
      `${en.code} · ${en.category} · ${en.stages}`
    );

    // Top Identity Card (Portrait + Core Metrics)
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, 240, 12);
    ctx.fill();
    ctx.stroke();

    const pBoxX = MARGIN + 20;
    const pBoxY = y + 20;
    const pSize = 200;
    ctx.fillStyle = '#090e24';
    ctx.strokeStyle = en.accentColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(pBoxX, pBoxY, pSize, pSize, 12);
    ctx.fill();
    ctx.stroke();

    drawEnemyPortrait(ctx, en.kind, pBoxX + pSize * 0.5, pBoxY + pSize * 0.52, 2.75);

    const mx = pBoxX + pSize + 28;
    const mw = CONTENT_W - (pSize + 68);

    ctx.fillStyle = '#0f172a';
    ctx.font = '700 28px "Noto Sans JP", sans-serif';
    ctx.fillText(en.name, mx, y + 54);

    ctx.fillStyle = '#e0f2fe';
    ctx.beginPath();
    ctx.roundRect(mx, y + 72, 210, 34, 8);
    ctx.fill();
    ctx.fillStyle = '#0369a1';
    ctx.font = '700 15px "JetBrains Mono", "Noto Sans JP", sans-serif';
    ctx.fillText(`耐久 HP: ${en.hp}`, mx + 14, y + 95);

    ctx.fillStyle = '#ffe4e6';
    ctx.beginPath();
    ctx.roundRect(mx + 224, y + 72, Math.min(mw - 224, 430), 34, 8);
    ctx.fill();
    ctx.fillStyle = '#be123c';
    const dmgLabel =
      en.attackDmg !== null
        ? `接触:-${en.contactDmg}HP / 攻撃:-${en.attackDmg}HP`
        : `接触ダメージ: -${en.contactDmg}HP`;
    ctx.fillText(dmgLabel, mx + 238, y + 95);

    ctx.fillStyle = '#334155';
    ctx.font = '600 15px "Noto Sans JP", sans-serif';
    ctx.fillText(`攻撃属性: ${en.attackLabel}`, mx, y + 140);
    ctx.fillText(`移動・速度: ${en.speedInfo}`, mx, y + 170);
    ctx.fillStyle = '#0284c7';
    ctx.font = '700 14.5px "JetBrains Mono", "Noto Sans JP", sans-serif';
    for (const [li, ln] of wrapText(ctx, `出現ステージ: ${en.stages}`, mw).entries()) {
      if (li >= 2) break;
      ctx.fillText(ln, mx, y + 200 + li * 22);
    }

    y += 262;

    // Attack Behavior & Trajectory Schematic Diagram
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 17px "Noto Sans JP", sans-serif';
    ctx.fillText('■ 行動AI・攻撃軌道模式図（ATTACK & MOVEMENT SCHEMATIC）', MARGIN, y + 18);
    y += 30;
    drawEnemyAttackDiagram(ctx, en, MARGIN, y, CONTENT_W, 380);
    y += 404;

    // Behavior & Weakness Box
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, 286, 12);
    ctx.fill();
    ctx.stroke();

    let ty = y + 36;
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 17px "Noto Sans JP", sans-serif';
    ctx.fillText('【行動AIロジック詳細】', MARGIN + 22, ty);
    ty += 28;
    ctx.fillStyle = '#1e293b';
    ctx.font = '500 15.5px "Noto Sans JP", sans-serif';
    for (const ln of wrapText(ctx, en.behavior, CONTENT_W - 44)) {
      ctx.fillText(ln, MARGIN + 22, ty);
      ty += 24;
    }

    ty += 16;
    ctx.fillStyle = '#0f766e';
    ctx.font = '700 17px "Noto Sans JP", sans-serif';
    ctx.fillText('【攻略・弱点・立ち回り】', MARGIN + 22, ty);
    ty += 28;
    ctx.fillStyle = '#115e59';
    ctx.font = '600 15.5px "Noto Sans JP", sans-serif';
    for (const ln of wrapText(ctx, en.weakness, CONTENT_W - 44)) {
      ctx.fillText(ln, MARGIN + 22, ty);
      ty += 24;
    }

    y += 308;

    // Developer Candid Scribbles Box (devNote)
    ctx.fillStyle = '#fffbeb';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, 560, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#b45309';
    ctx.font = '700 17px "Noto Sans JP", sans-serif';
    ctx.fillText('【開発者殴り書き・こだわり設計メモ（形式不問）】', MARGIN + 22, y + 38);

    const scribble =
      en.devNote ??
      `${en.name}（${en.code}）：${en.attackLabel}の視認性と被弾時の手触りを重視し、${en.stages}のテンポを壊さず記憶に残る挙動へチューニング。`;
    ctx.fillStyle = '#451a03';
    ctx.font = '500 15.5px "Noto Sans JP", sans-serif';
    let sy = y + 74;
    for (const ln of wrapText(ctx, scribble, CONTENT_W - 44)) {
      if (sy > y + 536) break;
      ctx.fillText(ln, MARGIN + 22, sy);
      sy += 26;
    }

    encodedPages.push(encodeAndReleaseCanvas(canvas));
    if (i % 3 === 2) await yieldTick();
  }

  // ==================== MAIN STAGES: OVERVIEW (400+ CHAR) + 1 BAND PER PAGE ZOOMED GAME SCREENS ====================
  for (let i = 0; i < stageBandSets.length; i++) {
    const { st, bands } = stageBandSets[i];
    currentPage++;
    onProgress?.(currentPage, totalPages, `ステージ全体図 [${st.code}] ${st.name} (${i + 1}/${STAGE_ENCYCLOPEDIA.length})`);

    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;
    y = drawSectionTitle(
      ctx,
      y,
      `ステージ設計図 [${st.code}] ${st.name}`,
      `${st.subtitle} · 全長 ${st.lengthPx.toLocaleString()}px · 中間CP×${st.checkpoints} · 拡大設計図 ${bands.length}分割`
    );

    ctx.fillStyle = '#0f172a';
    ctx.font = '700 15.5px "Noto Sans JP", sans-serif';
    ctx.fillText('■ 実画面風ステージ全体俯瞰マップ（次頁以降に1/2〜1/4拡大画面図＋全座標台帳を1頁1区間で掲載）', MARGIN, y + 14);
    y += 24;
    drawStageBlueprintDiagram(ctx, st.id, MARGIN, y, CONTENT_W, 396);
    y += 412;

    const evalBoxH = 684;
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, evalBoxH, 12);
    ctx.fill();
    ctx.stroke();

    let ty = y + 30;
    const maxEvalY = y + evalBoxH - 14;
    const tw = CONTENT_W - 44;

    ctx.fillStyle = '#0369a1';
    ctx.font = '700 14.5px "Noto Sans JP", sans-serif';
    for (const ln of wrapText(ctx, `【固有ギミック・機構】${st.gimmicks}`, tw)) {
      if (ty > maxEvalY) break;
      ctx.fillText(ln, MARGIN + 22, ty);
      ty += 21;
    }
    ty += 6;

    const acts = st.act4 ? [st.act1, st.act2, st.act3, st.act4] : [st.act1, st.act2, st.act3];
    ctx.fillStyle = '#1e293b';
    ctx.font = '500 13.5px "Noto Sans JP", sans-serif';
    for (const act of acts) {
      for (const ln of wrapText(ctx, act, tw)) {
        if (ty > maxEvalY) break;
        ctx.fillText(ln, MARGIN + 22, ty);
        ty += 19.5;
      }
      ty += 5;
    }

    ty += 2;
    ctx.fillStyle = '#475569';
    ctx.font = '600 13.5px "Noto Sans JP", sans-serif';
    for (const ln of wrapText(ctx, `【配置エネミー】${st.enemies}`, tw)) {
      if (ty > maxEvalY) break;
      ctx.fillText(ln, MARGIN + 22, ty);
      ty += 19.5;
    }

    ty += 4;
    ctx.fillStyle = '#b45309';
    ctx.font = '700 13.5px "Noto Sans JP", sans-serif';
    for (const ln of wrapText(ctx, `【攻略・隠しゴール・特記】${st.specialNote}`, tw)) {
      if (ty > maxEvalY) break;
      ctx.fillText(ln, MARGIN + 22, ty);
      ty += 19.5;
    }

    y += evalBoxH + 16;

    const devBoxH = Math.max(300, A4_H - 64 - y);
    ctx.fillStyle = '#f0f9ff';
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, devBoxH, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#0369a1';
    ctx.font = '700 16.5px "Noto Sans JP", sans-serif';
    ctx.fillText('【コース制作・開発者殴り書きメモ（自由記述）】', MARGIN + 22, y + 34);

    const scribble =
      st.devNote ??
      `${st.code}「${st.name}」：${st.gimmicks}を軸に、平坦地帯を排して起伏・ギミック・敵連携が高密度に連続する構成。`;
    ctx.fillStyle = '#0c4a6e';
    ctx.font = '500 14.5px "Noto Sans JP", sans-serif';
    let sy = y + 66;
    for (const ln of wrapText(ctx, scribble, tw)) {
      if (sy > y + devBoxH - 18) break;
      ctx.fillText(ln, MARGIN + 22, sy);
      sy += 24;
    }

    encodedPages.push(encodeAndReleaseCanvas(canvas));

    // Zoomed 1/2 ~ 1/4 scale IN-GAME SCREEN BLUEPRINTS (1 band per A4 page, unclipped manifest)
    const stDef = getCachedStageDef(st.id);
    for (let bi = 0; bi < bands.length; bi++) {
      currentPage++;
      const band = bands[bi];
      onProgress?.(
        currentPage,
        totalPages,
        `実画面風拡大図 [${st.code}] (${bi + 1}/${bands.length})`
      );
      const { canvas: bCanvas, ctx: bCtx } = createA4Page(currentPage, totalPages);
      let by = 84;
      by = drawSectionTitle(
        bCtx,
        by,
        `実画面風拡大設計図 [${st.code}] ${st.name} (${bi + 1}/${bands.length})`,
        `${band.label} · EXACT IN-GAME SCREEN PLOT · FULL COORDINATE MANIFEST`
      );

      drawStageBlueprintDiagram(
        bCtx,
        st.id,
        MARGIN,
        by,
        CONTENT_W,
        630,
        band.minX,
        band.maxX,
        band.label
      );
      by += 648;

      const inRng = (xPos: number, span = 0) => xPos + span >= band.minX && xPos <= band.maxX;
      const platList = stDef.platforms
        .filter((p) => inRng(p.x, p.w))
        .map((p) => `${p.id}(${p.x},${p.y},w${p.w}${p.oneWay ? ',1W' : ''}${p.style ? `,${p.style}` : ''}${p.streamVx ? `,vx${p.streamVx}` : ''}${p.windbreak ? ',WB' : ''}${p.bouncy ? ',BNC' : ''})`);
      const enemyList = stDef.enemies
        .filter((e) => inRng(e.x))
        .map((e) => `${e.kind}@(${e.x},${e.y})[${e.minX}..${e.maxX}]`);
      if (stDef.boss && (inRng(stDef.boss.arenaMinX, stDef.boss.arenaMaxX - stDef.boss.arenaMinX) || inRng(stDef.boss.x))) {
        enemyList.push(`★BOSS:${stDef.boss.kind}(HP${stDef.boss.maxHp})@(${stDef.boss.x},${stDef.boss.y})[Arena ${stDef.boss.arenaMinX}..${stDef.boss.arenaMaxX}]`);
      }

      const gimItems: string[] = [];
      stDef.checkpoints.filter((cp) => inRng(cp.x)).forEach((cp, idx) => gimItems.push(`CP#${idx + 1}(${cp.x},${cp.y})`));
      stDef.slopes.filter((s) => inRng(s.x1, s.x2 - s.x1)).forEach((s) => gimItems.push(`Slope(${s.x1},${s.y1}->${s.x2},${s.y2})`));
      stDef.movingPlatforms.filter((m) => inRng(Math.min(m.startX, m.endX), Math.abs(m.endX - m.startX) + m.w)).forEach((m) => gimItems.push(`Moving(${m.startX},${m.startY}->${m.endX},${m.endY})`));
      stDef.gears.filter((g) => inRng(g.cx)).forEach((g) => gimItems.push(`Gear(${g.cx},${g.cy},r${g.r})`));
      stDef.rails.filter((r) => inRng(Math.min(r.x1, r.x2), Math.abs(r.x2 - r.x1))).forEach((r) => gimItems.push(`Rail(${r.x1},${r.y1}->${r.x2},${r.y2})`));
      stDef.beamLasers.filter((b) => inRng(b.x1)).forEach((b) => gimItems.push(`Beam(${b.x1},${b.y1})`));
      stDef.lasers.filter((l) => inRng(l.cx)).forEach((l) => gimItems.push(`RotLaser(${l.cx},${l.cy})`));
      stDef.spikes.filter((sp) => inRng(sp.x, sp.w)).forEach((sp) => gimItems.push(`Spike(${sp.x},${sp.y})`));
      stDef.cables.filter((cb) => inRng(cb.x)).forEach((cb) => gimItems.push(`Cable(${cb.x},${cb.y})`));
      stDef.cannons.filter((cn) => inRng(cn.x)).forEach((cn) => gimItems.push(`Cannon(${cn.x},${cn.y})`));
      stDef.gravityZones.filter((gz) => inRng(gz.x, gz.w)).forEach((gz) => gimItems.push(`Grav(${gz.x},${gz.y},${gz.mode})`));
      stDef.mirrors.filter((mr) => inRng(mr.x)).forEach((mr) => gimItems.push(`Mirror(${mr.x},${mr.y})`));
      stDef.sealBlocks.filter((sb) => inRng(sb.x)).forEach((sb) => gimItems.push(`Seal(${sb.x},${sb.y})`));
      stDef.switches.filter((sw) => inRng(sw.x)).forEach((sw) => gimItems.push(`Switch(${sw.x},${sw.y}${sw.chrono ? ',chrono' : ''})`));
      (stDef.boostPads ?? []).filter((bp2) => inRng(bp2.x)).forEach((bp2) => gimItems.push(`Turbo(${bp2.x},${bp2.y})`));
      (stDef.chimeRings ?? []).filter((r) => inRng(r.x)).forEach((r) => gimItems.push(`Chime(${r.x},${r.y})`));
      (stDef.windRings ?? []).filter((r) => inRng(r.x)).forEach((r) => gimItems.push(`WindRing(${r.x},${r.y})`));
      (stDef.pollenPods ?? []).filter((p) => inRng(p.x)).forEach((p) => gimItems.push(`PollenPod(${p.x},${p.y})`));
      (stDef.lotusPads ?? []).filter((l) => inRng(l.x)).forEach((l) => gimItems.push(`Lotus(${l.x},${l.y})`));
      (stDef.thornPistons ?? []).filter((t) => inRng(t.x)).forEach((t) => gimItems.push(`ThornPiston(${t.x},${t.baseY})`));
      (stDef.glowLanterns ?? []).filter((g) => inRng(g.x)).forEach((g) => gimItems.push(`GlowLantern(${g.x},${g.y})`));
      (stDef.orbitalPlatforms ?? []).filter((o) => inRng(o.cx)).forEach((o) => gimItems.push(`Orbital(${o.cx},${o.cy})`));
      (stDef.crystalLocks ?? []).filter((c) => inRng(c.barrierX) || inRng(c.crystalX)).forEach((c) => gimItems.push(`CrystalLock(${c.barrierX}->${c.crystalX})`));
      (stDef.slipstreamGates ?? []).filter((s) => inRng(s.x)).forEach((s) => gimItems.push(`LeafGate(${s.x},${s.y})`));
      (stDef.spiralBlooms ?? []).filter((s) => inRng(s.triggerX)).forEach((s) => gimItems.push(`SpiralBloom(${s.triggerX},${s.triggerY})`));
      (stDef.sanctuaryGusts ?? []).filter((s) => inRng(s.x, s.w)).forEach((s) => gimItems.push(`SanctGust(${s.x},${s.y})`));
      stDef.pendulumVines.filter((v) => inRng(v.cx)).forEach((v) => gimItems.push(`Vine(${v.cx},${v.cy})`));
      stDef.floatBubbles.filter((b) => inRng(b.x)).forEach((b) => gimItems.push(`Bubble(${b.x},${b.y})`));
      stDef.bloomBridges.filter((b) => inRng(b.bridgeX)).forEach((b) => gimItems.push(`BloomBr(${b.bridgeX},${b.bridgeY})`));
      stDef.snapTraps.filter((t) => inRng(t.x)).forEach((t) => gimItems.push(`SnapTrap(${t.x},${t.y})`));
      stDef.sporeJets.filter((j) => inRng(j.x)).forEach((j) => gimItems.push(`SporeJet(${j.x},${j.y},${j.dir})`));
      stDef.scythePendulums.filter((s) => inRng(s.cx)).forEach((s) => gimItems.push(`Scythe(${s.cx},${s.cy})`));
      stDef.sporeCatapults.filter((c) => inRng(c.x)).forEach((c) => gimItems.push(`Catapult(${c.x},${c.y})`));
      (stDef.cryoBumpers ?? []).filter((b) => inRng(b.x)).forEach((b) => gimItems.push(`CryoBumper(${b.x},${b.y})`));
      (stDef.cryoGeysers ?? []).filter((g) => inRng(g.x)).forEach((g) => gimItems.push(`CryoGeyser(${g.x},${g.y})`));
      (stDef.freezeBeams ?? []).filter((fb) => inRng(fb.x1)).forEach((fb) => gimItems.push(`FreezeBeam(${fb.x1},${fb.y1})`));
      (stDef.fallingIcicles ?? []).filter((ic) => inRng(ic.x)).forEach((ic) => gimItems.push(`Icicle(${ic.x})`));
      (stDef.icePendulums ?? []).filter((ip) => inRng(ip.cx)).forEach((ip) => gimItems.push(`IceBlade(${ip.cx},${ip.cy})`));
      (stDef.frostMines ?? []).filter((fm) => inRng(fm.x)).forEach((fm) => gimItems.push(`FrostMine(${fm.x},${fm.y})`));
      (stDef.phaseWaterSwitches ?? []).filter((pw) => inRng(pw.x)).forEach((pw) => gimItems.push(`PhaseWater(${pw.x},${pw.y})`));
      (stDef.iceMirrors ?? []).filter((im) => inRng(im.x)).forEach((im) => gimItems.push(`IceMirror(${im.x},${im.y})`));
      (stDef.cryoLanterns ?? []).filter((cl) => inRng(cl.x)).forEach((cl) => gimItems.push(`CryoLantern(${cl.x},${cl.y})`));
      (stDef.scarletSlings ?? []).filter((ss) => inRng(ss.x)).forEach((ss) => gimItems.push(`ScarletSling(${ss.x},${ss.y})`));
      (stDef.danmakuEmitters ?? []).filter((de) => inRng(de.x)).forEach((de) => gimItems.push(`Danmaku(${de.x},${de.y},${de.pattern})`));
      (stDef.magmaGeysers ?? []).filter((mg) => inRng(mg.x)).forEach((mg) => gimItems.push(`MagmaGeyser(${mg.x},${mg.y})`));
      (stDef.pendulumBlades ?? []).filter((pb) => inRng(pb.cx)).forEach((pb) => gimItems.push(`PendBlade(${pb.cx},${pb.cy})`));
      if (stDef.secretGoal && inRng(stDef.secretGoal.x)) {
        gimItems.push(`★SECRET_GOAL(${stDef.secretGoal.x},${stDef.secretGoal.y})`);
      }
      if (inRng(stDef.goal.x)) {
        gimItems.push(`★GOAL(${stDef.goal.x},${stDef.goal.y})`);
      }

      const manifestH = A4_H - 64 - by;
      bCtx.fillStyle = '#f8fafc';
      bCtx.strokeStyle = '#cbd5e1';
      bCtx.lineWidth = 1.3;
      bCtx.beginPath();
      bCtx.roundRect(MARGIN, by, CONTENT_W, manifestH, 10);
      bCtx.fill();
      bCtx.stroke();

      let my = by + 28;
      const maxMy = by + manifestH - 14;
      const mw = CONTENT_W - 36;
      bCtx.font = '600 11.5px "JetBrains Mono", "Noto Sans JP", monospace';

      const drawManifestRow = (label: string, color: string, entries: string[]) => {
        const lineTxt = `${label} (${entries.length}): ${entries.length > 0 ? entries.join(' / ') : 'なし'}`;
        bCtx.fillStyle = color;
        const wrapped = wrapText(bCtx, lineTxt, mw);
        for (const wLine of wrapped) {
          if (my > maxMy) break;
          bCtx.fillText(wLine, MARGIN + 18, my);
          my += 17.5;
        }
        my += 10;
      };

      drawManifestRow('■ 地形配置(PLATFORMS)', '#0f172a', platList);
      drawManifestRow('■ ギミック・ゴール(GIMMICKS)', '#0369a1', gimItems);
      drawManifestRow('■ 敵・ボス配置(ENEMIES)', '#be123c', enemyList);

      encodedPages.push(encodeAndReleaseCanvas(bCanvas));
      await yieldTick();
    }
    if (i % 2 === 1) await yieldTick();
  }

  // ==================== ROAMING ENCOUNTERS (15 ARENAS, 2 PER PAGE) ====================
  for (let p = 0; p < encounterPageCount; p++) {
    currentPage++;
    const pair = allEncounters.slice(p * 2, p * 2 + 2);
    onProgress?.(currentPage, totalPages, `エリア戦アリーナ図面 (${p + 1}/${encounterPageCount})`);

    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;
    y = drawSectionTitle(
      ctx,
      y,
      `ワールド徘徊エリア戦・専用ミニボスアリーナ図面 (${p + 1}/${encounterPageCount})`,
      'W1-W5 ROAMING ENCOUNTER ARENAS · NO REUSED MINIBOSSES · POST-BOSS HEAL ORBS'
    );

    for (const enc of pair) {
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = enc.accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(MARGIN, y, CONTENT_W, 740, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0b1126';
      ctx.beginPath();
      ctx.roundRect(MARGIN, y, CONTENT_W, 56, [12, 12, 0, 0]);
      ctx.fill();

      ctx.fillStyle = enc.accentColor;
      ctx.font = '700 18px "JetBrains Mono", monospace';
      ctx.fillText(`[WORLD ${enc.world} / ${enc.stageId}]`, MARGIN + 20, y + 36);

      ctx.fillStyle = '#ffffff';
      ctx.font = '700 20px "Noto Sans JP", sans-serif';
      ctx.fillText(enc.name, MARGIN + 280, y + 36);

      drawStageBlueprintDiagram(ctx, enc.stageId, MARGIN + 20, y + 72, CONTENT_W - 40, 440);

      let ty = y + 540;
      const tw = CONTENT_W - 48;
      ctx.fillStyle = '#0f172a';
      ctx.font = '700 15.5px "Noto Sans JP", sans-serif';
      ctx.fillText(`徘徊ルート：${enc.patrolNodeIds.join(' → ')}`, MARGIN + 24, ty);
      ty += 28;

      ctx.fillStyle = '#334155';
      ctx.font = '500 14.5px "Noto Sans JP", sans-serif';
      const note =
        `ワールド${enc.world}専用ミニボス仕様（中ボス流用なし・非ワープ完走AI）。撃破後に出現する回復オーブ(afterBoss: true, +${DAMAGE_TABLE.bonus_orb_heal}HP)を取得して継戦できる構成。`;
      for (const ln of wrapText(ctx, note, tw)) {
        ctx.fillText(ln, MARGIN + 24, ty);
        ty += 22;
      }

      y += 764;
    }

    encodedPages.push(encodeAndReleaseCanvas(canvas));
    await yieldTick();
  }

  // ==================== FINAL PAGES: FULL CONSOLIDATED PROMPT TEXT ====================
  for (let p = 0; p < promptPages.length; p++) {
    currentPage++;
    onProgress?.(currentPage, totalPages, `累積プロンプト全文 (${p + 1}/${promptPages.length})`);

    const { canvas, ctx } = createA4Page(currentPage, totalPages);
    let y = 84;
    y = drawSectionTitle(
      ctx,
      y,
      `内蔵プロンプト＆こだわり累積記録 (${p + 1}/${promptPages.length})`,
      'UNABRIDGED CONSOLIDATED DEVELOPMENT PROMPT'
    );

    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(MARGIN, y, CONTENT_W, A4_H - y - 70, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = '500 13px "JetBrains Mono", "Noto Sans JP", monospace';
    let ly = y + 28;
    for (const line of promptPages[p]) {
      ctx.fillText(line, MARGIN + 20, ly);
      ly += 21;
    }

    encodedPages.push(encodeAndReleaseCanvas(canvas));
    if (p % 3 === 2) await yieldTick();
  }

  onProgress?.(totalPages, totalPages, 'PDFバイナリを統合中...');
  await yieldTick();

  const blob = buildPdfFromEncodedPages(encodedPages);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'NOCTURNE_STRIDE_Design_Spec_W1_W5.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 6000);
}

export function downloadSpecPdf(): void {
  void exportSpecPdfAsync();
}
