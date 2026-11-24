import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Copy, Download, FileText, Search, X } from 'lucide-react';
import { drawEnemyPortrait } from '../game/enemyPortrait';
import {
  CONSOLIDATED_PROMPT_TEXT,
  DAMAGE_TABLE,
  ENEMY_ENCYCLOPEDIA,
  EnemyPortraitKind,
  STAGE_ENCYCLOPEDIA,
} from '../game/gameData';
import {
  WORLD_1_ENCOUNTERS,
  WORLD_2_ENCOUNTERS,
  WORLD_3_ENCOUNTERS,
  WORLD_4_ENCOUNTERS,
  WORLD_5_ENCOUNTERS,
} from '../game/levels';
import { exportSpecPdfAsync } from '../game/pdfExport';
import {
  drawEnemyAttackDiagram,
  drawStageBlueprintDiagram,
  getStageBlueprintBands,
} from '../game/specDiagrams';

function EnemyPortraitBox({
  kind,
  accentColor,
}: {
  kind: EnemyPortraitKind;
  accentColor: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = 76;
    cv.width = size * dpr;
    cv.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = '#090e24';
    ctx.fillRect(0, 0, size, size);
    drawEnemyPortrait(ctx, kind, size * 0.5, size * 0.52, 1.18);
  }, [kind]);

  return (
    <div
      className="w-[76px] h-[76px] shrink-0 rounded-lg overflow-hidden border-2 bg-[#090e24]"
      style={{ borderColor: accentColor }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

function DiagramCanvas({
  width,
  height,
  draw,
  className = '',
}: {
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = width * dpr;
    cv.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    draw(ctx, width, height);
  }, [width, height, draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: 'auto', aspectRatio: `${width} / ${height}` }}
      className={`block rounded-md border border-slate-300 bg-[#0b1224] ${className}`}
    />
  );
}

interface SpecPdfModalProps {
  onClose: () => void;
}

type FilterCat = 'ALL' | '通常敵' | '特殊敵' | 'ギミック' | 'ボス';
type WorldFilter = 'ALL' | '1' | '2' | '3' | '4' | '5';

