import { createEnemyDefForKind } from './gameData';
import {
  BossDef,
  DanmakuEmitterDef,
  EnemyDef,
  EnemyKind,
  MagmaGeyserDef,
  ManaOrbDef,
  MovingPlatformDef,
  PendulumBladeDef,
  PlatformDef,
  ScarletSlingDef,
  SlopeDef,
  StageDefinition,
} from './types';

function makeW5Enemy(
  id: string,
  kind: EnemyKind,
  x: number,
  floorY: number,
  minX: number,
  maxX: number,
  opts: Partial<EnemyDef> = {}
): EnemyDef {
  const en = createEnemyDefForKind(kind, id, x, floorY, minX, maxX);
  return { ...en, ...opts };
}

function makeW5Orbs(
  prefix: string,
  startX: number,
  y: number,
  count: number,
  stepX: number,
  stepY = 0,
  bonus = false,
  afterBoss = false
): ManaOrbDef[] {
  const arr: ManaOrbDef[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: `${prefix}_${i}`,
      x: startX + i * stepX,
      y: y + i * stepY,
      r: bonus ? 10 : 8,
      collected: false,
      value: bonus ? 300 : 100,
      bonus,
      afterBoss,
      phase: i * 0.45,
    });
  }
  return arr;
}

function emptyW5Stage(
  partial: Partial<StageDefinition> &
    Pick<StageDefinition, 'id' | 'code' | 'title' | 'subtitle' | 'theme' | 'width'>
): StageDefinition {
  return {
    spawn: { x: 70, y: 315 },
    goal: { x: partial.width - 190, y: 244, w: 54, h: 116 },
    platforms: [],
    slopes: [],
    movingPlatforms: [],
    sealBlocks: [],
    switches: [],
    gears: [],
    beamLasers: [],
    rails: [],
    cables: [],
    spikes: [],
    lasers: [],
    gravityZones: [],
    mirrors: [],
    cannons: [],
    pendulumVines: [],
    floatBubbles: [],
    sporeCatapults: [],
    snapTraps: [],
    sporeJets: [],
    bloomBridges: [],
    scythePendulums: [],
    cryoBumpers: [],
    cryoGeysers: [],
    freezeBeams: [],
    fallingIcicles: [],
    icePendulums: [],
    frostMines: [],
    phaseWaterSwitches: [],
    iceMirrors: [],
    cryoLanterns: [],
    scarletSlings: [],
    danmakuEmitters: [],
    magmaGeysers: [],
    pendulumBlades: [],
    enemies: [],
    orbs: [],
    checkpoints: [{ x: 70, y: 370 }],
    neonSigns: [],
    ...partial,
  };
}

function makeW5MovPlat(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  endX: number,
  endY: number,
  speed = 135,
  phase = 0
): MovingPlatformDef {
  return {
    id,
    x,
    y,
    w,
    h,
    startX: x,
    startY: y,
    endX,
    endY,
    speed,
    phase,
    vx: 0,
    vy: 0,
    prevX: x,
    prevY: y,
  };
}

