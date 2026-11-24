import { EnemyDef, EnemyKind } from './types';

export const DAMAGE_TABLE = {
  // Original 9 enemies + mini slime
  patrol_drone: 11,
  slime_glitch: 13,
  mini_slime: 8,
  hopping_bot: 14,
  ghost_wisp: 17,
  arcane_caster_contact: 16,
  arcane_caster_bolt: 19,
  sniper_turret_contact: 12,
  sniper_turret_shot: 22,
  shield_trooper: 23,
  bulldozer_patrol: 21,
  bulldozer_charge: 29,
  bomb_walker_contact: 14,
  bomb_walker_blast: 31,

  // New 36 enemies (total 45 standard/elite enemies)
  neon_bat: 10,
  skate_courier: 15,
  riot_baton: 20,
  volt_jelly: 15,
  volt_jelly_spark: 18,
  rail_spider: 16,
  magnet_orb: 14,
  prism_reflector_contact: 13,
  prism_reflector_beam: 21,
  mortar_crab_contact: 18,
  mortar_crab_shell: 26,
  stealth_ninja_contact: 19,
  stealth_ninja_shuriken: 17,
  saw_wheel: 25,
  holo_decoy: 9,
  cryo_slime: 14,
  arc_pylon_contact: 12,
  arc_pylon_zap: 23,
  grimoire_mimic: 22,
  rune_sentinel_contact: 24,
  rune_sentinel_wave: 20,
  mirror_wraith: 18,
  chrono_pendulum: 27,
  gravity_imp_contact: 13,
  gravity_imp_orb: 17,
  ink_specter_contact: 15,
  ink_specter_blob: 19,
  star_weaver_contact: 16,
  star_weaver_lance: 22,
  golem_knight: 30,
  mana_leech: 15,
  sigil_bomber_contact: 14,
  sigil_bomber_mine: 28,
  void_eye_contact: 18,
  void_eye_beam: 25,
  flame_thruster: 26,
  jet_trooper_contact: 19,
  jet_trooper_burst: 21,
  railgun_mech_contact: 22,
  railgun_mech_shot: 33,
  aegis_drone: 17,
  cluster_mine_contact: 15,
  cluster_mine_frag: 23,
  vortex_fan: 16,
  plasma_hound: 24,
  drill_mole: 21,
  tesla_walker_contact: 18,
  tesla_walker_arc: 24,
  phantom_knight: 28,
  bio_spore_contact: 12,
  bio_spore_cloud: 15,
  omega_drone_contact: 25,
  omega_drone_laser: 29,

  // Environment Hazards & Gimmicks
  cable_shock: 24,
  spike_trap: 26,
  rotating_laser: 27,
  airship_cannon: 32,
  pitfall: 25,
  thorn_piston: 23,

  // World 2 New Enemies & Hazards
  gear_roller: 22,
  spark_jelly: 17,
  spark_jelly_barrier: 25,
  laser_drone_contact: 16,
  laser_drone_beam: 27,
  thunder_imp_contact: 18,
  thunder_imp_bolt: 24,
  spring_bumper: 15,
  magnet_crane: 20,
  mirror_gear: 18,
  tether_spark_contact: 15,
  tether_spark_wire: 22,
  gravity_flipper: 16,
  dash_rammer: 24,
  shock_platform: 25,
  beam_laser: 28,
  lightning_strike: 29,
  scroll_crush: 30,

  // Bosses
  mid_guardian_contact: 28,
  mid_guardian_shot: 24,
  archmage_contact: 28,
  archmage_homing_orb: 19,
  archmage_spread_bolt: 20,
  archmage_clone_bolt: 18,
  archmage_shockwave: 26,
  overlord_core_contact: 36,
  overlord_core_spread: 27,
  overlord_core_slam: 35,
  clockwork_core_contact: 29,
  clockwork_core_laser: 26,
  clockwork_core_gear: 21,
  thunder_kronos_contact: 26,
  thunder_kronos_bolt: 21,
  thunder_kronos_funnel: 17,
  thunder_kronos_blitz: 23,
  thunder_kronos_sweep: 22,
  thunder_kronos_slam: 24,

  // World 3 New Enemies
  thorn_weaver_contact: 18,
  thorn_weaver_seed: 22,
  emerald_mantis_contact: 22,
  emerald_mantis_slash: 21,
  prism_spore_contact: 16,
  prism_spore_bolt: 19,
  chrono_vine_contact: 19,
  chrono_vine_spike: 25,
  bio_hydra_contact: 23,
  bio_hydra_wave: 21,
  jade_sniper_contact: 17,
  jade_sniper_beam: 26,

  // Dedicated Roaming Encounter Mini-Bosses (Non-reused)
  iron_goliath_contact: 25,
  iron_goliath_mortar: 22,
  volt_centurion_contact: 25,
  volt_centurion_disc: 22,
  emerald_stalker_contact: 24,
  emerald_stalker_spore: 21,

  // World 3 Stage Bosses
  verdant_warden_contact: 27,
  verdant_warden_laser: 24,
  verdant_warden_bomb: 22,
  jade_chimera_contact: 28,
  jade_chimera_beam: 24,
  jade_chimera_orb: 20,
  emerald_emperor_contact: 28,
  emerald_emperor_lance: 23,
  emerald_emperor_laser: 25,
  emerald_emperor_slam: 26,
  emerald_emperor_spore: 20,

  // World 3 Exclusive Gimmick Hazards (Zero W1/W2 Reuse)
  snap_trap: 21,
  spore_jet: 19,
  scythe_pendulum: 24,

  // World 4 New Enemies & Gimmick Hazards
  frost_wraith_contact: 18,
  frost_wraith_shard: 20,
  icicle_bat_contact: 16,
  icicle_bat_crystal: 21,
  glacier_golem_contact: 27,
  glacier_golem_boulder: 24,
  cryo_turret_contact: 15,
  cryo_turret_nova: 22,
  blizzard_fairy_contact: 17,
  blizzard_fairy_aura: 21,
  ice_skater: 20,
  mirror_frost: 19,
  permafrost_wyrm_contact: 23,
  permafrost_wyrm_shard: 19,

  // World 4 Exclusive Gimmick Hazards
  freeze_beam: 19,
  falling_icicle: 23,
  ice_pendulum: 25,
  frost_mine: 21,

  // World 4 Encounter & Bosses (Zero Warping)
  frost_titan_contact: 26,
  frost_titan_wave: 23,
  glacia_knight_contact: 28,
  glacia_knight_lance: 24,
  cocytus_core_contact: 29,
  cocytus_core_beam: 25,
  glacies_emperor_contact: 30,
  glacies_emperor_lance: 25,
  glacies_emperor_beam: 26,
  glacies_emperor_wave: 27,

  // World 5 New Enemies & Gimmick Hazards (Crimson/Inferno/Danmaku)
  crimson_lancer_contact: 22,
  crimson_lancer_lunge: 26,
  magma_imp_contact: 18,
  magma_imp_glob: 22,
  ruby_turret_contact: 16,
  ruby_turret_shot: 21,
  scarlet_reaper_contact: 24,
  scarlet_reaper_wave: 25,
  ember_bomber_contact: 19,
  ember_bomber_blast: 26,
  blood_mirror: 20,
  inferno_wyvern_contact: 23,
  inferno_wyvern_feather: 20,
  valkyrie_bit_contact: 18,
  valkyrie_bit_danmaku: 19,

  magma_geyser: 25,
  pendulum_blade: 26,
  danmaku_emitter_orb: 18,

  // World 5 Encounter & Bosses (Zero Warping)
  scarlet_sentinel_contact: 27,
  scarlet_sentinel_wave: 24,
  ruby_executor_contact: 28,
  ruby_executor_slash: 25,
  furnace_titan_contact: 30,
  furnace_titan_ember: 24,
  scarlet_seraph_contact: 29,
  scarlet_seraph_danmaku: 21,
  scarlet_seraph_laser: 28,
  crimson_sovereign_contact: 32,
  crimson_sovereign_flare: 26,
  crimson_sovereign_beam: 29,

  // Recovery
  bonus_orb_heal: 16,
} as const;

export type EnemyPortraitKind =
  | EnemyKind
  | 'airship_cannon'
  | 'laser_emitter'
  | 'mid_guardian'
  | 'archmage'
  | 'overlord_core'
  | 'clockwork_core'
  | 'thunder_kronos'
  | 'iron_goliath'
  | 'volt_centurion'
  | 'emerald_stalker'
  | 'verdant_warden'
  | 'jade_chimera'
  | 'emerald_emperor'
  | 'frost_titan'
  | 'glacia_knight'
  | 'cocytus_core'
  | 'glacies_emperor'
  | 'scarlet_sentinel'
  | 'ruby_executor'
  | 'furnace_titan'
  | 'scarlet_seraph'
  | 'crimson_sovereign';

export interface EnemyDocEntry {
  kind: EnemyPortraitKind;
  name: string;
  code: string;
  category: '通常敵' | '特殊敵' | 'ギミック' | '中ボス' | '大ボス';
  hp: string;
  contactDmg: number;
  attackDmg: number | null;
  attackLabel: string;
  speedInfo: string;
  behavior: string;
  weakness: string;
  stages: string;
  accentColor: string;
  devNote?: string;
}

