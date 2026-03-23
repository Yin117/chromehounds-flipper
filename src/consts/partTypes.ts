

export const factions = {
  MSK: 'MSK',
  SK: 'SK',
  TAK: 'TAK'
} as const;
export type FactionKey = keyof typeof factions;
export type Faction = (typeof factions)[FactionKey];

export type Part = {
  name: string,
  imageName: string,
  filename: string,
  faction: FactionKey,
  isRaf?: boolean,
  weight: number,
  energyUse: number,
  durability: number,
  defKE: number,
  defCE: number,
}

export const mobilityType = {
  Bipedal: 'Bipedal',
  Inverse: 'Inverse',
  Multi: 'Multi', // 4 leg
  Treaded: 'Treaded',
  Hover: 'Hover',
  Wheeled: 'Wheeled',
} as const;
export type MobilityTypeKey = keyof typeof mobilityType;
export type MobilityType = (typeof mobilityType)[MobilityTypeKey];

export type MobilityBase = Part & {
  type: MobilityType,
  weight: number,
  load: number,
  speed: number,
  acceleration: number,
  brakes: number,
  turningSpeed: number,
  rotationSpeed: number,
  shockAbsorption: number,
  stability: number,
  ComCompatibility: number,
}

export type Cockpit = Part & {
  systemSockets: number,
  internalPower: number,
  condenserCapacity: number,
  condenserRegen: number,
  partsManagement: number,
};

export type SystemDevice = {
  name: string,
  imageName: string,
  filename: string,
  socketUse: number,
  isRaf?: boolean,
}

export type MobilitySystemDevice = SystemDevice & {
  speedEnhancement: number,
  accelEnhancement: number,
}

export type WeaponSystemDevice = SystemDevice & {
  aimStability: number,
  weaponSystems: 1 | 2 | 3 | 4,
}

export type StabilitySystemDevice = SystemDevice & {
  stabilityBoost: number,
  rotationBoost: number,
}

export type Generator = Part & {
  energyOutput: number,
  fuelCapacity: number,
  heatGeneration: number,
}

export type NaMaker = Part & {
  networkRange: number,
}

export type AmmoType = 'KE' | 'CE';

export const scopes = {
  Normal: 'Normal',
  HighAngle: 'High-Angle',
  Missile: 'Missile',
  Snipe: 'Snipe',
  None: 'None',
} as const;
export type ScopeKey = keyof typeof scopes;
export type Scope = (typeof scopes)[ScopeKey];

export const weaponCategories = {
  MachineGun: 'Machine Gun',
  Grenade: 'Grenade',
  HeatRocket: 'HEAT Rocket',
  Shotgun: 'Shotgun',
  AssaultRifle: 'Assault Rifle',
  SniperRifle: 'Sniper Rifle',
  SniperCannon: 'Sniper Cannon',
  Rocket: 'Rocket',
  Cannon: 'Cannon',
  Howitzer: 'Howitzer',
  Mortar: 'Mortar',
  AntiHoundPile: 'Anti HOUND Pile',
  LandMine: 'Land Mine',
  BombDispenser: 'Bomb Dispenser',
  HugeRocket: 'Huge Rocket',
  Missile: 'Missile',
  HugeCannon: 'Huge Cannon',
} as const;
export type WeaponCategoryKey = keyof typeof weaponCategories;
export type WeaponCategory = (typeof weaponCategories)[WeaponCategoryKey];

/**
 * The majority of Weapon info comes from their ammo (if choices exist)
 */
export type Weapons = Part & {
  category: WeaponCategory,
  scope: Scope,
  ammoTypes: Array<{
    name: string,
    maxAmmo: number[], // [3, 8]
    weaponAmmoType: string, // e.g. 'APFSDS'
    roundAmmoType: AmmoType,
    range: number,
    heatOfImpact: number,
    cost: number,
    fullAuto: number,
    reloadTime: number,
  }>,
}

export const spacerShapes = {
  Line: 'Line',
  Cuboid: 'Cuboid',
  Tee: 'Tee',
  Diagonal: 'Diagonal',
  Angle: 'Angle',
  Bend: 'Bend',
} as const;
export type SpacerShapeKey = keyof typeof spacerShapes;
export type SpacerShape = (typeof spacerShapes)[SpacerShapeKey];

export type Spacer = Part & {
  connectionPoints: 2 | 3 | 4 | 6,
  shape: SpacerShape,
}

export const sensorTypes = {
  NightVision: 'Night Vision',
  ThermoVision: 'Thermo Vision',
  MineDetector: 'Mine Detector',
} as const;
export type SensorTypeKey = keyof typeof sensorTypes;
export type SensorType = (typeof sensorTypes)[SensorTypeKey];

export type Sensor = Part & {
  type: SensorType,
  range: number,
}

export type NaJammer = Part & {
  effectiveTime: number, // minutes
}

export type MissileCounter = Part & {
  powerLevel: number,
  charges: number,
}

export type Rotorcraft = Part & {
  lift: number,
  condenserUse: number,
}

export type HeatSink = Part & {
  heatDispersion: number,
}

export type FuelTank = Part & {
  additionalFuel: number,
}

export type Armor = Part;