// ============================================================================
// STAGE 5-1: 緋紅の城塞高速滑走＆坂道ダイブ (14,200px / 20 Enemies)
// ============================================================================
function buildStage5_1(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '51_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '51_p1b', x: 590, y: 325, w: 380, h: 205, style: 'crimson_steel' },
    { id: '51_cr1', x: 1100, y: 290, w: 150, h: 20, style: 'crumble_ice' },
    { id: '51_p2', x: 1380, y: 270, w: 440, h: 260, style: 'crimson_steel' },
    { id: '51_up0', x: 1450, y: 155, w: 280, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '51_p3', x: 1960, y: 230, w: 460, h: 300, style: 'crimson_steel' },
    // Slope 1
    { id: '51_p4', x: 3220, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '51_cr2', x: 3830, y: 335, w: 150, h: 20, style: 'crumble_ice' },
    { id: '51_p5', x: 4100, y: 360, w: 480, h: 170, style: 'crimson_steel' },
    { id: '51_hi1', x: 4220, y: 235, w: 340, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '51_hi2', x: 4720, y: 195, w: 360, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '51_p6', x: 5340, y: 295, w: 440, h: 235, style: 'crimson_steel' },
    { id: '51_cr3', x: 5920, y: 265, w: 145, h: 20, style: 'crumble_ice' },
    { id: '51_cr4', x: 6180, y: 240, w: 145, h: 20, style: 'crumble_ice' },
    { id: '51_p7', x: 6460, y: 245, w: 460, h: 285, style: 'crimson_steel' },
    // Slope 2
    { id: '51_p8', x: 7780, y: 375, w: 440, h: 155, style: 'crimson_steel' },
    { id: '51_hi3', x: 8360, y: 270, w: 340, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '51_p9', x: 8560, y: 340, w: 460, h: 190, style: 'crimson_steel' },
    { id: '51_p10', x: 9160, y: 365, w: 460, h: 165, style: 'crimson_steel' },
    { id: '51_cr5', x: 9760, y: 330, w: 150, h: 20, style: 'crumble_ice' },
    { id: '51_p11', x: 10040, y: 295, w: 480, h: 235, style: 'crimson_steel' },
    { id: '51_up2', x: 10120, y: 175, w: 320, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '51_p12', x: 10680, y: 255, w: 460, h: 275, style: 'crimson_steel' },
    // Slope 3
    { id: '51_p13', x: 11960, y: 365, w: 480, h: 165, style: 'crimson_steel' },
    { id: '51_cr6', x: 12580, y: 325, w: 145, h: 20, style: 'crumble_ice' },
    { id: '51_p14', x: 12860, y: 290, w: 440, h: 240, style: 'crimson_steel' },
    { id: '51_end', x: 13460, y: 365, w: 740, h: 165, style: 'crimson_steel' },
  ];

  const slopes: SlopeDef[] = [
    { id: '51_sl1', x1: 2420, y1: 230, x2: 3220, y2: 370, bottomY: 530 },
    { id: '51_sl2', x1: 6920, y1: 245, x2: 7780, y2: 375, bottomY: 530 },
    { id: '51_sl3', x1: 11140, y1: 255, x2: 11960, y2: 365, bottomY: 530 },
  ];

  const scarletSlings: ScarletSlingDef[] = [
    { id: '51_ss1', x: 3560, y: 260, r: 22, launchVx: 480, launchVy: -460 },
    { id: '51_ss2', x: 5220, y: 220, r: 22, launchVx: 490, launchVy: -470 },
    { id: '51_ss3', x: 8380, y: 315, r: 22, launchVx: 480, launchVy: -460 },
    { id: '51_ss4', x: 12720, y: 245, r: 22, launchVx: 500, launchVy: -480 },
  ];

  const magmaGeysers: MagmaGeyserDef[] = [
    { id: '51_mg1', x: 4600, y: 370, w: 54, maxHeight: 180, cyclePeriod: 3.2, activeDuration: 1.5, phase: 0 },
    { id: '51_mg2', x: 9660, y: 370, w: 54, maxHeight: 180, cyclePeriod: 3.2, activeDuration: 1.5, phase: 1.0 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('51e01', 'crimson_lancer', 760, 325, 620, 940),
    makeW5Enemy('51e02', 'inferno_wyvern', 1580, 270, 1410, 1790),
    makeW5Enemy('51e03', 'valkyrie_bit', 1590, 155, 1470, 1710),
    makeW5Enemy('51e04', 'ruby_turret', 2180, 230, 2150, 2210),
    makeW5Enemy('51e05', 'crimson_lancer', 3420, 370, 3250, 3660),
    makeW5Enemy('51e06', 'magma_imp', 4360, 360, 4140, 4540),
    makeW5Enemy('51e07', 'hopping_bot', 4880, 195, 4740, 5060),
    makeW5Enemy('51e08', 'slime_glitch', 4940, 340, 4780, 5140),
    makeW5Enemy('51e09', 'crimson_lancer', 5560, 295, 5380, 5740),
    makeW5Enemy('51e10', 'inferno_wyvern', 6680, 245, 6500, 6880),
    makeW5Enemy('51e11', 'crimson_lancer', 7980, 375, 7810, 8180),
    makeW5Enemy('51e12', 'valkyrie_bit', 8520, 270, 8380, 8680),
    makeW5Enemy('51e13', 'magma_imp', 8780, 340, 8600, 8980),
    makeW5Enemy('51e14', 'ruby_turret', 9390, 365, 9360, 9420),
    makeW5Enemy('51e15', 'crimson_lancer', 10280, 295, 10080, 10480),
    makeW5Enemy('51e16', 'hopping_bot', 10280, 175, 10140, 10420),
    makeW5Enemy('51e17', 'slime_glitch', 10900, 255, 10720, 11100),
    makeW5Enemy('51e18', 'crimson_lancer', 12180, 365, 12000, 12400),
    makeW5Enemy('51e19', 'inferno_wyvern', 13080, 290, 12900, 13260),
    makeW5Enemy('51e20', 'magma_imp', 13720, 365, 13500, 13920),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('51o1', 2520, 180, 5, 120, 20),
    ...makeW5Orbs('51o2', 7020, 195, 5, 130, 18),
    ...makeW5Orbs('51o3', 11240, 205, 5, 125, 16),
    { id: '51_b1', x: 1590, y: 105, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '51_b2', x: 4900, y: 145, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
    { id: '51_b3', x: 10280, y: 125, r: 10, collected: false, value: 300, bonus: true, phase: 2.0 },
  ];

  return emptyW5Stage({
    id: '5-1',
    code: '5-1',
    title: '緋紅の城塞高速滑走＆坂道ダイブ',
    subtitle: 'Crimson Citadel Hyper-Speed Slopes, Scarlet Slings & Magma Geysers (20 Enemies)',
    theme: 'inferno_citadel',
    width: 14200,
    goal: { x: 14000, y: 249, w: 54, h: 116 },
    platforms,
    slopes,
    scarletSlings,
    magmaGeysers,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4160, y: 360 },
      { x: 9220, y: 365 },
    ],
    neonSigns: [
      { x: 95, y: 195, w: 235, h: 24, label: 'CRIMSON SLIDE BOOST', color: '#f43f5e' },
      { x: 4180, y: 175, w: 235, h: 24, label: 'DUAL CITADEL TIERS', color: '#fb7185' },
      { x: 9240, y: 185, w: 235, h: 24, label: 'SCARLET SLING DASH', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// STAGE 5-FORT1: 第一紅蓮要塞・鉄壁の関門 (3,200px / ミニボス戦)
// ============================================================================
function buildStage5_Fort1(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '5f1_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '5f1_arena', x: 600, y: 370, w: 1200, h: 160, style: 'crimson_steel' },
    { id: '5f1_ap1', x: 840, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5f1_ap2', x: 1380, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5f1_exit', x: 1900, y: 370, w: 1300, h: 160, style: 'crimson_steel' },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('5fe1', 'crimson_lancer', 700, 370, 620, 800),
    makeW5Enemy('5fe2', 'inferno_wyvern', 1100, 185, 950, 1300),
    makeW5Enemy('5fe3', 'ruby_turret', 1650, 370, 1500, 1780),
  ];

  const orbs: ManaOrbDef[] = makeW5Orbs('5fo1', 900, 210, 4, 50, 0, true);

  const boss: BossDef = {
    kind: 'scarlet_sentinel',
    x: 1400,
    y: 302,
    w: 58,
    h: 68,
    vx: 0,
    vy: 0,
    hp: 18,
    maxHp: 18,
    facing: -1,
    arenaMinX: 620,
    arenaMaxX: 1780,
    floorY: 370,
    active: false,
    defeated: false,
    state: 'idle',
    stateTimer: 0.65,
    stunTimer: 0,
    hitFlash: 0,
    phase: 1,
    clones: [],
  };

  return emptyW5Stage({
    id: '5-FORT1',
    code: '5-砦1',
    title: '第一紅蓮要塞・鉄壁の関門',
    subtitle: 'Fortress Gateway & Scarlet Sentinel Encounter (18HP)',
    theme: 'crimson_bastion',
    width: 3200,
    goal: { x: 3000, y: 254, w: 54, h: 116 },
    platforms,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 1940, y: 370 },
    ],
    neonSigns: [{ x: 100, y: 190, w: 220, h: 24, label: 'FORTRESS GATE 1', color: '#f43f5e' }],
    boss,
  });
}

// ============================================================================
// STAGE 5-2: 崩落クリスタル城塞迷宮 (13,900px / 20 Enemies)
// ============================================================================
function buildStage5_2(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '52_p1', x: 0, y: 370, w: 440, h: 160, style: 'crimson_steel' },
    { id: '52_cr1', x: 560, y: 340, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_cr2', x: 820, y: 305, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_cr3', x: 1080, y: 270, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p2', x: 1350, y: 295, w: 460, h: 235, style: 'crimson_steel' },
    { id: '52_hi0', x: 1420, y: 175, w: 300, h: 16, style: 'ruby_glass', oneWay: true },

    { id: '52_cr4', x: 1940, y: 280, w: 135, h: 20, style: 'crumble_ice' },
    { id: '52_p3', x: 2680, y: 255, w: 460, h: 275, style: 'crimson_steel' },
    { id: '52_cr5', x: 3280, y: 295, w: 135, h: 20, style: 'crumble_ice' },
    { id: '52_cr6', x: 3530, y: 275, w: 135, h: 20, style: 'crumble_ice' },
    { id: '52_cr7', x: 3780, y: 255, w: 135, h: 20, style: 'crumble_ice' },
    { id: '52_p4', x: 4050, y: 335, w: 480, h: 195, style: 'crimson_steel' },

    { id: '52_cr8', x: 4670, y: 310, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p4b', x: 4950, y: 300, w: 420, h: 230, style: 'ruby_glass' },
    { id: '52_cr9', x: 6180, y: 260, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p5', x: 6460, y: 305, w: 480, h: 225, style: 'crimson_steel' },
    { id: '52_hi0b', x: 6540, y: 185, w: 320, h: 16, style: 'ruby_glass', oneWay: true },

    { id: '52_hi1', x: 7090, y: 195, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_hi2', x: 7350, y: 180, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_hi3', x: 7610, y: 195, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_lo1', x: 7090, y: 345, w: 145, h: 20, style: 'crumble_ice' },
    { id: '52_lo2', x: 7360, y: 345, w: 145, h: 20, style: 'crumble_ice' },
    { id: '52_lo3', x: 7620, y: 345, w: 145, h: 20, style: 'crumble_ice' },
    { id: '52_p6', x: 7900, y: 315, w: 480, h: 215, style: 'crimson_steel' },

    { id: '52_cr10', x: 8520, y: 305, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p7', x: 8800, y: 335, w: 500, h: 195, style: 'crimson_steel' },
    { id: '52_cr11', x: 9440, y: 310, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p7b', x: 9720, y: 295, w: 440, h: 235, style: 'ruby_glass' },
    { id: '52_cr12', x: 10940, y: 270, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p8', x: 11220, y: 315, w: 480, h: 215, style: 'crimson_steel' },
    { id: '52_cr13', x: 11840, y: 295, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_cr14', x: 12100, y: 275, w: 140, h: 20, style: 'crumble_ice' },
    { id: '52_p9', x: 12380, y: 310, w: 460, h: 220, style: 'crimson_steel' },
    { id: '52_cr15', x: 12980, y: 325, w: 145, h: 20, style: 'crumble_ice' },
    { id: '52_end', x: 13260, y: 340, w: 640, h: 190, style: 'crimson_steel' },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('52e01', 'crimson_lancer', 700, 340, 500, 900),
    makeW5Enemy('52e02', 'hopping_bot', 1450, 295, 1300, 1700),
    makeW5Enemy('52e03', 'inferno_wyvern', 2000, 190, 1850, 2200),
    makeW5Enemy('52e04', 'valkyrie_bit', 2800, 185, 2650, 3050),
    makeW5Enemy('52e05', 'magma_imp', 3600, 275, 3450, 3900),
    makeW5Enemy('52e06', 'crimson_lancer', 4200, 335, 4050, 4450),
    makeW5Enemy('52e07', 'slime_glitch', 5100, 300, 4900, 5350),
    makeW5Enemy('52e08', 'ruby_turret', 6540, 185, 6500, 6600),
    makeW5Enemy('52e09', 'inferno_wyvern', 7200, 180, 7050, 7450),
    makeW5Enemy('52e10', 'hopping_bot', 8050, 315, 7900, 8300),
    makeW5Enemy('52e11', 'crimson_lancer', 8900, 335, 8750, 9150),
    makeW5Enemy('52e12', 'valkyrie_bit', 9850, 295, 9700, 10100),
    makeW5Enemy('52e13', 'magma_imp', 11350, 315, 11200, 11550),
    makeW5Enemy('52e14', 'slime_glitch', 12500, 310, 12350, 12700),
    makeW5Enemy('52e15', 'crimson_lancer', 13350, 340, 13200, 13700),
    makeW5Enemy('52e16', 'inferno_wyvern', 1600, 200, 1500, 1800),
    makeW5Enemy('52e17', 'ruby_turret', 3300, 290, 3250, 3350),
    makeW5Enemy('52e18', 'hopping_bot', 7400, 345, 7250, 7600),
    makeW5Enemy('52e19', 'valkyrie_bit', 11000, 270, 10850, 11200),
    makeW5Enemy('52e20', 'slime_glitch', 12150, 275, 12000, 12300),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('52o1', 1450, 140, 4, 45),
    ...makeW5Orbs('52o2', 6540, 145, 4, 45),
    ...makeW5Orbs('52o3', 11300, 200, 4, 45),
    { id: '52_b1', x: 1420, y: 110, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '52_b2', x: 6540, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 1.5 },
  ];

  return emptyW5Stage({
    id: '5-2',
    code: '5-2',
    title: '崩落クリスタル城塞迷宮',
    subtitle: 'Crimson Crumble Labyrinth & Vaulting Chain (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13900,
    goal: { x: 13700, y: 224, w: 54, h: 116 },
    platforms,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4100, y: 335 },
      { x: 8900, y: 335 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'CRUMBLE CRYSTAL CHASM', color: '#f43f5e' },
      { x: 4120, y: 175, w: 220, h: 24, label: 'VERTICAL VAULT ZONE', color: '#fb7185' },
      { x: 8920, y: 185, w: 220, h: 24, label: 'FRAGILE BRIDGE SPRINT', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// STAGE 5-3: 炎のジャンプ＆弾幕滑走峡谷 (13,800px / 20 Enemies)
// ============================================================================
function buildStage5_3(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '53_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '53_p2', x: 600, y: 325, w: 420, h: 205, style: 'crimson_steel' },
    { id: '53_cr1', x: 1120, y: 290, w: 160, h: 20, style: 'crumble_ice' },
    { id: '53_p3', x: 1400, y: 270, w: 460, h: 260, style: 'crimson_steel' },
    { id: '53_up1', x: 1480, y: 155, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '53_p4', x: 2000, y: 330, w: 480, h: 200, style: 'crimson_steel' },
    { id: '53_p5', x: 2700, y: 360, w: 500, h: 170, style: 'crimson_steel' },
    { id: '53_hi1', x: 2880, y: 235, w: 320, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '53_cr2', x: 3420, y: 330, w: 150, h: 20, style: 'crumble_ice' },
    { id: '53_p6', x: 3700, y: 295, w: 460, h: 235, style: 'crimson_steel' },
    { id: '53_p7', x: 4400, y: 340, w: 480, h: 190, style: 'crimson_steel' },
    { id: '53_cr3', x: 5000, y: 300, w: 150, h: 20, style: 'crumble_ice' },
    { id: '53_p8', x: 5300, y: 270, w: 500, h: 260, style: 'crimson_steel' },
    { id: '53_hi2', x: 5460, y: 155, w: 320, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '53_p9', x: 6000, y: 355, w: 480, h: 175, style: 'crimson_steel' },
    { id: '53_p10', x: 6700, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '53_cr4', x: 7280, y: 300, w: 150, h: 20, style: 'crumble_ice' },
    { id: '53_p11', x: 7560, y: 270, w: 480, h: 260, style: 'crimson_steel' },
    { id: '53_hi3', x: 7720, y: 155, w: 320, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '53_p12', x: 8280, y: 340, w: 500, h: 190, style: 'crimson_steel' },
    { id: '53_p13', x: 9000, y: 325, w: 480, h: 205, style: 'crimson_steel' },
    { id: '53_cr5', x: 9600, y: 295, w: 150, h: 20, style: 'crumble_ice' },
    { id: '53_p14', x: 9880, y: 270, w: 460, h: 260, style: 'crimson_steel' },
    { id: '53_hi4', x: 9960, y: 155, w: 320, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '53_p15', x: 10560, y: 340, w: 480, h: 190, style: 'crimson_steel' },
    { id: '53_end', x: 11280, y: 340, w: 2320, h: 190, style: 'crimson_steel' },
  ];

  const slopes: SlopeDef[] = [
    { id: '53_sl1', x1: 2200, y1: 230, x2: 2700, y2: 360, bottomY: 530 },
    { id: '53_sl2', x1: 6400, y1: 235, x2: 6700, y2: 335, bottomY: 530 },
    { id: '53_sl3', x1: 10200, y1: 230, x2: 10560, y2: 340, bottomY: 530 },
  ];

  const scarletSlings: ScarletSlingDef[] = [
    { id: '53_ss1', x: 1850, y: 260, r: 22, launchVx: 480, launchVy: -460 },
    { id: '53_ss2', x: 5180, y: 210, r: 22, launchVx: 490, launchVy: -470 },
    { id: '53_ss3', x: 8140, y: 280, r: 22, launchVx: 480, launchVy: -460 },
  ];

  const danmakuEmitters: DanmakuEmitterDef[] = [
    { id: '53_de1', x: 4050, y: 155, pattern: 'ring', interval: 1.1, count: 10, speed: 215 },
    { id: '53_de2', x: 8650, y: 155, pattern: 'spiral', interval: 0.9, count: 8, speed: 220 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('53e01', 'crimson_lancer', 680, 325, 580, 820),
    makeW5Enemy('53e02', 'inferno_wyvern', 1450, 270, 1300, 1700),
    makeW5Enemy('53e03', 'valkyrie_bit', 1490, 155, 1380, 1620),
    makeW5Enemy('53e04', 'ruby_turret', 2200, 330, 2150, 2250),
    makeW5Enemy('53e05', 'hopping_bot', 2850, 360, 2720, 3050),
    makeW5Enemy('53e06', 'magma_imp', 3800, 295, 3650, 4050),
    makeW5Enemy('53e07', 'slime_glitch', 4500, 340, 4350, 4750),
    makeW5Enemy('53e08', 'crimson_lancer', 5450, 270, 5300, 5700),
    makeW5Enemy('53e09', 'inferno_wyvern', 6100, 355, 5950, 6350),
    makeW5Enemy('53e10', 'valkyrie_bit', 6800, 335, 6650, 7050),
    makeW5Enemy('53e11', 'crimson_lancer', 7650, 270, 7500, 7900),
    makeW5Enemy('53e12', 'hopping_bot', 8400, 340, 8250, 8650),
    makeW5Enemy('53e13', 'magma_imp', 9100, 325, 8950, 9350),
    makeW5Enemy('53e14', 'ruby_turret', 9950, 270, 9900, 10000),
    makeW5Enemy('53e15', 'slime_glitch', 10650, 340, 10500, 10900),
    makeW5Enemy('53e16', 'inferno_wyvern', 1800, 200, 1650, 1950),
    makeW5Enemy('53e17', 'ruby_turret', 3500, 250, 3450, 3550),
    makeW5Enemy('53e18', 'valkyrie_bit', 5350, 150, 5200, 5500),
    makeW5Enemy('53e19', 'crimson_lancer', 7750, 150, 7600, 7900),
    makeW5Enemy('53e20', 'magma_imp', 10000, 150, 9850, 10150),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('53o1', 1500, 120, 4, 45),
    ...makeW5Orbs('53o2', 5480, 120, 4, 45),
    ...makeW5Orbs('53o3', 7740, 120, 4, 45),
    { id: '53_b1', x: 1480, y: 90, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '53_b2', x: 5460, y: 90, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-3',
    code: '5-3',
    title: '炎のジャンプ＆弾幕滑走峡谷',
    subtitle: 'Inferno Slopes, Scarlet Slings & Danmaku Canyons (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13800,
    goal: { x: 13600, y: 224, w: 54, h: 116 },
    platforms,
    slopes,
    scarletSlings,
    danmakuEmitters,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4400, y: 340 },
      { x: 9000, y: 325 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'INFERNO CANYON SLOPES', color: '#f43f5e' },
      { x: 4420, y: 175, w: 220, h: 24, label: 'DANMAKU VALLEY', color: '#fb7185' },
      { x: 9020, y: 185, w: 220, h: 24, label: 'SLING VAULT RIDGE', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// STAGE 5-4: 溶鉱炉の迷宮と間欠泉 (13,500px / 20 Enemies)
// ============================================================================
function buildStage5_4(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '54_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '54_p2', x: 620, y: 335, w: 440, h: 195, style: 'crimson_steel' },
    { id: '54_hi1', x: 780, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '54_p3', x: 1380, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '54_p4', x: 2120, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '54_hi2', x: 2280, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '54_p5', x: 2860, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '54_p6', x: 3620, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '54_hi3', x: 3780, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '54_p7', x: 4360, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '54_p8', x: 5120, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '54_p9', x: 5880, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '54_hi4', x: 6040, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '54_p10', x: 6620, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '54_p11', x: 7380, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '54_p12', x: 8140, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '54_hi5', x: 8300, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '54_p13', x: 8880, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '54_p14', x: 9640, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '54_end', x: 10400, y: 340, w: 3100, h: 190, style: 'crimson_steel' },
  ];

  const magmaGeysers: MagmaGeyserDef[] = [
    { id: '54_mg1', x: 1100, y: 370, w: 45, maxHeight: 170, cyclePeriod: 3.0, activeDuration: 1.3, phase: 0 },
    { id: '54_mg2', x: 3340, y: 370, w: 45, maxHeight: 170, cyclePeriod: 3.0, activeDuration: 1.3, phase: 0.7 },
    { id: '54_mg3', x: 5600, y: 370, w: 45, maxHeight: 170, cyclePeriod: 3.0, activeDuration: 1.3, phase: 1.4 },
    { id: '54_mg4', x: 7860, y: 370, w: 45, maxHeight: 170, cyclePeriod: 3.0, activeDuration: 1.3, phase: 2.1 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('54e01', 'magma_imp', 350, 370, 200, 460),
    makeW5Enemy('54e02', 'crimson_lancer', 820, 335, 700, 1000),
    makeW5Enemy('54e03', 'inferno_wyvern', 1500, 190, 1380, 1720),
    makeW5Enemy('54e04', 'valkyrie_bit', 2250, 190, 2140, 2480),
    makeW5Enemy('54e05', 'hopping_bot', 3000, 370, 2880, 3240),
    makeW5Enemy('54e06', 'slime_glitch', 3800, 335, 3680, 4040),
    makeW5Enemy('54e07', 'ruby_turret', 4500, 350, 4420, 4580),
    makeW5Enemy('54e08', 'magma_imp', 5300, 370, 5180, 5520),
    makeW5Enemy('54e09', 'crimson_lancer', 6050, 335, 5920, 6280),
    makeW5Enemy('54e10', 'inferno_wyvern', 6800, 190, 6680, 7040),
    makeW5Enemy('54e11', 'valkyrie_bit', 7550, 190, 7420, 7780),
    makeW5Enemy('54e12', 'hopping_bot', 8300, 335, 8180, 8540),
    makeW5Enemy('54e13', 'slime_glitch', 9100, 350, 8960, 9320),
    makeW5Enemy('54e14', 'ruby_turret', 9800, 370, 9750, 9850),
    makeW5Enemy('54e15', 'magma_imp', 10500, 340, 10380, 10740),
    makeW5Enemy('54e16', 'inferno_wyvern', 1600, 150, 1450, 1750),
    makeW5Enemy('54e17', 'valkyrie_bit', 3900, 150, 3750, 4050),
    makeW5Enemy('54e18', 'magma_imp', 6150, 150, 6000, 6300),
    makeW5Enemy('54e19', 'crimson_lancer', 8400, 150, 8250, 8550),
    makeW5Enemy('54e20', 'slime_glitch', 10600, 250, 10450, 10850),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('54o1', 820, 150, 3, 45),
    ...makeW5Orbs('54o2', 2320, 150, 3, 45),
    ...makeW5Orbs('54o3', 6080, 150, 3, 45),
    { id: '54_b1', x: 780, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '54_b2', x: 2280, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-4',
    code: '5-4',
    title: '溶鉱炉の迷宮と間欠泉',
    subtitle: 'Magma Foundry Labyrinth & Active Geyser Eruptions (20 Enemies)',
    theme: 'magma_foundry',
    width: 13500,
    goal: { x: 13300, y: 224, w: 54, h: 116 },
    platforms,
    magmaGeysers,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4360, y: 350 },
      { x: 8880, y: 350 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'MAGMA FOUNDRY SECTOR 1', color: '#ea580c' },
      { x: 4380, y: 175, w: 220, h: 24, label: 'GEYSER CHAMBER', color: '#f97316' },
      { x: 8900, y: 185, w: 220, h: 24, label: 'CRIMSON SMELTER', color: '#fb923c' },
    ],
  });
}

// ============================================================================
// STAGE 5-5: 炎のガントレット＆ペンデュラム (13,600px / 20 Enemies)
// ============================================================================
function buildStage5_5(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '55_p1', x: 0, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '55_p2', x: 680, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '55_p3', x: 1420, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '55_p4', x: 2160, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '55_p5', x: 2900, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '55_p6', x: 3660, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '55_p7', x: 4400, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '55_p8', x: 5160, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '55_p9', x: 5920, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '55_p10', x: 6660, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '55_p11', x: 7420, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '55_p12', x: 8180, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '55_p13', x: 8920, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '55_p14', x: 9680, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '55_end', x: 10460, y: 340, w: 3140, h: 190, style: 'crimson_steel' },
  ];

  const pendulumBlades: PendulumBladeDef[] = [
    { id: '55_pb1', cx: 1100, cy: 130, length: 150, maxAngle: 0.8, speed: 2.4, phase: 0 },
    { id: '55_pb2', cx: 3340, cy: 130, length: 150, maxAngle: 0.8, speed: 2.2, phase: 1.0 },
    { id: '55_pb3', cx: 5580, cy: 130, length: 150, maxAngle: 0.8, speed: 2.4, phase: 2.0 },
    { id: '55_pb4', cx: 7820, cy: 130, length: 150, maxAngle: 0.8, speed: 2.2, phase: 0.5 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('55e01', 'inferno_wyvern', 360, 190, 220, 500),
    makeW5Enemy('55e02', 'crimson_lancer', 920, 335, 780, 1080),
    makeW5Enemy('55e03', 'hopping_bot', 1650, 350, 1500, 1850),
    makeW5Enemy('55e04', 'valkyrie_bit', 2400, 190, 2250, 2600),
    makeW5Enemy('55e05', 'ruby_turret', 3150, 370, 3100, 3200),
    makeW5Enemy('55e06', 'magma_imp', 3920, 335, 3780, 4120),
    makeW5Enemy('55e07', 'slime_glitch', 4700, 350, 4550, 4900),
    makeW5Enemy('55e08', 'inferno_wyvern', 5450, 190, 5320, 5680),
    makeW5Enemy('55e09', 'crimson_lancer', 6180, 335, 6020, 6420),
    makeW5Enemy('55e10', 'hopping_bot', 6900, 350, 6750, 7150),
    makeW5Enemy('55e11', 'valkyrie_bit', 7650, 190, 7520, 7880),
    makeW5Enemy('55e12', 'ruby_turret', 8400, 335, 8350, 8450),
    makeW5Enemy('55e13', 'magma_imp', 9150, 350, 9020, 9380),
    makeW5Enemy('55e14', 'slime_glitch', 9900, 370, 9750, 10100),
    makeW5Enemy('55e15', 'crimson_lancer', 10600, 340, 10450, 10850),
    makeW5Enemy('55e16', 'valkyrie_bit', 1800, 150, 1650, 1950),
    makeW5Enemy('55e17', 'magma_imp', 4100, 150, 3950, 4250),
    makeW5Enemy('55e18', 'inferno_wyvern', 6400, 150, 6250, 6550),
    makeW5Enemy('55e19', 'hopping_bot', 8650, 150, 8500, 8800),
    makeW5Enemy('55e20', 'ruby_turret', 10800, 250, 10750, 10850),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('55o1', 780, 260, 3, 45),
    ...makeW5Orbs('55o2', 2240, 260, 3, 45),
    ...makeW5Orbs('55o3', 6000, 260, 3, 45),
    { id: '55_b1', x: 740, y: 220, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '55_b2', x: 2200, y: 220, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-5',
    code: '5-5',
    title: '炎のガントレット＆ペンデュラム',
    subtitle: 'Flame Gauntlet & Pendulum Blade Obstacles (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13600,
    goal: { x: 13400, y: 224, w: 54, h: 116 },
    platforms,
    pendulumBlades,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4400, y: 350 },
      { x: 8920, y: 350 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'BLADE GAUNTLET SECTOR', color: '#f43f5e' },
      { x: 4420, y: 175, w: 220, h: 24, label: 'PENDULUM RIDGE', color: '#fb7185' },
      { x: 8940, y: 185, w: 220, h: 24, label: 'SCYTHE CORRIDOR', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// STAGE 5-6: 灼熱のタワー頂上決戦プロローグ (13,700px / 20 Enemies)
// ============================================================================
function buildStage5_6(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '56_p1', x: 0, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '56_p2', x: 680, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '56_hi1', x: 840, y: 210, w: 280, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '56_p3', x: 1420, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '56_p4', x: 2160, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '56_hi2', x: 2320, y: 205, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '56_p5', x: 2900, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '56_p6', x: 3660, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '56_hi3', x: 3820, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '56_p7', x: 4400, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '56_p8', x: 5160, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '56_p9', x: 5920, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '56_hi4', x: 6080, y: 205, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '56_p10', x: 6660, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '56_p11', x: 7420, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '56_p12', x: 8180, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '56_hi5', x: 8340, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '56_p13', x: 8920, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '56_p14', x: 9680, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '56_end', x: 10460, y: 340, w: 3240, h: 190, style: 'crimson_steel' },
  ];

  const danmakuEmitters: DanmakuEmitterDef[] = [
    { id: '56_de1', x: 2500, y: 160, pattern: 'rose', interval: 0.9, count: 12, speed: 220 },
    { id: '56_de2', x: 6700, y: 160, pattern: 'spiral', interval: 0.7, count: 10, speed: 225 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('56e01', 'valkyrie_bit', 360, 190, 220, 500),
    makeW5Enemy('56e02', 'crimson_lancer', 920, 335, 780, 1080),
    makeW5Enemy('56e03', 'hopping_bot', 1650, 350, 1500, 1850),
    makeW5Enemy('56e04', 'inferno_wyvern', 2400, 190, 2250, 2600),
    makeW5Enemy('56e05', 'ruby_turret', 3150, 370, 3100, 3200),
    makeW5Enemy('56e06', 'magma_imp', 3920, 335, 3780, 4120),
    makeW5Enemy('56e07', 'slime_glitch', 4700, 350, 4550, 4900),
    makeW5Enemy('56e08', 'valkyrie_bit', 5450, 190, 5320, 5680),
    makeW5Enemy('56e09', 'crimson_lancer', 6180, 335, 6020, 6420),
    makeW5Enemy('56e10', 'hopping_bot', 6900, 350, 6750, 7150),
    makeW5Enemy('56e11', 'inferno_wyvern', 7650, 190, 7520, 7880),
    makeW5Enemy('56e12', 'ruby_turret', 8400, 335, 8350, 8450),
    makeW5Enemy('56e13', 'magma_imp', 9150, 350, 9020, 9380),
    makeW5Enemy('56e14', 'slime_glitch', 9900, 370, 9750, 10100),
    makeW5Enemy('56e15', 'crimson_lancer', 10600, 340, 10450, 10850),
    makeW5Enemy('56e16', 'valkyrie_bit', 1800, 150, 1650, 1950),
    makeW5Enemy('56e17', 'magma_imp', 4100, 150, 3950, 4250),
    makeW5Enemy('56e18', 'inferno_wyvern', 6400, 150, 6250, 6550),
    makeW5Enemy('56e19', 'hopping_bot', 8650, 150, 8500, 8800),
    makeW5Enemy('56e20', 'ruby_turret', 10800, 250, 10750, 10850),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('56o1', 880, 150, 3, 45),
    ...makeW5Orbs('56o2', 2340, 150, 3, 45),
    ...makeW5Orbs('56o3', 6100, 150, 3, 45),
    { id: '56_b1', x: 840, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '56_b2', x: 2320, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-6',
    code: '5-6',
    title: '灼熱のタワー頂上決戦プロローグ',
    subtitle: 'Blazing Tower Ascent & Danmaku Emitters (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13700,
    goal: { x: 13500, y: 224, w: 54, h: 116 },
    platforms,
    danmakuEmitters,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4400, y: 350 },
      { x: 8920, y: 350 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'BLAZING TOWER ASCENT', color: '#f43f5e' },
      { x: 4420, y: 175, w: 220, h: 24, label: 'VERTICAL SANCTUM', color: '#fb7185' },
      { x: 8940, y: 185, w: 220, h: 24, label: 'CITADEL PEAK', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// STAGE 5-FORT2: 第二紅蓮要塞・溶岩の回廊 (3,500px / ミニボス戦)
// ============================================================================
function buildStage5_Fort2(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '5f2_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '5f2_arena', x: 600, y: 370, w: 1300, h: 160, style: 'crimson_steel' },
    { id: '5f2_ap1', x: 880, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5f2_ap2', x: 1460, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5f2_exit', x: 2000, y: 370, w: 1500, h: 160, style: 'crimson_steel' },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('5fe21', 'magma_imp', 720, 370, 640, 820),
    makeW5Enemy('5fe22', 'inferno_wyvern', 1200, 185, 1050, 1400),
    makeW5Enemy('5fe23', 'crimson_lancer', 1780, 370, 1620, 1920),
  ];

  const orbs: ManaOrbDef[] = makeW5Orbs('5fo21', 940, 210, 4, 50, 0, true);

  const boss: BossDef = {
    kind: 'scarlet_sentinel',
    x: 1500,
    y: 302,
    w: 58,
    h: 68,
    vx: 0,
    vy: 0,
    hp: 22,
    maxHp: 22,
    facing: -1,
    arenaMinX: 600,
    arenaMaxX: 1900,
    floorY: 370,
    active: false,
    defeated: false,
    state: 'idle',
    stateTimer: 0.65,
    stunTimer: 0,
    hitFlash: 0,
    phase: 1,
    clones: [],
  };

  return emptyW5Stage({
    id: '5-FORT2',
    code: '5-砦2',
    title: '第二紅蓮要塞・溶岩の回廊',
    subtitle: 'Fortress Bastion 2 & Scarlet Sentinel Encounter (22HP)',
    theme: 'crimson_bastion',
    width: 3500,
    goal: { x: 3300, y: 254, w: 54, h: 116 },
    platforms,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 2040, y: 370 },
    ],
    neonSigns: [{ x: 100, y: 190, w: 220, h: 24, label: 'FORTRESS GATE 2', color: '#f43f5e' }],
    boss,
  });
}

// ============================================================================
// STAGE 5-7: 業火の滑走滑走路と高速スリング (13,800px / 20 Enemies)
// ============================================================================
function buildStage5_7(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '57_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '57_p1b', x: 590, y: 325, w: 380, h: 205, style: 'crimson_steel' },
    { id: '57_cr1', x: 1100, y: 290, w: 150, h: 20, style: 'crumble_ice' },
    { id: '57_p2', x: 1380, y: 270, w: 440, h: 260, style: 'crimson_steel' },
    { id: '57_up0', x: 1450, y: 155, w: 280, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '57_p3', x: 1960, y: 230, w: 460, h: 300, style: 'crimson_steel' },
    { id: '57_p4', x: 3220, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '57_cr2', x: 3830, y: 335, w: 150, h: 20, style: 'crumble_ice' },
    { id: '57_p5', x: 4100, y: 360, w: 480, h: 170, style: 'crimson_steel' },
    { id: '57_hi1', x: 4220, y: 235, w: 340, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '57_hi2', x: 4720, y: 195, w: 360, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '57_p6', x: 5340, y: 295, w: 440, h: 235, style: 'crimson_steel' },
    { id: '57_cr3', x: 5920, y: 265, w: 145, h: 20, style: 'crumble_ice' },
    { id: '57_cr4', x: 6180, y: 240, w: 145, h: 20, style: 'crumble_ice' },
    { id: '57_p7', x: 6460, y: 245, w: 460, h: 285, style: 'crimson_steel' },
    { id: '57_p8', x: 7780, y: 375, w: 440, h: 155, style: 'crimson_steel' },
    { id: '57_hi3', x: 8360, y: 270, w: 340, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '57_p9', x: 8560, y: 340, w: 460, h: 190, style: 'crimson_steel' },
    { id: '57_p10', x: 9160, y: 365, w: 460, h: 165, style: 'crimson_steel' },
    { id: '57_cr5', x: 9760, y: 330, w: 150, h: 20, style: 'crumble_ice' },
    { id: '57_end', x: 10300, y: 365, w: 3500, h: 165, style: 'crimson_steel' },
  ];

  const slopes: SlopeDef[] = [
    { id: '57_sl1', x1: 2420, y1: 230, x2: 3220, y2: 370, bottomY: 530 },
    { id: '57_sl2', x1: 6920, y1: 245, x2: 7780, y2: 375, bottomY: 530 },
  ];

  const scarletSlings: ScarletSlingDef[] = [
    { id: '57_ss1', x: 3560, y: 260, r: 22, launchVx: 490, launchVy: -470 },
    { id: '57_ss2', x: 5220, y: 220, r: 22, launchVx: 500, launchVy: -480 },
    { id: '57_ss3', x: 8380, y: 315, r: 22, launchVx: 490, launchVy: -470 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('57e01', 'crimson_lancer', 760, 325, 620, 940),
    makeW5Enemy('57e02', 'inferno_wyvern', 1580, 270, 1410, 1790),
    makeW5Enemy('57e03', 'valkyrie_bit', 1590, 155, 1470, 1710),
    makeW5Enemy('57e04', 'ruby_turret', 2180, 230, 2150, 2210),
    makeW5Enemy('57e05', 'crimson_lancer', 3420, 370, 3250, 3660),
    makeW5Enemy('57e06', 'magma_imp', 4360, 360, 4140, 4540),
    makeW5Enemy('57e07', 'hopping_bot', 4880, 195, 4740, 5060),
    makeW5Enemy('57e08', 'slime_glitch', 4940, 340, 4780, 5140),
    makeW5Enemy('57e09', 'crimson_lancer', 5560, 295, 5380, 5740),
    makeW5Enemy('57e10', 'inferno_wyvern', 6680, 245, 6500, 6880),
    makeW5Enemy('57e11', 'crimson_lancer', 7980, 375, 7810, 8180),
    makeW5Enemy('57e12', 'valkyrie_bit', 8520, 270, 8380, 8680),
    makeW5Enemy('57e13', 'magma_imp', 8780, 340, 8600, 8980),
    makeW5Enemy('57e14', 'ruby_turret', 9390, 365, 9360, 9420),
    makeW5Enemy('57e15', 'crimson_lancer', 10100, 295, 9950, 10300),
    makeW5Enemy('57e16', 'inferno_wyvern', 1590, 100, 1450, 1750),
    makeW5Enemy('57e17', 'ruby_turret', 4220, 180, 4180, 4260),
    makeW5Enemy('57e18', 'hopping_bot', 6680, 200, 6550, 6850),
    makeW5Enemy('57e19', 'valkyrie_bit', 8360, 220, 8220, 8500),
    makeW5Enemy('57e20', 'slime_glitch', 10000, 325, 9850, 10250),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('57o1', 2520, 180, 5, 120, 20),
    ...makeW5Orbs('57o2', 7020, 195, 5, 130, 18),
    { id: '57_b1', x: 1590, y: 105, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '57_b2', x: 4900, y: 145, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-7',
    code: '5-7',
    title: '業火の滑走滑走路と高速スリング',
    subtitle: 'Blazing Runway, High-Speed Slopes & Scarlet Slings (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13800,
    goal: { x: 13600, y: 224, w: 54, h: 116 },
    platforms,
    slopes,
    scarletSlings,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4100, y: 360 },
      { x: 8560, y: 340 },
    ],
    neonSigns: [
      { x: 95, y: 195, w: 235, h: 24, label: 'RUNWAY SLIDE BOOST', color: '#f43f5e' },
      { x: 4120, y: 175, w: 235, h: 24, label: 'HIGH-SPEED SLING', color: '#fb7185' },
      { x: 8580, y: 185, w: 235, h: 24, label: 'FINAL RUNWAY DASH', color: '#fda4af' },
    ],
  });
}

// ============================================================================
// WORLD 5-FORT3: 第三紅蓮要塞・弾幕熾天使の聖堂 (2,320px / スカーレット・セラフ 28HP) - PRESERVED UNCHANGED
// ============================================================================
function buildStage5_Fort3(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '5f3_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '5f3_p2', x: 620, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '5f3_arena', x: 1220, y: 370, w: 1100, h: 160, style: 'crimson_steel' },
    { id: '5f3_ap1', x: 1450, y: 265, w: 140, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5f3_ap2', x: 1920, y: 265, w: 140, h: 16, style: 'ruby_glass', oneWay: true },
  ];

  const danmakuEmitters: DanmakuEmitterDef[] = [
    { id: '5f3_de1', x: 520, y: 155, pattern: 'rose', interval: 0.9, count: 16, speed: 225 },
    { id: '5f3_de2', x: 880, y: 155, pattern: 'spiral', interval: 0.35, count: 8, speed: 230 },
    { id: '5f3_de3', x: 1600, y: 155, pattern: 'ring', interval: 0.9, count: 14, speed: 230 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('5fe31', 'valkyrie_bit', 480, 195, 380, 580),
    makeW5Enemy('5fe32', 'inferno_wyvern', 650, 185, 550, 780),
    makeW5Enemy('5fe33', 'valkyrie_bit', 820, 185, 710, 950),
    makeW5Enemy('5fe34', 'crimson_lancer', 1040, 345, 920, 1180),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('5fo31', 760, 255, 3, 48, 0, true),
    ...makeW5Orbs('5fo32', 1700, 326, 4, 52, 0, true, true),
  ];

  const boss: BossDef = {
    kind: 'scarlet_seraph',
    x: 1960,
    y: 280,
    w: 66,
    h: 74,
    vx: 0,
    vy: 0,
    hp: 28,
    maxHp: 28,
    facing: -1,
    arenaMinX: 1220,
    arenaMaxX: 2240,
    floorY: 370,
    active: false,
    defeated: false,
    state: 'hover',
    stateTimer: 0.75,
    stunTimer: 0,
    hitFlash: 0,
    phase: 1,
    clones: [],
  };

  return emptyW5Stage({
    id: '5-FORT3',
    code: '5-砦3',
    title: '第三紅蓮要塞・弾幕熾天使の聖堂',
    subtitle: 'Seraph Danmaku Sanctum & Scarlet Seraph Ultra Boss (28HP)',
    theme: 'danmaku_sanctum',
    width: 2320,
    goal: { x: 2225, y: 298, w: 46, h: 72 },
    platforms,
    danmakuEmitters,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 1110, y: 345 },
    ],
    neonSigns: [
      { x: 1560, y: 115, w: 360, h: 28, label: 'APEX BOSS: SCARLET SERAPH', color: '#fde047' },
    ],
    boss,
  });
}

// ============================================================================
// STAGE 5-8: 決戦前夜のスカイブリッジ (13,900px / 20 Enemies)
// ============================================================================
function buildStage5_8(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '58_p1', x: 0, y: 370, w: 460, h: 160, style: 'crimson_steel' },
    { id: '58_p2', x: 620, y: 335, w: 440, h: 195, style: 'crimson_steel' },
    { id: '58_hi1', x: 780, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '58_p3', x: 1380, y: 350, w: 480, h: 180, style: 'crimson_steel' },
    { id: '58_p4', x: 2120, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '58_hi2', x: 2280, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '58_p5', x: 2860, y: 370, w: 500, h: 160, style: 'crimson_steel' },
    { id: '58_p6', x: 3620, y: 335, w: 480, h: 195, style: 'crimson_steel' },
    { id: '58_hi3', x: 3780, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '58_p7', x: 4360, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '58_p8', x: 5120, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '58_p9', x: 5880, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '58_hi4', x: 6040, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '58_p10', x: 6620, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '58_p11', x: 7380, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '58_p12', x: 8140, y: 335, w: 460, h: 195, style: 'crimson_steel' },
    { id: '58_hi5', x: 8300, y: 210, w: 300, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '58_p13', x: 8880, y: 350, w: 500, h: 180, style: 'crimson_steel' },
    { id: '58_p14', x: 9640, y: 370, w: 480, h: 160, style: 'crimson_steel' },
    { id: '58_end', x: 10400, y: 340, w: 3500, h: 190, style: 'crimson_steel' },
  ];

  const danmakuEmitters: DanmakuEmitterDef[] = [
    { id: '58_de1', x: 2500, y: 155, pattern: 'rose', interval: 0.8, count: 12, speed: 230 },
    { id: '58_de2', x: 6700, y: 155, pattern: 'spiral', interval: 0.7, count: 12, speed: 235 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('58e01', 'valkyrie_bit', 360, 190, 220, 500),
    makeW5Enemy('58e02', 'crimson_lancer', 920, 335, 780, 1080),
    makeW5Enemy('58e03', 'hopping_bot', 1650, 350, 1500, 1850),
    makeW5Enemy('58e04', 'inferno_wyvern', 2400, 190, 2250, 2600),
    makeW5Enemy('58e05', 'ruby_turret', 3150, 370, 3100, 3200),
    makeW5Enemy('58e06', 'magma_imp', 3920, 335, 3780, 4120),
    makeW5Enemy('58e07', 'slime_glitch', 4700, 350, 4550, 4900),
    makeW5Enemy('58e08', 'valkyrie_bit', 5450, 190, 5320, 5680),
    makeW5Enemy('58e09', 'crimson_lancer', 6180, 335, 6020, 6420),
    makeW5Enemy('58e10', 'hopping_bot', 6900, 350, 6750, 7150),
    makeW5Enemy('58e11', 'inferno_wyvern', 7650, 190, 7520, 7880),
    makeW5Enemy('58e12', 'ruby_turret', 8400, 335, 8350, 8450),
    makeW5Enemy('58e13', 'magma_imp', 9150, 350, 9020, 9380),
    makeW5Enemy('58e14', 'slime_glitch', 9900, 370, 9750, 10100),
    makeW5Enemy('58e15', 'crimson_lancer', 10600, 340, 10450, 10850),
    makeW5Enemy('58e16', 'valkyrie_bit', 1800, 150, 1650, 1950),
    makeW5Enemy('58e17', 'magma_imp', 4100, 150, 3950, 4250),
    makeW5Enemy('58e18', 'inferno_wyvern', 6400, 150, 6250, 6550),
    makeW5Enemy('58e19', 'hopping_bot', 8650, 150, 8500, 8800),
    makeW5Enemy('58e20', 'ruby_turret', 10800, 250, 10750, 10850),
  ];

  const orbs: ManaOrbDef[] = [
    ...makeW5Orbs('58o1', 880, 150, 3, 45),
    ...makeW5Orbs('58o2', 2340, 150, 3, 45),
    ...makeW5Orbs('58o3', 6100, 150, 3, 45),
    { id: '58_b1', x: 840, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 0 },
    { id: '58_b2', x: 2320, y: 120, r: 10, collected: false, value: 300, bonus: true, phase: 1.0 },
  ];

  return emptyW5Stage({
    id: '5-8',
    code: '5-8',
    title: '決戦前夜のスカイブリッジ',
    subtitle: 'Inferno Citadel Skybridge & Final Approach (20 Enemies)',
    theme: 'inferno_citadel',
    width: 13900,
    goal: { x: 13700, y: 224, w: 54, h: 116 },
    platforms,
    danmakuEmitters,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4360, y: 350 },
      { x: 8880, y: 350 },
    ],
    neonSigns: [{ x: 120, y: 190, w: 220, h: 24, label: 'SKYBRIDGE APPROACH', color: '#f43f5e' }],
  });
}

// ============================================================================
// STAGE 5-BOSS: クリムゾン・ソヴリン玉座の間 (14,000px / ボス戦 32HP)
// ============================================================================
function buildStage5_Boss(): StageDefinition {
  const platforms: PlatformDef[] = [
    { id: '5b_p1', x: 0, y: 370, w: 600, h: 160, style: 'crimson_steel' },
    { id: '5b_arena', x: 9000, y: 370, w: 3800, h: 160, style: 'crimson_steel' },
    { id: '5b_ap1', x: 9500, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5b_ap2', x: 10400, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5b_ap3', x: 11300, y: 260, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: '5b_exit', x: 12800, y: 370, w: 1200, h: 160, style: 'crimson_steel' },
  ];

  const movingPlatforms: MovingPlatformDef[] = [
    makeW5MovPlat('5b_mp1', 6500, 260, 140, 18, 6500, 140, 140, 0),
  ];

  const scarletSlings: ScarletSlingDef[] = [
    { id: '5b_ss1', x: 4500, y: 290, r: 24, launchVx: 480, launchVy: -460 },
  ];

  const danmakuEmitters: DanmakuEmitterDef[] = [
    { id: '5b_de1', x: 9900, y: 155, pattern: 'rose', interval: 0.8, count: 14, speed: 235 },
    { id: '5b_de2', x: 10900, y: 155, pattern: 'spiral', interval: 0.7, count: 12, speed: 235 },
  ];

  const enemies: EnemyDef[] = [
    makeW5Enemy('5be1', 'valkyrie_bit', 9300, 190, 9150, 9450),
    makeW5Enemy('5be2', 'crimson_lancer', 9800, 370, 9600, 10000),
    makeW5Enemy('5be3', 'inferno_wyvern', 10700, 190, 10500, 10900),
  ];

  const orbs: ManaOrbDef[] = makeW5Orbs('5bo1', 12100, 315, 6, 45, 0, true, true);

  const boss: BossDef = {
    kind: 'crimson_sovereign',
    x: 10900,
    y: 280,
    w: 72,
    h: 80,
    vx: 0,
    vy: 0,
    hp: 32,
    maxHp: 32,
    facing: -1,
    arenaMinX: 9000,
    arenaMaxX: 12600,
    floorY: 370,
    active: false,
    defeated: false,
    state: 'hover',
    stateTimer: 0.65,
    stunTimer: 0,
    hitFlash: 0,
    phase: 1,
    clones: [],
  };

  return emptyW5Stage({
    id: '5-BOSS',
    code: '5-城',
    title: 'クリムゾン・ソヴリン玉座の間',
    subtitle: 'Crimson Sovereign Throne & Final Boss Gauntlet (32HP)',
    theme: 'inferno_citadel',
    width: 14000,
    goal: { x: 13760, y: 224, w: 54, h: 116 },
    platforms,
    movingPlatforms,
    scarletSlings,
    danmakuEmitters,
    enemies,
    orbs,
    checkpoints: [
      { x: 70, y: 370 },
      { x: 4500, y: 370 },
      { x: 9100, y: 370 },
    ],
    neonSigns: [
      { x: 110, y: 190, w: 220, h: 24, label: 'SOVEREIGN THRONE', color: '#f43f5e' },
      { x: 9100, y: 185, w: 220, h: 24, label: 'CRIMSON SOVEREIGN', color: '#fda4af' },
    ],
    boss,
  });
}

// Encounter Stages (ENC_W5_1..3)
export function buildWorld5EncounterStage(stageId: string): StageDefinition | null {
  if (!stageId.startsWith('ENC_W5_')) return null;
  const floorY = 370;
  const idx = stageId === 'ENC_W5_3' ? 3 : stageId === 'ENC_W5_2' ? 2 : 1;
  const sentinel: BossDef = {
    kind: 'scarlet_sentinel',
    x: 920,
    y: floorY - 68,
    w: 58,
    h: 68,
    vx: 0,
    vy: 0,
    hp: 12 + idx * 2,
    maxHp: 12 + idx * 2,
    facing: -1,
    arenaMinX: 60,
    arenaMaxX: 1120,
    floorY,
    active: true,
    defeated: false,
    state: 'idle',
    stateTimer: 0.65,
    stunTimer: 0,
    hitFlash: 0,
    phase: 1,
    clones: [],
  };

  const platforms: PlatformDef[] = [
    { id: 'enc5_floor', x: 0, y: floorY, w: 1550, h: 160, style: 'crimson_steel' },
    { id: 'enc5_p1', x: 240, y: 270, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
    { id: 'enc5_p2', x: 640, y: 230, w: 200, h: 16, style: 'crimson_steel', oneWay: true },
    { id: 'enc5_p3', x: 1000, y: 270, w: 180, h: 16, style: 'ruby_glass', oneWay: true },
  ];

  const orbs: ManaOrbDef[] = makeW5Orbs('enc5o_1', 670, 325, 3, 55, 0, true, true);

  return emptyW5Stage({
    id: stageId,
    code: `迎撃W5-${idx}`,
    title: `スカーレット・センチネル隊 #${idx}`,
    subtitle: 'World 5 Roaming Mini-Boss Encounter (Ultimate Gimmick Action)',
    theme: 'crimson_bastion',
    width: 1550,
    goal: { x: 1350, y: 254, w: 54, h: 116 },
    platforms,
    enemies: [
      makeW5Enemy(`ew5${idx}_1`, 'crimson_lancer', 400, floorY, 200, 600),
      makeW5Enemy(`ew5${idx}_2`, 'inferno_wyvern', 680, 185, 500, 850),
      makeW5Enemy(`ew5${idx}_3`, 'ruby_turret', 920, floorY, 750, 1100),
    ],
    orbs,
    neonSigns: [{ x: 460, y: 110, w: 220, h: 24, label: `SCARLET SENTINEL #${idx}`, color: '#f43f5e' }],
    boss: sentinel,
  });
}

export function buildWorld5Stage(stageId: string): StageDefinition | null {
  switch (stageId) {
    case '5-1':
      return buildStage5_1();
    case '5-FORT1':
      return buildStage5_Fort1();
    case '5-2':
      return buildStage5_2();
    case '5-3':
      return buildStage5_3();
    case '5-4':
      return buildStage5_4();
    case '5-5':
      return buildStage5_5();
    case '5-6':
      return buildStage5_6();
    case '5-FORT2':
      return buildStage5_Fort2();
    case '5-7':
      return buildStage5_7();
    case '5-FORT3':
      return buildStage5_Fort3();
    case '5-8':
      return buildStage5_8();
    case '5-BOSS':
      return buildStage5_Boss();
    default:
      return null;
  }
}