export const ENEMY_ENCYCLOPEDIA: EnemyDocEntry[] = [
  // ---- 01〜09: WORLD 1 ACTIVE CORE ROSTER ----
  {
    kind: 'patrol_drone',
    name: '巡回ドローン',
    code: 'EN-01',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.patrol_drone,
    attackDmg: null,
    attackLabel: '体当たりのみ',
    speedInfo: '75 px/s（低空ホバー）',
    behavior: '指定区間を正弦波で揺れながら巡回する都市警備ドローン。',
    weakness: '魔導弾1発・踏みつけ・高速スライディングで即撃破可能。',
    stages: '1-1 / 1-2 / 1-3 / 1-4 / 1-6 / 1-BOSS',
    accentColor: '#fb7185',
  },
  {
    kind: 'hopping_bot',
    name: 'ホッピング・ボット',
    code: 'EN-02',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.hopping_bot,
    attackDmg: null,
    attackLabel: '跳躍体当たり',
    speedInfo: '68 px/s（約1.05秒ごとに跳躍）',
    behavior: 'スプリング脚で一定リズムのジャンプを繰り返しながら前進する。',
    weakness: '着地タイミングを魔導弾で狙撃、または最高点で踏みつけ。',
    stages: '1-1 / 1-4 / 1-6',
    accentColor: '#5eead4',
  },
  {
    kind: 'slime_glitch',
    name: 'スライム・グリッチ',
    code: 'EN-03',
    category: '通常敵',
    hp: '1 HP（撃破時2体に分裂）',
    contactDmg: DAMAGE_TABLE.slime_glitch,
    attackDmg: DAMAGE_TABLE.mini_slime,
    attackLabel: '分裂ミニ個体接触: 8',
    speedInfo: '60 px/s（ミニ時 105 px/s）',
    behavior: '電脳ノイズを纏う不定形スライム。親個体を倒すと小型2体に分裂する。',
    weakness: '分裂後のミニ個体は高速だが1撃で消滅。坂道スライディングでまとめて掃討可能。',
    stages: '1-1 / 1-2 / 1-S / 1-5',
    accentColor: '#e879f9',
  },
  {
    kind: 'shield_trooper',
    name: 'シールド兵',
    code: 'EN-04',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.shield_trooper,
    attackDmg: null,
    attackLabel: '正面エネルギー盾防御',
    speedInfo: '50 px/s（巡回）',
    behavior: '前方に高出力の琥珀色シールドを展開し、正面からの魔導弾を弾く重装歩兵。',
    weakness: '頭上からの踏みつけ、またはジャンプで背後を取って背面から魔導弾を撃ち込む。',
    stages: '1-1 / 1-4 / 砦 / 1-6 / 1-BOSS',
    accentColor: '#fbbf24',
  },
  {
    kind: 'sniper_turret',
    name: 'スナイパー・タレット',
    code: 'EN-05',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.sniper_turret_contact,
    attackDmg: DAMAGE_TABLE.sniper_turret_shot,
    attackLabel: '赤レーザー照準狙撃弾',
    speedInfo: '固定砲台（天井・壁設置型）',
    behavior: '視界420px以内で赤いレーザーサイトを照射し、1.35秒照準後に高速弾(430px/s)を発射。',
    weakness: '赤い照射線が見えたら上下に移動して軸をずらし、魔導弾で破壊する。',
    stages: '1-1 / 1-2 / 1-3 / 砦 / 1-BOSS',
    accentColor: '#f43f5e',
  },
  {
    kind: 'ghost_wisp',
    name: 'ゴースト・ウィスプ',
    code: 'EN-06',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.ghost_wisp,
    attackDmg: null,
    attackLabel: '壁貫通浮遊追尾',
    speedInfo: '48 px/s（270px以内で緩追尾）',
    behavior: '青白い魔導霊体。プレイヤーが近づくと地形をすり抜けてゆっくり追尾してくる。',
    weakness: 'HPは1のため、距離を取りつつ魔導弾で早めに対処すると安全。',
    stages: '1-2 / 1-3 / 1-S / 1-5',
    accentColor: '#38f2ff',
  },
  {
    kind: 'bulldozer_mech',
    name: '突進ブルドーザー機',
    code: 'EN-07',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.bulldozer_patrol,
    attackDmg: DAMAGE_TABLE.bulldozer_charge,
    attackLabel: '警告(!)後・高速突進体当たり',
    speedInfo: '46 px/s（突進時 275 px/s）',
    behavior: '同高度330px以内で「!」警告を出した後、強烈な突進を行い硬直時間に入る。',
    weakness: '警告を見たら2段ジャンプで飛び越え、突進後の硬直中に踏みつけや魔導弾で撃破。',
    stages: '砦 / 1-4 / 1-6 / 1-BOSS',
    accentColor: '#f59e0b',
  },
  {
    kind: 'bomb_walker',
    name: 'ボム・ウォーカー',
    code: 'EN-08',
    category: '特殊敵',
    hp: '1 HP（起爆カウント式）',
    contactDmg: DAMAGE_TABLE.bomb_walker_contact,
    attackDmg: DAMAGE_TABLE.bomb_walker_blast,
    attackLabel: '約1秒後の大爆発（半径135px）',
    speedInfo: '54 px/s（起爆中は停止）',
    behavior: '魔導弾や踏みつけで起爆状態(PRIMED!)になり、約1.05秒後に周囲の敵と封印ブロックもろとも大爆発する。',
    weakness: '爆風(半径68px以内はプレイヤーも31ダメージ)に注意。封印ブロック破壊に利用できる。',
    stages: '1-2 / 1-S / 1-BOSS',
    accentColor: '#f97316',
  },
  {
    kind: 'arcane_caster',
    name: '魔導キャスター',
    code: 'EN-09',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.arcane_caster_contact,
    attackDmg: DAMAGE_TABLE.arcane_caster_bolt,
    attackLabel: '紫魔導弾（2.1秒間隔）',
    speedInfo: '固定／詠唱型',
    behavior: '前方に魔法陣を展開し、プレイヤーの現在位置へ向けて紫の魔導弾を放つ遠距離魔導士。',
    weakness: '発射前後の隙に魔導弾2発、または高所からの急降下踏みつけ(2ダメ)で一撃。',
    stages: '1-1 / 1-3 / 1-4 / 1-5 / 1-BOSS',
    accentColor: '#c084fc',
  },

  // ---- 10〜45: EXPANDED URBAN FANTASY & W2+ ENEMY LAB ROSTER ----
  {
    kind: 'neon_bat',
    name: 'ネオン・バット',
    code: 'EN-10',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.neon_bat,
    attackDmg: null,
    attackLabel: '急降下スウィープ',
    speedInfo: '天井待機 → 215 px/s急降下',
    behavior: '天井や高架にぶら下がり、プレイヤーが横距離220px以内に接近すると弧を描いて急襲して上昇復帰する。',
    weakness: '攻撃前は動かないため先制の魔導弾で落としやすい。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#ec4899',
  },
  {
    kind: 'skate_courier',
    name: 'スケート・クーリエ',
    code: 'EN-11',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.skate_courier,
    attackDmg: null,
    attackLabel: '高速ホバースケート突進',
    speedInfo: '190 px/s（連続往復）',
    behavior: 'ネオン光を引くホバーボードで巡回区間を高速往復する都市型偵察兵。',
    weakness: 'スピードが速いため、踏みつけタイミングかスライディング交差で処理。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#06b6d4',
  },
  {
    kind: 'riot_baton',
    name: 'ライオット・バトン',
    code: 'EN-12',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.riot_baton,
    attackDmg: null,
    attackLabel: 'ステップ踏み込み電撃警棒',
    speedInfo: '58 px/s（間合い内で180px/s前進）',
    behavior: 'プレイヤーが140px以内に近づくと電撃警棒を構えて素早く踏み込む治安部隊メカ。',
    weakness: '間合いの外から魔導弾2発で破壊。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#3b82f6',
  },
  {
    kind: 'volt_jelly',
    name: 'ボルト・ジェリー',
    code: 'EN-13',
    category: '特殊敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.volt_jelly,
    attackDmg: DAMAGE_TABLE.volt_jelly_spark,
    attackLabel: '4方向帯電スパーク弾',
    speedInfo: '38 px/s（上下浮遊・周期放電）',
    behavior: '空中を漂いながら2.4秒ごとに斜め4方向へ高圧スパーク弾を放つクラゲ型魔導生体。',
    weakness: '放電の合間に軸を合わせて魔導弾1発。踏みつけでも感電しない。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#facc15',
  },
  {
    kind: 'rail_spider',
    name: 'レイル・スパイダー',
    code: 'EN-14',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.rail_spider,
    attackDmg: null,
    attackLabel: '天井高速巡回＆落下奇襲',
    speedInfo: '115 px/s（天井張付き移動）',
    behavior: '天井レールに沿って左右移動し、プレイヤーの頭上に来ると警戒振動後に下方向へ踏みつけ落下を行う。',
    weakness: '真下を走り抜けて落下させた後の着地隙を狙う。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#a855f7',
  },
  {
    kind: 'magnet_orb',
    name: 'マグネット・オーブ',
    code: 'EN-15',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.magnet_orb,
    attackDmg: null,
    attackLabel: '8の字磁気周回＆引き寄せ波動',
    speedInfo: '空中リサージュ周回（3秒周期で微吸引）',
    behavior: '8の字軌道で浮遊し、定期的に磁気パルスを放って周囲のプレイヤーをわずかに引き寄せる。',
    weakness: '引き寄せに逆らいながら距離を保って魔導弾を2発当てて破壊。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#f43f5e',
  },
  {
    kind: 'prism_reflector',
    name: 'プリズム・リフレクター',
    code: 'EN-16',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.prism_reflector_contact,
    attackDmg: DAMAGE_TABLE.prism_reflector_beam,
    attackLabel: '正面魔導弾反射（赤光弾化:21）',
    speedInfo: '32 px/s（低速巡回）',
    behavior: '正面の魔導クリスタル面でプレイヤーの魔導弾を跳ね返し、敵弾(21ダメ)として撃ち返してくる鏡面機。',
    weakness: '上からの踏みつけ(2ダメ即死)か、飛び越えて背後から射撃して破壊する。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#67e8f9',
  },
  {
    kind: 'mortar_crab',
    name: 'モーター・クラブ',
    code: 'EN-17',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.mortar_crab_contact,
    attackDmg: DAMAGE_TABLE.mortar_crab_shell,
    attackLabel: '山なり放物線迫撃弾',
    speedInfo: '42 px/s（立ち止まって砲撃）',
    behavior: '横歩きしながらプレイヤー方向へ高い放物線を描く迫撃砲弾を発射する多脚砲台。',
    weakness: '着弾地点を見極め、真上に潜り込んで踏みつけが有効。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#fb923c',
  },
  {
    kind: 'stealth_ninja',
    name: 'ステルス・ニンジャ',
    code: 'EN-18',
    category: '特殊敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.stealth_ninja_contact,
    attackDmg: DAMAGE_TABLE.stealth_ninja_shuriken,
    attackLabel: '光学迷彩消失＋手裏剣連射',
    speedInfo: '光学ステルス移動（瞬間ステップ）',
    behavior: '半透明の光学迷彩で近づき、実体化した瞬間に高速手裏剣を投げて再び姿を消す暗殺ドロイド。',
    weakness: '迷彩中でも微かな青い瞳と輪郭が見える。実体化に合わせて一撃で仕留める。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#818cf8',
  },
  {
    kind: 'saw_wheel',
    name: 'ソウ・ホイール',
    code: 'EN-19',
    category: '特殊敵',
    hp: '破壊不可（踏みつけ弾き）',
    contactDmg: DAMAGE_TABLE.saw_wheel,
    attackDmg: null,
    attackLabel: '高速回転ノコギリ走行',
    speedInfo: '175 px/s（往復巡回）',
    behavior: '高硬度魔導鋼でできた回転ノコギリ。魔導弾は通じず、床を高速で往復し続ける。',
    weakness: 'タイミング良くジャンプか高所足場でやり過ごす。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#e11d48',
  },
  {
    kind: 'holo_decoy',
    name: 'ホロ・デコイ',
    code: 'EN-20',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.holo_decoy,
    attackDmg: null,
    attackLabel: '分身投影＋高速ダッシュ撹乱',
    speedInfo: '80 px/s（被弾または接近で瞬間移動）',
    behavior: '点滅するホログラム体。数秒おきに巡回範囲内の逆サイドへ瞬間ワープし、位置を撹乱する。',
    weakness: 'ワープ直後のわずかな硬直を狙う。接触ダメージ自体は低い。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#38bdf8',
  },
  {
    kind: 'cryo_slime',
    name: 'クライオ・スライム',
    code: 'EN-21',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.cryo_slime,
    attackDmg: null,
    attackLabel: '滑走タックル＆冷気霧',
    speedInfo: '88 px/s（小跳躍滑走）',
    behavior: '氷結魔素を帯びた蒼いスライム。氷面を滑るように素早く突っ込んでくる。',
    weakness: '高耐久2HPだが踏みつけ1回または魔導弾2発で砕ける。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#60a5fa',
  },
  {
    kind: 'arc_pylon',
    name: 'アーク・パイロン',
    code: 'EN-22',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.arc_pylon_contact,
    attackDmg: DAMAGE_TABLE.arc_pylon_zap,
    attackLabel: '水平ツイン電撃パルス',
    speedInfo: '固定設置（1.8秒周期放電）',
    behavior: '金属柱の上部コイルをチャージし、左右同時に高圧の水平電撃弾を射出する。',
    weakness: 'ジャンプで電撃を飛び越えて頭上から踏みつけると一撃で破壊可能。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#22d3ee',
  },
  {
    kind: 'grimoire_mimic',
    name: 'グリモア・ミミック',
    code: 'EN-23',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.grimoire_mimic,
    attackDmg: null,
    attackLabel: '擬態解除→高速噛みつき跳躍',
    speedInfo: '待機時は無反応 → 接近時 135 px/s追尾跳躍',
    behavior: '普段は浮遊する古びた魔導書に擬態しているが、180px以内に近づくと牙を剥いて連続跳躍で襲いかかる。',
    weakness: '擬態状態でも魔導弾は通るため、不審な魔導書には先制射撃。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#d97706',
  },
  {
    kind: 'rune_sentinel',
    name: 'ルーン・センチネル',
    code: 'EN-24',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.rune_sentinel_contact,
    attackDmg: DAMAGE_TABLE.rune_sentinel_wave,
    attackLabel: '地走りルーン衝撃波',
    speedInfo: '36 px/s（重厚歩行）',
    behavior: '古代ルーンが彫られた石像ガーディアン。一定間隔で地面を叩き、左右へ地走りルーン波を放つ。',
    weakness: '衝撃波をジャンプで飛び越え、連射魔導弾と踏みつけを組み合わせて削る。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#34d399',
  },
  {
    kind: 'mirror_wraith',
    name: 'ミラー・レイス',
    code: 'EN-25',
    category: '特殊敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.mirror_wraith,
    attackDmg: null,
    attackLabel: '背中合わせ瞬間背後ワープ',
    speedInfo: '55 px/s → 攻撃検知で背面ワープ',
    behavior: 'プレイヤーが正面を向いて近づくと、時折プレイヤーの背中側へ一瞬で回り込む鏡面の亡霊。',
    weakness: '振り向きながらの即座の魔導弾、または背を向けた状態で罠に誘い込む。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#e2e8f0',
  },
  {
    kind: 'chrono_pendulum',
    name: 'クロノ・ペンデュラム',
    code: 'EN-26',
    category: '特殊敵',
    hp: '破壊不可',
    contactDmg: DAMAGE_TABLE.chrono_pendulum,
    attackDmg: null,
    attackLabel: '巨大振り子ブレード薙ぎ払い',
    speedInfo: '周期 2.4秒の精密単振動スイング',
    behavior: '天井支点から吊り下げられた魔導時計の巨大刃。正確なリズムで大きく往復運動する。',
    weakness: '破壊不可。振り子が上がりきった瞬間に下をスライディングで潜り抜ける。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#fbbf24',
  },
  {
    kind: 'gravity_imp',
    name: 'グラビティ・インプ',
    code: 'EN-27',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.gravity_imp_contact,
    attackDmg: DAMAGE_TABLE.gravity_imp_orb,
    attackLabel: '重力反転波状オーブ',
    speedInfo: '64 px/s（空中8の字飛行）',
    behavior: '小さな悪魔型ドローン。上下に波打ちながら進む紫色オーブを2.3秒ごとに放つ。',
    weakness: 'HPは1。軌道が素直なため先制射撃で落とせる。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#a78bfa',
  },
  {
    kind: 'ink_specter',
    name: 'インク・スペクター',
    code: 'EN-28',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.ink_specter_contact,
    attackDmg: DAMAGE_TABLE.ink_specter_blob,
    attackLabel: '2連放物線インク弾',
    speedInfo: '52 px/s（浮遊後退）',
    behavior: '魔導書の禁断インクから生まれた影。プレイヤーが近づくと距離を取りつつ山なりのインク弾を連射。',
    weakness: '2段ジャンプで一気に距離を詰めて踏みつけ一撃。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#6366f1',
  },
  {
    kind: 'star_weaver',
    name: 'スター・ウィーバー',
    code: 'EN-29',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.star_weaver_contact,
    attackDmg: DAMAGE_TABLE.star_weaver_lance,
    attackLabel: '3方向星光弾（扇状射撃）',
    speedInfo: '45 px/s（高空円軌道ホバー）',
    behavior: '星図の幾何学陣を背負い、プレイヤーへ向けて扇状3-Wayの光弾を撃ち降ろす高位使い魔。',
    weakness: '弾の間を抜けて対空ショット2発、または高所から踏みつけ。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#fde047',
  },
  {
    kind: 'golem_knight',
    name: 'ゴーレム・ナイト',
    code: 'EN-30',
    category: '特殊敵',
    hp: '4 HP',
    contactDmg: DAMAGE_TABLE.golem_knight,
    attackDmg: null,
    attackLabel: '重装甲突撃ステップ（高耐久4）',
    speedInfo: '35 px/s（接近時ダッシュ踏み込み）',
    behavior: '魔導合金の重鎧を纏った騎士。耐久4と非常にタフで、接触すると30の大ダメージを受ける。',
    weakness: '2段ジャンプ踏みつけ2回（1回2ダメ）で素早く撃破できる。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#94a3b8',
  },
  {
    kind: 'mana_leech',
    name: 'マナ・リーチ',
    code: 'EN-31',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.mana_leech,
    attackDmg: null,
    attackLabel: '高速ホバー吸血突撃',
    speedInfo: '130 px/s（プレイヤー位置へ直進突撃）',
    behavior: '普段はゆらゆら漂うが、視界260pxに入ると素早くターゲットへ向けて一直線に突進してくる。',
    weakness: '飛び込まれる前に真正面から魔導弾で迎撃。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#c026d3',
  },
  {
    kind: 'sigil_bomber',
    name: 'シジル・ボマー',
    code: 'EN-32',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.sigil_bomber_contact,
    attackDmg: DAMAGE_TABLE.sigil_bomber_mine,
    attackLabel: '時限爆裂ルーン投下（28ダメ）',
    speedInfo: '70 px/s（上空往復爆撃）',
    behavior: '上空を往復しながら、真下付近にプレイヤーが来ると落下式の魔法地雷を投下する爆撃機。',
    weakness: '爆弾を投下させた直後に側面からジャンプ射撃。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#fb7185',
  },
  {
    kind: 'void_eye',
    name: 'ヴォイド・アイ',
    code: 'EN-33',
    category: '特殊敵',
    hp: '2 HP（開眼時のみ有効）',
    contactDmg: DAMAGE_TABLE.void_eye_contact,
    attackDmg: DAMAGE_TABLE.void_eye_beam,
    attackLabel: '周期的閉眼ガード＋精密レーザー弾',
    speedInfo: '空中固定浮遊（2秒開眼 / 1.5秒閉眼）',
    behavior: '閉眼している間は固い外殻で魔導弾を弾き、開眼した瞬間に高威力のレーザー弾を発射する邪眼機。',
    weakness: '赤い瞳が開いているタイミングを見極めて攻撃を叩き込む。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#f43f5e',
  },
  {
    kind: 'flame_thruster',
    name: 'フレイム・スラスター',
    code: 'EN-34',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.flame_thruster,
    attackDmg: null,
    attackLabel: 'ジェット噴射連続ダッシュ',
    speedInfo: '巡回50 → ブースト250 px/s',
    behavior: '背面のブースターに点火して定期的に超高速のジェット移動を繰り返す強襲ユニット。',
    weakness: 'ブースター冷却中の停止タイミングに攻撃を集中。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#f97316',
  },
  {
    kind: 'jet_trooper',
    name: 'ジェット・トルーパー',
    code: 'EN-35',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.jet_trooper_contact,
    attackDmg: DAMAGE_TABLE.jet_trooper_burst,
    attackLabel: '空中滞空連射パルス',
    speedInfo: '90 px/s（空中高度調整ホバー）',
    behavior: 'プレイヤーの高度に合わせてジェットパックで上下しつつ斜め下へライフル弾を連射する空中歩兵。',
    weakness: '空中で位置を合わせやすく、踏みつけから2段ジャンプへの連携が楽しい相手。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#38bdf8',
  },
  {
    kind: 'railgun_mech',
    name: 'レールガン・メック',
    code: 'EN-36',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.railgun_mech_contact,
    attackDmg: DAMAGE_TABLE.railgun_mech_shot,
    attackLabel: '電磁チャージ→超高速レール砲(33)',
    speedInfo: '固定／重砲撃歩行機',
    behavior: '長い照準チャージ(1.6秒)の後に弾速640px/sの超高速電磁砲を水平に撃ち抜く大型砲戦機。',
    weakness: 'チャージ音が鳴ったら即座に高さ軸を外す。背面や頭上からの踏みつけが安全。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#22d3ee',
  },
  {
    kind: 'aegis_drone',
    name: 'イージス・ドローン',
    code: 'EN-37',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.aegis_drone,
    attackDmg: null,
    attackLabel: '360°回転エネルギー盾',
    speedInfo: '62 px/s（2枚の盾が常時周回）',
    behavior: '周囲を高速回転する2枚のバリアパネルを展開した防御型ドローン。盾に当たると魔導弾が防がれる。',
    weakness: '盾の隙間を突くか、上から直接踏みつけるとバリアを無視して撃破できる。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#fbbf24',
  },
  {
    kind: 'cluster_mine',
    name: 'クラスター・マイン',
    code: 'EN-38',
    category: '特殊敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.cluster_mine_contact,
    attackDmg: DAMAGE_TABLE.cluster_mine_frag,
    attackLabel: '撃破・接近時 4方向破片飛散(23)',
    speedInfo: '空中微振動滞空',
    behavior: '空中に浮かぶ機雷。近づくか破壊されると上下左右斜めへ4発の破片弾を拡散して消滅する。',
    weakness: '遠距離から魔導弾で安全に誘爆させ、飛んでくる破片を避ける。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#f87171',
  },
  {
    kind: 'vortex_fan',
    name: 'ヴォルテックス・ファン',
    code: 'EN-39',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.vortex_fan,
    attackDmg: null,
    attackLabel: '周期的強風ノックバック送風',
    speedInfo: '固定設置（吸引・吹飛サイクル）',
    behavior: '巨大なタービンファンで交互に「吸い込み」と「押し出し」の強風を発生させ、足場制御を狂わせる。',
    weakness: '逆風に負けないダッシュやスライディングで距離を詰めて魔導弾2発で破壊。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#2dd4bf',
  },
  {
    kind: 'plasma_hound',
    name: 'プラズマ・ハウンド',
    code: 'EN-40',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.plasma_hound,
    attackDmg: null,
    attackLabel: '飛びかかり噛みつき跳躍',
    speedInfo: '95 px/s（発見時 230 px/s 跳躍）',
    behavior: '四足歩行のサイバー猟犬。プレイヤーを発見すると低く構えて素早い放物線ジャンプで飛びかかってくる。',
    weakness: '飛びかかりをスライディングで潜り抜け、着地際を撃つ。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#c084fc',
  },
  {
    kind: 'drill_mole',
    name: 'ドリル・モール',
    code: 'EN-41',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.drill_mole,
    attackDmg: null,
    attackLabel: '地中潜行→真下からの飛び出し',
    speedInfo: '潜行移動→1.4秒ごと急上昇',
    behavior: '地中を高速移動してプレイヤーの近くで砂煙を上げた後、勢いよく地上へ飛び出してくる掘削機。',
    weakness: '砂煙の予兆が見えたらその場から離れ、飛び出し頂点で踏みつけまたは射撃。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#eab308',
  },
  {
    kind: 'tesla_walker',
    name: 'テスラ・ウォーカー',
    code: 'EN-42',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.tesla_walker_contact,
    attackDmg: DAMAGE_TABLE.tesla_walker_arc,
    attackLabel: 'バウンド電撃プラズマ球',
    speedInfo: '48 px/s（二足歩行）',
    behavior: '頭部のテスラコイルから放物線状に飛ぶ大型プラズマ電撃弾を射出する電子戦二足歩行機。',
    weakness: '高弾道の下を潜り込み、連続射撃で撃破。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#38f2ff',
  },
  {
    kind: 'phantom_knight',
    name: 'ファントム・ナイト',
    code: 'EN-43',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.phantom_knight,
    attackDmg: null,
    attackLabel: '二段残像ダッシュ斬り',
    speedInfo: '60 px/s → ブリンク突進 310 px/s',
    behavior: '黒騎士の霊体。構えの後に残像を残して310px/sの高速ダッシュ斬りを繰り出す強敵。',
    weakness: '突進はジャンプでかわし、硬直中に踏みつけ(2ダメ)+追撃1発で倒せる。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#a855f7',
  },
  {
    kind: 'bio_spore',
    name: 'バイオ・スポア',
    code: 'EN-44',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.bio_spore_contact,
    attackDmg: DAMAGE_TABLE.bio_spore_cloud,
    attackLabel: '浮遊胞子弾散布（3秒間隔）',
    speedInfo: '30 px/s（気まぐれ漂流）',
    behavior: '地下植物と魔導回路が融合した浮遊胞子。ゆっくり落下・漂流する毒胞子弾を周囲に放つ。',
    weakness: '胞子は消えるまで遅いが耐久は1。見つけ次第早めに掃討。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#4ade80',
  },
  {
    kind: 'omega_drone',
    name: 'オメガ・ドローン',
    code: 'EN-45',
    category: '特殊敵',
    hp: '4 HP',
    contactDmg: DAMAGE_TABLE.omega_drone_contact,
    attackDmg: DAMAGE_TABLE.omega_drone_laser,
    attackLabel: '追尾＋斜め2連高出力レーザー弾',
    speedInfo: '95 px/s（高精度戦術ホバー）',
    behavior: '巡回ドローンの最上位強化型。プレイヤーとの距離を保ちつつ2連の高威力プラズマ弾を浴びせるエリート機。',
    weakness: '耐久4と堅いが、連続踏みつけ2回または魔導弾4発で確実に撃墜可能。',
    stages: 'W2以降・敵図鑑ラボ実装済',
    accentColor: '#f43f5e',
  },

  {
    kind: 'gear_roller',
    name: 'ギア・ローラー',
    code: 'EN-46',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.gear_roller,
    attackDmg: null,
    attackLabel: '高速回転車輪突進',
    speedInfo: '155 px/s（高機動・折り返し跳躍）',
    behavior: '黄金歯車のような鋼鉄車輪で足場上を猛スピードで転がり、壁や段差で勢いよく反転跳躍する高圧エリアの哨戒機。',
    weakness: '上から踏みつけるか、進行方向を見極めて魔導弾2発で破壊。',
    stages: '2-1 / 2-2 / 2-砦 / 2-3 / 2-6 / 2-BOSS',
    accentColor: '#facc15',
  },
  {
    kind: 'spark_jelly',
    name: 'スパーク・クラゲ',
    code: 'EN-47',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.spark_jelly,
    attackDmg: DAMAGE_TABLE.spark_jelly_barrier,
    attackLabel: '周期電撃バリア（半径46px）',
    speedInfo: '46 px/s（浮遊＋周期帯電）',
    behavior: '宙を漂いながら約2.6秒ごとに黄色い警告フリッカー後、周囲一帯へ高電圧バリアを展開。帯電中の接触は強ダメージ＆弾反発。',
    weakness: 'バリアが消えている通常状態のうちに素早く魔導弾2発または踏みつけで撃破。',
    stages: '2-1 / 2-3 / 2-5 / 2-7 / 2-BOSS',
    accentColor: '#fde047',
  },
  {
    kind: 'laser_drone',
    name: 'レーザー・ドローン',
    code: 'EN-48',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.laser_drone_contact,
    attackDmg: DAMAGE_TABLE.laser_drone_beam,
    attackLabel: '照準予告線後・直線高出力レーザー',
    speedInfo: '58 px/s（ホバー狙撃型）',
    behavior: 'プレイヤーをロックオンして細い黄色い予告線を1.0秒間照射し、射線固定の瞬間に貫通力のある直線レーザーを発射する。',
    weakness: '予告線が固定された直後に上下へジャンプ回避し、発射後の硬直中に仕留める。',
    stages: '2-1 / 2-2 / 2-砦 / 2-4 / 2-7 / 2-BOSS',
    accentColor: '#fbbf24',
  },
  {
    kind: 'thunder_imp',
    name: 'サンダー・インプ',
    code: 'EN-49',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.thunder_imp_contact,
    attackDmg: DAMAGE_TABLE.thunder_imp_bolt,
    attackLabel: '雷雲からの真下直撃落雷',
    speedInfo: '92 px/s（上空雲上巡回）',
    behavior: '黄金の雷雲に乗って上空を飛び回り、プレイヤーの頭上に差し掛かると真下へ警告ラインを出した後に小さな雷を落としてくる。',
    weakness: '雷の落下予兆が見えたら横にダッシュして回避し、2段ジャンプからの空中射撃・踏みつけで撃墜。',
    stages: '2-3 / 2-4 / 2-5 / 2-6 / 2-7 / 2-BOSS',
    accentColor: '#f59e0b',
  },
  {
    kind: 'spring_bumper',
    name: '反発バウンサー',
    code: 'EN-50',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.spring_bumper,
    attackDmg: null,
    attackLabel: '横弾き飛ばし＆上面超バウンス',
    speedInfo: '62 px/s（水平巡回）',
    behavior: '弾を一切撃たない反発機構ユニット。横から触れると大ノックバックで弾き飛ばされるが、上から踏みつけると超高速ハイジャンプ台として利用できる。',
    weakness: '高所のオーブや空中ギアへ飛び移る踏み台として活用するか、魔導弾2発で破壊。',
    stages: '2-1 / 2-2 / 2-3 / 2-5 / 2-7 / ラボ実装済',
    accentColor: '#34d399',
  },
  {
    kind: 'magnet_crane',
    name: '磁力クレーン・ユニット',
    code: 'EN-51',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.magnet_crane,
    attackDmg: DAMAGE_TABLE.magnet_crane,
    attackLabel: '磁気吸引リフト ⇄ 強制反発スラム',
    speedInfo: '58 px/s（空中クレーン移動）',
    behavior: '真下195pxへ磁力コラムを照射する非弾幕ユニット。シアン色の吸引中は空中に引き上げられ2段ジャンプが復活し、赤色反発切替時は地面へ叩き落とされる。',
    weakness: '吸引状態のリフトを利用して高所歯車へ上がり、黄色警告が見えたらコラム外へ横移動。',
    stages: '2-2 / 2-3 / 2-FORT / 2-7 / 2-BOSS / ラボ実装済',
    accentColor: '#38bdf8',
  },
  {
    kind: 'mirror_gear',
    name: 'ミラー・ブースト歯車',
    code: 'EN-52',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.mirror_gear,
    attackDmg: null,
    attackLabel: '被弾で1.9秒間「安全金ブースト台」化',
    speedInfo: '54 px/s（回転巡回）',
    behavior: '通常時は触れるとダメージを受ける黄金の刃付き歯車だが、魔導弾を1発当てると1.9秒間ダメージ無しの安全な金色ブースト台へ変化し、乗ると大跳躍できる。',
    weakness: '撃って止めるだけでなく「あえて1発撃って踏み台にする」アスレチック連携が有効。',
    stages: '2-1 / 2-2 / 2-FORT / 2-4 / 2-7 / ラボ実装済',
    accentColor: '#fde047',
  },
  {
    kind: 'tether_spark',
    name: 'テザー電撃振子',
    code: 'EN-53',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.tether_spark_contact,
    attackDmg: DAMAGE_TABLE.tether_spark_wire,
    attackLabel: '84px電撃振り子ワイヤー掃討',
    speedInfo: '50 px/s（空中軌道＋振り子周期）',
    behavior: '弾を飛ばさず、本体から真下へ垂らした84pxの高圧ワイヤー球を左右へ大きく振り子のようにスイングさせて空間を制圧する。',
    weakness: 'ワイヤーが反対側へ振れている瞬間にスライディングまたはジャンプで潜り抜け、本体を狙撃。',
    stages: '2-3 / 2-4 / 2-5 / 2-7 / 2-BOSS / ラボ実装済',
    accentColor: '#facc15',
  },
  {
    kind: 'gravity_flipper',
    name: '反重力パルス装置',
    code: 'EN-54',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.gravity_flipper,
    attackDmg: null,
    attackLabel: '2.6秒周期の周囲175px強制浮上パルス',
    speedInfo: '46 px/s（浮遊波動巡回）',
    behavior: '2.6秒ごとに半径175pxへ紫色の重力波を放ち、範囲内のプレイヤーを強制的に上昇させる空間干渉ユニット。弾は撃たないが穴の上やレーザー付近では足元を狂わせる。',
    weakness: '重力波のリズムを逆手に取って高い歯車へ飛び乗るか、発動の合間に魔導弾で撃破。',
    stages: '2-2 / 2-4 / 2-5 / 2-7 / ラボ実装済',
    accentColor: '#a78bfa',
  },
  {
    kind: 'dash_rammer',
    name: '突撃電光ラマー',
    code: 'EN-55',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.dash_rammer,
    attackDmg: DAMAGE_TABLE.dash_rammer,
    attackLabel: '赤破線ロック後の425px/s超高速突進',
    speedInfo: '72 px/s → 突進 425 px/s',
    behavior: 'プレイヤーと同じ高さで捕捉すると0.52秒の赤破線ロック警告を出し、一直線に425px/sで高速体当たり突進を行う。突進後は0.68秒の硬直が生じる。',
    weakness: '赤破線の照準が出たら垂直ジャンプでかわし、壁際や突進終了後の硬直中に踏みつけ(2ダメ)＋連射。',
    stages: '2-1 / 2-3 / 2-6 / 2-BOSS / 徘徊遭遇 / ラボ実装済',
    accentColor: '#fb7185',
  },

  // ---- 46〜47: GIMMICK TURRETS & HAZARDS ----
  {
    kind: 'airship_cannon',
    name: '飛行船大砲',
    code: 'GK-01',
    category: 'ギミック',
    hp: '破壊不可',
    contactDmg: 0,
    attackDmg: DAMAGE_TABLE.airship_cannon,
    attackLabel: '大型紅蓮砲弾（285px/s）',
    speedInfo: '1.9〜2.4秒ごとに砲撃',
    behavior: '飛行船甲板に据え付けられた重砲。角度付き弾道で大型砲弾を連続発射する。',
    weakness: '砲口の光と発射間隔を読み、ジャンプまたはスライディングで潜り抜ける。',
    stages: '1-BOSS / 2-BOSS / ラボ実装済',
    accentColor: '#fb7185',
  },
  {
    kind: 'laser_emitter',
    name: '回転レーザー発生機',
    code: 'GK-02',
    category: 'ギミック',
    hp: '破壊不可',
    contactDmg: 0,
    attackDmg: DAMAGE_TABLE.rotating_laser,
    attackLabel: '360°回転高出力レーザーバー',
    speedInfo: '角速度 1.5〜2.1 rad/s',
    behavior: '砦のセキュリティ区画に設置された回転式レーザーユニット。中心ハブから両端へ光刃を回転照射する。',
    weakness: '破壊不可。回転周期に合わせてジャンプ飛び越え・スライディング潜りで突破。',
    stages: '1-砦 / 2-砦 / ラボ実装済',
    accentColor: '#f43f5e',
  },

  // ---- BOSSES ----
  {
    kind: 'mid_guardian',
    name: '重装シールド・ガーディアン',
    code: 'BOSS-01',
    category: '中ボス',
    hp: '6 HP',
    contactDmg: DAMAGE_TABLE.mid_guardian_contact,
    attackDmg: DAMAGE_TABLE.mid_guardian_shot,
    attackLabel: '重装キャノン弾(24) / 跳躍プレス(28)',
    speedInfo: '追跡歩行＋大跳躍プレス',
    behavior: '1-砦最奥の隔離アリーナに出現。正面の黄金大盾は魔導弾を完全に弾く。跳躍プレスと水平キャノンを交互に繰り出す。',
    weakness: '上からの踏みつけで「GUARD BROKEN（2.4秒スタン）」を奪うか、大跳躍中に背後の露出コアへ魔導弾を撃つ。',
    stages: '1-砦（魔導警備ゲート）/ ラボ実装済',
    accentColor: '#fbbf24',
  },
  {
    kind: 'archmage',
    name: '魔導機神・アークメイジ',
    code: 'BOSS-02',
    category: '大ボス',
    hp: '11 HP（3段階フェーズ・強化版）',
    contactDmg: DAMAGE_TABLE.archmage_contact,
    attackDmg: DAMAGE_TABLE.archmage_shockwave,
    attackLabel: '3-Way魔導扇(20) / 追尾オーブ(19) / 衝撃波(26) / 分身弾(18)',
    speedInfo: '高速低空ホバリング＋急降下＋両端分身',
    behavior: '1-BOSS決戦体。全弾・衝撃波がアリーナ奥まで到達する。Phase1(11〜8): 追尾オーブ＋3方向魔導扇。Phase2(HP≦7): 急降下スラムからアリーナ端まで届く左右衝撃波(26)＋挟撃弾。Phase3(HP≦4): アリーナ両端の分身が対角クロス弾を放つ。',
    weakness: '追尾オーブは魔導弾で撃墜可能。端まで届く衝撃波と3-Way弾を2段ジャンプで飛び越え、降下後の隙に踏みつけ(2ダメ)＋魔導弾を叩き込む。',
    stages: '1-BOSS（電脳魔導飛行船）/ ラボ実装済',
    accentColor: '#c084fc',
  },
  {
    kind: 'overlord_core',
    name: '星幽機皇・オーヴァーロード',
    code: 'BOSS-03',
    category: '大ボス',
    hp: '16 HP（試作強襲形態）',
    contactDmg: DAMAGE_TABLE.overlord_core_contact,
    attackDmg: DAMAGE_TABLE.overlord_core_slam,
    attackLabel: '3方向拡散砲(27) / 急降下衝撃圧(35)',
    speedInfo: '高速軌道飛行＋全方位弾幕',
    behavior: '8の字機動から3-Way高火力レーザー拡散、急降下プレス衝撃波、終盤は連射オーブを組み合わせて攻める試作強襲機。',
    weakness: '急降下スラムの直後に高度が下がった瞬間に踏みつけ2連撃＋魔導弾連打を叩き込む。',
    stages: '敵図鑑ラボ試作戦闘可能',
    accentColor: '#38f2ff',
  },
  {
    kind: 'clockwork_core',
    name: 'クロックワーク・コア',
    code: 'BOSS-04',
    category: '中ボス',
    hp: '10 HP（2-砦中ボス）',
    contactDmg: DAMAGE_TABLE.clockwork_core_contact,
    attackDmg: DAMAGE_TABLE.clockwork_core_laser,
    attackLabel: '回転4連レーザー(26) / 跳弾歯車(21)',
    speedInfo: '歯車公転＋高速レーザー掃射',
    behavior: 'ワールド2砦の最奥を守る機械守護者。巨大な歯車装甲を高速回転させながら中距離（195px）の十字レーザーを回転照射し、バウンドする歯車弾を撒き散らす。',
    weakness: 'レーザーの届く範囲（195px）外へ離れて回避するか、回転に合わせてジャンプ／スライディングで切り抜け、隙間へ魔導弾・踏みつけ(2ダメ)を狙う。',
    stages: '2-砦（歯車とレーザーの機械要塞）/ ラボ実装済',
    accentColor: '#facc15',
  },
  {
    kind: 'thunder_kronos',
    name: 'サンダー・クロノス',
    code: 'BOSS-05',
    category: '大ボス',
    hp: '14 HP（3段階形態・W2大ボス）',
    contactDmg: DAMAGE_TABLE.thunder_kronos_contact,
    attackDmg: DAMAGE_TABLE.thunder_kronos_blitz,
    attackLabel: '第1:ファンネル雷 / 第2:電光ダッシュ(23) / 第3:2連回転掃射(22)',
    speedInfo: 'HP14→10(第1) / 9→5(第2) / 4→1(第3)の3形態変化（調整版）',
    behavior: '黄金の雷帝。HP14から3段階に攻撃形態が変化する。第1形態(14〜10): 周回ファンネル射撃・2連雷弾・天空落雷を交互展開。第2形態(9〜5): 十分予告付きの電光レール突進(23)＆スラム衝撃波(24)。第3形態(4〜1): 2本回転電撃ビーム掃射(22)＆3連落雷カスケードを展開。',
    weakness: '電光ダッシュは予告線を見てジャンプ/スライディングで回避し、2本回転掃射の合間を潜りつつ足場上の回復金オーブも活用して踏みつけ(2ダメ)＆魔導弾を集中。',
    stages: '2-BOSS（雷帝の空中発電戦艦）/ ラボ実装済',
    accentColor: '#fde047',
  },

  // ---- WORLD 3 NEW ENEMIES (EN-56 〜 EN-61) ----
  {
    kind: 'thorn_weaver',
    name: 'ソーン・ウィーバー',
    code: 'EN-56',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.thorn_weaver_contact,
    attackDmg: DAMAGE_TABLE.thorn_weaver_seed,
    attackLabel: 'バウンド種子爆弾×3 ＆ 低空茨波',
    speedInfo: '48 px/s（茨足場巡回）',
    behavior: '床を2回バウンドする放物線の翠緑種子弾と地走り茨弾を交互に放つ複合射手。',
    weakness: 'バウンドの合間に頭上へ飛び込んで踏みつけ(2ダメ)＋魔導弾で撃破。',
    stages: '3-1 / 3-3 / 3-砦1 / 3-5 / 3-7',
    accentColor: '#34d399',
  },
  {
    kind: 'emerald_mantis',
    name: 'エメラルド・マンティス',
    code: 'EN-57',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.emerald_mantis_contact,
    attackDmg: DAMAGE_TABLE.emerald_mantis_slash,
    attackLabel: '跳躍斬り込み＋着地2連三日月刃',
    speedInfo: '76 px/s（跳躍時 280 px/s）',
    behavior: '捕捉すると緑の予告閃光を放ってから高跳躍で急襲し、着地と同時に左右へ三日月斬撃波を飛ばす。',
    weakness: '跳躍中は下をスライディングで潜り抜け、着地斬撃後の硬直を撃つ。',
    stages: '3-1 / 3-2 / 3-砦1 / 3-4 / 3-6 / 3-BOSS',
    accentColor: '#10b981',
  },
  {
    kind: 'prism_spore',
    name: 'プリズム・スポア',
    code: 'EN-58',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.prism_spore_contact,
    attackDmg: DAMAGE_TABLE.prism_spore_bolt,
    attackLabel: '回転4連螺旋オーブ拡散',
    speedInfo: '56 px/s（空中8の字軌道）',
    behavior: '3つの結晶胞子を周囲に回転させながら8の字に漂い、一定周期で4方向へ旋回弾を外側拡散させる。',
    weakness: '拡散直後のクールタイム中に2段ジャンプから魔導弾2発で破壊。',
    stages: '3-2 / 3-3 / 3-5 / 3-砦2 / 3-7',
    accentColor: '#6ee7b7',
  },
  {
    kind: 'chrono_vine',
    name: 'クロノ・ヴァイン',
    code: 'EN-59',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.chrono_vine_contact,
    attackDmg: DAMAGE_TABLE.chrono_vine_spike,
    attackLabel: '足元遅延突き上げ翠棘',
    speedInfo: '固定根張り型（1.1秒予兆付き）',
    behavior: 'プレイヤーの足元位置をロックし、緑の予兆柱を表示して1.1秒後に地中から鋭い翠棘を突き上げる罠植物機。',
    weakness: '足元に緑の予兆柱が出たら即座に横移動し、本体へ連射を叩き込む。',
    stages: '3-3 / 3-4 / 3-砦2 / 3-7 / 3-BOSS',
    accentColor: '#22c55e',
  },
  {
    kind: 'bio_hydra',
    name: 'バイオ・ヒュドラ',
    code: 'EN-60',
    category: '特殊敵',
    hp: '4 HP',
    contactDmg: DAMAGE_TABLE.bio_hydra_contact,
    attackDmg: DAMAGE_TABLE.bio_hydra_wave,
    attackLabel: '3-Way毒霧弾 ＆ 地走り酸波交互連射',
    speedInfo: '38 px/s（双頭重装歩行）',
    behavior: '双頭から「斜め3方向拡散弾」と「床沿いに走る酸衝撃波」を交互に撃ち分けるW3のエリート重戦車生体。',
    weakness: '高耐久4HPだが動作は鈍重。バウンド台や空中から連続踏みつけ(2ダメ×2)が有効。',
    stages: '3-砦1 / 3-4 / 3-砦2 / 3-6 / 3-BOSS',
    accentColor: '#4ade80',
  },
  {
    kind: 'jade_sniper',
    name: 'ジェイド・スナイパー',
    code: 'EN-61',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.jade_sniper_contact,
    attackDmg: DAMAGE_TABLE.jade_sniper_beam,
    attackLabel: '緑照準線→2回反射跳弾レーザー',
    speedInfo: '42 px/s（空中狙撃ホバー）',
    behavior: '緑色の長い照準レーザーを1.2秒構えた後、床や壁で最大2回反射（跳弾）する翡翠レーザー弾を射出する。',
    weakness: '跳弾の反射角にも警戒しつつ、照準が固定されたら即座に軸を外して狙撃手本体を叩く。',
    stages: '3-2 / 3-5 / 3-砦2 / 3-6 / 3-7',
    accentColor: '#a7f3d0',
  },

  // ---- DEDICATED ROAMING ENCOUNTER MINI-BOSSES (NO REUSE) ----
  {
    kind: 'iron_goliath',
    name: 'アイアン・ゴライアス',
    code: 'ENC-01',
    category: '中ボス',
    hp: '6 HP（W1エリア戦専用）',
    contactDmg: DAMAGE_TABLE.iron_goliath_contact,
    attackDmg: DAMAGE_TABLE.iron_goliath_mortar,
    attackLabel: '重装迫撃砲3連弧弾 ＆ ショック突進',
    speedInfo: '重装歩行＋迫撃砲撃（W1エリア専用）',
    behavior: 'ワールド1のマップ徘徊遭遇戦専用ミニボス。1-砦中ボスとは異なる専用設計で、山なり迫撃砲3連射と肩部タックルを繰り出す。',
    weakness: '迫撃砲の弧の下を潜り込み、突進後の隙に魔導弾または踏みつけ(2ダメ)。撃破後に回復オーブが解放。',
    stages: 'W1 徘徊エリア戦（ENC_W1_1〜3）',
    accentColor: '#38bdf8',
  },
  {
    kind: 'volt_centurion',
    name: 'ヴォルト・センチュリオン',
    code: 'ENC-02',
    category: '中ボス',
    hp: '7 HP（W2エリア戦専用）',
    contactDmg: DAMAGE_TABLE.volt_centurion_contact,
    attackDmg: DAMAGE_TABLE.volt_centurion_disc,
    attackLabel: '返り歯車ディスク ＆ 双電槍バースト',
    speedInfo: '高速ホバーダッシュ＋ブーメラン輪刃',
    behavior: 'ワールド2のマップ徘徊遭遇戦専用ミニボス。2-砦中ボスとは別機体で、飛んで戻るブーメラン歯車刃と電槍3連射を放つ。',
    weakness: '戻ってくる歯車刃をジャンプで飛び越え、チャージ中の本体を狙い撃つ。撃破後に回復オーブが解放。',
    stages: 'W2 徘徊エリア戦（ENC_W2_1〜3）',
    accentColor: '#facc15',
  },
  {
    kind: 'emerald_stalker',
    name: 'エメラルド・ストーカー',
    code: 'ENC-03',
    category: '中ボス',
    hp: '8 HP（W3エリア戦専用）',
    contactDmg: DAMAGE_TABLE.emerald_stalker_contact,
    attackDmg: DAMAGE_TABLE.emerald_stalker_spore,
    attackLabel: '跳躍クレセント斬撃 ＆ バウンド胞子弾',
    speedInfo: '俊敏跳躍ハンター（W3エリア専用）',
    behavior: 'ワールド3のマップ徘徊遭遇戦専用ミニボス。緑の疾風跳躍からバウンド胞子地雷と双刃斬撃波を飛ばして襲う。',
    weakness: '跳躍着地直後の姿勢が低い瞬間に連続踏みつけ＆魔導弾。撃破後に回復オーブが解放。',
    stages: 'W3 徘徊エリア戦（ENC_W3_1〜3）',
    accentColor: '#34d399',
  },

  // ---- WORLD 3 FORTRESS & FINAL BOSSES (NO WARPING) ----
  {
    kind: 'verdant_warden',
    name: 'ヴァーダント・ワーデン',
    code: 'BOSS-06',
    category: '中ボス',
    hp: '11 HP（3-砦1中ボス）',
    contactDmg: DAMAGE_TABLE.verdant_warden_contact,
    attackDmg: DAMAGE_TABLE.verdant_warden_laser,
    attackLabel: '移動クロス翠レーザー(24) / バウンド茨爆弾(22)',
    speedInfo: 'アリーナ巡回移動＋跳躍ショックウェーブ',
    behavior: '3-砦1の守護機。足場間を移動しながら交差する2連翡翠レーザーを回転照射し、バウンド種子爆弾と跳躍地走り波を放つ。',
    weakness: '移動しながら撃つ回転レーザーの射程外または合間を飛び越えて頭上から踏みつけ(2ダメ)。',
    stages: '3-砦1（第一翠玉要塞・茨の門）/ ラボ実装済',
    accentColor: '#10b981',
  },
  {
    kind: 'jade_chimera',
    name: 'ジェイド・キメラ',
    code: 'BOSS-07',
    category: '中ボス',
    hp: '13 HP（3-砦2中ボス）',
    contactDmg: DAMAGE_TABLE.jade_chimera_contact,
    attackDmg: DAMAGE_TABLE.jade_chimera_beam,
    attackLabel: '5連螺旋胞子(20) / 双頭斜め反射レーザー(24)',
    speedInfo: '8の字滑空飛行＋予告突進（ワープ無し）',
    behavior: '3-砦2の双頭翠龍機。8の字飛行を続けながら5方向螺旋オーブと床跳弾レーザーを発射し、現在位置から高速ダイブ突進を行う。',
    weakness: '予告線なしの滑空から光った直後のダイブ軌道を避け、反転減速時に魔導弾を叩き込む。',
    stages: '3-砦2（第二翠玉要塞・双晶の炉心）/ ラボ実装済',
    accentColor: '#34d399',
  },
  {
    kind: 'emerald_emperor',
    name: '翡翠皇・エメラルドエンペラー',
    code: 'BOSS-08',
    category: '大ボス',
    hp: '15 HP（3形態・W3大ボス）',
    contactDmg: DAMAGE_TABLE.emerald_emperor_contact,
    attackDmg: DAMAGE_TABLE.emerald_emperor_laser,
    attackLabel: '移動掃射(25) / 跳弾翠槍(23) / 翠棘噴出＆スラム(26)',
    speedInfo: 'HP15→11(第1) / 10→6(第2) / 5→1(第3)（ワープ無し）',
    behavior: 'ワールド3頂上に君臨する翠玉の皇帝。ワープを一切使わず滑空・跳躍で移動しながら、第1(跳弾翠槍＋螺旋胞子)、第2(移動回転レーザー＋足元翠棘)、第3(重圧スラム＋全方位翠刃)へと進化。',
    weakness: '常に視覚的な軌道を辿って動くため、予備動作を読んでジャンプ足場とバウンス台を活用し、隙に踏みつけ(2ダメ)＋魔導弾を集中。',
    stages: '3-城（翡翠宮殿の聖域回廊＆翠帝玉座の間）/ ラボ実装済',
    accentColor: '#6ee7b7',
    devNote: 'ワープで瞬間移動してプレイヤーを見失うズルを完全禁止にした上で、壁から壁へ確実に2連続突進を走り切る挙動に作り直した。「画面内を堂々と飛んで斬ってくる」手触りが気持ちいい。',
  },

  // ---- WORLD 4 NEW ENEMIES (EN-62..69 -> 80 TOTAL UNITS) ----
  {
    kind: 'frost_wraith',
    name: 'フロスト・レイス',
    code: 'EN-62',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.frost_wraith_contact,
    attackDmg: DAMAGE_TABLE.frost_wraith_shard,
    attackLabel: '分裂氷晶シャード弾（0.65秒後3分裂）',
    speedInfo: '58 px/s（浮遊ホバー）',
    behavior: '宙を漂いながら大型氷弾を1発放ち、約0.65秒飛行した地点で3方向の小氷片へ炸裂分裂させるW4遠距離要員。',
    weakness: '分裂前に横へ抜けるか、射撃モーションが見えたら即座に魔導弾を叩き込んで撃墜する。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-6 / 4-砦2',
    accentColor: '#7dd3fc',
    devNote: 'ただ直進する弾ばっかりじゃ面白くないので、「時間差で空中で割れる氷弾」にこだわった。割れる前の1発を潜り抜ける判断がW4序盤から熱い！',
  },
  {
    kind: 'icicle_bat',
    name: 'アイシクル・バット',
    code: 'EN-63',
    category: '通常敵',
    hp: '1 HP',
    contactDmg: DAMAGE_TABLE.icicle_bat_contact,
    attackDmg: DAMAGE_TABLE.icicle_bat_crystal,
    attackLabel: '斜め急降下＋着地氷棘トラップ生成',
    speedInfo: '宙吊り待機→290 px/s急降下',
    behavior: '高所でホバリングしながら自機を捕捉すると予兆発光後に斜め急降下を仕掛け、真下に氷棘結晶を1.8秒間残して上昇帰還する。',
    weakness: '急降下前の赤い予兆リングが合図。横にステップしてかわした後、低空へ降りた瞬間を撃ち抜く。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-6',
    accentColor: '#bae6fd',
    devNote: 'W1のネオン・バットの強化版というだけでなく、「通り過ぎた場所に氷柱トゲを一瞬置き土産する」仕掛けにして着地狩り性能を尖らせた。',
  },
  {
    kind: 'glacier_golem',
    name: 'グレイシャー・ゴーレム',
    code: 'EN-64',
    category: '特殊敵',
    hp: '5 HP',
    contactDmg: DAMAGE_TABLE.glacier_golem_contact,
    attackDmg: DAMAGE_TABLE.glacier_golem_boulder,
    attackLabel: '正面氷盾半減＋放物線氷塊投擲',
    speedInfo: '34 px/s（重装進行）',
    behavior: '分厚い氷盾を前面に構えて正面射撃ダメージを半減・弾きつつ、重い放物線軌道の巨氷塊を投げてくる5HP重装甲戦車。',
    weakness: '2段ジャンプで頭上を飛び越えて背後から連射するか、連続踏みつけ(2ダメ)で装甲ごと踏み砕く。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-砦2 / 4-城',
    accentColor: '#60a5fa',
    devNote: '正面ゴリ押しを許さない氷の重装壁。裏取りか上から踏むかの爽快感を出すために、踏みつけ2ダメが綺麗に入るサイズ調整にこだわった。',
  },
  {
    kind: 'cryo_turret',
    name: 'クライオ・タレット',
    code: 'EN-65',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.cryo_turret_contact,
    attackDmg: DAMAGE_TABLE.cryo_turret_nova,
    attackLabel: '6方向フロスト・ノヴァ放射',
    speedInfo: '固定六角プリズム砲台',
    behavior: '一定周期でコアを凍結チャージした後、上下左右斜めの6方向へ均一に冷気弾幕を一斉放射する固定氷晶砲台。',
    weakness: '発射間隔は約2.4秒と長め。射線の隙間を縫って接近し、魔導弾2発で素早く粉砕しよう。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-6 / 4-砦2 / 4-城',
    accentColor: '#38bdf8',
  },
  {
    kind: 'blizzard_fairy',
    name: 'ブリザード・フェアリー',
    code: 'EN-66',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.blizzard_fairy_contact,
    attackDmg: DAMAGE_TABLE.blizzard_fairy_aura,
    attackLabel: '波状飛翔＋周辺凍気オーラバースト',
    speedInfo: '62 px/s（正弦波浮遊）',
    behavior: '優雅なサイン波軌道で漂いながら、約2.5秒ごとに半径95pxの氷雪オーラを炸裂させてプレイヤーにChill（減速）を付与する精霊。',
    weakness: '半径95pxの予兆円が見えたら即離脱し、中距離から魔導弾で撃ち落とす。',
    stages: '4-1 / 4-2 / 4-3 / 4-4 / 4-5 / 4-6 / 4-砦2 / 4-城',
    accentColor: '#e0f2fe',
    devNote: '近づきすぎると凍気バーストで鈍足(Chill)にされる「間合い管理敵」。うっかり踏みつけようとしてリングに引っかかるドキドキ感がいい。',
  },
  {
    kind: 'ice_skater',
    name: 'アイス・スケーター',
    code: 'EN-67',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.ice_skater,
    attackDmg: null,
    attackLabel: '225px/s高速スケーティング＆回転跳躍斬',
    speedInfo: '225 px/s（W4最速地上敵）',
    behavior: '氷靴ブレードで超高速度巡回し、自機との距離が詰まると鋭く弧を描く回転ジャンプで飛び込んでくる俊敏な氷戦士。',
    weakness: '地上での正面衝突は危険。ジャンプで頭上をかわすか、先読み魔導弾で動きを止める。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-6 / 4-砦2 / 4-城',
    accentColor: '#0284c7',
    devNote: '氷床ステージでプレイヤーと一緒に超速で滑り合うライバル感を出したくて速度225px/s＋定期スピンジャンプを実装した。',
  },
  {
    kind: 'mirror_frost',
    name: 'ミラー・フロスト',
    code: 'EN-68',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.mirror_frost,
    attackDmg: null,
    attackLabel: '正面鏡面完全反射（魔導弾を敵弾化リフレクト）',
    speedInfo: '46 px/s（プレイヤー向き自動追尾）',
    behavior: '進行方向に分厚い氷鏡盾を構えており、正面から撃ったプレイヤーの魔導弾を丸ごと敵弾へと変換して撃ち返してくる厄介な反射騎士。',
    weakness: '正面からの連射は自分の弾で撃たれる自殺行為！2段ジャンプで背中側に回り込むか、頭上から踏みつけ(2ダメ)で倒す。',
    stages: '4-1 / 4-2 / 4-3 / 4-砦1 / 4-4 / 4-5 / 4-6 / 4-砦2 / 4-城',
    accentColor: '#93c5fd',
    devNote: 'W4最強の「脳筋連射メタ」敵！何も考えずZキー連打すると自分の弾が赤く染まって返ってくるギミック、テストプレイしてて一番ニヤリとした要素。',
  },
  {
    kind: 'permafrost_wyrm',
    name: 'パーマフロスト・ワーム',
    code: 'EN-69',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.permafrost_wyrm_contact,
    attackDmg: DAMAGE_TABLE.permafrost_wyrm_shard,
    attackLabel: '氷下潜伏予兆→急浮上＋4方向氷片飛散',
    speedInfo: '潜行移動→0.55秒氷粉予兆後に急襲',
    behavior: '氷床の下を静かに這い回り、プレイヤー接近時に氷粉スパークを0.55秒散らした直後、地上へ飛び出して4方向へ氷片を撒き散らす。',
    weakness: '足元に蒼白い氷粉予兆が見えたら即ジャンプ回避し、地上へ姿を出した瞬間に集中攻撃。',
    stages: '4-1 / 4-2 / 4-砦1 / 4-4 / 4-5 / 4-6 / 4-砦2',
    accentColor: '#0369a1',
  },

  // ---- WORLD 4 ROAMING ENCOUNTER & FORTRESS / FINAL BOSSES (ZERO WARP) ----
  {
    kind: 'frost_titan',
    name: 'フロスト・タイタン',
    code: 'ENC-04',
    category: '中ボス',
    hp: '9〜10 HP（W4エリア戦専用）',
    contactDmg: DAMAGE_TABLE.frost_titan_contact,
    attackDmg: DAMAGE_TABLE.frost_titan_wave,
    attackLabel: '氷柱衝撃波 ＆ 3連氷礫＋壁完走ダッシュ',
    speedInfo: 'W4徘徊エリア戦専用・非流用設計',
    behavior: 'ワールド4のマップ徘徊遭遇戦専用ミニボス。4-砦中ボスとは別設計で、重厚な氷砕スラム波・3方向氷晶・端から端への氷滑走突進を放つ。',
    weakness: 'ジャンプ衝撃波を2段ジャンプで飛び越え、壁際で減速した瞬間に魔導弾と踏みつけを叩き込む。撃破後に回復オーブ解放。',
    stages: 'W4 徘徊エリア戦（ENC_W4_1〜3）',
    accentColor: '#38bdf8',
  },
  {
    kind: 'glacia_knight',
    name: '蒼氷騎士グレイシア',
    code: 'BOSS-09',
    category: '中ボス',
    hp: '13 HP（4-砦1中ボス）',
    contactDmg: DAMAGE_TABLE.glacia_knight_contact,
    attackDmg: DAMAGE_TABLE.glacia_knight_lance,
    attackLabel: '氷盾ガード / 跳躍氷柱スラム / 壁完走スケート突進',
    speedInfo: 'HP13→1（ワープ皆無・全幅完走滑走）',
    behavior: '4-砦1を守る蒼氷の重騎士。構え中は正面弾を氷盾で防ぎ、跳躍着地と同時に凍波を走らせ、壁から反対壁まで一直線にアイススライド突進を完走する。',
    weakness: '突進の終点や跳躍スラム後の背後を狙い、踏みつけ(2ダメ)と背面射撃で装甲を崩す。',
    stages: '4-砦1（第一蒼氷要塞・絶対零度門）/ ラボ実装済',
    accentColor: '#60a5fa',
    devNote: '正面盾を構えた騎士との決闘。ワープせず正面から跳び、走り抜けてくるので「馬上の決闘」っぽい緊張感を目指した。',
  },
  {
    kind: 'cocytus_core',
    name: 'コキュートス・コア',
    code: 'BOSS-10',
    category: '中ボス',
    hp: '15 HP（4-砦2中ボス）',
    contactDmg: DAMAGE_TABLE.cocytus_core_contact,
    attackDmg: DAMAGE_TABLE.cocytus_core_beam,
    attackLabel: '上空滑空氷柱投下 / 4連凍結回転レーザー / 横断突進',
    speedInfo: 'アリーナ連続横断スイープ（ワープ無し）',
    behavior: '4-砦2深部に鎮座する菱形冷凍機関。上空を往復滑空しながら真下へ連続氷柱を降らせ、4方向回転クライオビームでアリーナを凍結掃射する。',
    weakness: '高台足場に乗り回転レーザーの隙間を飛び越えつつコア中央を狙撃。',
    stages: '4-砦2（第二蒼氷要塞・冷凍炉心）/ ラボ実装済',
    accentColor: '#7dd3fc',
  },
  {
    kind: 'glacies_emperor',
    name: '絶対零度帝・グレイシス',
    code: 'BOSS-11',
    category: '大ボス',
    hp: '18 HP（3形態・W4最終大ボス）',
    contactDmg: DAMAGE_TABLE.glacies_emperor_contact,
    attackDmg: DAMAGE_TABLE.glacies_emperor_beam,
    attackLabel: '三連氷槍(25) / 連続落氷雨 / 回転双凍ビーム(26)＆往復壁突進',
    speedInfo: 'HP18→13(第1) / 12→7(第2) / 6→1(第3)（ワープ完全禁止）',
    behavior: 'ワールド4王城玉座に君臨する最強の氷帝。ワープを一切使わず第1形態(3連氷槍＋壁完走滑走)、第2形態(連続天井落氷＋追尾氷晶＋2往復高速突進)、第3形態(移動しながら双回転凍結ビーム＋床全面凍波スラム)へと熾烈に進化する！',
    weakness: '左右端のクライオ間欠泉と上段氷足場を立体活用して凍結ビームと往復突進を凌ぎ、突進折り返しの隙に魔導弾と踏みつけを連打。',
    stages: '4-城（蒼氷王城・終焉の氷帝玉座）/ ラボ実装済',
    accentColor: '#bae6fd',
    devNote: '本作集大成の18HP大ボス。ワープなしでこの速度の2往復全幅突進＋双回転ビームをやられると本当に「王との総力戦」って感じが出る。左右の間欠泉をうまく使って空中回避するのが最高に熱い！',
  },

  // ---- WORLD 5 NEW ENEMIES (EN-70..77 -> 93 TOTAL UNITS) ----
  {
    kind: 'crimson_lancer',
    name: 'クリムゾン・ランサー',
    code: 'EN-70',
    category: '通常敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.crimson_lancer_contact,
    attackDmg: DAMAGE_TABLE.crimson_lancer_lunge,
    attackLabel: '赤熱槍チャージ予兆→超高速水平突貫(26)',
    speedInfo: '72 px/s 巡回 → 340 px/s 突進',
    behavior: '紅蓮の長槍を構えて巡回し、視界内に入ると0.45秒の発光チャージ予兆後に炎の残像を残して一直線に突進するW5精鋭槍兵。',
    weakness: '突進予兆の赤閃光が見えたら2段ジャンプで背中側を飛び越え、硬直中に踏みつけ(2ダメ)または背面連射。',
    stages: '5-1 / 5-砦1 / 5-2 / 5-4 / 5-5 / 5-砦2 / 5-8 / 5-城',
    accentColor: '#ef4444',
    devNote: 'W5開幕から「赤くて速い敵」を体感させる看板槍兵。突進中の接触は26と重いが予兆が分かりやすいので踏んで飛び越えるのが爽快。',
  },
  {
    kind: 'magma_imp',
    name: 'マグマ・インプ',
    code: 'EN-71',
    category: '通常敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.magma_imp_contact,
    attackDmg: DAMAGE_TABLE.magma_imp_glob,
    attackLabel: '宙返りバウンド溶岩弾（着地2バウンド）',
    speedInfo: '68 px/s（中空羽ばたき旋回）',
    behavior: '宙を羽ばたきながらプレイヤー頭上付近へ接近し、床を2回バウンドしながら跳ね回る灼熱の溶岩球を連続投下する。',
    weakness: 'バウンド頂点を潜り抜けるか、スリングショット(scarletSling)の上昇軌道で真下から撃ち落とす。',
    stages: '5-1 / 5-砦1 / 5-2 / 5-3 / 5-4 / 5-6 / 5-砦2',
    accentColor: '#fb923c',
  },
  {
    kind: 'ruby_turret',
    name: 'ルビー・タレット',
    code: 'EN-72',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.ruby_turret_contact,
    attackDmg: DAMAGE_TABLE.ruby_turret_shot,
    attackLabel: '6方向回転ルビー弾幕（交互位相射出）',
    speedInfo: '固定六角ルビー砲台',
    behavior: '0.45秒のチャージ発光後に、偶数射と奇数射で角度を30度ずつズラしながら6方向へ紅玉弾幕を絶え間なく展開する空間制圧砲台。',
    weakness: '射線が交互にズレるため同じ位置で待ち構えず、隙間に滑り込んで魔導弾3発で速攻破壊する。',
    stages: '5-砦1 / 5-2 / 5-3 / 5-5 / 5-6 / 5-砦2 / 5-7 / 5-8',
    accentColor: '#f43f5e',
    devNote: '交互位相で6方向弾幕を撃つことで「弾幕の網を潜る楽しさ」を道中から自然に学べるように設計した。',
  },
  {
    kind: 'scarlet_reaper',
    name: 'スカーレット・リーパー',
    code: 'EN-73',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.scarlet_reaper_contact,
    attackDmg: DAMAGE_TABLE.scarlet_reaper_wave,
    attackLabel: '波状軌道大鎌クレセント斬波(25)',
    speedInfo: '58 px/s 巡回＋波打ち斬撃',
    behavior: '巨鎌を振るってサイン波状に上下へ大きくうねりながら飛ぶ大型の深紅三日月斬撃波を2連射する中距離強敵。',
    weakness: '上下にうねる波の谷に合わせて潜るか大ジャンプで回避。本体への踏みつけ(2ダメ)後にもう1発で沈む。',
    stages: '5-1 / 5-砦1 / 5-3 / 5-4 / 5-6 / 5-砦2 / 5-8 / 5-城',
    accentColor: '#fda4af',
  },
  {
    kind: 'ember_bomber',
    name: 'エンバー・ボマー',
    code: 'EN-74',
    category: '特殊敵',
    hp: '2 HP',
    contactDmg: DAMAGE_TABLE.ember_bomber_contact,
    attackDmg: DAMAGE_TABLE.ember_bomber_blast,
    attackLabel: '4裂散弾クラスター爆弾投擲(26)',
    speedInfo: '82 px/s（高空爆撃ホバー）',
    behavior: '高高度をゆっくり往復し、下を通過した自機へ向けて0.7秒後に4方向へ飛び散る真紅クラスター爆弾を投下する爆撃ユニット。',
    weakness: '破裂前の落下中に横へダッシュして離脱するか、高所足場から直接踏みつけて撃墜。',
    stages: '5-2 / 5-4 / 5-5 / 5-6 / 5-砦2 / 5-8',
    accentColor: '#f97316',
  },
  {
    kind: 'blood_mirror',
    name: 'ブラッド・ミラー',
    code: 'EN-75',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.blood_mirror,
    attackDmg: DAMAGE_TABLE.ruby_turret_shot,
    attackLabel: '正面鏡面2-Wayカウンター分裂反射',
    speedInfo: '48 px/s（プレイヤー向き自動追跡）',
    behavior: '正面に真紅の鏡面結晶を構えており、正面からのプレイヤー魔導弾を吸収して2方向扇状の紅蓮カウンター弾として即座に撃ち返す対射撃重騎。',
    weakness: '正面撃ちは厳禁！2段ジャンプで頭上から踏みつける(2ダメ)か、スカーレットスリングで背後へ回り込んで撃破する。',
    stages: '5-砦1 / 5-3 / 5-5 / 5-砦2 / 5-7 / 5-8 / 5-城',
    accentColor: '#fb7185',
    devNote: 'W4のミラーフロストの進化系。正面から撃つと1発ではなく上下2-Wayになって返ってくるので緊張感が段違い。',
  },
  {
    kind: 'inferno_wyvern',
    name: 'インフェルノ・ワイバーン',
    code: 'EN-76',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.inferno_wyvern_contact,
    attackDmg: DAMAGE_TABLE.inferno_wyvern_feather,
    attackLabel: '弧状滑空急襲＋3連炎羽シャワー',
    speedInfo: '260 px/s 滑空スイープ',
    behavior: '空中を大きく滑空スイープしながら、真下へ向かって3本の火炎羽根弾を連続投下する深紅の飛竜。',
    weakness: '滑空の底に来た瞬間が攻撃・踏みつけの好機。',
    stages: '5-3 / 5-5 / 5-6 / 5-7 / 5-8 / 5-城',
    accentColor: '#fb923c',
  },
  {
    kind: 'valkyrie_bit',
    name: 'ヴァルキリー・ビット',
    code: 'EN-77',
    category: '特殊敵',
    hp: '3 HP',
    contactDmg: DAMAGE_TABLE.valkyrie_bit_contact,
    attackDmg: DAMAGE_TABLE.valkyrie_bit_danmaku,
    attackLabel: '【5-7/5-砦3中核】5-Way花弁弾幕 ＆ リング弾幕(19)',
    speedInfo: '66 px/s（編隊浮遊シンクロ）',
    behavior: '5-7および5-砦3を象徴する真紅の自律弾幕ドローン。ホバリングしながら自機方向への5-Way紅蓮扇弾幕と8方向リング弾幕を交互に展開する。',
    weakness: '弾速自体は中速で軌道が素直。スリングショットや魔導弾で一体ずつ確実に減らし、弾幕密度を下げるのが攻略の鍵。',
    stages: '5-4 / 5-7（大量編隊） / 5-砦3 / 5-8 / 5-城',
    accentColor: '#fecdd3',
    devNote: '5-7「紅蓮弾幕の前奏曲」と5-砦3のコンセプトを体現する雑魚。何体か同時に画面にいるだけでシューティングゲームみたいな美しい赤弾幕になる！',
  },

  // ---- WORLD 5 ROAMING ENCOUNTER & FORTRESS / FINAL BOSSES (ZERO WARP) ----
  {
    kind: 'scarlet_sentinel',
    name: 'スカーレット・センチネル',
    code: 'ENC-05',
    category: '中ボス',
    hp: '11〜12 HP（W5エリア戦専用）',
    contactDmg: DAMAGE_TABLE.scarlet_sentinel_contact,
    attackDmg: DAMAGE_TABLE.scarlet_sentinel_wave,
    attackLabel: '6-Way紅蓮ファン / 溶岩地走り衝撃波 / 全幅高速ダッシュ',
    speedInfo: 'W5徘徊エリア戦専用・非流用設計',
    behavior: 'ワールド5のマップ徘徊遭遇戦専用ミニボス。砦ボスとは一切流用せず、6-Way紅蓮扇弾と地走りマグマ波、反対壁までの連続ダッシュを繰り出す。',
    weakness: '衝撃波とダッシュ終端を飛び越え、硬直に集中砲火。撃破後に回復金オーブ(+16HP)が解放される。',
    stages: 'W5 徘徊エリア戦（ENC_W5_1〜3）',
    accentColor: '#f43f5e',
  },
  {
    kind: 'ruby_executor',
    name: '紅玉執行官ルビー・エグゼキューター',
    code: 'BOSS-12',
    category: '中ボス',
    hp: '14 HP（5-砦1中ボス）',
    contactDmg: DAMAGE_TABLE.ruby_executor_contact,
    attackDmg: DAMAGE_TABLE.ruby_executor_slash,
    attackLabel: '往復双斧チャージ / 4方向紅玉跳弾 / 地中溶岩柱噴出',
    speedInfo: 'HP14→1（2段階進化・ワープ無）',
    behavior: '5-砦1最奥を守る真紅の処刑騎士。ワープせず壁から壁への全幅突進完走に加え、床下から5連続の溶岩柱予兆噴出と壁跳弾斧を連携させる。',
    weakness: '床の赤い噴火予兆ラインを見極めて空きスペースへ逃げ、突進終わりの着地を踏みつけ(2ダメ)＋射撃。',
    stages: '5-砦1（第一紅蓮要塞・血鉄の門）/ ラボ実装済',
    accentColor: '#fb7185',
  },
  {
    kind: 'furnace_titan',
    name: '灼熱炉心巨兵ファーネス・タイタン',
    code: 'BOSS-13',
    category: '中ボス',
    hp: '17 HP（5-砦2中ボス）',
    contactDmg: DAMAGE_TABLE.furnace_titan_contact,
    attackDmg: DAMAGE_TABLE.furnace_titan_ember,
    attackLabel: '炉心大跳躍マグマスラム / 天空隕石雨 / 8方向紅蓮リング',
    speedInfo: 'HP17→1（重量級2形態・ワープ無）',
    behavior: '5-砦2熔鉱炉の主。巨体で跳躍してアリーナ両端まで届く大衝撃波を放ち、空から5連の灼熱隕石と炉心開放8方向火球リングを連続展開する。',
    weakness: '大跳躍の直下に潜り込んで背後を突き、着地後の長めの隙に踏みつけ＆連射を叩き込む。',
    stages: '5-砦2（第二紅蓮要塞・灼熱熔鉱炉）/ ラボ実装済',
    accentColor: '#f97316',
  },
  {
    kind: 'scarlet_seraph',
    name: '【超強敵・高密度弾幕】紅蓮熾天使スカーレット・セラフ',
    code: 'BOSS-14',
    category: '中ボス',
    hp: '24 HP（5-砦3 超高難度弾幕ボス・3形態）',
    contactDmg: DAMAGE_TABLE.scarlet_seraph_contact,
    attackDmg: DAMAGE_TABLE.scarlet_seraph_danmaku,
    attackLabel: '14-Way螺旋薔薇弾幕 / 10連静止照準ヘイロー弾幕 / 交差レーザー格子＆滑空羽根嵐',
    speedInfo: 'HP24→17(第1) / 16→9(第2) / 8→1(第3)（ワープ完全ゼロ）',
    behavior: 'ユーザー要望に応え意図的に極限強化された「5-砦3」専属の弾幕熾天使。第1形態は12〜14-Way二重螺旋弾幕＋高速滑空羽根嵐、第2形態は自機周囲へ10発の静止予兆ライン付き紅蓮ヘイローを展開して一斉収束＋格子レーザー予兆、第3形態は高速16-Way薔薇弾幕渦と連続壁完走スイープを同時に叩き込む壮絶な弾幕決戦！',
    weakness: '理不尽な即死ワープは一切無し。すべての弾幕・レーザー・予兆リングに綺麗な軌道隙間（抜け道）と予備動作があるため、中央のスカーレットスリング＆バウンス台を活用し「見て避ける」弾幕STG的回避に徹しよう。',
    stages: '5-砦3（第三紅蓮要塞・弾幕熾天使の聖堂）/ ラボ実装済',
    accentColor: '#fecdd3',
    devNote: '5-砦3を「ラスボス並み、あるいはそれ以上に印象深い超強敵高密度弾幕ボス」にせよとの要望を受け、過去最高に派手なSTG弾幕ボスとして全力設計！14〜16Way螺旋薔薇・静止予約ラインヘイロー・交差警告レーザー・羽根雨の演出はまさに視覚的クライマックス！',
  },
  {
    kind: 'crimson_sovereign',
    name: '紅蓮覇皇・クリムゾンソヴリン',
    code: 'BOSS-15',
    category: '大ボス',
    hp: '26 HP（3形態・W5最終大ボス）',
    contactDmg: DAMAGE_TABLE.crimson_sovereign_contact,
    attackDmg: DAMAGE_TABLE.crimson_sovereign_beam,
    attackLabel: '太陽フレア跳弾 / 4連深紅柱レーザー＆全幅突進 / 覇皇真紅ノヴァ渦',
    speedInfo: 'HP26→18(第1) / 17→9(第2) / 8→1(第3)（ワープ完全禁止）',
    behavior: 'W5インフェルノ玉座に君臨する赤き覇皇。第1形態(双極太陽フレア＋深紅スラッシュ)、第2形態(アリーナ全域5柱レーザー＋2連往復突進完走)、第3形態(公転フレアビット4基からの一斉クロス弾＋12-Way紅蓮ノヴァ渦＋X字滑空)をワープ皆無の正々堂々たる死闘で繰り広げる。',
    weakness: '左右端のスカーレットスリングと足場群を活かしてレーザーとX字滑空を捌き、形態変化の隙を突いて魔導弾を叩き込もう。',
    stages: '5-城（深紅魔皇城・覇皇インフェルノ玉座）/ ラボ実装済',
    accentColor: '#ef4444',
  },
];

