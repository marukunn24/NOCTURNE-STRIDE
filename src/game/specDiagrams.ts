import { drawEnemyPortrait } from './enemyPortrait';
import { EnemyDocEntry } from './gameData';
import { createStage } from './levels';
import { PlatformDef, StageDefinition } from './types';

const stageCache = new Map<string, StageDefinition>();

export function getCachedStageDef(stageId: string): StageDefinition {
  let cached = stageCache.get(stageId);
  if (!cached) {
    cached = createStage(stageId);
    stageCache.set(stageId, cached);
  }
  return cached;
}

export interface BlueprintBand {
  minX: number;
  maxX: number;
  label: string;
}

/**
 * Splits a stage into 1 to 4 exact horizontal sections (~1/2 to 1/4 scale)
 * so every platform, slope, gimmick, enemy sprite, and route coordinate is readable at a glance.
 */
export function getStageBlueprintBands(stageId: string): BlueprintBand[] {
  const st = getCachedStageDef(stageId);
  const w = st.width;
  const bandCount = w <= 3600 ? 1 : w <= 8000 ? 2 : w <= 12200 ? 3 : 4;
  if (bandCount === 1) {
    return [{ minX: 0, maxX: w, label: `FULL (0 - ${w.toLocaleString()}px)` }];
  }
  const step = Math.ceil(w / bandCount / 100) * 100;
  const bands: BlueprintBand[] = [];
  for (let i = 0; i < bandCount; i++) {
    const minX = i * step;
    const maxX = i === bandCount - 1 ? w : Math.min(w, (i + 1) * step);
    bands.push({
      minX,
      maxX,
      label: `SEC ${i + 1}/${bandCount} (${minX.toLocaleString()} - ${maxX.toLocaleString()}px)`,
    });
  }
  return bands;
}

