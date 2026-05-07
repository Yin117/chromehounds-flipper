

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
  comCompatibility: number,
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

export type Generator = Omit<Part, 'energyUse'> & {
  energyOutput: number,
  fuelCapacity: number,
  heatGeneration: number,
}

export type NaMaker = Part & {
  networkRange: number,
}

export type AmmoType = 'KE' | 'CE' | 'HE';

export const weaponAmmoTypes = {
  AP: 'AP',
  Grenade: 'Grenade',
  Heat: 'HEAT',
  Rocket: 'ROCKET',
  Pile: 'PILE',
  Illuminating: 'ILLUMINATING',
  Mine: 'MINE',
  Bomb: 'BOMB',
  He: 'HE',
  Smoke: 'SMOKE',
  Incendiary: 'INCENDIARY',
} as const;
export type WeaponAmmoTypeKey = keyof typeof weaponAmmoTypes;
export type WeaponAmmoType = (typeof weaponAmmoTypes)[WeaponAmmoTypeKey];

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
type WeaponBase = Omit<Part, 'weight'> & {
  category: WeaponCategory,
  scope: Scope,
  isHex?: boolean,
  weight: number[],
  maxAmmo: number[],
  fullAuto: number,
  reloadTime: number,
};

/**
 * roundAmmoType is the 'penetrationPower'
 */
export type Weapon = WeaponBase & {
  name: string,
  ammoName?: string,
  description?: string,
  ammoDescription?: string,
  roundAmmoType: AmmoType, // Penetration Power KE/CE
  penetrationPower: number,
  weaponAmmoType: WeaponAmmoType,
  range: number,
  heatOfImpact: number,
  cost: number,
}

export type MultiAmmo = {
  name: string,
  description?: string,
  penetrationPower: number,
  weaponAmmoType: string, // e.g. 'APFSDS'
  roundAmmoType: AmmoType,
  range: number,
  heatOfImpact: number,
  cost: number,
}
export type WeaponMultiAmmo = WeaponBase & {
  ammoTypes: MultiAmmo[],
}

export const spacerShapes = {
  Line: 'Line', // 2 connections
  Cuboid: 'Cuboid', // 6 connections
  Tee: 'Tee', // 4 connections
  Diagonal: 'Diagonal', // 2 connections
  Elbow: 'Elbow', // 4 connections
  Vee: 'Vee', // 3 connections
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