export interface StageDocEntry {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  lengthPx: number;
  checkpoints: number;
  gimmicks: string;
  act1: string;
  act2: string;
  act3: string;
  act4?: string;
  specialNote: string;
  enemies: string;
  devNote?: string;
}

export const STAGE_ENCYCLOPEDIA: StageDocEntry[] = [
  // ---- WORLD 1: 夜の都市 × 魔法 × 近未来（全9ステージ） ----
  {
    id: '1-1',
    code: '1-1',
    name: 'ネオン大通りの序章',
    subtitle: 'Neon Expressway, Multi-Tier Catwalks & Turbo Slopes',
    lengthPx: 13400,
    checkpoints: 3,
    gimmicks: '【固有】ネオン・ターボパッド(5基) / 坂道スライディング(3基) / 移動足場(5基) / 封印壁(4枚) / ホロスイッチ橋(2基)',
    act1: '【全体印象・区間1: 深夜大通り (0〜4,380px)】夜の摩天楼を背景に、スライディングとジャンプの爽快感を直感で掴む開幕コース。x=280「NIGHT AVENUE」看板から導入の段差と巡回ドローン・ホッピングボットを越え、x=1,410「SLIDE RUSH」手前の急坂＋ネオン・ターボパッド加速で軽量敵を一掃しながら移動足場と上段ルートへ駆け抜ける。',
    act2: '【区間2: 高架ジャンクション上下分岐 (4,380〜9,560px)】「JUNCTION 02」で上層ホロキャットウォーク（スナイパー・タレット警戒＋金色オーブ回収）と下層封印ブロック突破ルート（魔導弾で破壊＋シールド兵戦）に分岐。2基のホロスイッチ橋を起動して高架を渡り、後半の再合流地点で移動足場連帯と坂道ジャンプを繋ぐ。',
    act3: '【区間3: ツインタワー連絡路 (9,560〜13,400px)】「TWIN TOWERS」看板から階段状の高架テラスを登り、魔導キャスターとシールド兵の挟撃を越えて最終ターボパッドへ進入。坂道連繋と連続移動足場を一気に飛び継ぎ、「SECTOR GATE」の終着ゲートへ到達する。',
    specialNote: '固有ギミック「ネオン・ターボパッド(×5)」と上層・下層2ルート探索により初心者から高速走破勢まで楽しめるW1基準コース。敵17体・金藍オーブ計38個配置。クリアで [1-2] と [1-3] が同時開放。',
    enemies: '巡回ドローン / ホッピング・ボット / スライム・グリッチ / シールド兵 / スナイパー・タレット / 魔導キャスター（計17体）',
    devNote: 'チュートリアルを兼ねつつ平坦地面を極力廃して、上段を走ればスピード爽快・下段を砕けば実直攻略になるマリオWii風の立体構造に仕上げた。ターボパッドに乗った瞬間の疾走感がシリーズ導入として最高。',
  },
  {
    id: '1-2',
    code: '1-2',
    name: '地下魔導メトロ',
    subtitle: 'Blackout Subway, High-Voltage Cables & Dual Maintenance Lines',
    lengthPx: 12400,
    checkpoints: 3,
    gimmicks: '【固有】停電地下暗闇＆照明ブレーカースイッチ(3基) / 垂下高圧電線(12本, -24HP) / 封印壁爆破(3箇所) / 移動足場(1基)',
    act1: '【全体印象・区間1: 停電ホーム (0〜4,180px)】薄暗い廃駅を照らす自機ランタンと照明スイッチの探索緊張感が際立つ地下メトロ回。「BLACKOUT LINE」先からスライム・グリッチとゴースト・ウィスプが現れ、天井から揺れる垂下高圧電線(-24HP)をスライディングと小ジャンプで掻い潜り、最初の電源スイッチを撃って視界と足場を点灯させる。',
    act2: '【区間2: 複線保線ピット (4,180〜8,260px)】「MAINTENANCE PIT」から上下複線迷路へ突入。上段ホームにはスナイパー・タレットと巡回ドローンが布陣して安全だが視界管理が必要、下段線路ではボム・ウォーカーの爆発を誘って封印ブロックを連鎖破壊しショートカット＆オーブ回収が狙える立体探索設計。',
    act3: '【区間3: 変電所コア (8,260〜12,400px)】「SUBSTATION CORE」奥は長短12本の高圧電線群がリズミカルに垂下する変電エリア。追尾してくるゴースト・ウィスプを魔導弾で落としつつ、第3スイッチを起動して小さなブレーカー足場と移動リフトを渡り切り出口へ抜ける。',
    specialNote: '暗闇視界と電源スイッチの明暗コントラストが1-2ならではの個性を形成（敵14体・オーブ20個）。ボム・ウォーカー誘爆で封印壁を吹き飛ばす小ネタを搭載。クリアで1-砦へ合流。',
    enemies: 'スライム・グリッチ / ゴースト・ウィスプ / ボム・ウォーカー / スナイパー・タレット / 巡回ドローン（計14体）',
    devNote: '1-1の明るいネオン大通りから一気に地下の閉鎖空間へ落として印象を変えた。照明スイッチを撃った瞬間にパッと駅が明るくなる気持ちよさと、垂下電線を潜る精密操作を両立。',
  },
  {
    id: '1-3',
    code: '1-3',
    name: 'ホログラム高層ビル群',
    subtitle: 'Vanishing Holo-Floors, Twin Skyscrapers & Secret Warp to 2-2',
    lengthPx: 11800,
    checkpoints: 3,
    gimmicks: '【固有】0.88秒消滅ホロ足場 / 垂直水平エレベーター(6基) / ターボパッド(1基) / 上空隠しゴール(WARP→2-2)',
    act1: '【全体印象・区間1: ガラス外壁＆消滅階梯 (0〜5,580px)】踏むと0.88秒で点滅消失するホロ足場と超高層ビル群の縦横エレベーターが主役の空中摩天楼ステージ。「GLASS FACADE」を抜け、階段状ホロ床を止まらず駆け上がり、壁面スナイパー・タレットとゴースト・ウィスプを捌きながら双子エレベーターで隣棟へ渡る。',
    act2: '【区間2: スカイシャフト内部登攀 (5,580〜9,640px)】「SKY SHAFT 02」では横移動ドックと消滅足場が交互に噛み合う空中ギャップを渡り、超高層タワー内部のジグザグ垂直シャフトを折り返しながら上層へ登る。巡回ドローンと魔導キャスターが上下から弾幕で揺さぶってくる高所攻略。',
    act3: '【区間3: 尖塔アンテナ＆秘密ゴール (9,640〜11,800px)】「PENTHOUSE SPIRE」から段階降下しつつ4連消滅パッド＋ターボ加速で通常ゴールへ到達可能。さらに終盤上空(y=4)の高所足場ルートを2段ジャンプで登り切るとx=11,560, y=4の金色隠しゴールを発見でき、World 2の「2-2」へ直接ワールドスキップできる！',
    specialNote: '消滅ホロ足場×高層ビル探索の代名詞コース（敵13体・オーブ21個）。隠しゴール(11560, 4)到達で「1-3 → 2-2」のクロスワールド黄金ワープが開通。通常クリアで1-砦へ進行。',
    enemies: 'ゴースト・ウィスプ / スナイパー・タレット / 魔導キャスター / 巡回ドローン（計13体）',
    devNote: 'ビルの屋上からさらに上の隠されたアンテナ屋根へ登ると別ワールド(2-2)へ飛べる、スーパーマリオ感満載の隠しルートを1-3に仕込んだ。ホロ床の消滅テンポが癖になる。',
  },
  {
    id: '1-FORT',
    code: '砦',
    name: '魔導警備ゲート',
    subtitle: 'Fortress Spikes, Rotating Lasers & Shield Guardian (6HP)',
    lengthPx: 10600,
    checkpoints: 4,
    gimmicks: '【固有】トゲ壕トラップ(6基, -26HP) / 回転レーザーバー(7基, -27HP) / 移動リフト(4基) / 封印壁(2枚) / 中ボス隔離結界',
    act1: '【全体印象・区間1: 外郭検問所 (0〜3,400px)】赤色警報ランプが明滅する要塞回廊。1-2や1-3の開放的な空から一転し、トゲ壕上の狭橋と回転レーザーバーをリズム良く抜ける最初の関門。シールド兵の正面盾をジャンプ飛び越し・背後撃ちや踏みつけで崩しつつ要塞内部へ侵入する。',
    act2: '【区間2: 重機格納庫 (3,400〜6,800px)】重装甲ブルドーザー機が待ち受け、上段封印ブロックルートを砕いて頭上から安全に抜けるか、下段で突進を引きつけて踏み越えるかの選択が熱い区画。逆回転ツインレーザーと天井スナイパー・タレットが交差する立体装甲ハンガー。',
    act3: '【区間3〜アリーナ: セキュリティ回廊＆中ボス戦 (6,800〜10,600px)】一面のトゲ床を4基の移動リフトで渡りながら3連高速回転レーザーとボム・ウォーカーを突破。最奥(8,750〜9,540px)で魔導結界が閉鎖され、正面大盾持ち中ボス「重装シールド・ガーディアン(6HP)」と一騎討ち！踏みつけスタンと背面魔導弾で撃破するとゴールが開く。',
    specialNote: 'W1最初のボス砦。4チェックポイント制で再挑戦しやすく、全10体の精鋭護衛とトゲ×回転レーザーの組み合わせで要塞らしさを凝縮。撃破で1-4へ解放。',
    enemies: 'シールド兵 / スナイパー・タレット / 突進ブルドーザー機 / ボム・ウォーカー / 重装シールド・ガーディアン（道中10体＋中ボス）',
    devNote: '「砦に入った！」と一瞬で空気が引き締まるように赤い警告演出とトゲ＋回転レーザーを密集配置した。シールド・ガーディアンは正面からの連射ゴリ押しを防ぎ、アクションで崩す手応えを重視。',
  },
  {
    id: '1-4',
    code: '1-4',
    name: '雨のネオン商店街',
    subtitle: 'Low-Friction Rain Asphalt & Concealed Secret Stage 1-S',
    lengthPx: 12600,
    checkpoints: 3,
    gimmicks: '【固有】常時降雨＆低摩擦スリップ路面 / 超長距離坂道スライディング(3基) / 封印壁(2枚) / 無印隠しゴール(→1-S)',
    act1: '【全体印象・区間1: アーケード入口 (0〜4,200px)】雨粒エフェクトと濡れた舗装路が印象的なネオン商店街。低摩擦アスファルトにより下り坂スライディングの滑走距離が大幅に伸び、低い商店街アーケード庇の下を一気に滑り抜けてホッピング・ボットや巡回ドローンを蹴散らせる。',
    act2: '【区間2: ネオン横丁＆無印隠し屋根裏 (4,200〜8,500px)】商店街の看板やネオン屋根上でシールド兵・突進ブルドーザー機と交戦。中盤の高所屋根上(x=7,825, y=12)には看板やオーブ誘導を排した「背景同化型の無印高所足場＆封印ブロック」が潜んでおり、突破すると秘密ステージ[1-S]への金色隠しゴールが出現！',
    act3: '【区間3: 雨水排水路通り (8,500〜12,600px)】本道を進む場合、雨水路の上に架かる小刻みな飛び石足場と急坂加速ジャンプを乗り継ぎ、魔導キャスターの紫弾とブルドーザーの複合防衛線を突破して大通り終端へ抜ける。',
    specialNote: '雨の滑走感と「露骨なヒント無しで自力発見する隠しゴール(x=7825, y=12)」の二大看板を備えた人気回（敵13体・オーブ36個）。隠しゴールで[1-S]解放、通常クリアで[1-5]解放。',
    enemies: 'ホッピング・ボット / シールド兵 / 突進ブルドーザー機 / 巡回ドローン / 魔導キャスター（計13体）',
    devNote: '「秘密ゴールは看板で教えるな」というこだわりで1-4の隠し屋根にはオーブ誘導を置かず、勘の良いプレイヤーが「あの屋根の上に乗れそう」と登って見つける喜びに振り切った。',
  },
  {
    id: '1-S',
    code: '1-S',
    name: '地下秘密魔導庫',
    subtitle: 'Golden Treasury Shortcut, Bomb Chains & Dual World Exit',
    lengthPx: 6800,
    checkpoints: 3,
    gimmicks: '【固有】金色回復ボーナスオーブ大量配置(33個) / ボム誘爆6連封印壁(6枚) / 坂道(2基) / 移動床(2基) / 1-6＆W2-1直結',
    act1: '【全体印象・区間1: 採掘坑道 (0〜2,300px)】1-4の秘密ゴールから進入する黄金の秘密宝物庫（全長6,800pxと凝縮密度）。冒頭の長い秘密坂道で大量の300pt金色オーブをスライディング回収し、ボム・ウォーカー1体の誘爆で6連封印ブロックを一気に吹き飛ばす爽快パズルギミックが炸裂する。',
    act2: '【区間2: 浮遊宝物庫ブリッジ (2,300〜4,600px)】スライム・グリッチとゴースト・ウィスプが守る結晶倉庫を、2基の移動クリスタル足場と低い天井トンネル潜りの緩急あるリズムで渡り切る。上層棚にはさらなるボーナスオーブが並ぶ。',
    act3: '【区間3: 大聖堂金庫 (4,600〜6,800px)】急勾配スライディングから3層棚の宝箱ギャラリーを一気に駆け上がり、ゴールゲートへ到達。HP全快＆大量スコアを携えたまま本道の難所1-5をバイパスできる。',
    specialNote: '敵はわずか5体ながら6連ボム破壊と33個のオーブ群でカタルシス特化。クリアするとワールドマップ上で[1-6]への近道だけでなく、クロスワールドの隠しワープ「1-S → 2-1」も同時解禁される最強の秘宝ステージ！',
    enemies: 'ボム・ウォーカー / スライム・グリッチ / ゴースト・ウィスプ（計5体）',
    devNote: '隠しステージを見つけたご褒美として、難しくするより「宝物庫を荒らしてボムで壁をドカンと壊して大金持ちになれる気持ちよさ」全振りにしたボーナス回。W2-1直行ワープ権も付けた。',
  },
  {
    id: '1-5',
    code: '1-5',
    name: '浮遊する魔導図書館',
    subtitle: 'Updraft Shafts, Low-Gravity Dome & Dual-Trigger Magic Mirrors',
    lengthPx: 11600,
    checkpoints: 3,
    gimmicks: '【固有】上昇気流・低重力ドーム(5ゾーン) / 魔法の鏡ペアワープ(8枚＝4ペア・接触＆魔導弾射撃で空間跳躍)',
    act1: '【全体印象・区間1: 大書庫エントランス (0〜3,800px)】浮かぶ書架と星図ドームが幻想的な空間パズル面。上昇気流ゾーンで一気に上段本棚へ舞い上がり、厚い石壁の手前に置かれたシアン鏡へ飛び込む（または魔導弾を撃ち込む）ことで壁向こうの別区画へワープする。',
    act2: '【区間2: 無重力星図室 (3,800〜7,800px)】広大な低重力ドーム内ではジャンプの滞空時間が大幅に延び、魔導キャスターの誘導紫弾やゴースト・ウィスプを空中制動で回避しながら紫鏡・緑鏡ペアを乗り継いで上下左右のマルチ階層書棚を探索する。',
    act3: '【区間3: 禁書タワー最上階 (7,800〜11,600px)】2連上昇気流シャフトの間をスライム・グリッチの分裂に注意しつつ縫うように抜け、最奥の琥珀色の鏡で大奈落を一気にワープ跳躍して図書館出口へ着地する。',
    specialNote: '鏡ギミックは「プレイヤー自身が触れる」だけでなく「魔導弾を撃ち込んで着弾点へ空間跳躍する」二通りが可能で攻略自由度抜群。敵9体と控えめな分、重力×ワープ体験に集中できる構成。',
    enemies: '魔導キャスター / ゴースト・ウィスプ / スライム・グリッチ（計9体）',
    devNote: 'アクションゲームに「撃った魔導弾の位置へ鏡越しにワープできる」変則トリックを入れたくて作った異色回。低重力のふわふわ感と魔法の鏡の連係が唯一無二。',
  },
  {
    id: '1-6',
    code: '1-6',
    name: '高速モノレール屋根上疾走',
    subtitle: '136px/s Auto-Scroll Express Roof & Pantograph Undercut',
    lengthPx: 11600,
    checkpoints: 3,
    gimmicks: '【固有】136px/s強制横スクロール / 連結列車高低差屋根 / パンタグラフ架線スライディング潜り / ギャップ120px以下',
    act1: '【全体印象・区間1: 貨物車両区画 (0〜3,800px)】深夜の高架線を爆走する超特急モノレールの屋根上を136px/s強制スクロールで駆け抜ける爽快スピードステージ。長尺貨物車上の低いパンタグラフ架線をスライディングで滑らかに潜り、巡回ドローンを踏み潰してテンポを掴む。',
    act2: '【区間2: 二階建て客車連結帯 (3,800〜7,900px)】二階建て客車屋根と低床連結デッキが高低差をつけて連続。シールド兵やホッピング・ボットの動きに合わせて上段屋根へ跳び移ったり下段デッキでやり過ごしたりと、強制スクロール下でもルート取りが選べる設計。',
    act3: '【区間3: 先頭動力車スプリント (7,900〜11,600px)】終盤の食堂車〜流線形先頭車両では突進ブルドーザー機が前方から迫り、2段ジャンプで車両間ギャップを飛び越えながら一気呵成に終着駅飛行場プラットフォームへ着地する。',
    specialNote: '強制スクロール速度136px/sに対し足場ギャップを最大120px以下に抑えた快適ストレスフリー調整（敵11体・オーブ21個）。クリアでいよいよ1-BOSS電脳魔導飛行船が出現。',
    enemies: '巡回ドローン / ホッピング・ボット / シールド兵 / 突進ブルドーザー機（計11体）',
    devNote: '1-5の静的な頭脳パズルから一転、1-6は止まらない電車の屋根の上を駆け抜ける動的な疾走感！架線をスラっとスライディングで潜り抜ける動作が電車アクションっぽくて最高。',
  },
  {
    id: '1-BOSS',
    code: 'BOSS',
    name: '電脳魔導飛行船',
    subtitle: 'Heavy Airship Cannons, Twin-Deck Assault & Archmage (11HP)',
    lengthPx: 10300,
    checkpoints: 4,
    gimmicks: '【固有】大型飛行船砲台(6門, -32HP) / 複層甲板リフト(2基) / 結界隔離3形態ボス「魔導機神アークメイジ(11HP)」',
    act1: '【全体印象・区間1: 船首外舷甲板 (0〜3,200px)】嵐の稲妻が閃く巨大飛行船に飛び乗り、前方へ飛来する大型砲台(-32HP)の弾道を見切って乗船。ボム・ウォーカーとシールド兵が船首甲板を守る開幕戦闘区画。',
    act2: '【区間2: 機関室・上下多重甲板 (3,200〜6,800px)】上下2段に分かれた機関室デッキ（上段は砲弾回避の空中移動リフト、下段はスナイパー・巡回ドローンとの近接突破）を選択して渡り、魔導キャスターとブルドーザーの最終前哨線を撃破する。',
    act3: '【区間3〜艦橋決戦 (6,800〜10,300px)】艦橋手前チェックポイントを超えアリーナ(8,490〜9,290px)へ入ると魔導結界が閉鎖！11HP・3形態進化（3-Way魔導扇＋追尾オーブ→急降下アリーナ端到達衝撃波→両端非ワープ分身クロス弾幕）を持つ「魔導機神アークメイジ」と決戦し、撃破するとワールド2へ進む！',
    specialNote: 'W1ボスは強化調整によりHP11＆弾幕・衝撃波がすべてアリーナ奥まで届く本格仕様へ昇華。道中9体＋砲台6門。1-BOSS撃破でワールド2「黄金の歯車と雷鳴の境界エリア」開放。',
    enemies: '飛行船大砲 / シールド兵 / ボム・ウォーカー / スナイパー・タレット / 魔導キャスター / 突進ブルドーザー機 / 魔導機神アークメイジ',
    devNote: 'W1ラスボスらしく画面端籠城を許さない全域到達弾幕＆衝撃波へ強化しつつ、理不尽ワープは無しの気持ちいい決戦バランスに追い込んだ。',
  },

  // ---- WORLD 2: 黄金の歯車と雷鳴の境界エリア（全9ステージ） ----
  {
    id: '2-1',
    code: '2-1',
    name: '黄金の時計塔エントランス',
    subtitle: 'Chrono Chime Speed Rings & Synchronized Brass Gears',
    lengthPx: 14200,
    checkpoints: 3,
    gimmicks: '【固有】クロノチャイム加速リング(4基) / 多段回転歯車(10基) / 高圧レール(2本) / 坂道(1基)',
    act1: '【全体印象・区間1〜3 (0〜4,800px)】W2開幕を飾る黄金夕暮れの時計塔アプローチ。回転巨大歯車の外縁に乗って加速する感触を学び、中盤上空に輝く「クロノチャイム・リング」を潜って斜め加速ブースト＋空中ジャンプ権を即時回復する爽快ギミックを導入。',
    act2: '【区間4〜6 (4,800〜9,600px)】かつてジャンプで届かなかった隙間も補完足場・高圧レールと中層/上層マルチ足場で見事に接続され、反発バウンサーやミラー・ブースト歯車と突撃電光ラマーが待ち受ける中盤アスレチックをリズム良く渡れる。',
    act3: '【区間7〜8 (9,600〜14,200px)】第3・第4のチャイムリングを連続で潜り抜け、高速ギア・ローラーとスパーク・クラゲ＆テザー電撃振子の織り成す時計階段を一気に駆け上がってゴール時計門へ飛び込む！',
    specialNote: '固有ギミック「クロノチャイム加速リング(×4)」と回転歯車(×10)が象徴的なW2玄関（敵17体・オーブ22個）。到達不能箇所ゼロの精密調整済み。クリアで2-2へ。',
    enemies: 'ギア・ローラー / 反発バウンサー / ミラー・ブースト歯車 / 突撃電光ラマー / レーザー・ドローン / スパーク・クラゲ / テザー電撃振子 / サンダー・インプ / 反重力パルス装置（計17体）',
    devNote: 'ユーザー指摘で「2-1の届かないギャップ」を即座に修正・検証した思い出深いステージ。チャイムリングを潜って2段ジャンプが復活するリズムさえ掴めば最高に気持ちよく飛べる。',
  },
  {
    id: '2-2',
    code: '2-2',
    name: '黄金の時計塔＆サンダーレールエリア',
    subtitle: 'Chrono Slow Switches, Long 215px Beams & 5-Rail Network',
    lengthPx: 13800,
    checkpoints: 3,
    gimmicks: '【固有】クロノスロー(0.35x)スイッチ(3基) / 5連サンダーレール / 回転歯車(7基) / 貫通ビーム(3基) / 延長215px回転レーザー(2基)',
    act1: '【全体印象・区間1〜2 (0〜4,600px)】時間減速スイッチと長距離送電レール、そして大幅に延長された215px回転＆貫通レーザーが立ちはだかる時計塔中枢。最初のクロノスイッチを魔導弾で撃ち、周囲の歯車・レーザー・敵を4.5秒間0.35倍速スローにして磁力クレーンとギアを安全に渡る。',
    act2: '【区間3〜5 (4,600〜9,400px)】空中5連サンダーレールを乗り継ぐ高速スカイグラインド区画。レール途中には短すぎた問題を解消した215px回転レーザーと3基の貫通ビームレーザー、上下に分かれたショートカットレールと安全足場ルートが絡み合い、タイミングを見てレールから離脱ジャンプで2段ジャンプを繋ぐ。',
    act3: '【区間6〜7 (9,400〜13,800px)】反重力パルス装置とテザー電撃振子が交錯する高層タワーを、最後の第3クロノスイッチで時間を凍らせた隙にギア・ローラーと反発バウンサーを踏み台にして頂上ゲートへ到達する。',
    specialNote: '「レーザーが短すぎる」指摘を受け回転レーザー長を歯車外周+215px級へ大幅拡張＋ビームレーザー3基追加でスリル倍増（敵14体・オーブ31個）。クリアで2-砦へ。',
    enemies: 'ギア・ローラー / 磁力クレーン / ミラー・ブースト歯車 / レーザー・ドローン / テザー電撃振子 / サンダー・インプ / 反重力パルス装置 / 突撃電光ラマー / 反発バウンサー / スパーク・クラゲ（計14体）',
    devNote: 'クロノスイッチを撃って時間だけがゆっくりになる演出と、延長した長尺レーザーをギリギリで潜る緊張感の組み合わせがこのステージの顔。',
  },
  {
    id: '2-FORT',
    code: '2-砦',
    name: '歯車とレーザーの機械要塞',
    subtitle: 'Abyssal Gear Crossing, Shimmering Lasers & Moving Clockwork Core (10HP)',
    lengthPx: 13200,
    checkpoints: 4,
    gimmicks: '【固有】純奈落上13連回転歯車渡り / 長消灯(2.7s)＋0.58s予兆貫通ビーム(8基) / 移動掃射中ボス「クロックワーク・コア(10HP)」',
    act1: '【全体印象・区間1〜3 (0〜4,500px)】下に地面のない純粋な奈落の上を13基の巨大回転歯車だけで渡り切る機械要塞。全ビームレーザーを「歯車貫通・歯車から離れた安全クリアランス・約2.7秒消灯＋0.58秒前点滅予告」に整備し、初見でも読みやすい緊迫アスレチックを実現。',
    act2: '【区間4〜7 (4,500〜10,900px)】クロノスイッチ(2基)とトゲトラップ(2基)、回転レーザー(2基)、磁力クレーンと帯電橋を組み合わせた高密度機械仕掛け回廊。オメガ・ドローンの4連レーザーとレーザー・ドローンの狙撃を掻い潜って要塞最奥へ。',
    act3: '【アリーナ決戦 (11,100〜13,200px)】中ボス「クロックワーク・コア(10HP)」は中央棒立ちを撤廃し、回転4連レーザー(195px中距離射程)を照射したままアリーナ左右へ滑らかに移動しながら迫ってくる！足場と2段ジャンプで軌道を見切り背面へ回り込んで撃破せよ。',
    specialNote: '要望通り「レーザー射程は全域でなく195px」「レーザー照射中もボス移動」の両立を達成（道中8体＋中ボス）。撃破で [2-3] と [2-4] の選択分岐が開放。',
    enemies: 'ギア・ローラー / ミラー・ブースト歯車 / レーザー・ドローン / 反発バウンサー / 磁力クレーン / 突撃電光ラマー / オメガ・ドローン / クロックワーク・コア',
    devNote: '下に逃げ床を作らず歯車から落ちたらアウトという硬派さにしつつ、レーザーの消灯時間2.7秒＋事前シマー予告で理不尽さを完全除去した自信作。',
  },
  {
    id: '2-3',
    code: '2-3',
    name: '高圧変電所と歯車工場',
    subtitle: 'Voltaic Brass Conveyors, Upper Forge & Secret Warp to 3-1',
    lengthPx: 12900,
    checkpoints: 3,
    gimmicks: '【固有】ボルタ正逆真鍮コンベア床(5基) / 歯車(6基) / クロノスイッチ(1基) / 封印壁(1枚) / 上空隠しゴール(WARP→3-1)',
    act1: '【全体印象・区間1〜2 (0〜4,400px)】2-砦後の分岐ルート北側、琥珀色の重工業変電所。帯電リズム床の導入を越えると順流(+145)・逆流(-130)で強制搬送速度が反転する真鍮コンベア床の工業ベルトが連続し、天井潜りや突撃電光ラマーとの攻防を展開する。',
    act2: '【区間3〜5 (4,400〜8,800px)】磁力クレーンと移動リフト、そして上段コンベアと下段封印壁ルートに分岐する工場中枢部。長距離サンダーレールへの飛び乗りと加速真鍮コンベア(+165)上のレールガン・メック電磁砲回避が熱い。',
    act3: '【区間6〜7 (8,800〜12,900px)】逆流コンベア(-140)と最終加速ベルト(+155)をレーザー・ドローンの射線を潜って駆け抜け通常ゴールへ到達。終盤の上層高所ルートを辿るとx=12,680, y=29に隠しゴールが潜んでおり、クリアすればいきなりW3の「3-1」へワープ可能！',
    specialNote: '分岐ステージ(対は2-4)。5基の正逆コンベア床＋15体エネミーに加え、秘密ゴール(12680, 29)から「2-3 → 3-1」クロスワールドスキップを搭載。',
    enemies: 'スパーク・クラゲ / 突撃電光ラマー / テザー電撃振子 / サンダー・インプ / レールガン・メック / 磁力クレーン / ギア・ローラー / 反発バウンサー / レーザー・ドローン / ミラー・ブースト歯車（計15体）',
    devNote: '正逆コンベアの加速・押し戻しと工場パイプの多層感で「2-4の空」とは真逆の「重厚工場ルート」を表現。隠しゴールは上段工場屋根の奥に仕込んだ。',
  },
  {
    id: '2-4',
    code: '2-4',
    name: '琥珀の送電鉄塔スカイライン',
    subtitle: '10-Rail Aerial Grind Chain & Pylon Crown Skyline',
    lengthPx: 13100,
    checkpoints: 3,
    gimmicks: '【固有】10連高圧サンダーレール網 / 回転レーザー(2基) / 上昇・反重力ゾーン(2基) / 回転歯車(2基)',
    act1: '【全体印象・区間1〜3 (0〜4,600px)】2-3と対をなす南側・超開放型の空中送電鉄塔コース。全10面の足場と3箇所チェックポイント(x=70/4000/6960)を結び、鉄塔頂上からすぐさま高速サンダーレールへ飛び乗り、レール着地による2段ジャンプ再装填を連鎖させて雲海の上を華麗にグラインドし続ける。',
    act2: '【区間4〜6 (4,600〜9,000px)】全10本におよぶ高圧レール網と2基の低重力ゾーン(gravityZones)・2基の回転歯車が立体交差し、高空を飛び回るサンダー・インプやジェット・トルーパー、反重力パルス装置とハイスピードな空中戦を繰り広げる。',
    act3: '【区間7〜8 (9,000〜13,100px)】2基の回転レーザーとミラー・ブースト歯車、ダッシュラマーの守りを繋ぐ終盤超長距離レールを滑り抜け、テザー電撃振子の隙間を2段ジャンプで縫って鉄塔終点ゲート(x=12,860)へ着地（2-3と合流して2-5へ）。',
    specialNote: '全ステージ最多クラスの10本レールを搭載した純グラインド爽快ステージ（敵14体・オーブ22個）。レール上からいつでもジャンプ離脱＆再乗り継ぎでき、上下の鉄塔足場経由でも攻略可能な自由度の高い設計。',
    enemies: 'サンダー・インプ / レーザー・ドローン / テザー電撃振子 / スパーク・クラゲ / 反重力パルス装置 / ジェット・トルーパー / ミラー・ブースト歯車 / 突撃電光ラマー / ギア・ローラー（計14体）',
    devNote: '工場寄りの2-3と徹底的に差別化するため、地面をほとんど削って空中の送電線だけでどこまでも走れるジェットコースター回にした。',
  },
  {
    id: '2-5',
    code: '2-5',
    name: '高電圧スカイブリッジ＆帯電ブロック地帯',
    subtitle: 'Phase Shock Bridges, Triple Updrafts & Secret Warp to 3-4',
    lengthPx: 13500,
    checkpoints: 3,
    gimmicks: '【固有】位相差リズム帯電ブロック(-25HP) / 上昇・反重力ゾーン(3基) / 回転歯車(3基) / 上空隠しゴール(WARP→3-4)',
    act1: '【全体印象・区間1〜2 (0〜4,500px)】2-3/2-4合流後に待つ高空スカイブリッジ。警告点滅と高圧通電(-25HP)が対称位相で切り替わる連続帯電ブリッジ上で、スパーク・クラゲとテスラ・ウォーカーの電撃を跳び越えながらリズムよく前進する。',
    act2: '【区間3〜5 (4,500〜9,200px)】3箇所の上昇気流・低重力ゾーンと反重力パルス装置、テザー電撃振子が立体的に組み合わさり、上段のスカイキャットウォーク経由でオメガ・ドローンや高圧橋を避ける探索ルートも選択できる。',
    act3: '【区間6〜7 (9,200〜13,500px)】クロノスイッチ(1基)を起動して帯電点滅の合間に反発バウンサー大跳躍を決め、通常ゴールへ到達。終盤の上層スカイブリッジ(y=49)を登り切った先(x=13,230, y=49)には隠しゴールがあり、一気にW3後半の「3-4」へワープ可能！',
    specialNote: '平坦床をほぼ排したリズム電撃橋アスレチック（敵13体・オーブ20個）。隠しゴール「2-5 → 3-4」でW3中盤への大胆ショートカットが狙える。クリアで2-6へ。',
    enemies: 'スパーク・クラゲ / 反発バウンサー / レーザー・ドローン / テスラ・ウォーカー / サンダー・インプ / テザー電撃振子 / 反重力パルス装置 / ギア・ローラー / 突撃電光ラマー / オメガ・ドローン（計13体）',
    devNote: 'リズムよく光る帯電床の点滅パターンを読むゲーム性と、3-4へ直通する高空隠しゴールの二重構造で後半へのワクワク感を高めた。',
  },
  {
    id: '2-6',
    code: '2-6',
    name: '雷鳴の強制スクロール・ハイウェイ',
    subtitle: '172px/s Storm Auto-Scroll, Lightning Precursor & Highway Gears',
    lengthPx: 14600,
    checkpoints: 3,
    gimmicks: '【固有】172px/s高速強制スクロール / 1.45s黄色予兆付き天空落雷(-29HP) / 回転歯車(4基) / レール(2本) / 坂道(1基)',
    act1: '【全体印象・区間1〜3 (0〜5,200px)】稲妻轟く高速道路高架(18足場・3CP: x=90/4340/9220)を172px/s強制スクロール(scrollCrush)で駆け抜ける嵐のハイウェイ。開始直後の初見殺しを防ぐ安全導入区間(開幕2.8s/X<520は狙い撃ち落雷なし)からリズムを整え、高架レールとスロープ加速で一気に速度に乗る。',
    act2: '【区間4〜5 (5,200〜10,000px)】2.1秒周期で空から降り注ぐ1.45秒黄色予兆付き天空落雷(-29HP/半径26px)と、地上を猛追するプラズマ・ハウンドや突撃電光ラマーが同時に迫る緊迫パート。落雷位置を見極めつつ4基の回転歯車上の安全足場や上段ルートへ飛び乗る。',
    act3: '【区間6〜7 (10,000〜14,600px)】反発バウンサーの上空ショートカットと高速大歯車・第2サンダーレールを連続で突破し、スパーク・クラゲと突撃電光ラマーの最終防衛線を抜けて嵐の終着料金所ゲート(x=14,320)へ滑り込む（全長14,600px・敵12体・オーブ25個）。',
    specialNote: '強制スクロール×落雷予報アクションの集大成。落雷予告1.45秒＆開幕安全導入保証により理不尽ゼロでハイウェイ疾走スリルだけを楽しめる。クリアで垂直登攀ステージ2-7へ。',
    enemies: 'ギア・ローラー / レーザー・ドローン / 突撃電光ラマー / サンダー・インプ / テザー電撃振子 / プラズマ・ハウンド / 反発バウンサー / スパーク・クラゲ（計12体）',
    devNote: '1-6と同じ強制スクロールでも、2-6は「雷雨が襲う超高速ハイウェイ＋歯車＆レール乗換」という別物の嵐体験にした。開幕安全猶予を入れて遊びやすさも両立。',
  },
  {
    id: '2-7',
    code: '2-7',
    name: '黄金嵐のスカイクラウド回廊（上ステ・垂直登攀）',
    subtitle: 'Vertical Sky-Tower Ascent (y:365→-2020) & 7-Layer Checkpoints',
    lengthPx: 2400,
    checkpoints: 7,
    gimmicks: '【固有】垂直上方向登攀(verticalClimb, y:365→-2020) / 昇降歯車(6基) / 斜上サンダーレール(2本) / 気流シャフト(2基) / 貫通レーザー(2基)',
    act1: '【全体印象・下層雲海 (y:365 → -480)】黄金の雲海から上空へ上り続けるW2屈指の縦登りタワー。下層は接地感ある中継足場と回転歯車・反発バウンサーで着実に高度を上げ、全階層に配置されたチェックポイント(計7箇所)を順に灯していく。',
    act2: '【中層上昇シャフト (y:-480 → -1,520)】斜め上へ突き抜けるサンダーレールと上昇気流ゾーン、2基のクロノスイッチで貫通レーザーを減速させながらジグザグに垂直空間を制覇する。落雷間隔も3.6秒/1.85秒予兆へと緩和され集中して登れる調整。',
    act3: '【最上層雲頂 (y:-1,520 → -2,020)】最終チェックポイントから2本目の斜上サンダーレールとミラー・ブースト歯車、テザー電撃振子の防衛を越えて雲上-2,020mの天空ゴールへ到達！',
    specialNote: '上下反転とは一線を画す純「上登りタワー」（全7CP完備・敵9体・オーブ17個）。難易度緩和調整により達成感と安定攻略の両立を実現。クリアで2-BOSSへ。',
    enemies: 'ギア・ローラー / 突撃電光ラマー / 磁力クレーン / テザー電撃振子 / 反重力パルス装置 / 反発バウンサー / ミラー・ブースト歯車（計9体）',
    devNote: '「2-7と2-城が異様に難しい」との声を受けて全階層7箇所にCPを配備し中継足場を丁寧に補強した。高さ-2,020pxまで登り切った達成感は格別。',
  },
  {
    id: '2-BOSS',
    code: '2-BOSS',
    name: '雷帝の空中発電戦艦',
    subtitle: '4-Act Dreadnought Assault & Thunder Kronos (14HP / 3 Forms)',
    lengthPx: 5200,
    checkpoints: 7,
    gimmicks: '【固有】4幕戦艦構造(格納庫→中央ツイン垂直エレベーター→翼砲台→頂上艦橋) / 垂直登攀 / 非ワープ完走3形態ボス「サンダー・クロノス(14HP)」',
    act1: '【全体印象・第1幕 船腹格納庫突破 (x:0→2,330, y:365→185)】2-7の雲海タワーから完全差別化された巨大空中発電戦艦潜入ステージ。下ルート（移動リフト＆飛行船大砲×2の正面突破）と上ルート（高速サンダーレール＆回転歯車＋クロノスイッチのテクニカル進入）の2経路を選択して船内へ切り込む。',
    act2: '【第2幕 中央炉心エレベーター昇降 (x:2,040→2,680, y:185→-520)】2基の垂直電動エレベーターと回転歯車を乗り継ぎ、左右交互の時限貫通ビームが走る炉心縦穴を垂直に上昇する戦艦ならではの独自区画。',
    act3: '【第3幕 左舷翼砲台＆上昇気流 (x:680→2,300, y:-520→-1,085)】サンダー・インプやレーザー・ドローンが守る左舷翼甲板の帯電橋を渡り切り、斜上サンダーレールから終端上昇気流シュートで頂上艦橋へ飛び上がる。',
    act4: '【第4幕 頂上艦橋決戦 (x:2,420→5,200, y:-1,240)】回復金オーブ付き980px決戦艦橋で「サンダー・クロノス(HP14・3形態)」と死闘！全瞬間移動を撤去し、第1形態ファンネル雷→第2形態壁完走電光突進→第3形態連続2連突進＆2本回転掃射レーザーを正々堂々受け止めて撃破し、W3へ進軍せよ！',
    specialNote: '2-7との構造重複を解消した4幕構成戦艦＋難易度最適化済み（道中10体＋クロノス14HP）。撃破でワールド3「翠緑の摩天樹海と翡翠の魔導要塞」解放！',
    enemies: 'ギア・ローラー / レーザー・ドローン / 突撃電光ラマー / ミラー・ブースト歯車 / テザー電撃振子 / スパーク・クラゲ / 反重力パルス装置 / サンダー・インプ / 飛行船大砲 / サンダー・クロノス',
    devNote: '「2-7と2-城が似ている」という指摘に対して2-BOSSを丸ごと「格納庫分岐→ツイン炉心エレベーター→左舷翼→艦橋」の戦艦ダンジョンへ作り直した。クロノスもワープ無し壁完走で大迫力！',
  },

  // ---- WORLD 3: 翠緑の摩天樹海と翡翠の魔導要塞（全10ステージ / W1・W2過去ギミック完全非流用） ----
  {
    id: '3-1',
    code: '3-1',
    name: '翠緑の摩天楼キャノピー',
    subtitle: 'Aero Wind Rings, Pendulum Vines & Multi-Route Sap Streams',
    lengthPx: 14200,
    checkpoints: 3,
    gimmicks: '【固有】翠風エアロリング(4基) / 振り子ツタ(4本) / 浮遊スポアバブル(4基) / 胞子カタパルト(1基) / 順逆樹液流 / 坂道(1基)',
    act1: '【全体印象・区間1〜3 (0〜4,800px)】W1・W2のギミック使い回しを一切排した緑基調ワールド3の幕開け。翡翠バウンス台から樹冠に垂れる振り子ツタへ飛びつき、空中の「翠風エアロリング」を潜って+520px/s前方加速＋2段ジャンプ再装填を決める空中ターザン体験が爽快。',
    act2: '【区間4〜6 (4,800〜9,600px)】高所の樹冠枝ルートと下段の順逆樹液激流ベルトが並走する複層構造。ソーン・ウィーバーのバウンド種子弾やプリズム・スポアのプリズム弾をかわしつつ、胞子カタパルトで第2・第3エアロリングへ飛び乗る。',
    act3: '【区間7〜8 (9,600〜14,200px)】1.45秒で弾ける浮遊スポアバブル連帯と下り坂スライディングを繋ぎ、最終第4エアロリングからバイオ・ヒュドラの波動とジェイド・スナイパーの2回反射跳弾ビームを潜り抜けてゲートへ到達（[3-2]と分岐）。',
    specialNote: '固有ギミック「翠風エアロリング(×4)」搭載。敵密度を17体へ整理しギミックとの噛み合いを研ぎ澄ませた（オーブ24個）。クリアで3-3へ。',
    enemies: 'エメラルド・マンティス / プリズム・スポア / ジェイド・スナイパー / バイオ・ヒュドラ / クロノ・ヴァイン / ソーン・ウィーバー / ゴーレム・ナイト（計17体）',
    devNote: 'W3に入った瞬間に歯車もレーザーも一切ない純・自然魔導ギミックだけでここまで気持ちよく飛べるのかと驚かせる設計。振り子ツタ→エアロリングのコンボが最高。',
  },
  {
    id: '3-2',
    code: '3-2',
    name: '翡翠の胞子バブルと開花橋の渓谷',
    subtitle: 'Resonant Pollen Pods (AoE+Jump), Bloom Bridges & Snap Traps',
    lengthPx: 14400,
    checkpoints: 3,
    gimmicks: '【固有】共鳴花粉ポッド(5基・2ダメ広域起爆＋大跳躍) / 開花橋(4基) / スポアバブル(7基) / 肉食花トラップ(4基, -21HP) / 移動床(1基)',
    act1: '【全体印象・区間1〜3 (0〜5,000px)】3-1と対をなす分岐南側ルートで、攻撃にも移動にも使える「共鳴花粉ポッド(5基)」が主役の戦略渓谷。1.45秒破裂スポアバブルと開花フラワーブリッジを渡りながら花粉ポッドを魔導弾で起爆し、周囲の敵を一掃しつつ超高台ショートカットへ跳ね上がる！',
    act2: '【区間4〜6 (5,000〜9,800px)】床に潜む翠牙の肉食花トラップ(0.85秒予兆)と樹液流足場が連続。ステルス・ニンジャの手裏剣や跳弾ジェイド・スナイパーの狙撃に対し、第3〜4ポッドの花粉爆風を叩き込んで一気に打開する爽快感。',
    act3: '【区間7〜8 (9,800〜14,400px)】2本の振り子ツタと移動足場、最終第4開花ブリッジを抜け、5基目の花粉ポッド大跳躍でバイオ・ヒュドラを飛び越えて3-3手前の合流地点へ着地（敵17体・オーブ17個）。',
    specialNote: '固有ギミック「共鳴花粉ポッド(×5)」は射撃でも踏込みでも起爆（3.8秒再生・半径195pxへ一律2ダメ）。分岐のどちらからでも[3-3]へ進行可能。',
    enemies: 'ソーン・ウィーバー / ジェイド・スナイパー / バイオ・ヒュドラ / エメラルド・マンティス / ステルス・ニンジャ / プリズム・スポア / クロノ・ヴァイン / ゴーレム・ナイト（計17体）',
    devNote: 'ギミックを「障害物」ではなく「敵を吹き飛ばす武器兼ジャンプ台」にしたことで、同じ17体相手でも3-1とまったく別の戦術パズル感になった。',
  },
  {
    id: '3-3',
    code: '3-3',
    name: '樹液激流・大温室エクスプレス',
    subtitle: '168px/s W3 Auto-Scroll, Sinking Lotus Pads & Secret Warp to 4-1',
    lengthPx: 14600,
    checkpoints: 3,
    gimmicks: '【固有】W3高速強制スクロール(168px/s) / 浮沈大スイレン足場(5基) / リーフゲート(4基) / 胞子ジェット(6基) / 上空隠しゴール(WARP→4-1)',
    act1: '【全体印象・区間1〜3 (0〜5,000px)】W2と強制スクロールの出現時期を被らせないため、W3では中盤の3-3へ前倒し移設した高速大温室エクスプレス！体重をかけると最大24px沈み込み跳躍反発をくれる「浮沈大スイレン足場(5基)」と、1.28倍速化するリーフゲートで一気に波に乗る。',
    act2: '【区間4〜6 (5,000〜9,900px)】周期噴射する6基の間欠泉胞子ジェット(-19HP)や4基の肉食花を、開花ブリッジと胞子カタパルト上層バイパスでかわしながら突破。スター・ウィーバーとプリズム・スポアが空中でリズムを揺さぶる。',
    act3: '【区間7〜8 (9,900〜14,600px)】急坂スライディング加速から連続スイレン足場・4つ目のリーフゲートを越え通常ゴールへ。さらにゴール手前の最上段ルート(x=14,380, y=19)を踏み外さず駆け上がると金色隠しゴールを発見でき、一気にWorld 4の「4-1」へワープスキップできる！',
    specialNote: 'W2終盤との構成重複を破壊した中盤強制スクロール＋浮沈スイレンの融合ステージ（敵18体・オーブ15個）。秘密ゴール「3-3 → 4-1」を搭載。通常クリアで3-砦1開放。',
    enemies: 'エメラルド・マンティス / プリズム・スポア / クロノ・ヴァイン / ジェイド・スナイパー / バイオ・ヒュドラ / スター・ウィーバー / ゴーレム・ナイト / ソーン・ウィーバー（計18体）',
    devNote: '2-6と3-6が両方強制スクロールだった類似構造を断ち切るため、3-3に強制スクロールを移した！乗るとフワッと沈んで弾むスイレン足場との相性が想像以上にスリリング。',
  },
  {
    id: '3-FORT1',
    code: '3-砦1',
    name: '第一翠玉要塞・茨と翠鎌の関門',
    subtitle: 'Thorn Piston Crushers, Scythe Pendulums & Verdant Warden (11HP)',
    lengthPx: 14000,
    checkpoints: 4,
    gimmicks: '【固有】茨ピストン圧壊門(5基, -23HP) / 大鎌ギロチン振子(6基, -24HP) / 胞子ジェット(3基) / 肉食花(4基) / 中ボス「ヴァーダント・ワーデン(11HP)」',
    act1: '【全体印象・区間1〜3 (0〜4,800px)】トゲや回転レーザーの代わりに、天地から周期圧壊してくる「茨ピストン門(5基)」と巨大三日月「大鎌ギロチン振子(6基)」が待ち構える翠玉要塞。4箇所のCPを刻みながら開閉タイミングを潜り抜け、胞子バブルで要塞上部通路へ上がることも可能。',
    act2: '【区間4〜6 (4,800〜9,600px)】肉食花と胞子ジェット・振り子ツタ・開花ブリッジが絡み合う中枢回廊を、ルーン・センチネルやファントム・ナイトの精鋭衛兵と交戦しつつ進軍する。',
    act3: '【区間7〜8・中ボス決戦 (9,600〜14,000px)】第5ピストン門と高速大鎌を突破した最奥アリーナで「ヴァーダント・ワーデン(11HP)」と対決！非ワープで左右に移動しながら展開する回転レーザーと壁から壁への全幅完走突進を2段ジャンプで受け流し撃破せよ！',
    specialNote: 'W3は豪華2砦制の第1要塞（道中15体＋中ボス11HP）。クリアすると [3-4（地下蛍光洞窟）] と [3-5（空中公転庭園）] の2ルートが同時開放。',
    enemies: 'エメラルド・マンティス / ルーン・センチネル / ファントム・ナイト / バイオ・ヒュドラ / ジェイド・スナイパー / ソーン・ウィーバー / ヴァーダント・ワーデン',
    devNote: '1-砦・2-砦の焼き直しを絶対拒否し、植物と結晶のギロチン・茨ピストンで「翠の要塞らしさ」をゼロから組んだ。中ボスも途中で止まらない壁完走突進が爽快。',
  },
  {
    id: '3-4',
    code: '3-4',
    name: '翡翠地下樹海・蛍光の胞子洞窟',
    subtitle: 'Bioluminescent Glow Lanterns, Dark Abyss & Burrowing Moles',
    lengthPx: 14200,
    checkpoints: 3,
    gimmicks: '【固有】蛍光胞子ランタン(6基・射撃点灯165px常時光源＋自機オーラ拡張) / 深層暗闇 / 振り子ツタ(4本) / バブル(7基) / 肉食花(3基)',
    act1: '【全体印象・区間1〜3 (0〜4,800px)】3-砦1後の北分岐は深層暗闇が包む地下樹海洞窟。魔導弾で「蛍光胞子ランタン(6基)」を撃って大輪を開花させると半径165pxの翡翠光源が常時点灯＋8秒間の自機視界拡張が発生し、暗闇に潜むドリル・モールの地中突撃やクロノ・ヴァインを見極めやすくなる。',
    act2: '【区間4〜6 (4,800〜9,600px)】地底湖の上を4本の振り子ツタと7基の浮遊胞子バブルで連続スイング渡破。暗闇の中でもランタンの光を手掛かりに、上段開花ブリッジのボーナスルートか下段肉食花＆胞子ジェットの最短ルートを選択可能。',
    act3: '【区間7〜8 (9,600〜14,200px)】大鎌振子2基とバイオ・ヒュドラを第6ランタンの明かりの中で迎え撃ち、最奥胞子カタパルトの大跳躍で地下樹海を抜け出して[3-5]と合流！',
    specialNote: '固有ギミック「蛍光胞子ランタン(×6)」はW1電気スイッチと異なる生体発光探索ギミック（敵17体・オーブ15個）。[3-4/3-5]どちらかクリアで3-砦2開放。',
    enemies: 'エメラルド・マンティス / ゴースト・ウィスプ / ドリル・モール / ジェイド・スナイパー / クロノ・ヴァイン / バイオ・ヒュドラ / プリズム・スポア / ソーン・ウィーバー（計17体）',
    devNote: '地下の暗い洞窟を進む中で、花（ランタン）を撃ってパッと幻想的な緑の光が咲くビジュアルにしたかった。ドリル・モールの地中奇襲とランタン視界確保の相性が抜群。',
  },
  {
    id: '3-5',
    code: '3-5',
    name: 'エメラルド浮遊胞子と大鎌の空中庭園',
    subtitle: 'Elliptical Orbital Jade Discs, Bubble Stairways & Sky Scythes',
    lengthPx: 14400,
    checkpoints: 3,
    gimmicks: '【固有】公転オービタル翡翠盤(5基・楕円衛星軌道) / 浮遊スポアバブル(8基) / 開花橋(3基) / 大鎌振子(3基) / カタパルト(2基)',
    act1: '【全体印象・区間1〜3 (0〜5,000px)】3-4の暗い地底とは対極となる光満ちる天空庭園（南分岐）。胞子カタパルトから振り子ツタを経由し、単純往復ではなくrx/ry楕円軌道を滑らかに衛星周回する「公転オービタル翡翠盤(5基)」を乗り継ぐ優美な空中アクロバットが広がる。',
    act2: '【区間4〜6 (5,000〜9,800px)】多段スポアバブル階段と上段・下段2経路の開花フラワーブリッジ、そして中空を薙ぐ大鎌ギロチン振子が交差。スター・ウィーバーとジェイド・スナイパーが立体的に角度をつけて弾幕・跳弾を放つ。',
    act3: '【区間7〜8 (9,800〜14,400px)】順流樹液ベルトで助走をつけ、第4・第5オービタル翡翠盤と最終カタパルトの連結で一気に天空最上段の庭園ゲートへ飛び乗る（敵17体・オーブ14個）。',
    specialNote: '固有ギミック「公転オービタル翡翠盤(×5)」が生む円弧移動の独特な浮遊感が看板。[3-4]と合流し、次の第2翠玉要塞[3-砦2]へ挑戦可能。',
    enemies: 'エメラルド・マンティス / ソーン・ウィーバー / プリズム・スポア / バイオ・ヒュドラ / ジェイド・スナイパー / スター・ウィーバー / クロノ・ヴァイン / ゴーレム・ナイト（計17体）',
    devNote: 'ただ左右上下に往復する床ではなく楕円公転する衛星足場を作ったことで、タイミングを合わせて飛び移る天空庭園らしさが一段と強まった。',
  },
  {
    id: '3-FORT2',
    code: '3-砦2',
    name: '第二翠玉要塞・双晶の狂花炉心',
    subtitle: 'Prism Crystal Locks, Twin Scythe Gauntlet & Jade Chimera (13HP)',
    lengthPx: 14400,
    checkpoints: 4,
    gimmicks: '【固有】双晶クリスタル・プリズム障壁(3組・結晶核撃破で解錠) / 連装大鎌(4基) / 肉食花(4基) / 中ボス「ジェイド・キメラ(13HP)」',
    act1: '【全体印象・区間1〜3 (0〜4,900px)】W3第2の大型要塞。行く手を封鎖する「双晶クリスタル障壁(3組)」は近傍に浮く菱形結晶核へ魔導弾を撃ち込んで初めて開通する解錠アクション！連装大鎌振子とスポアバブル足場の複合室を冷静に抜けて解錠を重ねる。',
    act2: '【区間4〜6 (4,900〜9,800px)】逆流樹液コンベア上に肉食花4基と間欠泉胞子ジェット3基が並び、ゴーレム・ナイトとファントム・ナイトが結晶核への射線を阻む重厚戦術区画。第2・第3のプリズム障壁を砕き、開花ブリッジ経由の別経路で炉心へ接近。',
    act3: '【区間7〜8・中ボス戦 (9,800〜14,400px)】最奥炉心アリーナで双頭龍「ジェイド・キメラ(13HP)」と決戦！瞬間移動皆無のまま滑らかな8の字飛行と跳弾ビームを放ち、HP半分以下のPhase2では反対壁まで斜め滑空ダイブを完走して折り返す2連続往復ダイブを叩き込む！',
    specialNote: '双晶解錠×連装大鎌の知力・技術試練要塞（道中16体＋キメラ13HP）。撃破で後半の山場[3-6]が開放。',
    enemies: 'エメラルド・マンティス / ゴーレム・ナイト / プリズム・スポア / ファントム・ナイト / バイオ・ヒュドラ / クロノ・ヴァイン / ジェイド・スナイパー / ジェイド・キメラ',
    devNote: 'W3が10面構成なので2番目の砦にも明確な固有要素（双晶クリスタル解錠＋往復2連ダイブの双頭龍ボス）を持たせ、ただの中継ぎにさせなかった。',
  },
  {
    id: '3-6',
    code: '3-6',
    name: '蒼翠の樹冠ダイブ＆深層根脈スプリント',
    subtitle: 'Vertical Canopy Descent (y:-680→+780), Root Sprint & Secret Warp to 4-4',
    lengthPx: 6800,
    checkpoints: 6,
    gimmicks: '【固有】垂直降下(verticalDescent, y:-680→+780) / リーフゲート超加速(3基) / 胞子ジェット(4基) / 地下隠しゴール(WARP→4-4)',
    act1: '【全体印象・天蓋ダイブ (y:-680 → +120)】W2の「上へ登る2-7」に対し、真逆の体験として新規エンジン実装した「超高所樹冠から地下根脈へ駆け降りる垂直降下(verticalDescent)」コース！6箇所のCPを刻みながら光差し込む大樹上層からスポアバブルを踏み継いで急降下する。',
    act2: '【中層根穴降下 (y:+120 → +780)】左右に交差する大鎌振子2基と4基の肉食花・胞子ジェットの間を絶妙な空中ブレーキで抜け、一気に地中深層y:+780の巨木根脈トンネルへ着地。縦落下からの横疾走切替が抜群の爽快感を生む。',
    act3: '【深層根脈スプリント＆秘密ゴール (x:2,260〜6,800px)】地下道では逆流樹液と3基の翡翠リーフゲート(1.28倍速)を一気に駆け抜け通常ゴールへ到達！さらに深層根脈の奥(x=6,600, y=409)に隠された秘密ルートを開拓すると金色隠しゴールが出現し、World 4の深海面「4-4」へ直接ワープできる！',
    specialNote: '下り専門の独自ダイナミズム＋深層高速スプリントの融合（敵15体・オーブ15個）。秘密ゴール「3-6 → 4-4」対応。通常クリアで3-7開放。',
    enemies: 'エメラルド・マンティス / プリズム・スポア / ジェイド・スナイパー / ソーン・ウィーバー / バイオ・ヒュドラ / クロノ・ヴァイン（計15体）',
    devNote: '「2-6/2-7と似せないで」の要望から誕生した自信の逆転ステージ！上から下へ落ちていく重力加速と、最深部に着地してから横ダッシュで駆け抜ける緩急が本当に気持ちいい。',
  },
  {
    id: '3-7',
    code: '3-7',
    name: '翡翠樹冠・上下複層スパイラル回廊',
    subtitle: '15,600px Horizontal Dual-Layer Canopy vs Root Corridor',
    lengthPx: 15600,
    checkpoints: 4,
    gimmicks: '【固有】水平15,600px上下2層構造(上段空中樹冠 vs 下段根脈突破) / 開花スパイラル花柱(3基) / 振り子ツタ(2本) / 大鎌(2基)',
    act1: '【全体印象・第1層 (0〜5,200px)】2-7（上登りタワー）との類似を完全に断絶し、15,600pxの全ステージ最長級・水平二階建て複層回廊へと抜本刷新！開始直後から軽快な空中枝＆ツタの上段樹冠ルートと、肉弾敵・胞子ジェットが密集する下段根脈ルートに分岐し、蕾を撃つと3段花弁階段が咲く「スパイラル花柱」で自在に上層へ昇降合流できる。',
    act2: '【第2層 (5,200〜10,400px)】上段では浮遊スポアバブルと開花ブリッジによる精密空中戦、下段では大鎌振子と順逆樹液の近接突破戦と上下でまったく異なるアクションが同時進行。2本目・3本目のスパイラル花柱が戦略的な縦移動の鍵を握る。',
    act3: '【第3層 (10,400〜15,600px)】ジェイド・スナイパーとバイオ・ヒュドラが上下段を同時に制圧してくる最終複層地帯を、好みの高度を取り替えながら押し切り、翡翠宮殿正門テラスへ辿り着く（敵15体・オーブ15個・CP4）。',
    specialNote: 'マリオWii式の「表の上段ルート・裏の下段ルートを何度も往来しながら進む長大水平コース」。クリアでいよいよ3-BOSS翡翠宮殿へ。',
    enemies: 'エメラルド・マンティス / ジェイド・スナイパー / バイオ・ヒュドラ / プリズム・スポア / ソーン・ウィーバー / クロノ・ヴァイン（計15体）',
    devNote: '2-7と3-7が両方「上ステ」で似てしまっていたのを反省し、真逆の「超横長15,600px・2階建て水平探索コース」へ大胆に作り直した！スパイラル花柱を咲かせて上層へ合流するのが楽しい。',
  },
  {
    id: '3-BOSS',
    code: '3-城',
    name: '翡翠宮殿の聖域回廊＆翠帝玉座の間',
    subtitle: 'Horizontal 3-Hall Palace March & Emerald Emperor (15HP / 3 Forms)',
    lengthPx: 7400,
    checkpoints: 4,
    gimmicks: '【固有】水平宮殿3大広間構成 / 翠玉聖域の疾風柱(4基) / 双晶結晶障壁(1組) / スパイラル花柱(1基) / 翠帝エメラルドエンペラー(15HP・非ワープ)',
    act1: '【全体印象・第1広間 外廊列柱 (0〜2,200px)】2-BOSS（上登り戦艦）と構成を完全差別化した堂々たる水平王宮マーチ型ステージ！樹液流外廊と周期上昇する聖域疾風柱で上段デッキの胞子群を制圧しつつ、宮殿列柱を進む。',
    act2: '【第2広間 双晶と翠鎌の廊下 (2,200〜5,100px)】双晶クリスタル結晶核を撃ち抜いて重厚な宮殿障壁を開放し、開花フラワーブリッジと連装大鎌振子2基・胞子ジェット2基の試練を越える。王座手前のスパイラル花柱を咲かせて最終チェックポイントへ。',
    act3: '【第3広間 翠帝玉座の間 (5,240〜6,280px, floorY:365)】広大な水平1,040px玉座アリーナの両端に吹く聖域疾風柱と中央バウンス台をフル活用！瞬間移動皆無・全攻撃壁完走の「翡翠皇エメラルドエンペラー(15HP・3形態：胞子弾幕→結晶波→往復2連壁完走翡翠突進)」を打ち破り、W4蒼氷王城への道を開け！',
    specialNote: '道中精鋭8体＋最強翠帝15HP。2-BOSSの垂直戦艦とは正反対の「王城大広間行軍→地上玉座一騎討ち」でW3を締めくくる。撃破でワールド4解放。',
    enemies: 'エメラルド・マンティス / プリズム・スポア / バイオ・ヒュドラ / ルーン・センチネル / ジェイド・スナイパー / ファントム・ナイト / クロノ・ヴァイン / 翡翠皇・エメラルドエンペラー',
    devNote: '王城のラストはやっぱり赤い絨毯（翠の玉座）を自分の足で歩いて玉座の間へ辿り着く水平マーチが映える！疾風柱で高く舞い上がって皇帝の壁完走突進を飛び越える瞬間が最高。',
  },

  // ---- WORLD 4: 蒼氷と絶対零度の王城（全9ステージ / 青＆氷テーマ / 高難度＆鋭利ギミック） ----
  {
    id: '4-1',
    code: '4-1',
    name: '蒼氷の港湾高速滑走',
    subtitle: 'Ultra-Low Friction Ice Speedway, Cryo Pinball Bumpers & Icicles',
    lengthPx: 14200,
    checkpoints: 3,
    gimmicks: '【固有】全面低摩擦アイススケート床 / 氷大坂(3基) / 4方向クライオバンパー(4基) / 落氷柱(9基) / 氷間欠泉(2基) / 氷結機雷(4基)',
    act1: '【全体印象・第1港湾 (0〜4,600px)】青と氷の世界World 4の開幕は、踏んだ瞬間ツルッと加速する極低摩擦アイス床と3本の長大氷坂スプリント！アイス・スケーターと氷上でハイスピードに並走しつつ、空中の「クライオ・ピンボールバンパー」に弾かれて上層氷棚ルートと下層機雷ルートを飛び分ける。',
    act2: '【第2氷棚 (4,600〜9,600px)】天井から0.48秒震え予兆の後に突き刺さる9基の落氷柱と、足元の感応式フロストマイン地雷(Chill鈍足)のプレッシャーが牙を剥く中盤。2基のクライオ間欠泉の上昇気流からバンパー連鎖へ乗り継ぎ、高所のグレイシャー・ゴーレム氷塊砲撃をかわす。',
    act3: '【第3氷港 (9,600〜14,200px)】正面からの魔導弾を凍結弾にして跳ね返す反射騎士ミラー・フロストや潜行するパーマフロスト・ワームの奇襲に対し、2段ジャンプ背後撃ち＆最終氷坂スライディング加速で突破し港湾ゴールへ滑り込む（敵20体・オーブ18個）。',
    specialNote: '平坦を排した高低差×氷上慣性×落氷柱の高密度開幕ステージ。敵数20体とW4初回から手応え抜群のバランス。クリアで4-2へ。',
    enemies: 'アイス・スケーター / フロスト・レイス / アイシクル・バット / クライオ・タレット / グレイシャー・ゴーレム / ブリザード・フェアリー / パーマフロスト・ワーム / ミラー・フロスト（計20体）',
    devNote: '「W4が簡単な気がする・平坦が多い」という指摘を受け、4-1から起伏・坂・間欠泉・バンパー・20体の氷敵をぎっしり詰め込んで「最初から油断できない氷の世界」に引き上げた！',
  },
  {
    id: '4-2',
    code: '4-2',
    name: '崩落クリスタル氷棚迷宮',
    subtitle: '0.50s Crumble Ice Ledges, 6-Way Cryo Bumpers & Freeze Beams',
    lengthPx: 13900,
    checkpoints: 3,
    gimmicks: '【固有】0.50秒砕け落ち極薄氷棚(大量) / クライオ・ピンボールバンパー(6基) / 冷凍ビーム(3基・Chill鈍足) / 落氷柱(5基)',
    act1: '【全体印象・砕氷海峡 (0〜4,600px)】安定地面を極限まで削ぎ落とし、踏むとわずか0.50秒で砕け落ちる極薄クリスタル氷棚が主役の「立ち止まり厳禁」サバイバル迷宮！最初のバンパー跳躍から次々と崩れる氷棚を跳び継ぎ、アイシクル・バットの急降下結晶を空中でかわす。',
    act2: '【双層氷迷宮 (4,600〜9,400px)】上下2層に分かれた崩落氷ステップの合間を3基の冷凍ビーム(触れると0.58倍速Chill状態)と5基の落氷柱が切り裂く高緊張区画。6基配置されたクライオバンパーの4方向弾き返しと2段ジャンプ復活を連鎖させて高度を維持し続ける。',
    act3: '【終端氷崖 (9,400〜13,900px)】フロスト・レイスの氷壁貫通スロー滑空とブリザード・フェアリーの凍結オーラが崩落足場上での判断を揺さぶる最終難関を越え、連続バンパーから氷棚ゴールへ着地する（敵20体・オーブ12個）。',
    specialNote: 'W4随一の純アスレチック集中コース。「止まったら床が消える」極限テンポと6基ピンボールバンパーの爽快跳躍が病みつきになる。クリアで4-3へ。',
    enemies: 'アイシクル・バット / フロスト・レイス / ブリザード・フェアリー / アイス・スケーター / ミラー・フロスト / グレイシャー・ゴーレム / クライオ・タレット / パーマフロスト・ワーム（計20体）',
    devNote: '0.50秒というギリギリの猶予にすることで「常に次の一手を先読みしてジャンプし続ける」緊張感を出した。バンパーで宙に浮いた瞬間に次の砕け氷を見定める瞬間が最高に熱い。',
  },
  {
    id: '4-3',
    code: '4-3',
    name: '鏡面氷晶と反射レーザーの回廊',
    subtitle: 'Ice Mirror Ricochet Switches, Freeze Beams & Secret Warp to 5-1',
    lengthPx: 14400,
    checkpoints: 3,
    gimmicks: '【固有】氷鏡バンクショット反射(3基) / 冷凍ビーム(5基) / スイッチ開門(3基) / 移動床(1基) / バンパー(2基) / 間欠泉(1基) / 上空隠しゴール(WARP→5-1)',
    act1: '【全体印象・第1鏡室 (0〜4,800px)】魔導弾を鏡(iceMirrors)に撃ち込んで斜め・直角に反射させ、障壁裏の氷スイッチ(3基)を開通させる頭脳派バンクショット回廊！反射盾を持つミラー・フロストが多用され、「ただ正面へ連射する戦法」が通用しない緊張感が光る。',
    act2: '【冷凍光線区画 (4,800〜9,800px)】5基もの冷凍ビームが縦横斜めに張り巡らされ、移動リフトと上段鏡面バルコニー、下段直接突破ルートの複層構造を形成。Chill状態になると跳躍・移動が鈍ってビーム連続被弾の危険が増すため、正確な反射開通が生命線。',
    act3: '【鏡面奥部＆秘密ゴール (9,800〜14,400px)】第3の氷鏡バンクショットで奥部のホロ橋を開通させ、クライオ間欠泉とバンパーの立体連携を越えて通常ゴールへ。さらに終盤上層(x=14,180, y=29)の高所氷鏡足場を登り切ると金色隠しゴールを発見でき、World 5「5-1」へ一気にワープ進入可能！',
    specialNote: '反射パズル×Chill冷凍レーザー網×高密度21体のトリッキー回。隠しゴール「4-3 → 5-1」発見で4-砦1〜4-BOSSを飛び越えて新世界へ突入できる！通常クリアで4-砦1開放。',
    enemies: 'ミラー・フロスト / フロスト・レイス / クライオ・タレット / アイシクル・バット / アイス・スケーター / ブリザード・フェアリー / グレイシャー・ゴーレム / パーマフロスト・ワーム（計21体）',
    devNote: '正面の魔導弾を弾くミラー・フロストと、斜め反射でスイッチを押す氷鏡をセットで主役にした。終盤上の氷鏡上空に5-1行きワープ門を隠してある。',
  },
  {
    id: '4-FORT1',
    code: '4-砦1',
    name: '第一蒼氷要塞・絶対零度装甲門',
    subtitle: 'Ice Blade Pendulums, Frost Mines & Glacia Knight (13HP)',
    lengthPx: 13800,
    checkpoints: 4,
    gimmicks: '【固有】極低温ギロチン氷刃振子(5基, -25HP) / 感応フロストマイン地雷(5基) / 冷凍ビーム(4基) / 落氷柱(4基) / バンパー(2基) / 中ボス「グラシア・ナイト(13HP)」',
    act1: '【全体印象・要塞外濠 (0〜4,700px)】青い鋼鉄と絶対零度の刃が牙を剥く第1氷要塞。足元で0.55秒後に起爆しChillを与えるフロストマイン地雷(5基)を素早く踏み逃げつつ、頭上で振り子運動する極低温ギロチン氷刃(5基, -25HP)の下をタイミングよく潜り抜ける。',
    act2: '【中枢冷凍室 (4,700〜11,200px)】崩落氷棚・冷凍ビーム4基・落氷柱4基・クライオバンパーが総動員される4チェックポイント構成の難関要塞。上段のバンパー迂回経路と下段の地雷原を切り替え、全19体の氷軍団を撃破して最奥へ。',
    act3: '【騎士決闘の間 (11,400〜13,800px)】最奥アリーナで「蒼氷騎士グレイシア(13HP)」と剣戟一騎討ち！正面氷結大盾で弾を弾きつつ、跳躍氷柱衝撃波とワープ皆無の壁から壁へ完走するスケートランス突進を放つ強敵だ。背面や上空踏みつけで盾の裏を突け！',
    specialNote: '撃破すると物理法則そのものが両極端に尖った2大分岐 [4-4（水中氷溝）] と [4-5（猛吹雪渓谷）] が同時開放される要塞。',
    enemies: 'グレイシャー・ゴーレム / フロスト・レイス / アイス・スケーター / ミラー・フロスト / アイシクル・バット / クライオ・タレット / ブリザード・フェアリー / パーマフロスト・ワーム / 蒼氷騎士グレイシア（道中19体＋中ボス）',
    devNote: '平らだった箇所を全部段差＋地雷＋氷振子の連携に作り直し、グレイシアの突進も途中で止まらず両端までしっかり滑り抜けるように調律した。',
  },
  {
    id: '4-4',
    code: '4-4',
    name: '深海氷溝・氷水相転移ダイブ',
    subtitle: 'Underwater Swim Physics, Phase Water Switches & Cryo Lanterns',
    lengthPx: 13800,
    checkpoints: 3,
    gimmicks: '【固有】水中無制限スイム物理(underwaterStage) / 氷水相転移スイッチ(5基・水↔氷ブロック反転) / 蒼氷ランタン(6基) / 冷凍ビーム(2基) / 氷間欠泉(2基)',
    act1: '【全体印象・深海潜航 (0〜5,100px)】4-砦1の北分岐は、重力0.36倍・ジャンプ連打で自由自在に泳げるシリーズ唯一の「本格水中ダイブ」ステージ！暗い深海氷溝の中、6基の蒼氷ランタンを魔導弾で点灯して視界を確保しながら上下立体空間を泳ぎ回る。',
    act2: '【相転移ロック突破 (5,100〜10,400px)】行く手を塞ぐ分厚い水/氷相転移ブロックに対し、5基の「相転移スイッチ」を射撃！液体へ溶かして水中トンネルとして潜り抜け、逆に上へ乗る瞬間は凍結させて頑丈な足場へ切り替えるギミックパズルが爽快（敵20体と水中戦も濃厚）。',
    act3: '【氷溝浮上口 (10,400〜13,800px)】冷凍ビーム2基とパーマフロスト・ワームの水中奇襲を泳法で躱し、終盤のクライオ間欠泉2基の強烈な上昇噴流に押し上げられて海上氷門(x=13,600)へ浮上脱出！',
    specialNote: '4-5と並ぶ「物理エンジン丸ごと変更」分岐ステージ（敵20体・オーブ15個）。液化と凍結を自在に操る新感覚はW4屈指の記憶に残る体験。クリアで4-6合流。',
    enemies: 'フロスト・レイス / アイス・スケーター / アイシクル・バット / ブリザード・フェアリー / グレイシャー・ゴーレム / ミラー・フロスト / パーマフロスト・ワーム / クライオ・タレット（計20体）',
    devNote: '分岐するなら見た目だけでなく操作感から変えたくて、本当に水の中をスイミングできる物理モードを作った！水ブロックがカチッと凍ったりジュワッと溶けたりする操作が最高に楽しい。',
  },
  {
    id: '4-5',
    code: '4-5',
    name: '極寒ブリザード渓谷と氷結間欠泉',
    subtitle: 'Alternating Blizzard Winds, Windbreak Monoliths & Secret Warp to 5-3',
    lengthPx: 13900,
    checkpoints: 3,
    gimmicks: '【固有】左右交互猛吹雪(blizzardConfig: 5.4s周期/windVx±145) / 防風モノリス氷壁(7基+高架2基) / 氷間欠泉(3基) / バンパー(3基) / 落氷柱(4基) / 上空隠しゴール(WARP→5-3)',
    act1: '【全体印象・風下渓谷 (0〜4,600px)】4-4と対をなす南分岐は、約5.4秒周期で強烈な横風(windVx±145)の向きが反転するサバイバル吹雪渓谷！吹雪吹き荒れる中、分厚い「防風モノリス氷壁(windbreak)」の陰へ駆け込んで風を凌ぎつつ、全21体の氷敵と渡り合う。',
    act2: '【吹雪間欠泉 (4,600〜9,300px)】追い風フェーズではジャンプ飛距離が激増し大渓谷を一気に飛び越せるが、向かい風時は3基のクライオ間欠泉と3基のクライオバンパー、砕け氷の上層ショートカットを使って押し戻されずに高度を保つ戦略が問われる。',
    act3: '【絶壁山頂＆秘密ゴール (9,300〜13,900px)】4基の落氷柱と強風が同時に襲う山頂を突破し通常ゴールへ到達。終盤の高架防風足場から上空秘密ルート(x=13,680, y=29)へ跳び移ると金色隠しゴールを発見でき、一気にWorld 5中盤「5-3」までワープできる！',
    specialNote: '自然の猛威×追い風大跳躍×防風遮蔽の戦略回（敵21体・オーブ14個）。隠しゴール「4-5 → 5-3」でW5序盤をも飛び越える大ワープが可能。',
    enemies: 'ブリザード・フェアリー / アイス・スケーター / フロスト・レイス / ミラー・フロスト / グレイシャー・ゴーレム / クライオ・タレット / パーマフロスト・ワーム / アイシクル・バット（計21体）',
    devNote: '風の強さによって同じジャンプでも飛距離がガラッと変わるのが面白い！防風モノリスの裏に入った瞬間、横雪の暴風がスッと遮られる感覚が気持ちよく決まった。',
  },
  {
    id: '4-6',
    code: '4-6',
    name: '絶対零度の氷柱強制高速降下',
    subtitle: 'Vertical Glacial Chute Plunge (y:-680→+780) & 600px/s Ice Sprint',
    lengthPx: 7000,
    checkpoints: 6,
    gimmicks: '【固有】氷河垂直シュート降下(verticalDescent, y:-680→+780) / 氷坂(1基) / バンパー(4基) / 冷凍ビーム(2基) / 落氷柱(5基) / 氷振子(2基)',
    act1: '【全体印象・氷河頂上シュート (y:-680 → +120)】4-4/4-5合流後に待つ、極寒の縦穴ダウンヒル！全長7,000px・6CP構成で、頭上から迫る落氷柱に急かされながら極薄の砕け氷棚とジグザグ氷スライダーを一気に駆け降りていく。',
    act2: '【氷底ピンボール縦穴 (y:+120 → +780)】下降ルートの途中を塞ぐ2基の冷凍ビームと2基の氷刃振子を、4基のクライオ・ピンボールバンパーで空中に軌道修正しながら潜り抜け、一気にy:+780の最深氷底へ到達。',
    act3: '【氷底超高速スプリント (x:1,800〜7,000px)】底部の大氷坂と超低摩擦床で600px/s超の爽快な氷上スライディング・ダッシュを決め、ミラー・フロストや氷河ゴーレムを駆け抜けて第二蒼氷要塞門へ飛び込む（敵18体・オーブ14個）。',
    specialNote: '3-6よりさらに急勾配＆低摩擦スピード感に特化した垂直ダウンヒル×高速水平フィニッシュの二段構え（敌18体）。クリアで4-砦2へ。',
    enemies: 'アイス・スケーター / フロスト・レイス / アイシクル・バット / ブリザード・フェアリー / ミラー・フロスト / クライオ・タレット / グレイシャー・ゴーレム / パーマフロスト・ワーム（計18体）',
    devNote: '上から高速で氷穴を滑り落ちて、そのまま底の長い氷坂でバビューンと加速してゴールまで突っ切る流れが最高に気持ちいい爽快回！',
  },
  {
    id: '4-FORT2',
    code: '4-砦2',
    name: '第二蒼氷要塞・コキュートス冷凍炉心',
    subtitle: 'Sub-Zero Composite Gauntlet & Cocytus Core (15HP)',
    lengthPx: 14400,
    checkpoints: 4,
    gimmicks: '【固有】氷刃振子(4基) / フロストマイン(5基) / 冷凍ビーム(4基) / 落氷柱(4基) / 相転移水氷(1基) / 中ボス「コキュートス・コア(15HP)」',
    act1: '【全体印象・外核ゲート (0〜4,800px)】W4で登場したギミックの総決算となる最終前哨要塞。砕け氷ステップと氷刃振子(4基)、感応地雷(5基)、クライオバンパー(2基)が切れ目なく連続し、一瞬の油断も許さない精密アクションが試される。',
    act2: '【冷凍炉心冷却槽 (4,800〜11,800px)】通路を閉ざす巨大冷却水槽に対し相転移スイッチを撃って液化・凍結を切り替えながら進み、4基の冷凍ビームと4基の落氷柱・20体の氷軍団を押し切る。上層バンパー迂回と下層直接突破の選択も熱い。',
    act3: '【炉心玉座アリーナ (12,000〜14,400px)】中ボス「コキュートス・コア(15HP)」が君臨！ワープ無しで空中を横断しながら落氷柱の雨と4方向（後半8方向）回転クライオビームを掃射してくる強敵だ。足場と2段ジャンプでビームを飛び越えて炉心を粉砕せよ！',
    specialNote: '4チェックポイント完備・敵20体＋15HP中ボス。氷結ギミック全種と真正面から向き合う重厚要塞。撃破でいよいよW4最終決戦「4-城」が出現。',
    enemies: 'グレイシャー・ゴーレム / フロスト・レイス / ミラー・フロスト / クライオ・タレット / アイス・スケーター / パーマフロスト・ワーム / アイシクル・バット / ブリザード・フェアリー / コキュートス・コア',
    devNote: 'ここまでのW4要素（砕け氷・振子・地雷・ビーム・ツララ・相転移）が1つの要塞の中に全部入り！コキュートスの回転ビームを跳んで避けながら撃ち込むのが楽しい。',
  },
  {
    id: '4-BOSS',
    code: '4-城',
    name: '蒼氷王城・終焉の氷帝玉座',
    subtitle: 'Grand Citadel (7,800px) & Emperor Glacies (18HP / 3 Forms)',
    lengthPx: 7800,
    checkpoints: 3,
    gimmicks: '【固有】氷鏡開門(1組) / 断続ブリザード＋防風壁(2基) / 氷間欠泉(2基)＋バンパー(2基)立体アリーナ / 最強氷帝「グレイシス(18HP・非ワープ)」',
    act1: '【全体印象・第1宮殿 鏡面迎賓廊 (0〜2,500px)】蒼氷王城の壮麗な行軍から始まるW4クライマックス。序盤は氷鏡へ魔導弾を反射させて王城跳ね橋を下ろし、感応地雷と氷刃振子(2基)・落氷柱(2基)を潜り抜けながら鏡面騎士と氷河巨兵の親衛隊(道中12体)を突破する。',
    act2: '【第2宮殿 吹雪の蒼橋 (2,500〜5,380px)】宮殿外橋では断続ブリザード(blizzardConfig: windVx±110)が吹き荒れ、2基の防風モノリスで風を凌ぎながら砕け氷と冷凍ビームをバンパー跳躍で渡り切って終焉玉座前チェックポイントへ到達。',
    act3: '【終焉玉座決戦 (5,480〜7,800px)】左右両端に湧くクライオ間欠泉と中央バンパーを活用した立体玉座で「絶対零度帝・グレイシス(18HP・3形態)」と死闘！瞬間移動ゼロの純粋機動力で放つ全幅往復スケート突進、全方位氷槍ファンネル、絶対零度回転ビームの3段階進化を打ち破り、赤の最終ワールド5へ進軍せよ！',
    specialNote: '道中12体＋18HP皇帝の真の王城決戦（敵12体・CP3・オーブ11個）。撃破で最終章 World 5「深紅覇王城と熾天の聖域」開放。',
    enemies: 'アイス・スケーター / ミラー・フロスト / グレイシャー・ゴーレム / フロスト・レイス / ブリザード・フェアリー / クライオ・タレット / パーマフロスト・ワーム / アイシクル・バット / 絶対零度帝・グレイシス',
    devNote: '王城に入る儀式（氷鏡開門）→吹雪橋→皇帝との真っ向勝負という流れを7,800pxに凝縮。グレイシスの全幅突進は迫力満点で絶対に最後まで壁際まで走り切る仕様。',
  },

  // ---- WORLD 5: 深紅覇王城と熾天の聖域（全12ステージ / 赤基調 / 超密度弾幕＆多層攻略） ----
  {
    id: '5-1',
    code: '5-1',
    name: '紅蓮の軌道高架線とスリング加速',
    subtitle: 'Crimson Bastion Gate, Scarlet Slings & Dual-Route Magma Belts',
    lengthPx: 3800,
    checkpoints: 1,
    gimmicks: '【固有】スカーレット・スリング加速輪(3基・接触で高速斜め大射出) / マグマ流ベルト(streamVx+95) / 紅玉バウンス台 / ターボパッド(1基) / トゲ(2基)',
    act1: '【全体印象・紅蓮城壁入口 (0〜1,050px)】赤い閃光が支配する最終ワールド5の開幕。冒頭のターボパッドから起伏ある紅鋼プラットフォームを駆け上がり、上層のruby_glass一方向足場＆scarlet_bounceバウンス台（金オーブ×3）か下層（槍兵クリムゾン・ランサー迎撃）の2ルートを選択し、第1スカーレット・スリング(x=965)で空中大跳躍！',
    act2: '【マグマ流中層分岐 (1,050〜2,150px)】x=1,050〜2,050ではトゲトラップ(-26HP)と紅玉砲台ルビー・タレットが守る下層マグマベルト(vx+95)に対し、x=1,140〜1,820に上空ruby_glass→scarlet_bounce迂回ルートを用意。中間CP(x=1,895)では大鎌スカーレット・リーパーと交戦し、第2スリング(x=2,075)へ飛び込む。',
    act3: '【連続スリング峡谷＆ゴール (2,150〜3,800px)】マグマ・インプが待つ孤島から第3スリング(x=2,480)を連鎖させ、爆撃機エンバー・ボマーと反射騎士ブラッド・ミラーが守る紅鋼砦前段を抜けて最終ゲート(x=3,685)へ着地する（敵9体・オーブ14個）。',
    specialNote: 'W5基盤ギミック「スカーレット・スリング(×3)」の爽快大跳躍と上下ルート取りを体感する紅蓮導入回。クリアで [5-砦1] が開放。',
    enemies: 'クリムゾン・ランサー / マグマ・インプ / ルビー・タレット / スカーレット・リーパー / エンバー・ボマー / ブラッド・ミラー（計9体）',
    devNote: '青と氷の4章からガラッと空気が変わるように、W5一発目から真っ赤な城壁＋スカーレットスリングの大ジャンプでド派手なスピード感を出した。',
  },
  {
    id: '5-FORT1',
    code: '5-砦1',
    name: '第一深紅砦・紅蓮処刑門',
    subtitle: 'Pendulum Halberd Gauntlet, Magma Geysers & Ruby Executor (14HP)',
    lengthPx: 3190,
    checkpoints: 1,
    gimmicks: '【固有】断罪の大刃振子(3基, -26HP) / 溶岩間欠泉(2基, -25HP) / 逆順マグマベルト(vx+110/-105) / 中ボス「ルビー・エグゼキューター(14HP)」',
    act1: '【全体印象・処刑門外廊 (0〜1,130px)】W5に3つ存在する要塞の第1弾。順流マグマベルト(vx+110)の上空を第1断罪大刃振子(cx=560)が薙ぐ関門では、上層ruby_glass高台ルート（金オーブ×3）へ逃げつつクリムゾン・ランサーを翻弄し、第1溶岩間欠泉(x=870)の噴火タイミングを見てブラッド・ミラーを突破する。',
    act2: '【振子精錬室 (1,130〜2,210px)】逆流マグマベルト(vx-105)と交差する2・3基目の大刃振子(cx=1275, 1650)をルビー・タレットの放射弾を潜りながら突破！x=1,290の上層足場ルートで安全迂回も可能。CP(x=1,920)と第2間欠泉(x=1,955)を越え、マグマ・インプを倒して決戦アリーナへ。',
    act3: '【断罪アリーナ (2,210〜3,190px)】両端ガラス足場を備えた980pxアリーナで処刑騎士「ルビー・エグゼキューター(14HP)」と対決！非ワープで踏み込み、衝撃波を伴う巨斧斬撃(-28HP)と反対壁まで完走する紅蓮ダイブ斬りを2段ジャンプで受け流し撃破せよ！',
    specialNote: 'W5最初の砦ボス戦（道中5体＋14HP中ボス）。撃破で灼熱工業区[5-2]へ進軍。',
    enemies: 'クリムゾン・ランサー / ブラッド・ミラー / ルビー・タレット / スカーレット・リーパー / マグマ・インプ / ルビー・エグゼキューター',
    devNote: 'W5最初の砦から振子大刃＋マグマ間欠泉＋巨大斧騎士の王道コンボ！上下2段ガラス足場を使ってエグゼキューターの斬撃を上から避ける駆け引きが楽しい。',
  },
  {
    id: '5-2',
    code: '5-2',
    name: '灼熱マグマベルト精錬工場',
    subtitle: '5-Magma Geyser Eruptions, Ember Vanish Pads & Dual Forges',
    lengthPx: 3760,
    checkpoints: 1,
    gimmicks: '【固有】5連溶岩間欠泉(5基, -25HP) / 崩壊残火(ember_vanish)足場(3枚) / 下層マグマ迂回橋 / スリング(1基)',
    act1: '【全体印象・第1間欠泉炉 (0〜1,220px)】マグマが噴き上がる精錬工場が舞台の起伏コース。第1間欠泉(x=470)を越えた先では、踏むと崩れる残火足場(x=700)で直進する上ルートと、下層マグマベルト(vx+115)＋紅玉バウンス台(金オーブ×3)を踏み抜ける下ルートの2経路が選択できる。',
    act2: '【崩壊残火と第3〜4間欠泉 (1,220〜2,340px)】第3間欠泉(x=1,320)とエンバー・ボマー爆撃を越え、残火足場連帯(x=1570, 1770)を進むか、ruby_glass高層キャットウォーク(x=1530, 1810)でルビー・タレットを叩きながら金オーブ×4を回収する立体選択が熱い。CP(x=2,010)に第4間欠泉(x=2,080)が待つ。',
    act3: '【噴火クライマックス (2,340〜3,760px)】第5間欠泉(x=2,440)から紅玉バウンス台(x=2,680)で急上昇し、ブラッド・ミラーとクリムゾン・ランサーを最終スリング(x=3,255)大跳躍で抜き去りゴール(x=3,645)へ到達（敵7体・オーブ10個）。',
    specialNote: '最多5基の溶岩間欠泉と残火足場・上下複層ルートが持ち味。クリアで5-3へ。',
    enemies: 'マグマ・インプ / クリムゾン・ランサー / エンバー・ボマー / ルビー・タレット / スカーレット・リーパー / ブラッド・ミラー（計7体）',
    devNote: '上下にバウンス迂回橋と高所キャットウォークを配置したので、残火足場が苦手なプレイヤーは下から、スコア狙いは上からというW5版マリオWii感がしっかり出せた。',
  },
  {
    id: '5-3',
    code: '5-3',
    name: '血晶鏡と振子大刃の回廊（紅玉レール＆弾幕）',
    subtitle: 'High-Speed Ruby Grind Rails, Aerial Danmaku Rings & Wyverns',
    lengthPx: 3860,
    checkpoints: 1,
    gimmicks: '【固有】3連紅玉レール(x:280→2560) / 弾幕発生結晶エミッター(3基: 8Wayリング＆5Way扇) / スリング(1基) / 残火足場(2枚)',
    act1: '【全体印象・第1〜2紅玉レール滑走 (0〜1,860px)】空中に張り巡らされた3本の高速紅玉レールをグラインドしながら、弾幕結晶エミッター(de53_1, de53_2)が放つ8Wayリング弾や5Way扇弾をジャンプで回避する爽快空中戦！レール下には落下リカバリー兼金オーブ回収用のバウンス島・加速ベルト島(x=420, 1120)を設置。',
    act2: '【中盤ステーション＆第3レール (1,860〜2,930px)】紅蓮飛龍インフェルノ・ワイバーンの急降下羽根弾と第1スリング(x=1,815)を越え、CP(x=1,920)から第3紅玉レール(x=2,095→2,560)へ飛び乗る！上空では戦乙女ビットヴァルキリー・ビットと8Wayリング弾幕(de53_3)が交差する華麗な空中舞踏。',
    act3: '【残火突破＆鏡面フィニッシュ (2,930〜3,860px)】x=2,930, 3,170の崩落残火足場を2連ワイバーンの攻撃を潜り抜けて駆け抜け、反射盾ブラッド・ミラーを背面撃ち・踏みつけで突破してゴールへ（敵7体・オーブ16個）。',
    specialNote: 'レール滑走×空中リング弾幕の融合コース。4-5の秘密ゴールからのクロスワールド・ワープ合流先でもある要衝ステージ。',
    enemies: 'インフェルノ・ワイバーン / ルビー・タレット / クリムゾン・ランサー / ヴァルキリー・ビット / スカーレット・リーパー / ブラッド・ミラー（計7体）',
    devNote: 'レールの上を高速で滑りながら8Way弾幕の隙間をジャンプで飛び越えるのがSTG＋アクションみたいで爽快！下にリカバリー島を置いたので安心感も高い。',
  },
  {
    id: '5-4',
    code: '5-4',
    name: '朱玉バウンス＆消失足場天空塔（紅蓮大聖堂）',
    subtitle: 'Scarlet Cathedral Dual-Route & Upper Secret Warp to 5-7',
    lengthPx: 3680,
    checkpoints: 1,
    gimmicks: '【固有】上層秘密尖塔ルート vs 下層本堂ルート完全2層分岐 / 大刃振子(2基) / スリング(2基) / 上空秘密ゴール(WARP→5-7)',
    act1: '【全体印象・聖堂入口 (0〜1,740px)】壮麗な深紅大聖堂の中を進む二大ルート探索コース。序盤はスカーレット・リーパーとブラッド・ミラーを破り、x=1,410の大型紅玉バウンス台と上空スリング(x=1,530)の地点で「下層本堂（通常ゴール）」へ進むか「上層尖塔（秘密ワープ）」へ飛び移るかの運命の分岐が発生！',
    act2: '【完全分岐：下層本堂 vs 上層秘密尖塔 (1,740〜3,180px)】下層(y=305〜345)は堅実な足場と槍兵防衛線を抜ける王道ルート。一方の上層尖塔(y=125〜185)はruby_glass・残火足場・バウンス台・2基の大刃振子(cx=1890, 2970)と第2スリング(x=2,750)、戦乙女ビット＆紅玉砲台が立ち並ぶスリリングな天空アスレチック！',
    act3: '【通常ゴール ＆ 秘密ワープ(x=3,410, y=53)】下層を突破すればx=3,565の通常ゴールで5-5へ。上層尖塔を最後まで踏み外さず駆け抜けた者は、最上階テラス(x=3,410, y=53)の金色秘密ゴールから5-5・5-6・5-砦2を一気に飛び越えて「5-7」へ特大ワープできる！',
    specialNote: '看板でも明確なヒントを示すW5屈指の探索ステージ（敵7体・オーブ11個）。上層攻略の見返りがW5後半「5-7」直通という熱い構造。',
    enemies: 'スカーレット・リーパー / ブラッド・ミラー / クリムゾン・ランサー / ヴァルキリー・ビット / ルビー・タレット（計7体）',
    devNote: 'まさにスーパーマリオWiiの「正規ルートの下を歩いてもいいし、上の秘密ルートに気づいて腕試しで登れば2ステージ以上ショートカットできる」大好物構造をW5に入れた！',
  },
  {
    id: '5-5',
    code: '5-5',
    name: '獄炎間欠泉＆弾幕砲台渓谷（断罪振子工場）',
    subtitle: '4-Pendulum Blade Foundry, Reverse Magma Belts & Mobile Dock',
    lengthPx: 3640,
    checkpoints: 1,
    gimmicks: '【固有】4連大刃ギロチン振子(4基, -26HP) / 爆走マグマベルト(vx+130/-120/+140) / 往復移動ドック(1基) / 高所安全バイパス(2基)',
    act1: '【全体印象・第1〜2ベルト工場 (0〜1,830px)】最大4基の大刃ギロチン振子が凄まじい速度で往復する紅蓮鍛造工場。下段の順流(+130)・逆流(-120)マグマベルト上で大刃のタイミングを計りながら戦うハードルートと、上空のruby_glass高台キャットウォーク(x=520, 1210)で金オーブ×6を取りつつ頭上を安全回避する上下ルートを選択できる。',
    act2: '【中盤移動ドック渡り (1,830〜2,830px)】CP(x=1,880)の先は奈落上に架かる水平移動足場(mp55_1: x=2130〜2330)で、エンバー・ボマーが空中から爆撃弾を投下してくる緊迫の精密渡り。渡り終えるとvx+140の超高速マグマベルト＋第3大刃振子(cx=2,600)のコンボが加速させる。',
    act3: '【最終断罪ゲート (2,830〜3,640px)】ルビー・タレット砲台の高台を抜け、ゴール目前の最終第4大刃振子(cx=3,340)と大鎌リーパーの波状刃をタイミングよく潜り抜けてゴール(x=3,525)へ（敵6体・オーブ10個）。',
    specialNote: '移動リフト×4連振子×爆走コンベアの精密リズム回。5-4隠しゴールを使わなかった場合の王道難所。クリアで5-6へ。',
    enemies: 'エンバー・ボマー / ブラッド・ミラー / クリムゾン・ランサー / ルビー・タレット / スカーレット・リーパー（計6体）',
    devNote: '下を通ればベルトと振子でスリリング、上ガラス棚を見つければ安全に抜けてボーナスオーブも取れる、という上下ルートメリハリが効いた一戦。',
  },
  {
    id: '5-6',
    code: '5-6',
    name: '深紅の嵐・強制推進ハイウェイ（連鎖スリング弾幕渓谷）',
    subtitle: '3-Chained Scarlet Slings, Spiral Danmaku Emitters & Magma Bounce',
    lengthPx: 3500,
    checkpoints: 1,
    gimmicks: '【固有】3連スカーレット・スリング渓谷 / 螺旋＆輪舞弾幕結晶(3基: 螺旋2＋8Way1) / 溶岩間欠泉(1基) / 残火(1枚) / バウンス救助床(3基)',
    act1: '【全体印象・第1〜2空中スリング (0〜1,770px)】空中に浮かぶ3基のスカーレット・スリングを飛び継ぎながら、螺旋弾幕エミッターの隙間を縫う超ダイナミック空中回！序盤いきなりx=325のスリングでワイバーン頭上を跳躍し、x=755の螺旋弾幕を抜け、x=930の第2スリングで一気に中盤へ飛ぶ（下にリカバリー用バウンス島も配置）。',
    act2: '【間欠泉＆CP中枢 (1,220〜2,420px)】溶岩間欠泉(x=1,320)と崩壊残火(x=1,550)を経由してCP(x=1,815)へ着地。ここは8Wayリング弾幕エミッター(de56_2)とスカーレット・リーパーの紅刃波が同時に迫る激戦足場。',
    act3: '【第3スリング＆螺旋フィニッシュ (2,120〜3,500px)】第3スリング(x=2,120)で戦乙女ビットの待つ空中戦域へ飛び出し、螺旋エミッター(de56_3)をバウンス台(x=2,750)からの上空大ジャンプで超えて、ワイバーン＆槍兵を守る最終ゴールへ着地（敵7体・オーブ10個）。',
    specialNote: 'W5自慢のスカーレットスリング連鎖と螺旋弾幕結晶のスリルを全開で味わえる空中渓谷（オーブ10個）。クリアで5-砦2へ。',
    enemies: 'インフェルノ・ワイバーン / クリムゾン・ランサー / マグマ・インプ / スカーレット・リーパー / ヴァルキリー・ビット（計7体）',
    devNote: '「スリングで宙を舞う爽快感」と「螺旋弾幕を避ける緊張感」を1本の空中渓谷に混ぜ合わせた！失敗しても下のリカバリーバウンス台で戻れる親切さも仕込んだ。',
  },
  {
    id: '5-FORT2',
    code: '5-砦2',
    name: '第二深紅砦・熔鉄炉心殿',
    subtitle: 'Crucible Timed Hazards & Furnace Titan Boss (17HP)',
    lengthPx: 3180,
    checkpoints: 1,
    gimmicks: '【固有】溶岩間欠泉(2基) / 大刃振子(1基) / 爆走マグマベルト(vx+125) / 残火足場(2枚) / 中ボス「ファーネス・タイタン(17HP)」',
    act1: '【全体印象・熔鉄炉アプローチ (0〜1,320px)】5-砦3を目前に控えた重鉄鋳造要塞。ブラッド・ミラーの反射盾をかわしながら第1溶岩間欠泉(x=520)を越え、崩壊残火(x=760)を素早く踏み抜けて高台へ。ルビー・タレットと第2間欠泉(x=1,080)が守る高炉デッキを突破する。',
    act2: '【振子コンベア渡り (1,320〜2,190px)】vx+125の高速マグマベルト上で爆撃機エンバー・ボマーの投下火球と第1大刃振子(cx=1,460)を同時に捌き、残火足場(x=1,690)からCP(x=1,940)に着地して最終武装を整える。',
    act3: '【炉心決戦 (2,190〜3,180px)】2段ガラス足場を備えた990pxアリーナで「溶鉱巨神ファーネス・タイタン(17HP)」と激突！瞬間移動一切無しの巨体で、アリーナ端まで届く重装マグマ弾ばら撒き・飛び上がり地響き衝撃波・全幅突進を繰り出す迫力の巨神戦を制し、次の熾天弾幕エリアへ！',
    specialNote: '道中4体の精鋭を抜けた先に待つHP17の中ボス戦。撃破でいよいよ話題の超高密度弾幕前奏曲 [5-7] が解放。',
    enemies: 'ブラッド・ミラー / ルビー・タレット / エンバー・ボマー / クリムゾン・ランサー / 溶鉱巨神・ファーネス・タイタン',
    devNote: '5-砦3が超高密度弾幕の熾天使なので、その手前の5-砦2はあえて重量級の「溶鉱巨神のパワフル肉弾戦」にしてボスキャラの方向性を完全に分離した！',
  },
  {
    id: '5-7',
    code: '5-7',
    name: '熾天弾幕の前奏曲・紅輪祭壇（5-砦3モチーフ・プレリュード）',
    subtitle: 'Seraph Prelude: 5 Rose/Spiral/Ring Danmaku Emitters & Valkyrie Swarm',
    lengthPx: 3730,
    checkpoints: 1,
    gimmicks: '【固有】5基の高密度薔薇輪舞・螺旋弾幕エミッター(rose×3 / spiral×1 / ring×1) / スリング(2基) / 残火(1枚) / 戦乙女ビット隊(5体)',
    act1: '【全体印象・薔薇輪舞の導入祭壇 (0〜1,650px)】要望に基づき「5-砦3をモチーフとした前奏曲ステージ」として徹底構築！開始直後からrose型10Way二重薔薇弾幕(de57_1)とヴァルキリー・ビット(戦乙女ビット)の6Way展開弾が夜空を鮮烈に埋め尽くし、第1スリング(x=970)と5Way螺旋エミッター(de57_2)の狭間を縫うSTGさながらの弾幕見切りアクションを展開。',
    act2: '【中盤・弾幕観測バルコニー (1,650〜2,560px)】バウンス台(x=1,380)を越えてCP(x=1,705)へ。ここは上空ruby_glass観測バルコニー(x=1700)直上に12Way薔薇弾幕結晶(de57_3)が鎮座し、戦乙女ビット＆大鎌リーパーと立体弾幕交差を生む。第2スリング(x=2,265)と残火足場(x=2,330)で高度を確保して進む。',
    act3: '【終盤・二重聖輪フィニッシュ (2,560〜3,730px)】反射騎士ブラッド・ミラー背後には10Way高速リング弾幕(de57_4)と観測バルコニー(x=2,600)、終盤ゴール前には12Way薔薇弾幕(de57_5)＋ダブル・ヴァルキリー・ビットの二重奏が待ち受け、プレイヤーの弾幕回避力を5-砦3本番へ向けて極限まで研ぎ澄ませる！',
    specialNote: '全8体のうち5体がヴァルキリー・ビット＋最多5基の弾幕発生装置という明確なモチーフ統一（オーブ11個）。5-4隠しゴールのワープ先でもあり、5-砦3への最高の架け橋。',
    enemies: 'ヴァルキリー・ビット(×5) / ルビー・タレット / スカーレット・リーパー / ブラッド・ミラー（計8体）',
    devNote: '「5-7も5-砦3をモチーフとしたコースにして」というオーダーに120%応えた弾幕ステージ！Roseパターンの綺麗な薔薇弾幕とヴァルキリービットの白い閃光弾が画面を彩る様が最高。',
  },
  {
    id: '5-FORT3',
    code: '5-砦3',
    name: '第三深紅砦・熾天弾幕聖域',
    subtitle: 'APEX FORTRESS: 24HP Scarlet Seraph & High-Density Danmaku Hell',
    lengthPx: 2320,
    checkpoints: 1,
    gimmicks: '【固有】12Way薔薇弾幕＋5Way螺旋結晶(2基) / 2段ガラス＋中央バウンス立体アリーナ / 最狂ボス「熾天使スカーレット・セラフ(24HP・3段階高密度弾幕)」',
    act1: '【全体印象・熾天聖域参道 (0〜1,340px)】シリーズ屈指の超強敵ボスが待つ最終関門砦！参道からいきなり12Way薔薇弾幕(de5f3_1)と5Way高速螺旋(de5f3_2)＋ヴァルキリー・ビット2体＋クリムゾン・ランサーが凝縮された濃厚序盤を抜け、CP(x=1,110)で全集中してアリーナへ挑む。',
    act2: '【熾天使・第1〜2弾幕フェーズ (x:1,340〜2,240px)】最大HP24を誇る「熾天使スカーレット・セラフ」はワープ一切無しで翼を広げ空を舞い、Phase1から10〜14Way二重螺旋ローズ弾幕と狙い撃ち扇弾の複合を絶え間なく展開！続く停止予兆付き「9〜12連聖輪ヘイロー収束弾＋地面4〜6本紅蓮ピラー光柱」の同時攻撃がアリーナ全域を染め上げる。',
    act3: '【熾天使・最終翼掃討＆撃破 (HP≦8)】最終Phase3では壁から壁へアリーナ全幅を完走する高速ウイング・スウィープ突進を放ちながら、背後へ無数の熾天羽根弾幕を降り注がせる！両端のガラス足場(x=1475, 1960)と中央バウンス台(x=1730)の3次元回避を駆使して熾天を撃ち落とし、聖域ゴール(x=2,225)を掴み取れ！',
    specialNote: '「5-砦3ボスをめちゃめちゃ強く・高密度弾幕＆派手演出に」の要望を体現した裏ラスボス級24HP大激戦（道中3体＋セラフ24HP）。撃破で最終決戦ロード5-8へ。',
    enemies: 'ヴァルキリー・ビット / クリムゾン・ランサー / 熾天使・スカーレット・セラフ（24HP）',
    devNote: '5-砦3にすべてを懸けて作り込んだ！セラフが放つ二重螺旋バラ弾幕と地面から一斉に噴き上がる紅蓮ピラー、ヘイロー収束弾の美しさと強さのバランスが開発中一番テンション上がった部分。',
  },
  {
    id: '5-8',
    code: '5-8',
    name: '終焉紅都・多層ギミック複合螺旋',
    subtitle: 'All-Hazard Final Citadel Skybridge (Sling, Pendulum, Geyser & Danmaku)',
    lengthPx: 3720,
    checkpoints: 1,
    gimmicks: '【固有】W5全ギミック集大成(スリング×1 / 大刃振子×2 / 弾幕結晶×2 / 溶岩間欠泉×1 / マグマベルト / 残火×3 / 上層バウンス迂回)',
    act1: '【全体印象・王都外郭複合橋 (0〜1,910px)】覇王城玉座へ至る最後の総力戦ステージ。残火足場(x=680)頭上をワイバーンが飛び、8Wayリング弾幕(de58_1)＋ブラッド・ミラーの反射戦を越えた先には、vx+130爆走マグマベルト＆大刃振子(cx=1335)の危険ルートと、上層ガラス＆バウンス台迂回ルート(x=1160〜1610・金オーブ×4)の2層分岐が待っている。',
    act2: '【中盤間欠泉＆スリング大跳躍 (1,555〜2,800px)】第1溶岩間欠泉(x=1,650)とヴァルキリー・ビットの迎撃を凌いでCP(x=1,940)へ到着し、スカーレット・スリング(x=2,215)で巨大な紅都奈落を飛び越えた先では5Way螺旋弾幕(de58_2)とリーパーの紅刃が待ち受ける。',
    act3: '【残火二連＆最終振子門 (2,800〜3,720px)】ワイバーンが飛び交う2連崩落残火足場(x=2800, 3010)を駆け抜け、最後の第2大刃振子(cx=3,360)とクリムゾン・ランサーを抜ければ、いよいよ最終決戦ステージ「5-城」の門が開く（敵7体・オーブ11個）。',
    specialNote: 'W5で培ったすべての回避・探索・弾幕見切り技術が試される最終前衛コース。クリアで最終面「5-BOSS 深紅覇王城・紅蓮玉座」開放。',
    enemies: 'クリムゾン・ランサー / インフェルノ・ワイバーン / ブラッド・ミラー / ヴァルキリー・ビット / スカーレット・リーパー（計7体）',
    devNote: '5-砦3を乗り越えたプレイヤーが、最後に「W5の面白さ全部盛り」を堪能しながら覇王城へ向かう王道の終盤ステージ。上層ガラスでベルトを回避できる隠し小技も効いている。',
  },
  {
    id: '5-BOSS',
    code: '5-城',
    name: '深紅覇王城・紅蓮玉座',
    subtitle: 'GRAND FINALE: Crimson Sovereign (26HP / 3 Forms) Throne Duel',
    lengthPx: 2370,
    checkpoints: 1,
    gimmicks: '【固有】スリング(1基) / 紅玉バウンス前衛橋 / 2段ガラス＋中央バウンス王座(930px) / 真の最終覇王「クリムゾン・ソヴリン(26HP・3形態・非ワープ)」',
    act1: '【全体印象・覇王城回廊 (0〜1,360px)】全5ワールド49ステージの終着点となる真のラスボス決戦ステージ。前座のクリムゾン・ランサーからスカーレット・スリング(x=655)で大きく宙を舞い、紅玉バウンス台上のヴァルキリー・ビットと大鎌スカーレット・リーパー(CP: x=1,095)を撃破して紅蓮玉座の間へ歩み入る。',
    act2: '【玉座決戦・第1〜2形態 (x:1,360〜2,290px)】シリーズ最高耐久26HPを誇る「紅蓮皇帝クリムゾン・ソヴリン」が玉座に君臨！セラフの細密弾幕とは対極となる「覇王の超火力・重圧戦闘」で、10〜14Way灼熱ノヴァ・フレアと地面から連続隆起する5〜6本の大規模クリムゾン・グラウンドスパイク（跳弾フレア付き）が玉座を揺るがす。',
    act3: '【最終形態・非ワープ覇王突進＆撃破 (HP≦9)】終盤Phase3でも瞬間移動ワープは一切使わず、現在位置から狙いを定めて反対側の城壁まで完全に走り切る超迫力の連続覇王突進＋全域ノヴァ弾を連発！左右のruby_glass足場(x=1495, 2010)と中央高台scarlet_bounce(x=1755)を立体的に駆使し、覇王を討ち倒して全ワールド完全制覇を成し遂げよ！',
    specialNote: '真の最終ボス(26HP)＋精鋭3体の王道ラスボス決戦（オーブ7個）。5-砦3セラフの弾幕地獄と対になる堂々たる皇帝戦でNOCTURNE STRIDEの物語が完結する！',
    enemies: 'クリムゾン・ランサー / ヴァルキリー・ビット / スカーレット・リーパー / 紅蓮皇帝・クリムゾン・ソヴリン（26HP）',
    devNote: '5-砦3のセラフと役割が被らないように、ソヴリンは「圧倒的王者の地面スパイク＋バウンスノヴァ＋端から端までの重厚ダッシュ」という別の強さと威厳に振り切った！全49ステージ完走の達成感は最高。',
  },
];