function drawGlowShot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  coreCol: string,
  glowCol: string
) {
  ctx.save();
  const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2.4);
  g.addColorStop(0, coreCol);
  g.addColorStop(0.45, glowCol);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r * 2.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(x, y, Math.max(1.8, r * 0.48), 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMotionTrail(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  width = 3
) {
  ctx.save();
  const grad = ctx.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, 'rgba(255,255,255,0)');
  grad.addColorStop(1, color);
  ctx.strokeStyle = grad;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function drawPlayerCombatSprite(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  crouching = false,
  scale = 1
) {
  ctx.save();
  ctx.translate(px, py);
  ctx.scale(scale, scale);
  const h = crouching ? 16 : 28;
  const topY = -h;
  ctx.strokeStyle = '#38f2ff';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-2, topY + 9);
  ctx.quadraticCurveTo(-16, topY + 5, -26, topY + 12);
  ctx.stroke();
  ctx.fillStyle = '#111827';
  ctx.strokeStyle = '#38f2ff';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.roundRect(-10, topY, 20, h, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#7ef9ff';
  ctx.fillRect(2, topY + 7, 3, 3);
  ctx.fillRect(6, topY + 7, 2.5, 3);
  ctx.restore();
}

function drawActionTag(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string,
  accent: string
) {
  ctx.save();
  ctx.font = '700 9.5px "JetBrains Mono", "Noto Sans JP", sans-serif';
  const tw = ctx.measureText(text).width + 12;
  ctx.fillStyle = 'rgba(7, 12, 28, 0.86)';
  ctx.strokeStyle = accent;
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  ctx.roundRect(x, y, tw, 17, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 6, y + 8.8);
  ctx.restore();
}

function detectWorldTheme(entry: EnemyDocEntry): {
  bgTop: string;
  bgBot: string;
  platformFill: string;
  platformEdge: string;
  silhouette: string;
} {
  const s = entry.stages;
  const k = entry.kind;
  if (
    s.includes('5-') ||
    entry.code.includes('W5') ||
    k.includes('scarlet') ||
    k.includes('crimson') ||
    k.includes('magma') ||
    k.includes('ruby_') ||
    k.includes('ember_') ||
    k.includes('blood_') ||
    k.includes('inferno') ||
    k.includes('valkyrie_bit') ||
    k.includes('hellfire')
  ) {
    return {
      bgTop: '#1a0309',
      bgBot: '#3c0815',
      platformFill: '#4f0c1d',
      platformEdge: '#f43f5e',
      silhouette: 'rgba(244, 63, 94, 0.09)',
    };
  }
  if (
    s.includes('4-') ||
    entry.code.includes('W4') ||
    k.includes('frost') ||
    k.includes('glaci') ||
    k.includes('cryo') ||
    k.includes('icicle') ||
    k.includes('blizzard') ||
    k.includes('ice_') ||
    k.includes('permafrost') ||
    k.includes('cocytus')
  ) {
    return {
      bgTop: '#06152e',
      bgBot: '#0f294a',
      platformFill: '#173761',
      platformEdge: '#7dd3fc',
      silhouette: 'rgba(125, 211, 252, 0.08)',
    };
  }
  if (
    s.includes('3-') ||
    k.includes('emerald') ||
    k.includes('jade') ||
    k.includes('thorn') ||
    k.includes('bio_') ||
    k.includes('verdant') ||
    k.includes('prism_spore') ||
    k.includes('chrono_vine')
  ) {
    return {
      bgTop: '#041c18',
      bgBot: '#0a332b',
      platformFill: '#0e4135',
      platformEdge: '#34d399',
      silhouette: 'rgba(52, 211, 153, 0.08)',
    };
  }
  if (
    s.includes('2-') ||
    k.includes('gear') ||
    k.includes('spark') ||
    k.includes('thunder') ||
    k.includes('clockwork') ||
    k.includes('volt_') ||
    k.includes('tether') ||
    k.includes('dash_rammer') ||
    k.includes('magnet_crane')
  ) {
    return {
      bgTop: '#1a1106',
      bgBot: '#2e1d08',
      platformFill: '#3b270d',
      platformEdge: '#fbbf24',
      silhouette: 'rgba(251, 191, 36, 0.08)',
    };
  }
  return {
    bgTop: '#070b1e',
    bgBot: '#101b3d',
    platformFill: '#162447',
    platformEdge: '#38bdf8',
    silhouette: 'rgba(56, 189, 248, 0.08)',
  };
}

/**
 * Renders an authentic in-game combat action snapshot showing the enemy's actual sprite
 * unleashing bullets, lasers, shockwaves, shields, or charges against the player.
 */
export function drawEnemyAttackDiagram(
  ctx: CanvasRenderingContext2D,
  entry: EnemyDocEntry,
  x: number,
  y: number,
  w: number,
  h: number
) {
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 8);
  ctx.clip();

  const theme = detectWorldTheme(entry);
  const skyGrad = ctx.createLinearGradient(x, y, x, y + h);
  skyGrad.addColorStop(0, theme.bgTop);
  skyGrad.addColorStop(1, theme.bgBot);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(x, y, w, h);

  ctx.fillStyle = theme.silhouette;
  for (let bx = x + 16; bx < x + w; bx += 58) {
    const bh = 38 + ((bx * 37) % 68);
    ctx.fillRect(bx, y + h - 34 - bh, 34, bh);
  }

  const groundY = y + h - 34;
  ctx.fillStyle = theme.platformFill;
  ctx.fillRect(x, groundY, w, 34);
  ctx.fillStyle = theme.platformEdge;
  ctx.fillRect(x, groundY, w, 3);

  ctx.fillStyle = 'rgba(6, 11, 25, 0.8)';
  ctx.fillRect(x, y, w, 22);
  ctx.fillStyle = entry.accentColor;
  ctx.font = '700 10px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.fillText(`IN-GAME COMBAT CAPTURE // ${entry.code} ${entry.name}`, x + 10, y + 14.5);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText(entry.attackLabel, x + w - 10, y + 14.5);
  ctx.textAlign = 'left';

  const k = entry.kind;
  const isBoss = entry.category === '中ボス' || entry.category === '大ボス';
  const isFlying =
    k === 'ghost_wisp' ||
    k === 'neon_bat' ||
    k === 'icicle_bat' ||
    k === 'volt_jelly' ||
    k === 'spark_jelly' ||
    k === 'magnet_orb' ||
    k === 'prism_reflector' ||
    k === 'prism_spore' ||
    k === 'frost_wraith' ||
    k === 'blizzard_fairy' ||
    k === 'laser_drone' ||
    k === 'thunder_imp' ||
    k === 'gravity_imp' ||
    k === 'ink_specter' ||
    k === 'star_weaver' ||
    k === 'void_eye' ||
    k === 'jet_trooper' ||
    k === 'aegis_drone' ||
    k === 'omega_drone' ||
    k === 'gravity_flipper' ||
    k === 'magma_imp' ||
    k === 'ember_bomber' ||
    k === 'inferno_wyvern' ||
    k === 'valkyrie_bit' ||
    k === 'archmage' ||
    k === 'overlord_core' ||
    k === 'clockwork_core' ||
    k === 'thunder_kronos' ||
    k === 'volt_centurion' ||
    k === 'jade_chimera' ||
    k === 'emerald_emperor' ||
    k === 'cocytus_core' ||
    k === 'glacies_emperor' ||
    k === 'scarlet_seraph' ||
    k === 'crimson_sovereign';

  const ex = x + (isBoss ? w * 0.72 : w * 0.68);
  const ey = isFlying ? y + h * 0.44 : groundY - (isBoss ? 36 : 25);
  const px = x + w * 0.16;
  const py = groundY;

  if (isBoss) {
    ctx.strokeStyle = entry.accentColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 26);
    ctx.lineTo(x + 12, groundY);
    ctx.moveTo(x + w - 12, y + 26);
    ctx.lineTo(x + w - 12, groundY);
    ctx.stroke();

    for (let g = 1; g <= 3; g++) {
      ctx.save();
      ctx.globalAlpha = 0.24 - g * 0.05;
      drawEnemyPortrait(ctx, k, ex + g * 28, ey, 1.05);
      ctx.restore();
    }
    drawMotionTrail(ctx, ex - 20, ey, x + 56, ey, entry.accentColor, 4);

    if (
      k === 'clockwork_core' ||
      k === 'verdant_warden' ||
      k === 'cocytus_core' ||
      k === 'thunder_kronos' ||
      k === 'emerald_emperor' ||
      k === 'glacies_emperor' ||
      k === 'archmage' ||
      k === 'scarlet_seraph' ||
      k === 'crimson_sovereign'
    ) {
      const beamCount =
        k === 'cocytus_core' || k === 'clockwork_core' || k === 'verdant_warden' || k === 'scarlet_seraph'
          ? 4
          : 2;
      for (let i = 0; i < beamCount; i++) {
        const ang = -0.35 + (i * Math.PI * 2) / beamCount;
        const bx2 = ex + Math.cos(ang) * 165;
        const by2 = ey + Math.sin(ang) * 165;
        ctx.save();
        ctx.strokeStyle = entry.accentColor;
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(bx2, by2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(bx2, by2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // High-density danmaku burst for scarlet_seraph / crimson_sovereign / bosses
    if (k === 'scarlet_seraph' || k === 'crimson_sovereign' || k === 'furnace_titan') {
      const ringCount = k === 'scarlet_seraph' ? 12 : 8;
      for (let i = 0; i < ringCount; i++) {
        const ang = (i * Math.PI * 2) / ringCount;
        const bx = ex + Math.cos(ang) * 68;
        const by = ey + Math.sin(ang) * 48;
        drawMotionTrail(ctx, ex, ey, bx, by, '#fb7185', 1.8);
        drawGlowShot(ctx, bx, by, 5, '#fff1f2', '#f43f5e');
      }
    }

    const volleyOffsets = [-55, -26, 2, 28, 52];
    for (let i = 0; i < volleyOffsets.length; i++) {
      const tx = px + 60 + i * 28;
      const ty = ey + volleyOffsets[i];
      drawMotionTrail(ctx, ex - 24, ey, tx, ty, entry.accentColor, 2.5);
      drawGlowShot(ctx, tx, ty, 6.5, '#ffffff', entry.accentColor);
    }

    ctx.fillStyle = entry.accentColor;
    ctx.beginPath();
    ctx.moveTo(px + 95, groundY);
    ctx.lineTo(px + 115, groundY - 22);
    ctx.lineTo(px + 135, groundY);
    ctx.closePath();
    ctx.fill();
  } else if (
    k === 'sniper_turret' ||
    k === 'laser_drone' ||
    k === 'railgun_mech' ||
    k === 'jade_sniper' ||
    k === 'void_eye' ||
    k === 'omega_drone' ||
    k === 'laser_emitter' ||
    k === 'cryo_turret' ||
    k === 'ruby_turret' ||
    k === 'valkyrie_bit'
  ) {
    if (k === 'cryo_turret' || k === 'ruby_turret' || k === 'valkyrie_bit') {
      const shots = k === 'ruby_turret' ? 8 : 6;
      for (let i = 0; i < shots; i++) {
        const ang = (i * Math.PI * 2) / shots + 0.25;
        const bx = ex + Math.cos(ang) * 84;
        const by = ey + Math.sin(ang) * 60;
        drawMotionTrail(ctx, ex, ey, bx, by, entry.accentColor, 2.4);
        drawGlowShot(ctx, bx, by, 5.8, '#ffffff', entry.accentColor);
      }
    } else {
      ctx.save();
      ctx.strokeStyle = entry.accentColor;
      ctx.globalAlpha = 0.28;
      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.moveTo(ex - 20, ey);
      ctx.lineTo(px + 20, py - 24);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(ex - 20, ey);
      ctx.lineTo(px + 20, py - 24);
      ctx.stroke();
      ctx.restore();
      if (k === 'jade_sniper') {
        drawMotionTrail(ctx, px + 20, py - 24, px + 110, y + 40, '#34d399', 2.5);
        drawGlowShot(ctx, px + 110, y + 40, 5.5, '#ffffff', '#10b981');
      }
      drawGlowShot(ctx, ex - 22, ey, 8, '#ffffff', entry.accentColor);
    }
  } else if (
    k === 'shield_trooper' ||
    k === 'golem_knight' ||
    k === 'glacier_golem' ||
    k === 'mirror_frost' ||
    k === 'blood_mirror' ||
    k === 'prism_reflector' ||
    k === 'mirror_gear'
  ) {
    ctx.fillStyle =
      k === 'blood_mirror'
        ? 'rgba(244, 63, 94, 0.8)'
        : k === 'glacier_golem' || k === 'mirror_frost'
          ? 'rgba(125,211,252,0.75)'
          : 'rgba(250,204,21,0.75)';
    ctx.fillRect(ex - 32, ey - 28, 7, 52);
    drawMotionTrail(ctx, px + 18, py - 18, ex - 35, ey - 4, '#38f2ff', 2.5);
    drawMotionTrail(ctx, ex - 35, ey - 4, px + 55, ey - 46, '#fb7185', 2.5);
    drawGlowShot(ctx, ex - 35, ey - 4, 6, '#ffffff', '#fb7185');
    drawGlowShot(ctx, px + 55, ey - 46, 5.5, '#ffffff', '#fb7185');
  } else if (
    k === 'frost_wraith' ||
    k === 'mortar_crab' ||
    k === 'thorn_weaver' ||
    k === 'sigil_bomber' ||
    k === 'cluster_mine' ||
    k === 'arcane_caster' ||
    k === 'star_weaver' ||
    k === 'bio_hydra' ||
    k === 'ink_specter' ||
    k === 'gravity_imp' ||
    k === 'magma_imp' ||
    k === 'ember_bomber' ||
    k === 'inferno_wyvern' ||
    k === 'scarlet_reaper'
  ) {
    for (let i = 0; i < 4; i++) {
      const bx = px + 60 + i * 54;
      const by = ey - 32 + Math.sin(i * 0.9) * 34 + i * 10;
      drawMotionTrail(ctx, ex - 22, ey, bx, by, entry.accentColor, 2.2);
      drawGlowShot(ctx, bx, by, 6, '#ffffff', entry.accentColor);
    }
  } else if (
    k === 'bulldozer_mech' ||
    k === 'dash_rammer' ||
    k === 'ice_skater' ||
    k === 'skate_courier' ||
    k === 'plasma_hound' ||
    k === 'gear_roller' ||
    k === 'saw_wheel' ||
    k === 'emerald_mantis' ||
    k === 'crimson_lancer'
  ) {
    for (let g = 1; g <= 2; g++) {
      ctx.save();
      ctx.globalAlpha = 0.32 - g * 0.1;
      drawEnemyPortrait(ctx, k, ex + g * 24, ey, 0.98);
      ctx.restore();
    }
    drawMotionTrail(ctx, ex - 20, groundY - 12, px + 36, groundY - 12, '#fde047', 4.5);
    drawGlowShot(ctx, ex - 34, groundY - 5, 5, '#fef08a', '#f59e0b');
  } else if (k === 'icicle_bat' || k === 'neon_bat' || k === 'thunder_imp' || k === 'airship_cannon') {
    drawMotionTrail(ctx, ex, ey + 14, ex - 24, groundY - 10, entry.accentColor, 3);
    drawGlowShot(ctx, ex - 24, groundY - 10, 7, '#ffffff', entry.accentColor);
    drawMotionTrail(ctx, ex - 22, ey, px + 44, ey + 28, '#bae6fd', 2.2);
    drawGlowShot(ctx, px + 44, ey + 28, 6, '#ffffff', entry.accentColor);
  } else {
    drawMotionTrail(ctx, ex - 24, ey, px + 48, ey + 6, entry.accentColor, 2.6);
    if (entry.attackDmg !== null) {
      drawGlowShot(ctx, px + 48, ey + 6, 6, '#ffffff', entry.accentColor);
      drawGlowShot(ctx, px + 110, ey - 18, 5, '#ffffff', entry.accentColor);
    }
  }

  drawEnemyPortrait(ctx, k, ex, ey, isBoss ? 1.15 : 1.28);
  drawPlayerCombatSprite(ctx, px, py, k === 'sniper_turret' || k === 'laser_drone' || k === 'laser_emitter');

  const tagText = isBoss
    ? `HP ${entry.hp} · NON-WARP FULL ARENA`
    : entry.attackDmg !== null
      ? `CONTACT -${entry.contactDmg}HP / SHOT -${entry.attackDmg}HP`
      : `CONTACT -${entry.contactDmg}HP`;
  drawActionTag(ctx, x + 10, y + 28, tagText, entry.accentColor);

  ctx.restore();
}

function getStageScreenTheme(st: StageDefinition): {
  skyTop: string;
  skyMid: string;
  skyBot: string;
  accent: string;
  silhouette: string;
  gridColor: string;
  moonColor: string;
} {
  const id = st.id;
  if (id.startsWith('5-') || id.startsWith('ENC_W5_')) {
    return {
      skyTop: '#160208',
      skyMid: '#360713',
      skyBot: '#5e0a1d',
      accent: '#f43f5e',
      silhouette: 'rgba(136, 19, 55, 0.35)',
      gridColor: 'rgba(244, 63, 94, 0.08)',
      moonColor: 'rgba(251, 113, 133, 0.28)',
    };
  }
  if (id.startsWith('4-') || id.startsWith('ENC_W4_')) {
    return {
      skyTop: '#041229',
      skyMid: '#0b2952',
      skyBot: '#134078',
      accent: '#7dd3fc',
      silhouette: 'rgba(14, 116, 144, 0.25)',
      gridColor: 'rgba(125, 211, 252, 0.08)',
      moonColor: 'rgba(224, 242, 254, 0.25)',
    };
  }
  if (id.startsWith('3-') || id.startsWith('ENC_W3_')) {
    return {
      skyTop: '#031912',
      skyMid: '#073524',
      skyBot: '#0f573b',
      accent: '#34d399',
      silhouette: 'rgba(16, 185, 129, 0.16)',
      gridColor: 'rgba(52, 211, 153, 0.08)',
      moonColor: 'rgba(167, 243, 208, 0.24)',
    };
  }
  if (id.startsWith('2-') || id.startsWith('ENC_W2_')) {
    return {
      skyTop: '#180e03',
      skyMid: '#3c2107',
      skyBot: '#6a390c',
      accent: '#fbbf24',
      silhouette: 'rgba(245, 158, 11, 0.16)',
      gridColor: 'rgba(251, 191, 36, 0.08)',
      moonColor: 'rgba(254, 240, 138, 0.25)',
    };
  }
  return {
    skyTop: '#060a1b',
    skyMid: '#0c1636',
    skyBot: '#152554',
    accent: '#38bdf8',
    silhouette: 'rgba(56, 189, 248, 0.14)',
    gridColor: 'rgba(56, 189, 248, 0.08)',
    moonColor: 'rgba(186, 230, 253, 0.22)',
  };
}

function getPlatformColors(style: PlatformDef['style']): { body: string; top: string } {
  switch (style) {
    case 'crimson_steel':
      return { body: '#4c0d1f', top: '#f43f5e' };
    case 'magma_belt':
      return { body: '#7c2d12', top: '#fb923c' };
    case 'scarlet_bounce':
      return { body: '#9f1239', top: '#fda4af' };
    case 'ruby_glass':
      return { body: '#881337', top: '#fb7185' };
    case 'ember_vanish':
      return { body: '#991b1b', top: '#fca5a5' };
    case 'ice_floor':
      return { body: '#0c4a6e', top: '#7dd3fc' };
    case 'crumble_ice':
      return { body: '#0369a1', top: '#e0f2fe' };
    case 'freeze_water':
      return { body: '#075985', top: '#38bdf8' };
    case 'cryo_metal':
      return { body: '#1e3a8a', top: '#60a5fa' };
    case 'brass':
    case 'brass_conveyor':
      return { body: '#713f12', top: '#facc15' };
    case 'shock_bridge':
      return { body: '#854d0e', top: '#fde047' };
    case 'jade':
    case 'vine_deck':
    case 'sap_stream':
    case 'emerald_bounce':
      return { body: '#065f46', top: '#34d399' };
    case 'holo':
    case 'vanish_holo':
      return { body: '#155e75', top: '#22d3ee' };
    case 'fortress':
      return { body: '#3f1d2b', top: '#fb7185' };
    case 'library_shelf':
      return { body: '#3b1d5e', top: '#c084fc' };
    case 'train_car':
      return { body: '#1e293b', top: '#38bdf8' };
    default:
      return { body: '#1e293b', top: '#94a3b8' };
  }
}

/**
 * Draws an authentic in-game screen style stage map or 1/2~1/4 zoomed section render,
 * displaying real-game sky, parallax silhouettes, styled terrain, all W1-W5 gimmicks,
 * actual enemy/boss portraits with patrol ranges, mana orbs, checkpoints, goals & secret goals.
 */
export function drawStageBlueprintDiagram(
  ctx: CanvasRenderingContext2D,
  stageId: string,
  x: number,
  y: number,
  w: number,
  h: number,
  rangeMinX?: number,
  rangeMaxX?: number,
  bandLabel?: string
) {
  const st = getCachedStageDef(stageId);
  const stTheme = getStageScreenTheme(st);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 8);
  ctx.clip();

  // Base frame background
  ctx.fillStyle = stTheme.skyTop;
  ctx.fillRect(x, y, w, h);

  const headerH = 22;
  const footerH = 20;
  const padL = 38;
  const padR = 12;
  const padT = headerH + 6;
  const padB = footerH + 14;

  const plotW = Math.max(40, w - padL - padR);
  const plotH = Math.max(40, h - padT - padB);

  const minX = rangeMinX ?? 0;
  const maxX = rangeMaxX ?? Math.max(800, st.width);
  const spanX = Math.max(100, maxX - minX);
  const isZoomed = spanX <= 4600;

  let minY = Math.min(0, st.spawn.y - 40, st.goal.y - 40);
  let maxY = Math.max(450, st.spawn.y + 80, st.goal.y + st.goal.h + 40);

  for (const p of st.platforms) {
    minY = Math.min(minY, p.y - 24);
    maxY = Math.max(maxY, p.y + Math.min(180, p.h) + 24);
  }
  for (const sl of st.slopes) {
    minY = Math.min(minY, sl.y1 - 24, sl.y2 - 24);
    maxY = Math.max(maxY, sl.bottomY + 20);
  }
  for (const mp of st.movingPlatforms) {
    minY = Math.min(minY, mp.startY - 24, mp.endY - 24);
    maxY = Math.max(maxY, mp.startY + 40, mp.endY + 40);
  }
  for (const sb of st.spiralBlooms ?? []) {
    minY = Math.min(minY, sb.triggerY - sb.stepRiseY * sb.stepsCount - 40);
    maxY = Math.max(maxY, sb.triggerY + 40);
  }
  for (const ic of st.fallingIcicles ?? []) {
    minY = Math.min(minY, ic.topY - 20);
  }
  if (st.secretGoal) {
    minY = Math.min(minY, st.secretGoal.y - 30);
    maxY = Math.max(maxY, st.secretGoal.y + st.secretGoal.h + 25);
  }
  if (st.boss) {
    minY = Math.min(minY, st.boss.floorY - 280);
    maxY = Math.max(maxY, st.boss.floorY + 60);
  }

  const spanY = maxY - minY || 1;
  const mapX = (wx: number) => x + padL + ((wx - minX) / spanX) * plotW;
  const mapY = (wy: number) => y + padT + ((wy - minY) / spanY) * plotH;
  const mapW = (ww: number) => Math.max(1.5, (ww / spanX) * plotW);
  const mapH = (wh: number) => Math.max(1.5, (wh / spanY) * plotH);
  const inBand = (wx: number, pad = 250) => wx >= minX - pad && wx <= maxX + pad;

  // Plot region with authentic sky gradient & parallax silhouettes
  ctx.save();
  ctx.beginPath();
  ctx.rect(x + padL, y + padT - 4, plotW, plotH + 8);
  ctx.clip();

  const skyGrad = ctx.createLinearGradient(0, y + padT, 0, y + padT + plotH);
  skyGrad.addColorStop(0, stTheme.skyTop);
  skyGrad.addColorStop(0.55, stTheme.skyMid);
  skyGrad.addColorStop(1, stTheme.skyBot);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(x + padL, y + padT - 4, plotW, plotH + 8);

  // Subtle moon/orb & biome silhouettes
  ctx.fillStyle = stTheme.moonColor;
  ctx.beginPath();
  ctx.arc(x + padL + plotW * 0.86, y + padT + plotH * 0.2, 16, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = stTheme.silhouette;
  for (let bx = x + padL + 8; bx < x + padL + plotW; bx += 42) {
    const bh = 22 + ((bx * 29) % 54);
    ctx.fillRect(bx, y + padT + plotH - bh, 24, bh);
  }

  // Subtle coordinate gridlines
  ctx.strokeStyle = stTheme.gridColor;
  ctx.lineWidth = 1;
  const xStep = spanX <= 2200 ? 400 : spanX <= 5000 ? 500 : spanX <= 10000 ? 1000 : 2000;
  const firstTick = Math.ceil(minX / xStep) * xStep;
  for (let wx = firstTick; wx <= maxX; wx += xStep) {
    const sx = mapX(wx);
    ctx.beginPath();
    ctx.moveTo(sx, y + padT);
    ctx.lineTo(sx, y + h - padB);
    ctx.stroke();
  }
  for (let i = 0; i <= 4; i++) {
    const wy = Math.round(minY + (spanY * i) / 4);
    const sy = mapY(wy);
    ctx.beginPath();
    ctx.moveTo(x + padL, sy);
    ctx.lineTo(x + w - padR, sy);
    ctx.stroke();
  }

  // Gravity / sanctuary / cryo geyser / W5 magma geyser zones
  for (const gz of st.gravityZones) {
    if (!inBand(gz.x + gz.w * 0.5, gz.w)) continue;
    ctx.fillStyle = gz.mode === 'updraft' ? 'rgba(56, 242, 255, 0.2)' : 'rgba(192, 132, 252, 0.2)';
    ctx.fillRect(mapX(gz.x), mapY(gz.y), mapW(gz.w), mapH(gz.h));
  }
  for (const cg of st.cryoGeysers ?? []) {
    if (!inBand(cg.x)) continue;
    ctx.fillStyle = 'rgba(125, 211, 252, 0.26)';
    ctx.fillRect(mapX(cg.x), mapY(cg.y - cg.maxHeight), mapW(cg.w), mapH(cg.maxHeight));
  }
  for (const mg of st.magmaGeysers ?? []) {
    if (!inBand(mg.x)) continue;
    const gx = mapX(mg.x);
    const gw = Math.max(4, mapW(mg.w));
    const gh = Math.max(8, mapH(mg.maxHeight));
    const gy = mapY(mg.y) - gh;
    const gGrad = ctx.createLinearGradient(0, gy, 0, gy + gh);
    gGrad.addColorStop(0, 'rgba(251, 146, 60, 0.78)');
    gGrad.addColorStop(1, 'rgba(225, 29, 72, 0.42)');
    ctx.fillStyle = gGrad;
    ctx.fillRect(gx, gy, gw, gh);
    ctx.fillStyle = '#fb923c';
    ctx.fillRect(gx - 1, mapY(mg.y) - 3, gw + 2, 4);
  }
  for (const sg of st.sanctuaryGusts ?? []) {
    if (!inBand(sg.x + sg.w * 0.5, sg.w)) continue;
    ctx.fillStyle = 'rgba(52, 211, 153, 0.22)';
    ctx.fillRect(mapX(sg.x), mapY(sg.y), mapW(sg.w), mapH(sg.h));
  }

  // Slopes
  for (const sl of st.slopes) {
    if (!inBand((sl.x1 + sl.x2) * 0.5, Math.abs(sl.x2 - sl.x1))) continue;
    ctx.fillStyle = 'rgba(148, 163, 184, 0.28)';
    ctx.beginPath();
    ctx.moveTo(mapX(sl.x1), mapY(sl.y1));
    ctx.lineTo(mapX(sl.x2), mapY(sl.y2));
    ctx.lineTo(mapX(sl.x2), mapY(sl.bottomY));
    ctx.lineTo(mapX(sl.x1), mapY(sl.bottomY));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = stTheme.accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mapX(sl.x1), mapY(sl.y1));
    ctx.lineTo(mapX(sl.x2), mapY(sl.y2));
    ctx.stroke();
  }

  // Styled Platforms
  for (const p of st.platforms) {
    if (p.x + p.w < minX - 40 || p.x > maxX + 40) continue;
    const px = mapX(p.x);
    const py = mapY(p.y);
    const pw = mapW(p.w);
    const ph = Math.max(4, Math.min(26, mapH(p.h)));
    const colors = getPlatformColors(p.style);
    ctx.fillStyle = colors.body;
    ctx.fillRect(px, py, pw, ph);
    ctx.fillStyle = colors.top;
    ctx.fillRect(px, py, pw, Math.min(2.5, ph * 0.35));

    if (p.oneWay) {
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(px, py, pw, 1.2);
    }
    if (p.windbreak) {
      ctx.strokeStyle = '#e0f2fe';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(px, py, pw, ph);
    }
    if (p.streamVx) {
      ctx.fillStyle = p.streamVx > 0 ? '#fde047' : '#fda4af';
      ctx.fillRect(px, py + ph * 0.45, pw, 1.5);
    }
  }

  // Moving / orbital / bloom / spiral / seal / crystal lock platforms
  for (const mp of st.movingPlatforms) {
    if (!inBand(mp.startX) && !inBand(mp.endX)) continue;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(mapX(mp.startX + mp.w * 0.5), mapY(mp.startY));
    ctx.lineTo(mapX(mp.endX + mp.w * 0.5), mapY(mp.endY));
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(mapX(mp.startX), mapY(mp.startY), mapW(mp.w), 4);
  }
  for (const op of st.orbitalPlatforms ?? []) {
    if (!inBand(op.cx, op.rx + 80)) continue;
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.45)';
    ctx.beginPath();
    ctx.ellipse(mapX(op.cx), mapY(op.cy), Math.max(4, mapW(op.rx)), Math.max(4, mapH(op.ry)), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#34d399';
    ctx.fillRect(mapX(op.cx - op.w * 0.5), mapY(op.cy), mapW(op.w), 4);
  }
  for (const bb of st.bloomBridges) {
    if (!inBand(bb.bridgeX)) continue;
    ctx.strokeStyle = '#34d399';
    ctx.setLineDash([3, 2]);
    ctx.strokeRect(mapX(bb.bridgeX), mapY(bb.bridgeY), mapW(bb.bridgeW), 4);
    ctx.setLineDash([]);
    ctx.fillStyle = '#6ee7b7';
    ctx.beginPath();
    ctx.arc(mapX(bb.triggerX), mapY(bb.triggerY), 3, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const sb of st.spiralBlooms ?? []) {
    if (!inBand(sb.triggerX, 300)) continue;
    ctx.fillStyle = '#34d399';
    for (let s = 1; s <= sb.stepsCount; s++) {
      ctx.fillRect(mapX(sb.triggerX + sb.stepOffsetX * s), mapY(sb.triggerY - sb.stepRiseY * s), mapW(sb.stepW), 3);
    }
  }
  for (const lp of st.lotusPads ?? []) {
    if (!inBand(lp.x)) continue;
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(mapX(lp.x), mapY(lp.y), mapW(lp.w), 4);
  }
  for (const sbl of st.sealBlocks) {
    if (!inBand(sbl.x)) continue;
    ctx.fillStyle = '#f97316';
    ctx.fillRect(mapX(sbl.x), mapY(sbl.y), Math.max(3, mapW(sbl.w)), Math.max(5, mapH(sbl.h)));
  }
  for (const cl of st.crystalLocks ?? []) {
    if (!inBand(cl.barrierX) && !inBand(cl.crystalX)) continue;
    ctx.fillStyle = '#10b981';
    ctx.fillRect(mapX(cl.barrierX), mapY(cl.barrierY), Math.max(3, mapW(cl.barrierW)), Math.max(6, mapH(cl.barrierH)));
    ctx.strokeStyle = 'rgba(110, 231, 183, 0.55)';
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(mapX(cl.crystalX), mapY(cl.crystalY));
    ctx.lineTo(mapX(cl.barrierX), mapY(cl.barrierY + cl.barrierH * 0.5));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Rails & gears
  ctx.strokeStyle = '#fde047';
  ctx.lineWidth = 2.2;
  for (const r of st.rails) {
    if (!inBand(r.x1, Math.abs(r.x2 - r.x1) + 80)) continue;
    ctx.beginPath();
    ctx.moveTo(mapX(r.x1), mapY(r.y1));
    ctx.lineTo(mapX(r.x2), mapY(r.y2));
    ctx.stroke();
  }
  for (const g of st.gears) {
    if (!inBand(g.cx, g.r + 40)) continue;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(mapX(g.cx), mapY(g.cy), Math.max(3.5, mapW(g.r)), 0, Math.PI * 2);
    ctx.stroke();
  }

  // Interactive gimmicks across W1-W5
  for (const bp of st.boostPads ?? []) {
    if (!inBand(bp.x)) continue;
    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(mapX(bp.x), mapY(bp.y), Math.max(4, mapW(bp.w)), 4);
  }
  for (const ss of st.scarletSlings ?? []) {
    if (!inBand(ss.x)) continue;
    const sx = mapX(ss.x);
    const sy = mapY(ss.y);
    ctx.strokeStyle = '#fb7185';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sx, sy, 5.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#fff1f2';
    ctx.beginPath();
    ctx.arc(sx, sy, 2, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const de of st.danmakuEmitters ?? []) {
    if (!inBand(de.x)) continue;
    const dx = mapX(de.x);
    const dy = mapY(de.y);
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.5)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(dx, dy, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(dx, dy, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const cr of st.chimeRings ?? []) {
    if (!inBand(cr.x)) continue;
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(mapX(cr.x), mapY(cr.y), 4.5, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (const wr of st.windRings ?? []) {
    if (!inBand(wr.x)) continue;
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(mapX(wr.x), mapY(wr.y), 4.5, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (const pv of st.pendulumVines) {
    if (!inBand(pv.cx)) continue;
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(mapX(pv.cx), mapY(pv.cy));
    ctx.lineTo(mapX(pv.cx), mapY(pv.cy + pv.length));
    ctx.stroke();
  }
  for (const fb of st.floatBubbles) {
    if (!inBand(fb.x)) continue;
    ctx.strokeStyle = '#6ee7b7';
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.arc(mapX(fb.x), mapY(fb.y), 4, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (const sc of st.sporeCatapults) {
    if (!inBand(sc.x)) continue;
    ctx.fillStyle = '#a3e635';
    ctx.fillRect(mapX(sc.x), mapY(sc.y), Math.max(4, mapW(sc.w)), 4);
  }
  for (const pp of st.pollenPods ?? []) {
    if (!inBand(pp.x)) continue;
    ctx.fillStyle = '#bef264';
    ctx.beginPath();
    ctx.arc(mapX(pp.x), mapY(pp.y), 3.2, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const cb of st.cryoBumpers ?? []) {
    if (!inBand(cb.x)) continue;
    ctx.fillStyle = '#7dd3fc';
    ctx.beginPath();
    ctx.arc(mapX(cb.x), mapY(cb.y), 4, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const pw of st.phaseWaterSwitches ?? []) {
    if (!inBand(pw.x)) continue;
    ctx.strokeStyle = '#38bdf8';
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.arc(mapX(pw.x), mapY(pw.y), 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  for (const sw of st.switches) {
    if (!inBand(sw.x)) continue;
    ctx.fillStyle = sw.chrono ? '#facc15' : '#22d3ee';
    ctx.beginPath();
    ctx.arc(mapX(sw.x), mapY(sw.y), 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const m of st.mirrors) {
    if (!inBand(m.x)) continue;
    ctx.fillStyle = m.color || '#c084fc';
    ctx.fillRect(mapX(m.x), mapY(m.y), Math.max(2.5, mapW(m.w)), Math.max(5, mapH(m.h)));
  }
  for (const im of st.iceMirrors ?? []) {
    if (!inBand(im.x)) continue;
    ctx.fillStyle = '#e0f2fe';
    ctx.fillRect(mapX(im.x), mapY(im.y), Math.max(2.5, mapW(im.w)), Math.max(5, mapH(im.h)));
  }
  for (const gl of [...(st.glowLanterns ?? []), ...(st.cryoLanterns ?? [])]) {
    if (!inBand(gl.x)) continue;
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc(mapX(gl.x), mapY(gl.y), 3, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const sg of st.slipstreamGates ?? []) {
    if (!inBand(sg.x)) continue;
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(mapX(sg.x), mapY(sg.y - sg.h * 0.5));
    ctx.lineTo(mapX(sg.x), mapY(sg.y + sg.h * 0.5));
    ctx.stroke();
  }

  // Hazards
  ctx.fillStyle = '#f43f5e';
  for (const sp of st.spikes) {
    if (!inBand(sp.x, sp.w)) continue;
    ctx.fillRect(mapX(sp.x), mapY(sp.y), Math.max(3, mapW(sp.w)), 3.5);
  }
  ctx.strokeStyle = '#38f2ff';
  ctx.lineWidth = 1.3;
  for (const cb of st.cables) {
    if (!inBand(cb.x)) continue;
    ctx.beginPath();
    ctx.moveTo(mapX(cb.x), mapY(cb.y));
    ctx.lineTo(mapX(cb.x), mapY(cb.y + cb.length));
    ctx.stroke();
  }
  ctx.strokeStyle = '#fb7185';
  ctx.lineWidth = 1.5;
  for (const rl of st.lasers) {
    if (!inBand(rl.cx, rl.length)) continue;
    ctx.beginPath();
    ctx.arc(mapX(rl.cx), mapY(rl.cy), Math.max(4, mapW(rl.length * 0.6)), 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.strokeStyle = '#f43f5e';
  ctx.lineWidth = 1.6;
  for (const bl of st.beamLasers) {
    if (!inBand(bl.x1, bl.maxLength)) continue;
    ctx.beginPath();
    ctx.moveTo(mapX(bl.x1), mapY(bl.y1));
    ctx.lineTo(mapX(bl.x1 + bl.dirX * bl.maxLength), mapY(bl.y1 + bl.dirY * bl.maxLength));
    ctx.stroke();
  }
  ctx.strokeStyle = '#bae6fd';
  for (const fb of st.freezeBeams ?? []) {
    if (!inBand(fb.x1, 300) && !inBand(fb.x2, 300)) continue;
    ctx.beginPath();
    ctx.moveTo(mapX(fb.x1), mapY(fb.y1));
    ctx.lineTo(mapX(fb.x2), mapY(fb.y2));
    ctx.stroke();
  }
  for (const stp of st.snapTraps) {
    if (!inBand(stp.x)) continue;
    ctx.fillStyle = '#fb7185';
    ctx.fillRect(mapX(stp.x), mapY(stp.y), Math.max(4, mapW(stp.w)), 3.5);
  }
  for (const sj of st.sporeJets) {
    if (!inBand(sj.x, sj.range)) continue;
    ctx.strokeStyle = '#a3e635';
    ctx.lineWidth = 1.5;
    const dx = sj.dir === 'right' ? sj.range : sj.dir === 'left' ? -sj.range : 0;
    const dy = sj.dir === 'down' ? sj.range : sj.dir === 'up' ? -sj.range : 0;
    ctx.beginPath();
    ctx.moveTo(mapX(sj.x), mapY(sj.y));
    ctx.lineTo(mapX(sj.x + dx), mapY(sj.y + dy));
    ctx.stroke();
  }
  for (const sp of [...st.scythePendulums, ...(st.icePendulums ?? []), ...(st.pendulumBlades ?? [])]) {
    if (!inBand(sp.cx, sp.length)) continue;
    ctx.strokeStyle = '#fda4af';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(mapX(sp.cx), mapY(sp.cy));
    ctx.lineTo(mapX(sp.cx), mapY(sp.cy + sp.length));
    ctx.stroke();
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(mapX(sp.cx), mapY(sp.cy + sp.length), 3.2, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const tp of st.thornPistons ?? []) {
    if (!inBand(tp.x)) continue;
    ctx.fillStyle = 'rgba(244, 63, 94, 0.55)';
    ctx.fillRect(mapX(tp.x), mapY(tp.baseY), Math.max(3, mapW(tp.w)), Math.max(4, mapH(tp.maxDrop)));
  }
  for (const ic of st.fallingIcicles ?? []) {
    if (!inBand(ic.x)) continue;
    ctx.fillStyle = '#e0f2fe';
    const ix = mapX(ic.x);
    const iy = mapY(ic.topY);
    ctx.beginPath();
    ctx.moveTo(ix - 3, iy);
    ctx.lineTo(ix + 3, iy);
    ctx.lineTo(ix, iy + 8);
    ctx.closePath();
    ctx.fill();
  }
  for (const fm of st.frostMines ?? []) {
    if (!inBand(fm.x)) continue;
    ctx.fillStyle = '#fb7185';
    ctx.beginPath();
    ctx.arc(mapX(fm.x), mapY(fm.y), 3, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const cn of st.cannons) {
    if (!inBand(cn.x)) continue;
    ctx.fillStyle = '#f97316';
    ctx.fillRect(mapX(cn.x) - 3, mapY(cn.y) - 3, 6, 6);
  }

  // Checkpoints
  for (const cp of st.checkpoints) {
    if (!inBand(cp.x)) continue;
    const cx = mapX(cp.x);
    const cy = mapY(cp.y);
    ctx.strokeStyle = 'rgba(56, 242, 255, 0.85)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 14);
    ctx.lineTo(cx, cy);
    ctx.stroke();
    ctx.fillStyle = '#38f2ff';
    ctx.fillRect(cx, cy - 14, 5, 4);
  }

  // Mana & Gold Bonus Orbs
  for (const o of st.orbs) {
    if (!inBand(o.x)) continue;
    const ox = mapX(o.x);
    const oy = mapY(o.y);
    if (o.bonus) {
      drawGlowShot(ctx, ox, oy, 3.2, '#fef08a', '#f59e0b');
    } else if (isZoomed) {
      ctx.fillStyle = 'rgba(56, 242, 255, 0.65)';
      ctx.beginPath();
      ctx.arc(ox, oy, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Authentic Enemy Sprites + Patrol Range Brackets
  const spriteScale = isZoomed ? 0.36 : 0.24;
  for (const en of st.enemies) {
    if (!inBand(en.x, 200)) continue;
    const ex = mapX(en.x + en.w * 0.5);
    const ey = mapY(en.y + en.h * 0.5);
    if (en.maxX > en.minX) {
      ctx.strokeStyle = 'rgba(251, 113, 133, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(mapX(en.minX), ey + 6);
      ctx.lineTo(mapX(en.maxX), ey + 6);
      ctx.stroke();
    }
    drawEnemyPortrait(ctx, en.kind, ex, ey, spriteScale);
    if (isZoomed) {
      ctx.fillStyle = '#fecdd3';
      ctx.font = '700 7.5px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(en.kind.slice(0, 7).toUpperCase(), ex, ey - 10);
      ctx.textAlign = 'left';
    }
  }

  // Boss Arena Frame + Actual Boss Portrait
  if (st.boss && (inBand(st.boss.arenaMinX, 600) || inBand(st.boss.arenaMaxX, 600))) {
    const ax1 = mapX(st.boss.arenaMinX);
    const ax2 = mapX(st.boss.arenaMaxX);
    const ay = mapY(st.boss.floorY - 180);
    const ah = mapH(180);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.8;
    ctx.strokeRect(ax1, ay, Math.max(8, ax2 - ax1), Math.max(10, ah));
    ctx.fillStyle = 'rgba(251, 191, 36, 0.14)';
    ctx.fillRect(ax1, ay, Math.max(8, ax2 - ax1), Math.max(10, ah));

    const bx = mapX(st.boss.x + st.boss.w * 0.5);
    const by = mapY(st.boss.y + st.boss.h * 0.5);
    drawEnemyPortrait(ctx, st.boss.kind, bx, by, isZoomed ? 0.62 : 0.42);
  }

  // Player Spawn Silhouette & Neon Goals (Normal Green + Secret Gold)
  if (inBand(st.spawn.x)) {
    drawPlayerCombatSprite(ctx, mapX(st.spawn.x), mapY(st.spawn.y + 18), false, isZoomed ? 0.52 : 0.36);
  }
  if (inBand(st.goal.x)) {
    const gx = mapX(st.goal.x);
    const gy = mapY(st.goal.y);
    const gh = Math.max(12, mapH(st.goal.h));
    ctx.fillStyle = 'rgba(52, 211, 153, 0.28)';
    ctx.fillRect(gx - 5, gy, 10, gh);
    ctx.fillStyle = '#34d399';
    ctx.fillRect(gx - 2, gy, 4, gh);
  }
  if (st.secretGoal && inBand(st.secretGoal.x)) {
    const sgx = mapX(st.secretGoal.x);
    const sgy = mapY(st.secretGoal.y);
    const sgh = Math.max(12, mapH(st.secretGoal.h));
    ctx.fillStyle = 'rgba(251, 191, 36, 0.35)';
    ctx.fillRect(sgx - 6, sgy, 12, sgh);
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(sgx - 2.5, sgy, 5, sgh);
    if (isZoomed) {
      ctx.fillStyle = '#fde047';
      ctx.font = '700 8px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SECRET', sgx, sgy - 4);
      ctx.textAlign = 'left';
    }
  }

  ctx.restore(); // end plot clip

  // Axis ruler text (outside plot clip)
  ctx.font = '600 8.5px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  for (let wx = firstTick; wx <= maxX; wx += xStep) {
    const sx = mapX(wx);
    ctx.textAlign = 'center';
    ctx.fillText(wx >= 1000 ? `${(wx / 1000).toFixed(1).replace(/\.0$/, '')}k` : `${wx}`, sx, y + h - footerH - 3);
  }
  for (let i = 0; i <= 4; i++) {
    const wy = Math.round(minY + (spanY * i) / 4);
    const sy = mapY(wy);
    ctx.textAlign = 'right';
    ctx.fillText(`${wy}`, x + padL - 4, sy + 3);
  }
  ctx.textAlign = 'left';

  // Header strip
  ctx.fillStyle = '#0b142c';
  ctx.fillRect(x, y, w, headerH);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
  ctx.beginPath();
  ctx.moveTo(x, y + headerH);
  ctx.lineTo(x + w, y + headerH);
  ctx.stroke();

  ctx.fillStyle = stTheme.accent;
  ctx.font = '700 10px "JetBrains Mono", monospace';
  ctx.fillText(
    bandLabel ? `GAME SCREEN [${st.code}] · ${bandLabel}` : `GAME SCREEN OVERVIEW [${st.code}]`,
    x + 10,
    y + 15
  );
  ctx.textAlign = 'right';
  ctx.fillStyle = '#cbd5e1';
  const enemyInBand = st.enemies.filter((e) => e.x >= minX && e.x <= maxX).length;
  ctx.fillText(
    `SPAN:${Math.round(spanX).toLocaleString()}px · Y:[${Math.round(minY)}..${Math.round(maxY)}] · ENEMIES:${enemyInBand}${st.secretGoal && inBand(st.secretGoal.x, 0) ? ' + SECRET' : ''}${st.boss && st.boss.x >= minX && st.boss.x <= maxX ? ' + BOSS' : ''}`,
    x + w - 10,
    y + 15
  );
  ctx.textAlign = 'left';

  // Footer legend
  ctx.fillStyle = '#0a1226';
  ctx.fillRect(x, y + h - footerH, w, footerH);
  ctx.font = '600 9px "JetBrains Mono", "Noto Sans JP", sans-serif';
  const items: [string, string][] = [
    ['★ PLAYER', '#38f2ff'],
    ['■ GOAL', '#34d399'],
    ['■ SECRET', '#fbbf24'],
    ['👾 ENEMY SPRITE', '#fb7185'],
    ['◎ SLING/RING', '#fda4af'],
    ['▲ GEYSER/TRAP', '#f97316'],
  ];
  let lx = x + 10;
  for (const [label, col] of items) {
    ctx.fillStyle = col;
    ctx.fillText(label, lx, y + h - 6);
    lx += ctx.measureText(label).width + 12;
  }

  ctx.restore();
}