export function SpecPdfModal({ onClose }: SpecPdfModalProps) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [exportProgress, setExportProgress] = useState<{ cur: number; total: number; label: string } | null>(null);
  const [category, setCategory] = useState<FilterCat>('ALL');
  const [worldFilter, setWorldFilter] = useState<WorldFilter>('ALL');
  const [query, setQuery] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const allEncounters = useMemo(
    () => [
      ...WORLD_1_ENCOUNTERS,
      ...WORLD_2_ENCOUNTERS,
      ...WORLD_3_ENCOUNTERS,
      ...WORLD_4_ENCOUNTERS,
      ...WORLD_5_ENCOUNTERS,
    ],
    []
  );

  const filteredEnemies = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ENEMY_ENCYCLOPEDIA.filter((en) => {
      if (category === 'ボス') {
        if (en.category !== '中ボス' && en.category !== '大ボス') return false;
      } else if (category !== 'ALL' && en.category !== category) {
        return false;
      }
      if (!q) return true;
      return (
        en.name.toLowerCase().includes(q) ||
        en.code.toLowerCase().includes(q) ||
        en.behavior.toLowerCase().includes(q) ||
        en.stages.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const filteredStages = useMemo(() => {
    if (worldFilter === 'ALL') return STAGE_ENCYCLOPEDIA;
    return STAGE_ENCYCLOPEDIA.filter((st) => st.id.startsWith(`${worldFilter}-`));
  }, [worldFilter]);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(CONSOLIDATED_PROMPT_TEXT)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        })
        .catch(() => {});
    }
  };

  const handleDownloadPdf = async () => {
    if (downloading) return;
    setDownloading(true);
    setExportProgress({ cur: 0, total: 140, label: 'PDF生成を準備中...' });
    try {
      await exportSpecPdfAsync((cur, total, label) => {
        setExportProgress({ cur, total, label });
      });
    } finally {
      setTimeout(() => {
        setDownloading(false);
        setExportProgress(null);
      }, 800);
    }
  };

  const jumpTo = (id: string) => {
    const container = scrollRef.current;
    const el = container?.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const damageRows: [string, string, string][] = [
    ['スライムミニ / ホロデコイ / ネオンバット', `-${DAMAGE_TABLE.mini_slime} / -${DAMAGE_TABLE.holo_decoy} / -${DAMAGE_TABLE.neon_bat} HP`, 'W1 軽量・奇襲系 (8〜10)'],
    ['巡回ドローン / ギアローラー / スパークジェリー', `-${DAMAGE_TABLE.patrol_drone} / -${DAMAGE_TABLE.gear_roller} / -${DAMAGE_TABLE.spark_jelly} HP`, '巡回＆W2機械敵 (11〜22)'],
    ['レーザードローン(射撃) / サンダーインプ(雷)', `-${DAMAGE_TABLE.laser_drone_beam} / -${DAMAGE_TABLE.thunder_imp_bolt} HP`, 'W2高出力砲撃 (24〜27)'],
    ['反発バウンサー / テザー電線 / 突撃ラマー', `-${DAMAGE_TABLE.spring_bumper} / -${DAMAGE_TABLE.tether_spark_wire} / -${DAMAGE_TABLE.dash_rammer} HP`, '特殊物理・ワイヤー・突進 (15〜24)'],
    ['磁力クレーン / 鏡面歯車 / 反重力装置', `-${DAMAGE_TABLE.magnet_crane} / -${DAMAGE_TABLE.mirror_gear} / -${DAMAGE_TABLE.gravity_flipper} HP`, 'W2特殊ギミック敵 (16〜21)'],
    ['感電橋 / 高出力レーザー / 狙い落雷 / 強制圧壊', `-${DAMAGE_TABLE.shock_platform} / -${DAMAGE_TABLE.beam_laser} / -${DAMAGE_TABLE.lightning_strike} / -${DAMAGE_TABLE.scroll_crush} HP`, 'W2環境ギミック (25〜30)'],
    ['ブルドーザー(通常/突進) / ゴーレムナイト', `-${DAMAGE_TABLE.bulldozer_patrol} / -${DAMAGE_TABLE.bulldozer_charge} / -${DAMAGE_TABLE.golem_knight} HP`, '重装甲突進 (21〜30)'],
    ['スナイパー狙撃弾 / プリズム反射 / レールガン', `-${DAMAGE_TABLE.sniper_turret_shot} / -${DAMAGE_TABLE.prism_reflector_beam} / -${DAMAGE_TABLE.railgun_mech_shot} HP`, '高速レーザー・反射 (21〜33)'],
    ['垂下電線 / 落下 / 砦トゲ / 回転レーザー / 大砲', `-${DAMAGE_TABLE.cable_shock} / -${DAMAGE_TABLE.pitfall} / -${DAMAGE_TABLE.spike_trap} / -${DAMAGE_TABLE.airship_cannon} HP`, 'W1環境罠＆重砲 (24〜32)'],
    ['1-砦ガーディアン / 1-BOSSアークメイジ(11HP)', `-${DAMAGE_TABLE.mid_guardian_contact} / -${DAMAGE_TABLE.archmage_homing_orb} / -${DAMAGE_TABLE.archmage_contact} HP`, 'W1ボス (17〜28・全域弾幕)'],
    ['2-砦クロックワーク / 2-BOSSクロノス(3形態・HP14)', `-${DAMAGE_TABLE.clockwork_core_laser} / -${DAMAGE_TABLE.thunder_kronos_sweep} / -${DAMAGE_TABLE.thunder_kronos_blitz} HP`, 'W2ボス＆移動レーザー/非ワープ (17〜26)'],
    ['W3雑魚：ウィーバー / マンティス / ヒュドラ / 狙撃', `-${DAMAGE_TABLE.thorn_weaver_seed} / -${DAMAGE_TABLE.emerald_mantis_slash} / -${DAMAGE_TABLE.bio_hydra_wave} / -${DAMAGE_TABLE.jade_sniper_beam} HP`, 'W3翡翠樹海エネミー (16〜26)'],
    ['W3専用罠：咬み罠 / 胞子噴射 / 茨ピストン / 大鎌', `-${DAMAGE_TABLE.snap_trap} / -${DAMAGE_TABLE.spore_jet} / -${DAMAGE_TABLE.thorn_piston} / -${DAMAGE_TABLE.scythe_pendulum} HP`, 'W3固有トラップ (19〜24)'],
    ['W3ボス：ワーデン / キメラ / 翠帝エメラルド', `-${DAMAGE_TABLE.verdant_warden_laser} / -${DAMAGE_TABLE.jade_chimera_beam} / -${DAMAGE_TABLE.emerald_emperor_laser} HP`, 'W3ボス3体・非ワープ完遂 (20〜28)'],
    ['W4雑魚：氷霊 / 蝙蝠 / 氷河巨兵 / 氷砲台 / 妖精', `-${DAMAGE_TABLE.frost_wraith_shard} / -${DAMAGE_TABLE.icicle_bat_crystal} / -${DAMAGE_TABLE.glacier_golem_boulder} / -${DAMAGE_TABLE.cryo_turret_nova} HP`, 'W4蒼氷エネミー (16〜27)'],
    ['W4高速＆特殊：スケーター / 鏡氷 / 凍土ワーム', `-${DAMAGE_TABLE.ice_skater} / -${DAMAGE_TABLE.mirror_frost} / -${DAMAGE_TABLE.permafrost_wyrm_contact} HP`, 'W4滑走・反射・潜行 (19〜23)'],
    ['W4固有罠：冷凍ビーム / 落下ツララ / 氷振子 / 機雷', `-${DAMAGE_TABLE.freeze_beam} / -${DAMAGE_TABLE.falling_icicle} / -${DAMAGE_TABLE.ice_pendulum} / -${DAMAGE_TABLE.frost_mine} HP`, 'W4固有トラップ (19〜25)'],
    ['W4ボス：氷騎士 / コキュートス / 蒼氷王グレイシアス', `-${DAMAGE_TABLE.glacia_knight_lance} / -${DAMAGE_TABLE.cocytus_core_beam} / -${DAMAGE_TABLE.glacies_emperor_wave} HP`, 'W4ボス3体・非ワープ完遂 (24〜30)'],
    ['W5雑魚：槍兵 / 熔岩小鬼 / 紅玉砲台 / 大鎌 / 爆撃', `-${DAMAGE_TABLE.crimson_lancer_lunge} / -${DAMAGE_TABLE.magma_imp_glob} / -${DAMAGE_TABLE.ruby_turret_shot} / -${DAMAGE_TABLE.scarlet_reaper_wave} HP`, 'W5深紅軍エネミー (21〜26)'],
    ['W5特殊：血鏡騎士 / 紅蓮飛龍 / 煌砲 / 弾幕結晶', `-${DAMAGE_TABLE.blood_mirror} / -${DAMAGE_TABLE.inferno_wyvern_feather} / -${DAMAGE_TABLE.valkyrie_bit_danmaku} / -${DAMAGE_TABLE.danmaku_emitter_orb} HP`, 'W5反射・飛行弾幕 (18〜20)'],
    ['W5固有罠：溶岩間欠泉 / 大刃振子 / スリング加速', `-${DAMAGE_TABLE.magma_geyser} / -${DAMAGE_TABLE.pendulum_blade} HP / BOOST`, 'W5深紅専用トラップ (25〜26)'],
    ['W5ボス：紅処刑官 / 溶鉱巨神 / 熾天使 / 覇皇', `-${DAMAGE_TABLE.ruby_executor_slash} / -${DAMAGE_TABLE.furnace_titan_ember} / -${DAMAGE_TABLE.scarlet_seraph_danmaku} / -${DAMAGE_TABLE.crimson_sovereign_flare} HP`, 'W5ボス4体(5-砦3超高密度弾幕)'],
    ['エリア戦：ゴライアス/センチュリオン/翠獣/氷巨人/紅衛', `-${DAMAGE_TABLE.iron_goliath_mortar} / -${DAMAGE_TABLE.volt_centurion_disc} / -${DAMAGE_TABLE.emerald_stalker_spore} / -${DAMAGE_TABLE.frost_titan_wave} / -${DAMAGE_TABLE.scarlet_sentinel_wave} HP`, 'W1-W5専用ミニボス (21〜24)'],
    ['星幽機皇オーヴァーロード（拡散/スラム/接触）', `-${DAMAGE_TABLE.overlord_core_spread} / -${DAMAGE_TABLE.overlord_core_slam} / -${DAMAGE_TABLE.overlord_core_contact} HP`, '試作大ボス (27〜36)'],
    ['金色・回復オーブ取得（エリア戦は撃破後解放）', `+${DAMAGE_TABLE.bonus_orb_heal} HP 回復`, '最大100まで即時回復'],
  ];

  const progressPct =
    exportProgress && exportProgress.total > 0
      ? Math.min(100, Math.round((exportProgress.cur / exportProgress.total) * 100))
      : 0;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#030612]/82 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-[92dvh] flex flex-col rounded-2xl bg-[#0e1529] border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PDF Viewer Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#090e24] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-300" />
            <span className="text-xs sm:text-sm font-bold text-white">
              NOCTURNE_STRIDE_Design_Spec_W1_W5.pdf
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="min-h-[34px] px-3 py-1 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-700 disabled:text-slate-200 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {downloading && exportProgress
                  ? `生成中 ${exportProgress.cur}/${exportProgress.total}p (${progressPct}%)`
                  : '300+頁PDF出力'}
              </span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="min-h-[34px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">コピー済み</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-300" />
                  <span className="hidden sm:inline">仕様テキストコピー</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              aria-label="閉じる"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Async PDF Export Progress Bar */}
        {downloading && exportProgress && (
          <div className="px-4 py-2 bg-[#070b1a] border-b border-cyan-500/30">
            <div className="flex items-center justify-between text-[11px] font-hud-mono text-cyan-200 mb-1">
              <span className="truncate">{exportProgress.label}</span>
              <span className="shrink-0 ml-2 font-bold">
                {exportProgress.cur} / {exportProgress.total} ({progressPct}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 transition-all duration-100"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        {/* Quick Section Nav */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0b1126] border-b border-slate-800 overflow-x-auto text-[11px] font-hud-mono">
          {[
            ['sec-damage', '1. 仕様＆1刻みダメージ表'],
            ['sec-enemies', `2. 全${ENEMY_ENCYCLOPEDIA.length}種図鑑（攻撃図解付）`],
            ['sec-stages', `3. W1〜W5全${STAGE_ENCYCLOPEDIA.length}面設計図`],
            ['sec-encounters', `4. 全${allEncounters.length}エリア戦設計図`],
            ['sec-prompt', '5. 内蔵プロンプト全文'],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => jumpTo(id)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-400/50 text-slate-200 whitespace-nowrap cursor-pointer transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Scrollable A4 Sheet Reader */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto bg-slate-800/75 p-3 sm:p-6 space-y-6">
          {/* SHEET 1: OVERVIEW & 1-INCREMENT DAMAGE TABLE */}
          <article
            id="sec-damage"
            className="mx-auto max-w-[780px] bg-white text-slate-900 rounded-md shadow-xl overflow-hidden border border-slate-300"
          >
            <div className="bg-[#0b1126] text-white px-6 py-4 border-b-4 border-sky-400 flex items-center justify-between">
              <div>
                <div className="font-hud-mono text-[11px] text-cyan-300 tracking-wider">
                  NOCTURNE STRIDE // DESIGN BIBLE P.1 (W1〜W5 MASTER)
                </div>
                <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                  システム仕様・HP100/100 ＆ 1刻みダメージ表
                </h2>
              </div>
              <span className="font-hud-mono text-xs text-slate-400">300+ A4 PAGES PDF</span>
            </div>

            <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-[13px] leading-relaxed">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5 text-slate-700">
                <p>
                  <strong className="text-slate-900">世界観＆W1〜W5統合マップ（全{STAGE_ENCYCLOPEDIA.length}面＋{allEncounters.length}エリア戦）：</strong>
                  W1「夜の都市(9面)」、W2「黄金歯車・雷鳴(9面)」、W3「翡翠樹海(10面)」、W4「蒼氷王城(9面)」、W5「深紅覇王城と熾天の聖域(12面：5-1→5-砦1→5-2→5-3→5-4→5-5→5-6→5-砦2→5-7→5-砦3→5-8→5-城)」。上下探索ルートと隠しゴールによるクロスワールドワープ対応。
                </p>
                <p>
                  <strong className="text-slate-900">仮想ボタン無しタッチ操作：</strong>
                  左画面（フローティングスティック移動＋下フリックでスライディング）／右画面（可変ジャンプ・2段ジャンプ＋右スワイプ/2本指/2連タップで魔導弾）。
                </p>
                <p>
                  <strong className="text-slate-900">固有機構＆熾天弾幕＆非ワープ鉄則：</strong>
                  全{STAGE_ENCYCLOPEDIA.length}面で各コース400字以上の徹底設計を記録。W5では紅蓮スリング・マグマベルト・溶岩間欠泉・大刃振子・弾幕発生結晶を実装し、5-7と5-砦3（熾天使セラフ）で高密度弾幕を展開。全ボス瞬間移動ゼロ・壁端突進完遂を徹底。
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 border-l-4 border-sky-500 pl-2.5 mb-3">
                  1刻み被弾ダメージ ＆ 回復数値代表一覧（全{ENEMY_ENCYCLOPEDIA.length}体個別数値は下記図鑑参照）
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {damageRows.map(([name, val, note], idx) => {
                    const isHeal = idx === damageRows.length - 1;
                    return (
                      <div
                        key={name}
                        className={`flex items-center justify-between px-3 py-2 rounded-md border ${
                          isHeal ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-900">{name}</div>
                          <div className="text-[11px] text-slate-500">{note}</div>
                        </div>
                        <span
                          className={`font-hud-mono font-bold text-xs shrink-0 ml-2 ${
                            isHeal ? 'text-emerald-700' : 'text-rose-600'
                          }`}
                        >
                          {val}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>

          {/* SHEET 2: ENEMY BESTIARY WITH VECTOR PORTRAITS & ATTACK SCHEMATICS */}
          <article
            id="sec-enemies"
            className="mx-auto max-w-[780px] bg-white text-slate-900 rounded-md shadow-xl overflow-hidden border border-slate-300"
          >
            <div className="bg-[#0b1126] text-white px-6 py-4 border-b-4 border-sky-400 flex items-center justify-between">
              <div>
                <div className="font-hud-mono text-[11px] text-cyan-300 tracking-wider">
                  NOCTURNE STRIDE // BESTIARY (ALL {ENEMY_ENCYCLOPEDIA.length} UNITS)
                </div>
                <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                  全{ENEMY_ENCYCLOPEDIA.length}種 敵・ギミック・ボス図鑑（ポートレート＋攻撃軌道図解＋殴り書きメモ）
                </h2>
              </div>
              <span className="font-hud-mono text-xs text-slate-400">
                {filteredEnemies.length} / {ENEMY_ENCYCLOPEDIA.length}
              </span>
            </div>

            {/* Category Filter & Search Bar */}
            <div className="px-5 pt-4 pb-2 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-hud-mono">
                {(['ALL', '通常敵', '特殊敵', 'ギミック', 'ボス'] as FilterCat[]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-2.5 py-1 rounded border cursor-pointer transition-colors ${
                      category === cat
                        ? 'bg-[#0b1126] text-cyan-300 border-sky-500 font-bold'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'ALL' ? `すべて(${ENEMY_ENCYCLOPEDIA.length})` : cat}
                  </button>
                ))}
              </div>

              <div className="relative flex-1 min-w-[180px] max-w-[260px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="名前・コード・AI検索..."
                  className="w-full pl-8 pr-2.5 py-1 text-xs rounded border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 text-xs leading-relaxed">
              {filteredEnemies.map((en) => (
                <div
                  key={en.code}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="flex gap-3.5">
                    <div className="flex flex-col items-center gap-1">
                      <EnemyPortraitBox kind={en.kind} accentColor={en.accentColor} />
                      <span className="font-hud-mono text-[10px] font-bold text-slate-600">
                        {en.code} · {en.category}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-slate-900">{en.name}</h3>
                        <div className="flex flex-wrap items-center gap-1.5 font-hud-mono text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                            耐久 {en.hp}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">
                            {en.attackDmg !== null
                              ? `接触 ${en.contactDmg} / 攻撃 ${en.attackDmg}`
                              : `接触 ${en.contactDmg}`}
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 mt-1 font-hud-mono">
                        移動：{en.speedInfo} ｜ 出現：{en.stages} ｜ {en.attackLabel}
                      </div>
                      <p className="text-slate-800 mt-1.5">
                        <strong className="text-slate-900">【行動AI】</strong>
                        {en.behavior}
                      </p>
                      <p className="text-teal-800 mt-0.5 font-medium">
                        <strong className="text-teal-900">【弱点・攻略】</strong>
                        {en.weakness}
                      </p>
                    </div>
                  </div>

                  {/* Attack Trajectory Schematic Canvas */}
                  <DiagramCanvas
                    width={700}
                    height={190}
                    draw={(ctx, w, h) => drawEnemyAttackDiagram(ctx, en, 0, 0, w, h)}
                  />

                  {/* Candid Developer Scribbles */}
                  {en.devNote && (
                    <div className="rounded-md bg-amber-50/90 border border-amber-300/80 px-3 py-2 text-[11.5px] text-amber-950">
                      <strong className="text-amber-800">【開発者殴り書きメモ】</strong>
                      {en.devNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>

          {/* SHEET 3: ALL 37 STAGES REAL-COORDINATE BLUEPRINTS */}
          <article
            id="sec-stages"
            className="mx-auto max-w-[780px] bg-white text-slate-900 rounded-md shadow-xl overflow-hidden border border-slate-300"
          >
            <div className="bg-[#0b1126] text-white px-6 py-4 border-b-4 border-sky-400 flex items-center justify-between">
              <div>
                <div className="font-hud-mono text-[11px] text-cyan-300 tracking-wider">
                  NOCTURNE STRIDE // IN-GAME STAGE BLUEPRINTS (W1〜W5)
                </div>
                <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                  W1〜W5 全{STAGE_ENCYCLOPEDIA.length}ステージ実画面風設計図（固有機構・複数ルート＆隠しゴール）
                </h2>
              </div>
              <span className="font-hud-mono text-xs text-slate-400">
                {filteredStages.length} / {STAGE_ENCYCLOPEDIA.length} STAGES
              </span>
            </div>

            <div className="px-5 pt-3.5 pb-2 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center gap-1.5 text-[11px] font-hud-mono">
              {(
                [
                  ['ALL', `すべて(${STAGE_ENCYCLOPEDIA.length})`],
                  ['1', 'W1 都市(9)'],
                  ['2', 'W2 黄金・雷鳴(9)'],
                  ['3', 'W3 翡翠樹海(10)'],
                  ['4', 'W4 蒼氷王城(9)'],
                  ['5', 'W5 深紅覇王(12)'],
                ] as [WorldFilter, string][]
              ).map(([wf, label]) => (
                <button
                  key={wf}
                  type="button"
                  onClick={() => setWorldFilter(wf)}
                  className={`px-2.5 py-1 rounded border cursor-pointer transition-colors ${
                    worldFilter === wf
                      ? 'bg-[#0b1126] text-cyan-300 border-sky-500 font-bold'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-6 space-y-5 text-xs leading-relaxed">
              {filteredStages.map((st) => (
                <div key={st.id} className="rounded-lg border border-slate-300 overflow-hidden bg-slate-50">
                  <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-hud-mono text-cyan-300 font-bold">[{st.code}]</span>
                      <span className="font-bold text-sm">{st.name}</span>
                    </div>
                    <span className="font-hud-mono text-[11px] text-slate-300">
                      全長 {st.lengthPx.toLocaleString()}px · 中間CP×{st.checkpoints}
                    </span>
                  </div>
                  <div className="p-3.5 space-y-2.5 text-slate-800">
                    {/* Real-Coordinate Multi-Band CAD Stage Blueprints (1/2 ~ 1/4 Scale) */}
                    <div className="space-y-1.5">
                      {getStageBlueprintBands(st.id).map((band) => (
                        <DiagramCanvas
                          key={band.label}
                          width={720}
                          height={175}
                          draw={(ctx, w, h) =>
                            drawStageBlueprintDiagram(
                              ctx,
                              st.id,
                              0,
                              0,
                              w,
                              h,
                              band.minX,
                              band.maxX,
                              band.label
                            )
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sky-800 font-bold">主ギミック：{st.gimmicks}</p>
                    <p>{st.act1}</p>
                    <p>{st.act2}</p>
                    <p>{st.act3}</p>
                    {st.act4 && <p>{st.act4}</p>}
                    <p className="text-slate-600 text-[11px]">出現敵：{st.enemies}</p>
                    <p className="text-amber-700 font-bold text-[11px]">特記：{st.specialNote}</p>
                    {st.devNote && (
                      <div className="rounded-md bg-sky-50 border border-sky-300/80 px-3 py-2 text-[11.5px] text-sky-950">
                        <strong className="text-sky-800">【開発者殴り書きメモ】</strong>
                        {st.devNote}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SHEET 4: ALL 12 ROAMING ENCOUNTERS */}
          <article
            id="sec-encounters"
            className="mx-auto max-w-[780px] bg-white text-slate-900 rounded-md shadow-xl overflow-hidden border border-slate-300"
          >
            <div className="bg-[#0b1126] text-white px-6 py-4 border-b-4 border-sky-400 flex items-center justify-between">
              <div>
                <div className="font-hud-mono text-[11px] text-cyan-300 tracking-wider">
                  NOCTURNE STRIDE // ROAMING ENCOUNTER ARENAS ({allEncounters.length} ENCOUNTERS)
                </div>
                <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                  W1〜W5 全{allEncounters.length}エリア戦（徘徊ミニボス・撃破後回復オーブ）設計図
                </h2>
              </div>
              <span className="font-hud-mono text-xs text-slate-400">{allEncounters.length} ARENAS</span>
            </div>

            <div className="p-5 sm:p-6 space-y-4 text-xs leading-relaxed">
              {allEncounters.map((enc) => (
                <div key={enc.id} className="rounded-lg border border-slate-300 overflow-hidden bg-slate-50">
                  <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-hud-mono font-bold" style={{ color: enc.accentColor }}>
                        [W{enc.world} / {enc.stageId}]
                      </span>
                      <span className="font-bold text-sm">{enc.name}</span>
                    </div>
                    <span className="font-hud-mono text-[11px] text-emerald-300">
                      撃破後回復オーブ(+16HP)付
                    </span>
                  </div>
                  <div className="p-3.5 space-y-2">
                    <DiagramCanvas
                      width={720}
                      height={190}
                      draw={(ctx, w, h) => drawStageBlueprintDiagram(ctx, enc.stageId, 0, 0, w, h)}
                    />
                    <p className="text-[11px] font-hud-mono text-slate-600">
                      徘徊ノード：{enc.patrolNodeIds.join(' → ')} ｜ 中ボス流用なし・非ワープ専用戦
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SHEET 5: CONSOLIDATED PROMPT TEXT (UNCAPPED) */}
          <article
            id="sec-prompt"
            className="mx-auto max-w-[780px] bg-white text-slate-900 rounded-md shadow-xl overflow-hidden border border-slate-300"
          >
            <div className="bg-[#0b1126] text-white px-6 py-4 border-b-4 border-sky-400 flex items-center justify-between">
              <div>
                <div className="font-hud-mono text-[11px] text-cyan-300 tracking-wider">
                  NOCTURNE STRIDE // FULL ACCUMULATED PROMPT
                </div>
                <h2 className="text-lg sm:text-xl font-bold mt-0.5">
                  内蔵プロンプト全文（上限なし・要望＆こだわり殴り書き累積）
                </h2>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-4 font-hud-mono">
                {CONSOLIDATED_PROMPT_TEXT}
              </pre>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