/**
 * Factory helper to instantiate any of the 45 EnemyKind units in a sandbox or stage
 * with consistent dimensions, HP, patrol bounds, and anchor coordinates.
 */
export function createEnemyDefForKind(
  kind: EnemyKind,
  id: string,
  centerX: number,
  floorY: number,
  minX: number,
  maxX: number
): EnemyDef {
  const mk = (
    w: number,
    h: number,
    y: number,
    vx: number,
    hp: number,
    extra: Partial<EnemyDef> = {}
  ): EnemyDef => ({
    id,
    kind,
    x: centerX - w * 0.5,
    y,
    w,
    h,
    minX,
    maxX,
    vx,
    vy: 0,
    baseY: y,
    facing: -1,
    hp,
    alive: true,
    phase: 0,
    anchorX: centerX,
    anchorY: y,
    ...extra,
  });

  switch (kind) {
    case 'patrol_drone':
      return mk(28, 22, floorY - 62, -75, 1);
    case 'hopping_bot':
      return mk(26, 26, floorY - 26, -68, 1);
    case 'shield_trooper':
      return mk(26, 36, floorY - 36, -50, 2);
    case 'sniper_turret':
      return mk(24, 24, floorY - 140, 0, 1, { mount: 'ceiling', aimTimer: 0 });
    case 'slime_glitch':
      return mk(28, 18, floorY - 18, -60, 1);
    case 'ghost_wisp':
      return mk(26, 26, floorY - 105, -48, 1);
    case 'bulldozer_mech':
      return mk(38, 28, floorY - 28, -46, 2, { chargeState: 'patrol', chargeTimer: 0 });
    case 'bomb_walker':
      return mk(24, 24, floorY - 24, -54, 1);
    case 'arcane_caster':
      return mk(26, 34, floorY - 34, 0, 2, { fireCooldown: 0.9 });
    case 'neon_bat':
      return mk(26, 22, 62, 0, 1, { mount: 'ceiling', chargeState: 'patrol', anchorY: 62 });
    case 'skate_courier':
      return mk(28, 30, floorY - 30, -190, 1);
    case 'riot_baton':
      return mk(28, 36, floorY - 36, -58, 2, { chargeState: 'patrol' });
    case 'volt_jelly':
      return mk(28, 30, floorY - 125, -38, 1, { fireCooldown: 1.5 });
    case 'rail_spider':
      return mk(28, 22, 54, -115, 1, { mount: 'ceiling', chargeState: 'patrol', anchorY: 54 });
    case 'magnet_orb':
      return mk(28, 28, floorY - 120, 0, 2, { anchorX: centerX, anchorY: floorY - 120 });
    case 'prism_reflector':
      return mk(28, 36, floorY - 36, -32, 2);
    case 'mortar_crab':
      return mk(34, 26, floorY - 26, -42, 2, { fireCooldown: 1.4 });
    case 'stealth_ninja':
      return mk(26, 34, floorY - 34, -85, 1, { fireCooldown: 1.1, customAlpha: 0.28 });
    case 'saw_wheel':
      return mk(30, 30, floorY - 30, -175, 999, { invulnMode: true });
    case 'holo_decoy':
      return mk(26, 34, floorY - 34, -80, 1, { subTimer: 2.2 });
    case 'cryo_slime':
      return mk(28, 20, floorY - 20, -88, 2);
    case 'arc_pylon':
      return mk(22, 40, floorY - 40, 0, 2, { fireCooldown: 1.4 });
    case 'grimoire_mimic':
      return mk(26, 28, floorY - 90, 0, 2, { chargeState: 'patrol' });
    case 'rune_sentinel':
      return mk(34, 44, floorY - 44, -36, 3, { fireCooldown: 1.8 });
    case 'mirror_wraith':
      return mk(26, 36, floorY - 100, -55, 1, { subTimer: 2.0 });
    case 'chrono_pendulum':
      return mk(30, 30, 180, 0, 999, { anchorX: centerX, anchorY: 48, invulnMode: true });
    case 'gravity_imp':
      return mk(26, 26, floorY - 115, -64, 1, { fireCooldown: 1.6 });
    case 'ink_specter':
      return mk(28, 34, floorY - 105, -52, 2, { fireCooldown: 1.3 });
    case 'star_weaver':
      return mk(30, 30, floorY - 145, -45, 2, { fireCooldown: 1.8 });
    case 'golem_knight':
      return mk(34, 44, floorY - 44, -35, 4, { chargeState: 'patrol' });
    case 'mana_leech':
      return mk(24, 20, floorY - 110, -70, 1, { chargeState: 'patrol' });
    case 'sigil_bomber':
      return mk(30, 24, floorY - 175, -70, 2, { fireCooldown: 1.2 });
    case 'void_eye':
      return mk(28, 28, floorY - 125, 0, 2, { fireCooldown: 1.4, invulnMode: false });
    case 'flame_thruster':
      return mk(32, 28, floorY - 28, -50, 2, { chargeState: 'patrol', chargeTimer: 1.2 });
    case 'jet_trooper':
      return mk(28, 36, floorY - 120, -90, 2, { fireCooldown: 1.3 });
    case 'railgun_mech':
      return mk(38, 42, floorY - 42, 0, 3, { aimTimer: 0 });
    case 'aegis_drone':
      return mk(30, 30, floorY - 95, -62, 2);
    case 'cluster_mine':
      return mk(26, 26, floorY - 105, 0, 1);
    case 'vortex_fan':
      return mk(30, 42, floorY - 42, 0, 2, { subTimer: 0 });
    case 'plasma_hound':
      return mk(32, 24, floorY - 24, -95, 2, { chargeState: 'patrol' });
    case 'drill_mole':
      return mk(30, 26, floorY - 26, -72, 2, { chargeState: 'patrol', chargeTimer: 1.4 });
    case 'tesla_walker':
      return mk(30, 38, floorY - 38, -48, 2, { fireCooldown: 1.6 });
    case 'phantom_knight':
      return mk(30, 40, floorY - 40, -60, 3, { chargeState: 'patrol', chargeTimer: 1.2 });
    case 'bio_spore':
      return mk(26, 26, floorY - 115, -30, 1, { fireCooldown: 2.0 });
    case 'omega_drone':
      return mk(34, 28, floorY - 110, -95, 4, { fireCooldown: 1.4 });
    case 'gear_roller':
      return mk(30, 30, floorY - 30, -155, 2);
    case 'spark_jelly':
      return mk(30, 32, floorY - 125, -46, 2, { fireCooldown: 2.2, subTimer: 0 });
    case 'laser_drone':
      return mk(30, 24, floorY - 125, -58, 2, { aimTimer: 0, fireCooldown: 1.8 });
    case 'thunder_imp':
      return mk(32, 30, floorY - 175, -92, 2, { fireCooldown: 1.6, subTimer: 0 });
    case 'spring_bumper':
      return mk(34, 24, floorY - 24, -62, 2, { subTimer: 0 });
    case 'magnet_crane':
      return mk(36, 26, floorY - 195, -58, 3, { subTimer: 0 });
    case 'mirror_gear':
      return mk(32, 32, floorY - 75, -54, 3, { chargeState: 'patrol', chargeTimer: 0 });
    case 'tether_spark':
      return mk(28, 24, floorY - 150, -50, 2);
    case 'gravity_flipper':
      return mk(28, 28, floorY - 115, -46, 2, { subTimer: 0 });
    case 'dash_rammer':
      return mk(36, 30, floorY - 30, -72, 3, { chargeState: 'patrol', chargeTimer: 0 });
    case 'thorn_weaver':
      return mk(32, 34, floorY - 34, -48, 3, { fireCooldown: 1.5 });
    case 'emerald_mantis':
      return mk(32, 36, floorY - 36, -76, 3, { chargeState: 'patrol', chargeTimer: 0 });
    case 'prism_spore':
      return mk(30, 30, floorY - 125, -56, 2, { fireCooldown: 1.7 });
    case 'chrono_vine':
      return mk(30, 38, floorY - 38, 0, 3, { fireCooldown: 1.8, subTimer: 0 });
    case 'bio_hydra':
      return mk(38, 42, floorY - 42, -38, 4, { fireCooldown: 1.5, subTimer: 0 });
    case 'jade_sniper':
      return mk(28, 28, floorY - 135, -42, 2, { aimTimer: 0, fireCooldown: 1.9 });
    case 'frost_wraith':
      return mk(28, 32, floorY - 120, -58, 2, { fireCooldown: 1.8 });
    case 'icicle_bat':
      return mk(28, 24, floorY - 165, 0, 1, { chargeState: 'patrol', anchorY: floorY - 165 });
    case 'glacier_golem':
      return mk(38, 46, floorY - 46, -34, 5, { fireCooldown: 1.9 });
    case 'cryo_turret':
      return mk(30, 30, floorY - 30, 0, 2, { fireCooldown: 1.5 });
    case 'blizzard_fairy':
      return mk(28, 28, floorY - 120, -62, 2, { fireCooldown: 2.0 });
    case 'ice_skater':
      return mk(28, 34, floorY - 34, -225, 2, { subTimer: 1.4 });
    case 'mirror_frost':
      return mk(30, 38, floorY - 38, -46, 3);
    case 'permafrost_wyrm':
      return mk(30, 32, floorY - 32, -52, 3, { chargeState: 'patrol', chargeTimer: 0 });
    case 'crimson_lancer':
      return mk(32, 38, floorY - 38, -72, 3, { chargeState: 'patrol', chargeTimer: 0 });
    case 'magma_imp':
      return mk(28, 26, floorY - 125, -68, 2, { fireCooldown: 1.5 });
    case 'ruby_turret':
      return mk(32, 32, floorY - 32, 0, 3, { fireCooldown: 1.35, subTimer: 0 });
    case 'scarlet_reaper':
      return mk(32, 38, floorY - 38, -58, 3, { fireCooldown: 1.6 });
    case 'ember_bomber':
      return mk(34, 26, floorY - 165, -82, 2, { fireCooldown: 1.4 });
    case 'blood_mirror':
      return mk(30, 38, floorY - 38, -48, 3);
    case 'inferno_wyvern':
      return mk(36, 28, floorY - 145, -135, 3, { fireCooldown: 1.15, anchorY: floorY - 145 });
    case 'valkyrie_bit':
      return mk(28, 34, floorY - 135, -66, 3, { fireCooldown: 1.55, subTimer: 0 });
  }
}

export const CONSOLIDATED_PROMPT_TEXT = `【NOCTURNE STRIDE — 完全集約プロンプト ＆ 詳細設計仕様書（無制限累積版）】

====================================================================
1. コアコンセプト ＆ ビジュアルスタイル
====================================================================
■ ジャンル：スーパーマリオブラザーズ3 インスパイア 2D横スクロールアクション（60fps固定タイムステップ物理）
■ 世界観テーマ：「現実味のある夜の都市 × 魔法 × 近未来」のアーバン・ファンタジー
■ 背景演出：
  - 深い藍色の夜空・三日月・明滅する星々
  - 遠景・近景2層のパララックス都市ビル群＆ネオンサイン看板
  - ステージ別環境ビジュアル：
    1) 1-1 ネオン大通り（高架ゲート・坂道誘導矢印）
    2) 1-2 地下魔導メトロ（暗闇マスク＋プレイヤー光源ランタン＋照明スイッチ点灯）
    3) 1-3 ホログラム高層ビル（青空ネオン摩天楼・消滅ホロ床・上下左右エレベーター）
    4) 砦 魔導警備ゲート（赤色警報ランプ点滅・トゲ・回転レーザー・要塞装甲）
    5) 1-4 雨のネオン商店街（常時雨粒パーティクル・低摩擦濡れアスファルト・無印隠し屋根）
    6) 1-S 地下秘密魔導庫（黄金結晶粒子・大量の回復金オーブ・ボム連鎖ブロック）
    7) 1-5 浮遊する魔導図書館（上昇気流シャフト・低重力星図ドーム・ワープ魔法の鏡ペア）
    8) 1-6 高速モノレール屋根上疾走（136px/s強制横スクロール・高速流線・列車屋根アスレチック）
    9) 1-BOSS 電脳魔導飛行船（嵐の稲妻フラッシュ・重砲台・複層甲板・艦橋決戦アリーナ）
■ 主人公キャラクター：
  - 大きめのダークカラー・フード付きパーカー／ローブを纏った小柄なデフォルメ体形
  - 暗いフードの奥でシアン（#7ef9ff）に光る2つの瞳（定期的な瞬き演出付き）
  - 移動速度・ジャンプ・風圧に応じて物理演算で後方にたなびく多関節マフラー
  - ジャンプ伸縮（スカッシュ＆ストレッチ）、2段ジャンプ時の前方スピン回転＋足元魔法リング

====================================================================
2. スマホ向け・仮想ボタン無しの直感マルチタッチ操作 ＆ PC操作
====================================================================
■ 横画面（ランドスケープ）推奨・縦画面時は自動的に操作一時停止＋横向き案内オーバーレイ表示
■ 仮想十字キー／仮想ボタンを画面上に一切描画しない完全ダイレクト操作：
  - 【画面左半分（移動エリア）】：
    ・触れた指の位置を基準点とするフローティングスティック（離す距離に応じて歩行〜ダッシュまで滑らかに速度変化）
    ・一定以上ドラッグすると指に追従するスマートアンカー補正
    ・下方向への素早いフリックで「スライディング」発動（坂道で超加速＆軽量敵を一掃）
    ・指の周辺に回転する薄いシアン魔法陣リングを表示してタッチフィードバック
  - 【画面右半分（アクションエリア）】：
    ・タップでジャンプ（指を離すタイミングで高さが変わる「可変ジャンプ」）
    ・空中で再度タップすると「2段ジャンプ（ダブルジャンプ）」発動（足元に魔法リング出現）
    ・右方向へのスワイプ／2本指タップ／ダブルタップで前方へ高速「魔導弾」発射（連射クールタイム0.23秒）
    ・タップ／スワイプ位置にシアン色の水紋リップル表示
■ PCデバッグ操作：
  ・移動：←/→ または A/D
  ・スライディング：↓ または S
  ・ジャンプ／2段ジャンプ：Space / ↑ / W / X
  ・魔導弾発射：Z / J / K / Enter
  ・即時ステージリスタート：R

====================================================================
3. 物理エンジン ＆ アクション手触りこだわり仕様
====================================================================
■ 60fps 固定デルタタイム（FIXED_DT = 1/60秒）物理更新：端末リフレッシュレートに依存しない一貫したジャンプ距離と操作応答。
■ コヨーテタイム（0.11秒）＆ ジャンプ先行入力バッファ（0.13秒）により、足場端ギリギリや着地直前のジャンプが確実に決まる。
■ 上昇時・頂点付近（GRAVITY_APEX）・下降時で重力係数を3段階切替し、マリオ3風のキレのある滞空と落下を実現。
■ スライディング特殊仕様：
  - 天井の低いアーケードや架線の下を高速で潜り抜け可能（頭上に天井がある間は自動で立ち上がらない）
  - 下り坂では重力加速度が加算され、最大580px/sまで加速しながら軽量エネミー（ドローン・ホッピング・スライム）を体当たり撃破。
■ 踏みつけ攻撃：敵の上半身判定に落下接触すると2ダメージを与えつつ反発ジャンプ（ジャンプボタン押下で大跳躍）。

====================================================================
4. HPゲージ (100/100) ＆ 1刻み精密ダメージ仕様
====================================================================
■ 従来のハート数表記から「100/100 HPゲージ（残量でシアン→アンバー→ローズへ色変化）」へ進化。
■ 敵の種別・攻撃手段・ギミックごとに1刻みで緻密に設定された被弾ダメージ（無敵時間1.4秒＆ヒットストップ＆画面シェイク＆-XX HPフロート表示）：
  - 8: スライム分裂ミニ個体
  - 9: ホロ・デコイ
  - 10: ネオン・バット
  - 11: 巡回ドローン
  - 12: スナイパー本体 / アークパイロン本体 / バイオスポア本体
  - 13: スライム・グリッチ / プリズムリフレクター本体 / グラビティインプ本体
  - 14: ホッピング・ボット / ボムウォーカー本体 / マグネットオーブ / クライオスライム / シジルボマー本体
  - 15: スケートクーリエ / ボルトジェリー本体 / インクスペクター本体 / マナリーチ / クラスターマイン本体 / バイオスポア胞子弾
  - 16: 魔導キャスター本体 / レイルスパイダー / スターウィーバー本体 / ヴォルテックスファン
  - 17: ゴーストウィスプ / ステルスニンジャ手裏剣 / グラビティインプオーブ / イージスドローン
  - 18: ボルトジェリースパーク / モータークラブ本体 / ミラーレイス / ヴォイドアイ本体 / テスラウォーカー本体 / アークメイジ分身弾
  - 19: 魔導キャスター紫弾 / ステルスニンジャ本体 / インクスペクターインク弾 / ジェットトルーパー本体
  - 20: ライオットバトン / ルーンセンチネル衝撃波
  - 21: ブルドーザー通常 / プリズム反射弾 / ジェットトルーパー弾 / アークメイジ追尾オーブ / ドリルモール
  - 22: スナイパー狙撃弾 / グリモアミミック / スターウィーバー3Way弾 / レールガンメック本体
  - 23: シールド兵 / アークパイロン電撃 / クラスター破片弾
  - 24: 地下メトロ垂下電線 / 中ボス弾 / ルーンセンチネル本体 / プラズマハウンド / テスラ電撃球
  - 25: 穴落下（中間CP復帰） / ソウホイール / ヴォイドアイレーザー / オメガドローン本体
  - 26: 砦トゲトラップ / モータークラブ迫撃砲 / フレイムスラスター
  - 27: 回転レーザーバー / クロノペンデュラム / オーヴァーロード拡散砲
  - 28: 中ボス・ガーディアン接触 / シジルボマー地雷 / ファントムナイト
  - 29: ブルドーザー高速突進 / オメガドローンレーザー
  - 30: ゴーレムナイト
  - 31: ボムウォーカー大爆発
  - 32: 飛行船大砲
  - 33: レールガンメック電磁砲 / アークメイジ地走り衝撃波
  - 34: 魔導機神アークメイジ本体接触
  - 35: オーヴァーロード急降下スラム
  - 36: オーヴァーロード本体接触
  - 回復：金色ボーナスオーブ取得で +16 HP回復（最大100）

====================================================================
5. ワールド1 俯瞰マップ ＆ ステージ構成（3倍長・完全非反復）
====================================================================
■ 横スクロール対応ワールドマップ（1480px幅）：ステージ1〜BOSSまで切れることなく主人公アイコンに合わせて滑らか追従スクロール。
■ 分岐・隠しルート構造：
  - [1-1] をクリアすると [1-2] と [1-3] が同時開放され、好きな方を選択して攻略可能。
  - [1-2] または [1-3] のどちらか1つをクリアすると [中ボス砦] へ合流。
  - 隠しステージ [1-S] は [1-4 雨のネオン商店街] の中盤屋根上の「無印高所（看板やオーブ誘導などの露骨なヒント一切無し）」に配置。見つけ出した場合のみワールドマップ上に秘密ルートが出現し、[1-5] をスキップして [1-6] へ直結できる。
■ 3倍長・完全非反復レベルデザイン（全9ステージ 約6,800px〜13,400px）：
  - 同一地形の繰り返しを排し、全ステージを「Act1（導入・リズム形成）→ Act2（立体分岐・複合ギミック）→ Act3（高速クライマックス）」の3部構成で完全手組み設計。
■ ボス戦隔離仕様：
  - [砦] 中ボス戦 および [1-BOSS] 大ボス戦ではアリーナ進入と同時に両端に魔導結界を展開し、場外退出不可＋カメラ固定。
  - ボス撃破までゴールの存在自体が見えないようカメラ制限とゲート非表示を徹底。

====================================================================
6. 全56種 敵キャラクター・ギミック・ボス図鑑 ＆ 挙動ビューア
====================================================================
■ 通常敵・特殊敵49種＋ギミック2種＋ボス5種＝合計56種類のキャラクターを設定・イラスト化・実動AI実装。
■ W1登場の9体＋大砲・回転レーザー・中ボス・大ボスに加え、36種の追加敵＋W2専用4種（ギア・ローラー／スパーク・クラゲ／レーザー・ドローン／サンダー・インプ）＋W2中ボス「クロックワーク・コア」＆大ボス「サンダー・クロノス」＆試作大ボス「オーヴァーロード」すべてがコード上で動作可能。

====================================================================
7. A4 PDF設計仕様書ビューア＆出力 ＋ デバッグ・挙動テスト機能
====================================================================
■ アプリ内「仕様・プロンプトを見る」ボタンから、A4シート形式の仕様書リーダーを表示し、外部ライブラリ無しでリアルPDFバイナリ（NOCTURNE_STRIDE_Design_Spec.pdf）を生成ダウンロード可能（全56体のカスタムベクター肖像画付き）。
■ いつでも使える「DEV（デバッグ）」ボタンをタイトル・ワールドマップ・ステージHUDに搭載：
  1) 全ステージ無条件開放スイッチ（W1・W2両対応）＆ 全18ステージ即座にワープ突入
  2) 全56体の「敵キャラ挙動ビューア＆テストラボ（ENEMY_LAB）」：
     ・任意の敵・ギミック・ボスを選んで即座に専用テストアリーナへ召喚
     ・無敵モード（ONでも被弾ダメージ数「-XX HP (無敵)」を正確に確認可能）
     ・AI実行／一時停止トグル、リスポーン、HPリセット、各敵の1刻みダメージ＆AI攻略解説をリアルタイム表示。

====================================================================
8. 1-BOSS 難度調整＆撃破後バグ修正 ＋ ワールド2「黄金の歯車と雷鳴の境界エリア」
====================================================================
■ 1-BOSS（魔導機神・アークメイジ）修正＆調整：
  - 撃破時バグ修正：ボス撃破時に敵弾配列をループ途中で再代入していたことによる更新エラーを解消。敵弾の無効化マーク処理へ変更し、撃破後も安全にゴール甲板へ進めるように修正。
  - 難易度調整：最大HPを 12→9 へ引き下げ、追尾オーブ速度低下・連射間隔延長・低空ホバリング化・ダメージ量緩和（接触26 / 追尾弾17 / 分身弾15 / 衝撃波24）を実施。
■ ワールド2「黄金の歯車と雷鳴の境界エリア」（全9ノード・8ステージ番号構成）：
  - 進行ルート：[2-1] → [2-2] → [2-砦] → [2-3 / 2-4 分岐] → [2-5] → [2-6] → [2-7] → [2-BOSS]
  - クリア条件：1-BOSS撃破で自動解放（デバッグ機能から無条件アクセス＆全ステージワープ可能）。
  - ビジュアル：黄色・黄金・琥珀・ネオンイエロー基調の夕暮れ空、巨大回転歯車・送電鉄塔・遠景稲妻のパララックス背景。
  - 目玉ギミック群：
    1) 回転巨大歯車足場（回転方向の移動加速＆逆方向押し返し、円弧乗り）
    2) 高圧電線レールグラインド（火花を散らして高速滑走＆任意ジャンプ離脱で2段ジャンプ回復）
    3) クロノスイッチ（射撃で4.5秒間、プレイヤー以外の敵・歯車・レーザー・落雷を0.35倍速スローモーション化）
    4) 歯車レーザー物理遮蔽（2-砦：回転する歯車の「歯」が高出力レーザーを遮ってできる一瞬の安全な影を見極めて駆け抜ける＆外周潜り抜け）
    5) リズム帯電ブロック（安全↔警告点滅↔高圧通電(-25)が周期切替）
    6) 自機非依存の高速強制スクロール(178px/s) ＋ 約1.2秒前の黄色警告ライン＆火花予兆付き「天空落雷(-29)」嵐（2-6超目玉）
  - ワールド2新規敵・ボス（6種追加・計56種）：
    ・ギア・ローラー(-22) / スパーク・クラゲ(-17, バリア-25) / レーザー・ドローン(-16, 直線レーザー-27) / サンダー・インプ(-18, 直撃落雷-24)
    ・2-砦中ボス：クロックワーク・コア(10HP・回転4連レーザー-26＆跳弾歯車-21)
    ・2-BOSS大ボス：サンダー・クロノス(14HP・第1ファンネル雷→第2高速電光ダッシュ-30→第3回転4連電撃掃射-29の3形態進化)

====================================================================
9. マップ拡張・徘徊エネミー遭遇・7+細分化アスレチック＆ユニーク敵大幅強化
====================================================================
■ W1全クリアデバッグ ＆ 進行リセット：
  - デバッグメニューに「W1全クリアで開始（W2へ）」ボタンを追加。1-1〜1-BOSS＆1-Sをクリア済み・W2開放・2-1開始状態で即座にテスト可能。
■ 1860px拡張ワールドマップ ＋ 多数の空マス＆徘徊エネミー遭遇戦：
  - W1・W2の両マップにそれぞれ15個の「何もない経由マス（◆ウェイポイント）」を配置し、壮大なルート網を構築。
  - 各ワールドに3体のワールド固有「徘徊エネミー（W1: ゴーレムナイト/ルーンセンチネル/ファントムナイト、W2: ギアローラー/突撃ラマー/テザー電撃振子）」が空マス周辺を巡回。
  - プレイヤーが徘徊エネミーに接触（または迎撃ボタン）すると専用ミニボスバトルステージへ突入！勝利するとマップ上から撃破消滅。
■ 柔軟な7+細分化設計 ＆ 歯車落下バグ修正 ＆ 2-砦・2-6・2-7・2-BOSS抜本改修：
  - 3セクション固定を廃し、1ステージ7〜8+の細分化マイクロセクション構成で平坦地帯を一掃＆雑魚敵を大幅増量。
  - 回転歯車の着地判定を修正（prevStandingGear引き継ぎ＋足幅リム追従＋上半球円弧押し戻しで踏み抜け落下を完全解消）。
  - 2-砦：歯車下に地面のない純粋奈落＋連続歯車アスレチックへ変更。全レーザーを歯車貫通・歯車から離れた配置・約2.7秒消灯＋0.58秒点灯前シマー予告へ再設計。
  - 2-6：開幕2.8秒／X<520は狙い撃ち落雷を出さない安全導入で初見殺しを根絶。
  - 2-7 ＆ 2-BOSS：地上鉄塔背景ではなく黄金雲海上の「上ステ（aerialSky）」へ刷新。
■ 非弾幕系のユニーク新敵6種追加（全62種へ拡張）：
  - 反発バウンサー(EN-50) / 磁力クレーン(EN-51) / ミラー・ブースト歯車(EN-52) / テザー電撃振子(EN-53) / 反重力パルス装置(EN-54) / 突撃電光ラマー(EN-55)

====================================================================
10. W1ボス微強化・全ボス弾幕/攻撃のアリーナ全域到達・2-7/2-BOSS 垂直上登り化
====================================================================
■ 1-BOSS（魔導機神・アークメイジ）の適度な強化：
  - 最大HPを 9 → 11 へ引き上げ（Phase2: HP≦7 / Phase3: HP≦4）。
  - Phase1から「3-Way魔導扇(20)」と追尾オーブ(19)を組み合わせ、Phase2の急降下衝撃波(26)やPhase3の両端分身クロス弾(18)のテンポ・威力を微強化。
■ 全ボスの弾幕・攻撃のアリーナ奥到達対応：
  - 全ボス（中ボス・アークメイジ・オーヴァーロード・クロックワーク・クロノス）の弾丸寿命および地走り衝撃波の到達距離を約900〜1150pxへ延長し、アリーナ端の安全地帯籠城を防止。
  - クロックワーク・コアの回転4連レーザーおよびサンダー・クロノス第3形態の4連掃射ビームの射程を 175〜185px → 520px へ拡張し、アリーナ最奥の隅まで届くよう統一。
■ 2-7 ＆ 2-BOSS の垂直上登りステージ化（verticalClimb: true）：
  - 上方向への無制限カメラ追従・チェックポイント高度連動型落下判定・全高度対応天空落雷・高度連動黄金雲海パララックスを実装。
  - 2-7（y: 365→-2020）および 2-BOSS（y: 365→-1780 頂上艦橋決戦）を、昇降歯車チェーン・斜上サンダーレール・上昇気流・バウンサーを駆使して上へ登り続ける立体アスレチックへ再構築。

====================================================================
11. 2-砦レーザー射程調整 ＆ 2-7・2-BOSS 難易度緩和アップデート
====================================================================
■ 2-砦ボス（クロックワーク・コア）のレーザー射程戻し：
  - 回転4連レーザーをアリーナ全域(520px)ではなく中距離(195px)へ戻し、距離を取れば安全に立て直せる設計へ調整。
■ 2-7 ＆ 2-BOSS の垂直登攀難易度緩和：
  - 全階層（7箇所ずつ）にチェックポイントを配置し、大落下でのやり直し負荷を軽減。
  - 無理なジャンプ間隔の解消（中継足場・気流下保護床の追加）、気流出口レーザーの撤去／配置整理、2-7の天空落雷頻度・警告時間の大幅緩和(3.6s間隔/1.85s予告)、雑魚敵配置の整理を実施。
  - 2-BOSS・サンダー・クロノス(HP14)の攻撃調整：第1形態の同時弾数軽減、第2/3形態の電光ダッシュ予告延長(0.88s/0.78s)・速度緩和(430px/s)、第3形態の回転レーザーを2連掃射(0.95rad/s)へ調整し、与ダメージも21〜26へ緩和＋頂上艦橋に回復金オーブを増設。

====================================================================
12. ワールド2精密修正・エリア戦独立ボス化 ＆ ワールド3「翠緑の摩天樹海と翡翠の魔導要塞」（全10ステージ）
====================================================================
■ ワールド2各ステージ修正：
  - 2-1：足場・歯車のない到達不可ギャップを新規足場（21_p3b / 21_p4b / 21_gr7b / 21_p12b等）で解消。
  - 2-2：回転レーザー長が歯車外周+6pxしか出ていなかった不具合を 215px へ延長し、貫通ビームレーザー3基も追加。
  - 2-砦：中ボス「クロックワーク・コア」がレーザー回転照射(laser_spin)中も中央停止せずアリーナ左右へ移動しながら掃射するよう改修。
  - 2-BOSS：サンダー・クロノスから瞬間ワープ移動(X/Y強制スナップ)を完全撤去。現在位置から滑らかに高度を合わせて電光突進するよう改善。
■ エリア戦（マップ徘徊遭遇戦）完全独立化 ＆ 回復後出し化：
  - W1(アイアン・ゴライアス)、W2(ヴォルト・センチュリオン)、W3(エメラルド・ストーカー)と各ワールド専用の独立ミニボスを新規実装し、砦中ボスの再利用を撤廃。
  - 回復用ボーナスオーブに afterBoss 属性を導入し、エリア戦ボス撃破後に初めて出現・回収可能となるよう制御。
■ ワールド3「翠緑の摩天樹海と翡翠の魔導要塞」（緑基調・全10ステージ構成）：
  - ルート分岐：[3-1 / 3-2 分岐] → [3-3] → [3-砦1] → [3-4 / 3-5 分岐] → [3-砦2] → [3-6] → [3-7(上ステ)] → [3-城(上ステ)]。
  - 新ギミック「翡翠バウンス台(大跳躍パッド)」「2回反射跳弾ビーム」「バウンド種子」「足元遅延翠棘」「緑基調パララックス背景＆ワールド3マップ」を実装。
  - W3新規敵6種（ソーン・ウィーバー／エメラルド・マンティス／プリズム・スポア／クロノ・ヴァイン／バイオ・ヒュドラ／ジェイド・スナイパー）＆ W3ボス3体（ヴァーダント・ワーデン／ジェイド・キメラ／翡翠皇エメラルドエンペラー・ワープ無し3形態）を追加。
  - DEV「W2全クリアで開始（W3へ）」＆W3全ステージワープ＆敵ラボ完全対応。

====================================================================
13. 過去ギミック非流用W3完全刷新・全ボス非ワープ＆攻撃完走・2-BOSS差別化・コース設計精密記録
====================================================================
■ W3（全10ステージ）における過去ギミック使い回し完全撤廃 ＆ 7+2種の新規W3専用ギミック実装：
  - W1/W2のギミック（回転歯車・サンダーレール・帯電橋・消滅ホロ床・スイッチ橋・垂下電線・回転レーザー・貫通ビームレーザー・魔法鏡・気流ゾーン・大砲・砦トゲ）をW3全10ステージから完全に除去。
  - 代わりに以下のW3完全新規ギミックを全10ステージへ豊富に配置：
    1) 振り子ツタ（Pendulum Vine）：樹冠から垂れる発光ツタ。先端に近づくと自動掴まりして振り子運動し、ジャンプ操作で水平加速ブースト＋2段ジャンプ回復して大渓谷をスイング渡破。
    2) 浮遊スポアバブル（Float Bubble）：空中を浮遊・揺動する巨大緑胞子シャボン。上に乗れる一時足場で、乗り続けると約1.45秒で破裂して消滅し2.1秒後に再生。
    3) 胞子カタパルト（Spore Catapult）：発光ラッパ花型の大跳躍発射パッド。踏むと指定ベクトル(launchVx, launchVy)へ一気に斜め・垂直打ち上げ＋2段ジャンプ回復。
    4) 肉食花トラップ（Snap Trap / -21 HP）：床に潜む翠牙トラップ。0.85秒の赤琥珀震動予告後に大顎が閉じて咬傷ダメージ。
    5) 間欠泉胞子ジェット（Spore Jet / -19 HP）：苔結晶噴出口から上下左右へ一定周期で噴射される高圧胞子ガス（0.75秒の噴霧予兆付き）。
    6) 開花フラワーブリッジ（Bloom Bridge）：発光する花の蕾に魔導弾を当てる（または触れる）と一定時間、広大な花弁の足場が展開。時間切れ前に点滅予告。
    7) 大鎌ギロチン振子（Scythe Pendulum / -24 HP）：要塞梁・樹冠から吊り下がる巨大三日月翡翠鎌。リズムを見極めて潜り・飛び越え攻略。
    8) 樹液激流トラック（sap_stream / streamVx）：足場に乗っているプレイヤーを順流加速または逆流押し戻しする蛍光樹液ベルト。
    9) 翡翠弾性バウンス台（emerald_bounce）：ハイジャンプパッドとの複合立体ジャンプ。

■ W3全ステージ詳細コース設計（敵密度大幅増強：通常24〜25体 / 砦・城19〜22体）：
  - [3-1 翠緑の摩天楼キャノピー (14,200px / 敵24体)]
    ・Sec1(0-1700)バウンス入門→Sec2(1700-3500)二連振り子ツタ渓谷→Sec3(3500-5300)順流樹液トラック＋マンティス隊→Sec4(5300-7200)胞子カタパルト高所段→Sec5(7200-9100)逆流樹液＋ウィーバー砲撃→Sec6(9100-11000)浮遊バブル渡り→Sec7(11000-12800)坂道スライディング＆ツタ→Sec8(12800-14200)ヒュドラ迎撃＆ゴール。
  - [3-2 翡翠の胞子バブルと開花橋の渓谷 (14,400px / 敵24体)]
    ・開花フラワーブリッジ×浮遊バブル×肉食花トラップ×胞子カタパルトを8区間に緻密配置。ジェイドスナイパー跳弾射撃戦との立体交差設計。
  - [3-3 魔導植物園の樹液大温室 (14,600px / 敵25体)]
    ・間欠泉胞子ジェットの上下左右ジェットと開花ブリッジ、樹液激流スライディング、クロノヴァイン足元棘を全8区間に配置。
  - [3-砦1 第一翠玉要塞・茨と翠鎌の関門 (14,000px / 敵21体)]
    ・W1トゲやレーザーの代わりに「大鎌ギロチン振子」「肉食花」「間欠泉ジェット」「開花橋」「スポアバブル」で構成。最奥ボス「ヴァーダント・ワーデン(11HP)」は移動レーザー＆壁から壁への全幅突進を実行。
  - [3-4 翡翠地下樹海・蛍光の胞子洞窟 (14,200px / 敵24体)]
    ・ランタン暗闇下での蛍光樹液流、振り子ツタ奈落越え、暗闇胞子ジェット、胞子カタパルト洞窟跳躍の8区間探索。
  - [3-5 エメラルド浮遊胞子と大鎌の空中庭園 (14,400px / 敵24体)]
    ・多段バブル階段、カタパルト→ツタ→バブルの純空中連鎖、2ルート開花ブリッジ、大鎌ゲートを含む全8区間。
  - [3-砦2 第二翠玉要塞・双晶の狂花炉心 (14,400px / 敵22体)]
    ・連装翠鎌振子と樹液逆流コンベア上の肉食花群を突破し、最奥「ジェイド・キメラ(13HP)」と対決（Phase2で往復2連ダイブ完走）。
  - [3-6 翠嵐の樹液激流ハイウェイ (15,200px / 敵25体)]
    ・176px/s強制スクロール下で順流樹液加速・胞子カタパルト・振り子ツタ・バブル・肉食花を連続踏破（落雷の流用無し）。
  - [3-7 蒼翠の天空スパイア塔 (上ステ y:365→-2160 / 敵21体 / 7CP)]
    ・カタパルト斜上打ち上げ・バブル階段・開花橋・ツタスイング登攀・大鎌ゲートで登る純W3垂直タワー。
  - [3-城 翡翠皇の空中浮遊神殿 (上ステ y:365→-1860 / 敵19体 / 7CP)]
    ・樹液外廊→胞子カタパルト＆ツタ→開花橋＆大鎌連装→頂上玉座で「エメラルドエンペラー(15HP・3形態・非ワープ完走突進)」と最終決戦。

■ 2-BOSS（雷帝の空中発電戦艦 / 5,200px）の2-7差別化ブラッシュアップ：
  - 2-7の雲海ジグザグ塔と類似していた地形を全面刷新し、以下4幕の戦艦構造へ変更：
    ・第1幕：戦艦下部格納庫水平突破（移動ピストン＆大砲下ルート／高速サンダーレール＆歯車遮蔽ビーム上ルート）。
    ・第2幕：中央炉心ツイン垂直エレベーターシャフト（2基の上下稼働リフト＋左右時限レーザーで垂直上昇）。
    ・第3幕：左舷翼砲台デッキ（帯電橋＆砲台）→長距離斜上レール→終端上昇気流シュート。
    ・第4幕：頂上艦橋決戦（980px広大アリーナでサンダー・クロノス14HPと決戦）。

■ 全ボス「ワープ禁止」＆「全攻撃の完全完走（途中中断バグ修正）」：
  - 全ホバー/滑空系ボス（オーヴァーロード / クロックワーク / クロノス / アークメイジ / センチュリオン / キメラ / 翠帝）で hover/glide 復帰時の直接座標代入ワープ(boss.x = ..., boss.y = ...)を全廃し、現在位置から滑らかに追従移動するよう修正。
  - 全ボスの突進・ダイブ・ジャンプ・レーザー掃射がタイマー切れでアリーナ途中で中途半端に止まる不具合を修正：
    ・サンダー・クロノス(blitz_dash)：485px/sで反対側のアリーナ壁に衝突するまで必ず走り切る（第3形態は反対壁到達後に折り返して連続2連電光突進を完走）。
    ・アイアン・ゴライアス(charge)：予備動作0.48s後に425px/sで反対壁まで突進完走し衝突衝撃波を発生。
    ・ヴォルト・センチュリオン(volt_dash)：壁から壁まで高速電光突進を完走し、到達時にブーメラン投擲。
    ・エメラルド・ストーカー(stalk_charge)：420px/sで反対壁まで走り切って反転。
    ・ヴァーダント・ワーデン(warden_charge)：400px/sで壁まで突進完走＋着弾衝撃波、回転レーザーも全周2.8秒完走。
    ・ジェイド・キメラ(dive_dash)：反対側の壁に到達するまで斜め滑空ダイブを完走（Phase2では壁反射して往復2連続ダイブ完走）。
    ・翡翠皇エメラルドエンペラー(emperor_dash)：475px/sで壁から壁へ胞子弾を撒きながら突進完走（Phase3は往復2連突進を完走）。

====================================================================
14. 全28メインステージ＋9エリア戦 個別詳細コース設計プロンプト（非反復×固有ギミック）
====================================================================
※ 以下の設計図には、全ワールド（W1:9 / W2:9 / W3:10）およびマップ徘徊エリア戦（全9アリーナ）の全ステージ固有ギミック・コース区間別地形構成・敵密度最適化（W3: 計229体→161体へ調整）を1ステージも省略せず精密記載する。

--------------------------------------------------------------------
【WORLD 1：夜の都市 × 魔法 × 近未来（全9ステージ）】
--------------------------------------------------------------------
[1-1] ネオン大通りの序章 (全長13,400px / CP×3 / 敵17体 / 金オーブ×2)
  ・テーマ/背景：藍色の夜空と高層ネオン看板。
  ・固有ギミック：【ネオン・ターボパッド×4】(x=860, 3560, 4860(上昇付き), 10940)。踏むと瞬時に水平520〜545px/sのターボダッシュ加速（x=4860は上方跳躍-180付き）。
  ・区間構成：
    - Act1(0→4360)：深夜大通り。導入ターボパッドで疾走感を掴み、下り坂スライディング(o_z1_2誘導)で軽量敵を一掃、架線トンネル潜りと終端ターボジャンプ。
    - Act2(4360→8920)：高架ジャンクション。ターボジャンプパッドで上層キャットウォーク(スナイパー警戒＆金オーブ)へ乗るか、下層封印ブロックを砕いて進む2ルート分岐→2連続ホロスイッチ橋へ合流。
    - Act3(8920→13400)：ツインタワー連絡路。階段状テラスから超高速ダブル坂道、4基目のターボパッド加速、リズミカルな移動足場連帯を経てゴールへ。

[1-2] 地下魔導メトロ (全長12,400px / CP×3 / 敵14体 / 金オーブ×3)
  ・テーマ/背景：ambientDarkness=0.78の停電地下駅＆ランタン光。
  ・固有ギミック：【停電メトロ＆電源ブレーカー照明スイッチ＋垂下高圧電線(-24)】。照明スイッチを撃つと暗闇ライトゾーンとホロ橋が同時点灯。
  ・区間構成：
    - Act1(0→4100)：停電ホーム。暗い視界の中で照明スイッチを撃ち視界を確保し、揺れる高圧電線を潜りつつ進行。
    - Act2(4100→8400)：保線ピット＆複線迷路。上層天井スナイパーと下層レールのボム・ウォーカー（封印壁誘爆ショートカット）が交差。
    - Act3(8400→12400)：変電所コア。長短交互に垂れる高圧電線地帯とゴースト・ウィスプの追尾を小さなブレーカー足場で跳び継ぐ。

[1-3] ホログラム高層ビル群 (全長11,800px / CP×3 / 敵12体 / 金オーブ×3)
  ・テーマ/背景：青空ネオン摩天楼＆空撮ガラス外壁。
  ・固有ギミック：【時限消滅ホロ床（踏んで0.88s点滅→2.1s消滅・再生成）】×垂直水平エレベーター。
  ・区間構成：
    - Act1(0→3900)：ガラスビル外壁。階段状消滅ホロ床を一気に駆け上がり、壁面スナイパーと双子エレベーターで隣棟へ渡る。
    - Act2(3900→7900)：空中スカイブリッジ＆縦シャフト。横移動ドックと消滅足場を交互に越え、高層ビル内部のジグザグ縦シャフトを登攀。
    - Act3(7900→11800)：超高層アンテナ群。段階降下しながらキャスター弾幕を捌き、4連消滅パッドの高速スプリントで決着。

[1-砦] 魔導警備ゲート (全長10,600px / CP×4 / 敵10体＋中ボス / 金オーブ×2)
  ・テーマ/背景：赤色警報ランプ点滅の重装甲セキュリティ要塞。
  ・固有ギミック：【砦トゲ壕(-26)＋回転クロスレーザーバー(-27)＋重装ブルドーザー装甲隊】。
  ・区間構成：
    - Act1(0→3400)：外郭検問所。トゲ壕上の狭橋と単発回転レーザーを抜ける導入。
    - Act2(3400→6800)：重機格納庫。突進ブルドーザー機2体と逆回転ツインレーザーが交錯。
    - Act3(6800→8750)：中枢セキュリティ回廊。一面トゲ床を移動リフトで渡り3連高速レーザーを潜る。
    - アリーナ(8750→9540)：両端結界封鎖し「重装シールド・ガーディアン(6HP)」と決戦。正面大盾は弾を弾き、踏みつけスタンで突破。

[1-4] 雨のネオン商店街 (全長12,600px / CP×3 / 敵13体 / 金オーブ×2)
  ・テーマ/背景：常時降雨パーティクル＆路面反射。
  ・固有ギミック：【降雨低摩擦スリップ路面（超長距離スライディング）＆看板無しの完全隠匿シークレットゴール】。
  ・区間構成：
    - Act1(0→4200)：アーケード入口。濡れた路面の長距離スライディングで低い商店街看板を一気に潜り抜ける。
    - Act2(4200→8500)：ネオン横丁＆暗闇屋根裏。背景に溶け込む無印の屋根上高所から上空足場→封印ブロック奥へ進むと隠しステージ[1-S]への秘密ゴール。
    - Act3(8500→12600)：雨水排水路通り。水路上の飛び石足場と急坂加速ジャンプで防衛線を突破。

[1-S] 地下秘密魔導庫 (全長6,800px / CP×3 / 敵5体 / 300pt金オーブ大量)
  ・テーマ/背景：黄金結晶粒子が舞う地下秘密宝物庫。
  ・固有ギミック：【ボム誘爆6連封印壁ショートカット＆宝物庫3層ギャラリー（クリアで1-5を飛び越えて1-6直通）】。
  ・区間構成：採掘坑道の大金オーブ坂道＆ボム・ウォーカー1体で6連封印ブロックを一斉破壊→浮遊宝物庫ブリッジ→大聖堂金庫3層棚。

[1-5] 浮遊する魔導図書館 (全長11,600px / CP×3 / 敵9体 / 金オーブ×3)
  ・テーマ/背景：星図ドームと浮遊する魔法書架。
  ・固有ギミック：【低重力星図ドーム＋上昇気流＋魔法の鏡ペアワープ（接触と魔導弾射撃の双方でワープ可能）】。
  ・区間構成：大書庫エントランスのシアン鏡で石壁貫通→広大な無重力星図室を紫・緑鏡で縦横ワープ移動→2連気流と琥珀鏡で大奈落跳躍。

[1-6] 高速モノレール屋根上疾走 (全長11,600px / CP×3 / 敵11体 / 金オーブ×2)
  ・テーマ/背景：高速流線が走る深夜高架線。
  ・固有ギミック：【136px/s強制横スクロール＋高低差連結列車屋根＆パンタグラフ架線スライディング】。
  ・区間構成：長尺貨物車両での架線潜りリズム形成→二階建て高速客車連結帯での連続ジャンプ踏みつけ→先頭動力車でのブルドーザー飛び越し。

[1-BOSS] 電脳魔導飛行船 (全長10,300px / CP×4 / 敵9体＋大ボス / 金オーブ×3)
  ・テーマ/背景：嵐の稲妻フラッシュが走る空の巨艦。
  ・固有ギミック：【艦載大型大砲(-32)＋複層甲板クレーン＋3段階進化・全域弾幕ボス「魔導機神アークメイジ(11HP)」】。
  ・区間構成：船首外舷砲撃突破→上下2段機関室甲板の挟撃回避→最終甲板防衛線→ブリッジ(8490〜9290)で結界を閉じ、追尾オーブ・端到達衝撃波・両端分身クロス弾を放つアークメイジと決戦（撃破でW2解放）。

--------------------------------------------------------------------
【WORLD 2：黄金の歯車と雷鳴の境界エリア（全9ステージ）】
--------------------------------------------------------------------
[2-1] 黄金の時計塔エントランス (全長14,200px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：黄金・琥珀色の夕暮れ時計塔。
  ・固有ギミック：【クロノチャイム・スピードリング×4】(x=1280, 5090, 8960, 10660)。空中の金色リングを潜ると470〜495px/s加速＋-240〜-260上昇ブースト＋2段ジャンプ権即時回復。
  ・区間構成(8マイクロ区間)：短い導入足場→大歯車渡り＆第1チャイムリング跳躍→反発バウンサー＆時計針レール→中盤チャイム連動歯車チェーン(補完足場付きで到達不可ギャップゼロ)→高密度ギアローラー＆多段歯車階段。

[2-2] 黄金の時計塔＆サンダーレールエリア (全長13,800px / CP×3 / 敵14体 / 金オーブ×3)
  ・テーマ/背景：高圧電線が張り巡らされた黄金尖塔群。
  ・固有ギミック：【クロノスロー・クロック機構(射撃で4.5秒間周囲が0.35倍速スロー化)＋5連サンダーレール＆長尺215pxビーム網】。
  ・区間構成(7区間)：クロノスイッチ×磁力クレーン登攀→高速歯車噛み合い→空中サンダーレール5連繋＋反重力パルス＋長尺ビーム網→スロー化中歯車頂上アタック。

[2-砦] 歯車とレーザーの機械要塞 (全長13,200px / CP×4 / 敵8体＋中ボス / 金オーブ×3)
  ・テーマ/背景：黒とネオンイエロー警戒色の機械要塞。
  ・固有ギミック：【奈落直結・外縁回転歯車渡り＋歯車貫通＆長消灯(2.7s OFF/0.58s予告)遮蔽可能レーザー＋移動レーザー中ボス】。
  ・区間構成(8区間)：地面のない純奈落上を回転歯車外周で渡り、歯車から十分離隔した長消灯レーザーを抜ける→クロノ＆磁力ピット→最奥でアリーナ左右へ移動しながら195px中距離4連レーザーを回す「クロックワーク・コア(10HP)」と対決。

[2-3] 高圧変電所と歯車工場 (全長12,900px / CP×3 / 敵14体 / 金オーブ×3)
  ・テーマ/背景：琥珀色の送電変電施設・鋳造工場。
  ・固有ギミック：【ボルタ・真鍮コンベア床×5（正逆駆動：+145 / -130 / +165 / -140 / +155 px/s）】。
  ・区間構成(7区間)：帯電リズム橋導入→順流コンベア(+145)潜りトンネル→逆流コンベア(-130)＆ツイン歯車→磁力クレーン封印壁→長尺レール→加速ベルト(+165)＆逆流ベルト(-140)でのドローン迎撃→最終コンベア(+155)ラマー突破（[2-4]と選択分岐）。

[2-4] 琥珀の送電鉄塔スカイライン (全長13,100px / CP×3 / 敵14体 / 金オーブ×3)
  ・テーマ/背景：夕暮れ雲海を貫く超巨大送電鉄塔群。
  ・固有ギミック：【9連サンダーレール長距離空中連鎖＆レール着地2段ジャンプ回復連鎖】。
  ・区間構成(8区間)：鉄塔頂上から途切れない9本の長距離高圧電線レールをグラインド＆ジャンプで乗り継ぎ、サンダー・インプやテザー振子を空中でかわして走破（[2-3]と選択分岐）。

[2-5] 高電圧スカイブリッジ＆帯電ブロック地帯 (全長13,500px / CP×3 / 敵12体 / 金オーブ×3)
  ・テーマ/背景：高空に架かる高電圧鉄橋網。
  ・固有ギミック：【三連上昇気流シャフト×位相差リズム帯電ブロック(-25)の空中リズム乗り継ぎ】。
  ・区間構成(7区間)：警告点滅と高圧通電が対称位相で切り替わるリズム帯電橋と大歯車を渡り、3箇所の強上昇気流×反重力パルスで立体空中戦を展開。

[2-6] 雷鳴の強制スクロール・ハイウェイ (全長14,600px / CP×3 / 敵12体 / 金オーブ×3)
  ・テーマ/背景：稲妻と豪雨が走る嵐の高速高架。
  ・固有ギミック：【自機非依存172px/s強制スクロール＆左端圧壊ウォール(-30)＋開幕2.8s/X<520完全安全導入付き1.45s予兆天空落雷(-29)】。
  ・区間構成(7区間)：安全な導入助走からハイウェイ歯車・レールへ突入し、空からの黄色予告ライン付き落雷をスライディング・ダッシュ・2段ジャンプで見切って駆け抜ける。

[2-7] 黄金嵐のスカイクラウド回廊 (上ステ verticalClimb / 幅2,400px / 標高y:365→-2020 / CP×7 / 敵9体 / 金オーブ×4)
  ・テーマ/背景：黄金雲海の上空へ伸びる垂直塔（aerialSky）。
  ・固有ギミック：【完全垂直上登りカメラ追従＋昇降歯車チェーン＆斜上サンダーレール＋全7階層チェックポイント】。
  ・区間構成：下層雲海(y:365→-480)で中継足場・バウンサーを踏み→中層(-480→-1520)で斜上レールと余裕ある気流シャフトを登り→最上層(-1520→-2020)で2本目の上りレールから頂上へ到達。落雷頻度緩和(3.6s間隔/1.85s予告)で理不尽さを解消。

[2-BOSS] 雷帝の空中発電戦艦 (上ステ・4幕戦艦構成 / 幅5,200px / 標高y:365→-1240 / CP×7 / 敵10体＋大ボス / 金オーブ×6)
  ・テーマ/背景：2-7と完全差別化した巨大空中戦艦の内部→昇降炉心→左舷翼→頂上艦橋。
  ・固有ギミック：【ツイン炉心垂直電動エレベーター＆4幕戦艦攻略＋非ワープ・壁完走3形態ボス「サンダー・クロノス(14HP)」】。
  ・区間構成(4幕)：
    - Act1(x:0→2330, y:365→185)：船腹格納庫水平突破（移動ピストン＆大砲の下ルート／高速サンダーレール＆歯車遮蔽ビームの上ルート）。
    - Act2(x:2040→2680, y:185→-520)：中央炉心ツイン垂直エレベーターシャフト（左右交互時限レーザーを潜り垂直昇降）。
    - Act3(x:680→2300, y:-520→-1085)：左舷翼砲台＆帯電橋デッキ→長距離斜上レール→終端上昇気流シュート。
    - Act4(x:2420→5200, y:-1240)：頂上艦橋アリーナ(2620〜3600)。回復金オーブ付きの決戦場で「サンダー・クロノス(HP14：第1ファンネル雷→第2電光突進→第3連続2連突進＆2本回転掃射)」と激突。ワープ皆無＆必ず反対壁まで走り切る。

--------------------------------------------------------------------
【WORLD 3：翠緑の摩天樹海と翡翠の魔導要塞（全10ステージ / W1・W2ギミック使い回しゼロ / 敵密度13〜18体へ最適化）】
--------------------------------------------------------------------
[3-1] 翠緑の摩天楼キャノピー (全長14,200px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：翠緑の大樹冠と翡翠クリスタル都市。
  ・固有ギミック：【翠風エアロリング×4】(x=1140, 4920, 8820, 12720)。空中の翠風リングを通過すると+500〜530px/s前方推進＋上昇ブースト＋2段ジャンプ再装填。
  ・区間構成(8区間)：翡翠バウンス導入→二連振り子ツタ＆第1エアロリング→順流樹液トラック(+118)→胞子カタパルト＆第2エアロリング高所→逆流樹液(-98)＋ウィーバー砲撃→浮遊スポアバブル＆第3エアロリング→坂道スライディング＆ツタ→最終エアロリングからヒュドラ迎撃しゴール（[3-2]と選択分岐）。

[3-2] 翡翠の胞子バブルと開花橋の渓谷 (全長14,400px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：巨大胞子が舞う翡翠渓谷。
  ・固有ギミック：【共鳴花粉ポッド×5】(x=1560, 4220, 7420, 9920, 12960)。魔導弾または踏込接触で起爆し、半径195px内の敵へ一律2ダメージを与えつつ自機を高く跳ね上げる共鳴爆風装置（3.8秒で再生）。
  ・区間構成(8区間)：スポアバブル(1.45s破裂)入門→開花フラワーブリッジ＆第1花粉ポッド→肉食花トラップ(-21)渓谷＆第2ポッド→樹液コンベア×跳弾スナイパー→カタパルト＆第3ポッド→連続バブル＆第4ポッド→最終開花橋＆第5ポッド空中一掃でゴール（[3-1]と選択分岐）。

[3-3] 魔導植物園の樹液大温室 (全長14,600px / CP×3 / 敵18体 / 金オーブ×3)
  ・テーマ/背景：ガラスドームの大植物園温室。
  ・固有ギミック：【浮沈大スイレン足場×5】(x=1160, 4420, 6940, 9620, 12880)。乗ると自重で最大24pxまで滑らかに沈み込み、離脱ジャンプ時に沈み度合いに応じて最大1.34倍の弾性跳躍を生む巨葉足場。
  ・区間構成(8区間)：上下左右間欠泉胞子ジェット(-19)＋第1・2スイレン足場→カタパルト温室上層→開花ブリッジ＆ツタ＋第3スイレン→クロノヴァイン足元棘回避→第4・5スイレン連続跳躍→樹液高速スライディング→ヒュドラ突破（[3-1/3-2]合流）。

[3-砦1] 第一翠玉要塞・茨と翠鎌の関門 (全長14,000px / CP×4 / 敵15体＋中ボス / 金オーブ×3)
  ・テーマ/背景：翠玉と黒鉄の複合機械要塞。
  ・固有ギミック：【茨ピストン圧壊門×5】(x=1540, 3860, 6220, 8680, 11120 / -23HP)。天井〜床間で一定リズム伸縮する巨茨ピストン門。W1トゲの代替かつ動的タイミング障害。
  ・区間構成(8区間)：第1〜2茨ピストン門＆大鎌ギロチン振子(-24)→肉食花トラップ地帯→バブル×第3ピストン×水平胞子ジェット回廊→第4・5高速ピストン門→最奥アリーナ(11960〜13120)で移動クロスレーザー・バウンド種子・壁完走突進を放つ「ヴァーダント・ワーデン(11HP)」と激突（勝利で[3-4][3-5]解放）。

[3-4] 翡翠地下樹海・蛍光の胞子洞窟 (全長14,200px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：ambientDarkness=0.72の深層生物発光洞窟。
  ・固有ギミック：【蛍光胞子ランタン×6】(x=720, 2940, 5620, 8180, 10720, 12980)。魔導弾を当てると花弁が開いて半径165pxの常時翡翠ライトプールを灯し、さらに8秒間自機の視界オーラも拡張(+150pt)。
  ・区間構成(8区間)：暗闇樹液流導入＆第1・2ランタン点灯→地下湖振り子ツタ＆バブル渡し＋第3ランタン→開花ブリッジ洞窟高台＆第4ランタン→暗闇胞子ジェット＋第5ランタン→最終第6ランタンからカタパルトで天井スレスレを大跳躍し脱出（[3-5]と選択分岐）。

[3-5] エメラルド浮遊胞子と大鎌の空中庭園 (全長14,400px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：雲間に浮かぶ翡翠結晶の空中庭園。
  ・固有ギミック：【公転オービタル翡翠盤×5】(x=1480, 4120, 6860, 9640, 12660)。単なる直線往復ではなく、rx/ry楕円軌道を一定角速度で公転し乗ったキャラを滑らかに運ぶ衛星足場。
  ・区間構成(8区間)：カタパルト→振り子ツタ→第1オービタル翡翠盤接続→多段バブル階段＆第2オービタル盤→上下2ルート開花橋＋大鎌振子＆第3オービタル盤→跳弾スナイパー網＆第4オービタル盤→樹液高速ベルトから第5オービタル盤・カタパルトを経て最上段テラスへ（[3-4]と選択分岐）。

[3-砦2] 第二翠玉要塞・双晶の狂花炉心 (全長14,400px / CP×4 / 敵16体＋中ボス / 金オーブ×3)
  ・テーマ/背景：双晶クリスタルが脈打つ要塞深部炉心。
  ・固有ギミック：【双晶クリスタル・プリズム障壁×3】(x=2420, 6680, 10840)。高出力翡翠プリズム壁が通路を完全封鎖しており、近傍に浮く対応カラーの菱形結晶核を魔導弾で撃ち砕くことで障壁を粉砕開放。
  ・区間構成(8区間)：第1双晶結晶障壁解除＋連装大鎌振子→逆流樹液コンベア＆肉食花＋第2障壁→重装ゴーレム＆バイオヒュドラ防衛隊＋第3障壁→炉心アリーナ(12240〜13460)で8の字滑空からPhase2往復2連ダイブ突進を完走する双頭龍「ジェイド・キメラ(13HP)」と決戦。

[3-6] 翠嵐の樹液激流ハイウェイ (全長15,200px / CP×3 / 敵17体 / 金オーブ×3)
  ・テーマ/背景：翠緑の強風が吹き抜ける高速樹冠幹線。
  ・固有ギミック：【翡翠スリップストリーム・リーフゲート×5】(x=1760, 4640, 7960, 11120, 13680)＋176px/s強制スクロール。ゲートを通過すると2.2秒間プレイヤーの最大移動速度・ダッシュ加速が1.28倍になり翡翠残像を纏う(+150pt)。
  ・区間構成(8区間)：順流樹液トラック×第1リーフゲート超加速→胞子カタパルト＆振り子ツタ→第2・3リーフゲート＆スポアバブル高速踏破→肉食花＆胞子ジェット→第4・5リーフゲートから大鎌ゲートを越えて終着門へ。

[3-7] 蒼翠の天空スパイア塔 (上ステ verticalClimb / 幅2,500px / 標高y:365→-2160 / CP×7 / 敵15体 / 金オーブ×3)
  ・テーマ/背景：雲を突き抜ける巨大翡翠尖塔。
  ・固有ギミック：【開花スパイラル昇降花柱×4】(triggerY=325, -40, -1010, -1810)。蕾スイッチを撃つと9秒間、斜め上方へ螺旋階段状に3段の花弁足場が時間差で咲く垂直登攀ギミック。
  ・区間構成：翡翠バウンス＆第1スパイラル花柱登攀→カタパルト＆バブル階段→中層第2スパイラル花柱＆開花ブリッジ→上層間欠泉ジェット＆第3スパイラル花柱＆振り子ツタスイング→最上層第4スパイラル花柱から大鎌＆狙撃手を越えて頂上(y=-2160)へ。

[3-BOSS] 翡翠皇の空中浮遊神殿 (上ステ・決戦 / 幅4,800px / 標高y:365→-1860 / CP×7 / 敵13体＋大ボス / 金オーブ×4)
  ・テーマ/背景：翠玉の光輪が輝く浮遊天空神殿。
  ・固有ギミック：【翠玉聖域の疾風柱×4】(x=1320, 1460, 2480, 3220)。神殿外廊および最終玉座アリーナの左右端に配置され、一定周期で真上へ強烈な翠風リフト(-350〜-360vy)を発生させる聖域気流柱。
  ・区間構成：樹液外廊→カタパルト＆第1聖域疾風柱→振り子ツタ＆間欠泉ジェット→上層開花ブリッジ・第2疾風柱・連装翠鎌振子→頂上玉座アリーナ(x:2340〜3680, y:-1860)。左右両端の聖域疾風柱(2480/3220)とバウンス台を活用して攻撃を回避しつつ、ワープ皆無で壁から壁へ2連翡翠突進を完走する「翡翠皇・エメラルドエンペラー(15HP・3形態)」と最終決戦！

--------------------------------------------------------------------
【ワールドマップ徘徊 エリア戦ミニボスアリーナ（全9箇所・砦ボス非流用・撃破後回復オーブ解放）】
--------------------------------------------------------------------
・[ENC_W1_1〜3] (幅1,550px / W1専用ミニボス「アイアン・ゴライアス」HP6〜7)
  - 1-砦中ボスとは完全独立。迫撃砲3連弧弾＋反対壁まで完走する重装ショック突進＋護衛2体(ゴーレム/ルーン/ファントム)の構成。撃破後に金回復オーブ×3(afterBoss)が解放出現。
・[ENC_W2_1〜3] (幅1,550px / W2専用ミニボス「ヴォルト・センチュリオン」HP7〜8)
  - 2-砦中ボスとは完全独立。滑空＋壁から壁へ完走する高速電光突進＋戻りブーメラン歯車刃＋護衛2体(ギア/振子/ラマー)。撃破後に金回復オーブ×3解放。
・[ENC_W3_1〜3] (幅1,550px / W3専用ミニボス「エメラルド・ストーカー」HP8〜9)
  - 3-砦中ボスとは完全独立。翡翠バウンス床アリーナで壁完走突進＋クレセント斬撃＋バウンド胞子弾＋護衛2体(マンティス/スナイパー/ヒュドラ)。撃破後に金回復オーブ×3解放。

====================================================================
15. 全28メインステージ固有シグネチャーギミック対照表 ＆ W3敵密度最適化
====================================================================
■ 重複一切無しの28ステージ固有仕掛け一覧：
  [W1] 1-1:ネオンターボパッド / 1-2:停電ブレーカー照明＆垂下電線 / 1-3:0.88s消滅ホロ床 / 1-砦:トゲ壕×回転クロスレーザー / 1-S:ボム誘爆6連封印壁 / 1-4:降雨スリップ路面＆無印隠しゴール / 1-5:低重力×魔法鏡ワープ / 1-6:136px/s鉄道屋根強制スクロール / 1-BOSS:艦載主砲×3形態アークメイジ
  [W2] 2-1:クロノチャイム加速リング / 2-2:クロノスロー機構×長尺ビーム網 / 2-砦:奈落外縁歯車×長消灯遮蔽レーザー / 2-3:ボルタ正逆真鍮コンベア床 / 2-4:9連サンダーレール空中連鎖 / 2-5:三連上昇気流×位相差帯電橋 / 2-6:安全導入付き172px/s強制落雷高速道 / 2-7:垂直昇降タワー＆斜上レール(7CP) / 2-BOSS:4幕戦艦(格納庫＋ツイン垂直エレベーター＋翼砲台＋艦橋)
  [W3] 3-1:翠風エアロリング / 3-2:共鳴花粉ポッド(2ダメAoE起爆跳躍) / 3-3:浮沈大スイレン足場 / 3-砦1:茨ピストン圧壊門(-23) / 3-4:蛍光胞子ランタン(165px灯火＋暗闇視界拡張) / 3-5:公転オービタル翡翠盤 / 3-砦2:双晶クリスタル障壁 / 3-6:翡翠スリップストリーム・リーフゲート(1.28倍速) / 3-7:開花スパイラル3段花弁花柱 / 3-BOSS:翠玉聖域の疾風柱＆翠帝3形態決戦
■ ワールド3 敵密度の精密調整（計229体 → 161体へ約30%整理）：
  - 3-1(17体) / 3-2(17体) / 3-3(18体) / 3-砦1(15体) / 3-4(17体) / 3-5(17体) / 3-砦2(16体) / 3-6(17体) / 3-7(15体) / 3-BOSS(13体)。過剰な密集を避け、各ステージ固有ギミックと敵AIの噛み合わせが際立つ配置へ最適化完了。

====================================================================
16. W2・W3構想分離刷新 ＋ ワールド4「蒼氷と絶対零度の王城」（青・氷テーマ / 全9ステージ）＆開発者殴り書きメモ
====================================================================
■ 【重要方針】W2とW3の終盤構図ミラーリングを完全に破壊！
  - W2終盤が「2-6強制スクロール → 2-7上登り → 2-城上登り戦艦」だったのに対し、W3終盤が同じ並びになっていた点を全面解体：
    * W3強制スクロールは【3-3 翠嵐の樹液激流ハイウェイ (15,200px / 168px/s)】へ前倒し移設！リーフゲート5基の爽快ハイスピードコースに。
    * 【3-6】は上登りとは真逆の【垂直降下 verticalDescent】ステージ「蒼翠の深淵降下スパイア (y:-680→+780→水平6,800px)」へ刷新！重力落下しながら浮遊バブルと振り子ツタで制御着地し、底の樹海トンネルへ突入する快感重視。
    * 【3-7】は純水平・上下2層分岐ガントリー「翠玉の双層キャノピー回廊 (15,600px)」へ変更。上段(樹冠ツタ＆オービタル翡翠盤の高速空中戦)と下段(地下根の茨ピストン＆肉食花突破)が随所で交差。
    * 【3-BOSS】も水平玉座決戦へ変更！全長7,400pxの翡翠宮殿行軍を経て、1,040pxの広大な水平玉座アリーナ(x:5240〜6280 / floorY:365)で「翡翠皇エメラルドエンペラー(15HP・ワープ皆無・壁完走突進)」と真っ向勝負。

■ 【WORLD 4：蒼氷と絶対零度の王城（全9ステージ・全ステージ鋭利尖鋭ギミック特化）】
  - ルート分岐：[4-1] → [4-2] → [4-3] → [4-砦1] → [4-4 / 4-5 分岐] → [4-6] → [4-砦2] → [4-城]
  - 新規敵8種＋ボス4体追加で総ユニット数は【全80種】へ到達！
    * EN-69 フロスト・レイス（氷壁貫通スロー滑空） / EN-70 アイシクル・バット（急降下氷柱爆弾） / EN-71 グレイシア・ゴーレム（正面凍結大盾・背後/踏破有効） / EN-72 クライオ・タレット（4方向拡散冷凍ボルト） / EN-73 ブリザード・フェアリー（周囲凍結オーラ展開・チル効果） / EN-74 アイス・スケーター（氷床超高速滑走・踏破優先） / EN-75 ミラー・フロスト（進行方向側の魔導弾を凍結弾にして反射！） / EN-76 パーマフロスト・ワーム（氷床を潜航＆跳躍襲撃）
    * 徘徊ミニボス: フロスト・タイタン(9-10HP) / 4-砦1: 氷騎士グラシア・ナイト(13HP) / 4-砦2: 絶対零度核コキュートス・コア(15HP) / 4-城: 蒼氷皇帝グラシエス(18HP・3形態・ワープ無)

■ 【開発者の好き勝手こだわり殴り書きメモ（形式不問の本音）】
  - 4-1「氷結海岸の極限加速スライディング」：ice_floorの極低摩擦で魔導スライディングが爆速になるのが最高に気持ちいい！序盤からCryoバンパーピンボールで宙を舞えるようにした。
  - 4-2「極寒の崩落氷柱橋」：乗ったら0.50秒でガタガタ震えて割れるcrumble_iceと、天井から0.65秒予兆で突き刺さる落氷柱のプレッシャーがヤバい。立ち止まったら終わり！
  - 4-3「蒼氷プリズム迷宮」：鏡(iceMirrors)に自分の魔導弾を撃ち込んで跳ね返し、裏側の開閉スイッチを撃つパズルアクション。正面から通れないゲートを反射弾でカチッと開ける瞬間が快感！
  - 4-砦1「凍てつく反射鏡の氷城」：凍結チル効果ビームと大氷刃振子が同時襲来。中ボス「グラシア・ナイト(13HP)」はワープ一切なしでアリーナの端から端まで氷結ランスを構えて走り切るガチ剣戟！
  - 4-4（分岐A）「深海氷溝・水中相転移ダイブ」：まさかの本格水中ステージ(underwaterStage)！氷⇔水相転移スイッチを撃つと、さっきまで泳いでいた水塊が一瞬で氷の床・壁に固まり、足場にも障害物にも早変わりする。
  - 4-5（分岐B）「白夜吹雪のウィンドブレイク峡谷」：7秒周期で左右に切り替わる猛烈ブリザード！風避け氷壁(windbreak)の陰に隠れながら進み、突風の追い風に乗ったら大渓谷を一気にロングジャンプで飛び越える！
  - 4-6「極光氷穴の強制高速垂直降下」：3-6とは異質の純垂直ピット落下！氷間欠泉(CryoGeyser)で高度をコントロールしつつ、落下途中に設置された氷バンパーや氷床を高速で渡り継いで底の出口へ叩き込む。
  - 4-砦2「絶対零度・凍結爆雷コア要塞」：全方位から迫る凍結ビームと近接起爆フロストマイン網。中ボス「コキュートス・コア(15HP)」は8方向絶対零度レーザーと氷柱落としを展開。
  - 4-城「蒼氷皇帝の絶対零度玉座」：暗闇＋極寒チル嵐の中でクライオランタンを灯しながら進み、最奥で「蒼氷皇帝グラシエス(18HP・3形態)」と決戦。HP6以下で極寒突進2連＋全方位零度ファンネル＋絶対零度ビームの総力戦（もちろんワープゼロ・全攻撃完走）。

====================================================================
17. CADステージ設計図 ＆ 敵攻撃挙動シェマティック図解＋3桁ページPDF出力仕様
====================================================================
■ 仕様書モーダル＆PDFの全面図解化（目標150〜300+ページ構成）：
  - 全80体の敵・ボスに「実際のワールド地形背景＋敵スプライト＋弾幕／レーザー／反射／突進残像／盾防壁＋回避自機を描写した実戦スクリーンショット風アクション図解（drawEnemyAttackDiagram）」を自動生成・埋め込み。
  - 全37メインステージ＋全12エリア戦（計49マップ）に、実座標ベースの「CADステージ設計図（drawStageBlueprintDiagram）」を生成・埋め込み（全プラットフォーム種別・斜面・各種特殊ギミック・チェックポイント・金オーブ・敵パトロール帯[minX..maxX]・ボスアリーナ・ゴール位置・X/Y座標軸メモリを厳密プロット）。
  - さらに各ステージごとに全長を1/2〜1/4スケール（1バンド約3,500〜4,200px幅・最大4バンド分割）へ拡大した【精密拡大CAD設計図バンド＋全地形(PLATFORMS)・全ギミック(GIMMICKS)・全敵座標(ENEMIES)インベントリ表】を追加ページへ分割出力。

====================================================================
18. W1〜W4 平坦地形全面ブラッシュアップ（長大平面スラブゼロ化）
====================================================================
■ 全37ステージの地形監査と動的段差・ギャップ再構築：
  - ボス戦専用アリーナおよび意図的な地下天井を除き、900px以上連続していた平坦地面スラブをすべて解体（W1: 1-1〜1-BOSS / W2: 2-1〜2-6 / W3: 3-1〜3-BOSS / W4: 4-3, 4-4終端）。
  - 単なる分割ではなく「標高ステップ差（25〜40px昇降）＋80〜100px跳躍ギャップ＋中間足場・衝撃橋・レール接続・シークレットルート保全」を組み合わせ、各ステージごとに途切れないアスレチックリズムと精密配置を実現。

====================================================================
19. W1〜W5統合ワイドワールドマップ ＆ クロスワールド秘密ワープ・400字+完全解説
====================================================================
■ W1〜W5 全ワールド統合シームレスマップ (WORLD_MAP_WIDTH = 9,680px)：
  - ワールド1〜ワールド5までが1本の広大なパノラマ水平マップ（W1:x+0 / W2:x+1,820 / W3:x+3,660 / W4:x+5,520 / W5:x+7,370）として連結。
  - 上部ツールバーに「W1〜W5」ワールド即座フォーカス移動ボタンを実装し、現在位置や他ワールドへの視認移動が自在。
■ 隠しゴールによるクロスワールド大ワープ網（金色曲線破線アーチ表示・全9箇所）：
  1) 1-3(x=11,560, y=4)    → WARP → 2-2（時計塔＆サンダーレール）
  2) 1-S(クリア)            → WARP → 2-1（黄金の時計塔エントランス）
  3) 2-3(x=12,680, y=29)   → WARP → 3-1（翠緑の摩天楼キャノピー）
  4) 2-5(x=13,230, y=49)   → WARP → 3-4（翡翠地下樹海・蛍光洞窟）
  5) 3-3(x=14,380, y=19)   → WARP → 4-1（蒼氷の港湾高速滑走）
  6) 3-6(x=6,600, y=409)   → WARP → 4-4（深海氷溝・水中相転移ダイブ）
  7) 4-3(x=14,180, y=29)   → WARP → 5-1（紅蓮の軌道高架線とスリング加速）
  8) 4-5(x=13,680, y=29)   → WARP → 5-3（血晶鏡と振子大刃の回廊）
  9) 5-4(x=3,410, y=53)    → WARP → 5-7（熾天弾幕の前奏曲・紅輪祭壇）
■ マリオWii風の表裏マルチ探索ルート化（W1〜W5）：
  - 基本的一本道クリアを担保しつつ、高所の一方向ガラス足場・バウンス台・スリングを駆使した「上層ショートカット／ボーナスオーブ／隠しゴール」と「下層正攻法／隠匿回復通路」を全ワールドへ配置。
■ ステージ解説 1ステージ400字以上保証 ＆ 300+ページPDF仕様書：
  - 全49ステージすべてに対し「全体概要＋区間別（ギミック・敵・上下ルート・秘密ゴール）」を400字以上の正確記述で搭載。
  - PDF出力は【1拡大CADバンド＝1 A4ページ（計147拡大頁）】＋【実画面風ゲームスクリーン描写】＋【座標台帳クリッピング無し完全印字】により総ボリューム【300ページ超（約322頁）】へ拡張！

====================================================================
20. WORLD 5「深紅覇王城と熾天の聖域」（全12ステージ・赤基調・高密度弾幕5-砦3）
====================================================================
■ ルート構成（全12メインステージ＋3エリア戦）：
  [5-1] → [5-砦1] → [5-2] → [5-3] → [5-4 (★秘密→5-7)] → [5-5] → [5-6] → [5-砦2] → [5-7 (5-砦3前奏曲)] → [5-砦3 (最狂熾天使)] → [5-8] → [5-城 (紅蓮覇王)]
■ W5固有ギミック4種：
  1) スカーレット・スリング（ScarletSling）：紅蓮の光輪に触れると指定ベクトルへ大射出し空中2段ジャンプ権を即回復。
  2) マグマ流ベルト（magma_belt）：床上でプレイヤーを押し流す高温コンベア地形（順流加速＆逆流抵抗）。
  3) 溶岩間欠泉（MagmaGeyser / -25HP）：周期予兆の後に火柱が噴き上がる垂直トラップ。
  4) 断罪の大刃振子（PendulumBlade / -26HP）：巨大な紅鋼ハルバード振子。
  5) 弾幕発生結晶（DanmakuEmitter / -18HP）：8〜12WayのRing / Fan / Spiral / Rose（二重螺旋薔薇）弾幕を連続放射。
■ W5新規ユニット13種追加（総ユニット数：全93種へ到達）：
  - 雑魚・特殊8種：クリムゾン・ランサー(EN-81) / マグマ・インプ(EN-82) / ルビー・タレット(EN-83) / スカーレット・リーパー(EN-84) / エンバー・ボマー(EN-85) / ブラッド・ミラー(EN-86) / インフェルノ・ワイバーン(EN-87) / ヴァルキリー・ビット(EN-88)
  - エリア戦専用：紅蓮衛士スカーレット・センチネル(EN-89 / 11-13HP / ENC_W5_1〜3 / 撃破後回復オーブ)
  - 5-砦1中ボス：処刑騎士ルビー・エグゼキューター(EN-90 / 14HP)
  - 5-砦2中ボス：溶鉱巨神ファーネス・タイタン(EN-91 / 17HP)
  - 5-砦3超強敵：熾天使スカーレット・セラフ(EN-92 / 24HP・10〜14Way二重螺旋薔薇弾＋9〜12聖輪収束弾＆紅蓮ピラー光柱＋全幅翼掃討＆羽根雨)
  - 5-城大ボス：紅蓮皇帝クリムゾン・ソヴリン(EN-93 / 26HP・3形態・10〜14Wayフレア＋5〜6地面紅蓮スパイク＋壁完走連続覇王突進・ワープ完全禁止)
■ 開発者こだわり本音メモ（W5総括）：
  - 「5-7は5-砦3モチーフ」「5-砦3のボスをめちゃめちゃ強く・高密度弾幕に」「5-城はまた別軸の重厚皇帝ボス」の3点を軸に設計。セラフの薔薇弾幕と地面ピラーの同時回避はまさに本作最高峰の達成感！`;
