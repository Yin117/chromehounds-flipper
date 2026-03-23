import { factions, mobilityType, sensorTypes, type Armor, type Cockpit, type FuelTank, type HeatSink, type MissileCounter, type MobilityBase, type MobilitySystemDevice, type NaJammer, type Rotorcraft, type Sensor, type Spacer, type StabilitySystemDevice, type WeaponSystemDevice } from "./partTypes";

function getImageName(filename: string, meshType = 'smd') {
  return `image_${filename}_${meshType}.png`
}

export const mobilityBase: MobilityBase[] = [
  {
    name: 'TL-Dhib',
    imageName: getImageName('LG_TL062'),
    filename: 'LG_TL062',
    faction: factions.SK,
    type: mobilityType.Bipedal,
    weight: 1021,
    energyUse: 212,
    durability: 4032,
    defKE: 46,
    defCE: 34,
    load: 4211,
    speed: 61,
    acceleration: 36,
    brakes: 35,
    turningSpeed: 150,
    rotationSpeed: 66,
    shockAbsorption: 175,
    stability: 126,
    comCompatibility: 120,
  },
  {
    name: 'TL-Sal Kar',
    imageName: getImageName('LG_TL061'),
    filename: 'LG_TL061',
    faction: factions.SK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'TL-Kalb',
    imageName: getImageName('LG_TL063'),
    filename: 'LG_TL063',
    faction: factions.SK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'RFZ-TL-2',
    imageName: getImageName('LG_TL061'),
    filename: 'LG_TL061',
    faction: factions.SK,
    type: mobilityType.Bipedal,
  {
    name: 'M03TL Garfield',
    imageName: getImageName('LG_TL001'),
    filename: 'LG_TL001',
    faction: factions.TAK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'M10TL Shaw',
    imageName: getImageName('LG_TL002'),
    filename: 'LG_TL002',
    faction: factions.TAK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'M13TL Scott',
    imageName: getImageName('LG_TL003'),
    filename: 'LG_TL003',
    faction: factions.TAK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'MSK-TL500',
    imageName: getImageName('LG_TL031'),
    filename: 'LG_TL031',
    faction: factions.MSK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'RFZ-TL-1',
    imageName: getImageName('LG_TL031'),
    filename: 'LG_TL031',
    faction: factions.MSK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'MSK-TL501',
    imageName: getImageName('LG_TL032'),
    filename: 'LG_TL032',
    faction: factions.MSK,
    type: mobilityType.Bipedal,
  },
  {
    name: 'RJ-Jamal',
    imageName: getImageName('LG_RJ061'),
    filename: 'LG_RJ061',
    faction: factions.SK,
    type: mobilityType.Inverse,
  },
  {
    name: 'RJ-Naqa',
    imageName: getImageName('LG_RJ062'),
    filename: 'LG_RJ062',
    faction: factions.SK,
    type: mobilityType.Inverse,
  },
  {
    name: 'M08RJ Hancock',
    imageName: getImageName('LG_RJ002'),
    filename: 'LG_RJ002',
    faction: factions.TAK,
    type: mobilityType.Inverse,
  },
  {
    name: 'M17RJ Douglass',
    imageName: getImageName('LG_RJ003'),
    filename: 'LG_RJ003',
    faction: factions.TAK,
    type: mobilityType.Inverse,
  },
  {
    name: 'M01RJ Burns',
    imageName: getImageName('LG_RJ001'),
    filename: 'LG_RJ001',
    faction: factions.TAK,
    type: mobilityType.Inverse,
  },
  {
    name: 'RFZ-RJ-1',
    imageName: getImageName('LG_RJ001'),
    filename: 'LG_RJ001',
    faction: factions.TAK,
    isRaf: true,
    type: mobilityType.Inverse,
  },
  {
    name: 'MSK-RJ400',
    imageName: getImageName('LG_RJ031'),
    filename: 'LG_RJ031',
    faction: factions.MSK,
    type: mobilityType.Inverse,
  },
  {
    name: 'RFZ-RJ-2',
    imageName: getImageName('LG_RJ031'),
    filename: 'LG_RJ031',
    faction: factions.MSK,
    isRaf: true,
    type: mobilityType.Inverse,
  },
  {
    name: 'MSK-RJ401',
    imageName: getImageName('LG_RJ032'),
    filename: 'LG_RJ032',
    faction: factions.MSK,
    type: mobilityType.Inverse,
  },
  {
    name: 'M09ML Dupont',
    imageName: getImageName('LG_ML002'),
    filename: 'LG_ML002',
    faction: factions.TAK,
    type: mobilityType.Multi,
  },
  {
    name: 'ML-Baqara',
    imageName: getImageName('LG_ML062'),
    filename: 'LG_ML062',
    faction: factions.SK,
    type: mobilityType.Multi,
  },
  {
    name: 'ML-Thawr',
    imageName: getImageName('LG_ML061'),
    filename: 'LG_ML061',
    faction: factions.SK,
    type: mobilityType.Multi,
  },
  {
    name: 'M04ML Grant',
    imageName: getImageName('LG_ML001'),
    filename: 'LG_ML001',
    faction: factions.TAK,
    type: mobilityType.Multi,
  },
  {
    name: 'RFZ-ML-1',
    imageName: getImageName('LG_ML001'),
    filename: 'LG_ML001',
    faction: factions.TAK,
    isRaf: true,
    type: mobilityType.Multi,
  },
  {
    name: 'M15ML Sharman',
    imageName: getImageName('LG_ML011'),
    filename: 'LG_ML011',
    faction: factions.TAK,
    type: mobilityType.Multi,
  },
  {
    name: 'MSK-ML211',
    imageName: getImageName('LG_ML042'),
    filename: 'LG_ML042',
    faction: factions.MSK,
    type: mobilityType.Multi,
  },
  {
    name: 'MSK-ML201',
    imageName: getImageName('LG_ML032'),
    filename: 'LG_ML032',
    faction: factions.MSK,
    type: mobilityType.Multi,
  },
  {
    name: 'MSK-ML200',
    imageName: getImageName('LG_ML031'),
    filename: 'LG_ML031',
    faction: factions.MSK,
    type: mobilityType.Multi,
  },
  {
    name: 'MSK-ML210',
    imageName: getImageName('LG_ML041'),
    filename: 'LG_ML041',
    faction: factions.MSK,
    type: mobilityType.Multi,
  },
  {
    name: 'RFZ-ML-2',
    imageName: getImageName('LG_ML031'),
    filename: 'LG_ML031',
    faction: factions.MSK,
    isRaf: true,
    type: mobilityType.Multi,
  },
  {
    name: 'CL-Himar',
    imageName: getImageName('LG_CL061'),
    filename: 'LG_CL061',
    faction: factions.SK,
    type: mobilityType.Treaded,
  },
  {
    name: 'RFZ-CL-2',
    imageName: getImageName('LG_CL061'),
    filename: 'LG_CL061',
    faction: factions.SK,
    isRaf: true,
    type: mobilityType.Treaded,
  },
  {
    name: 'CL-Baghl',
    imageName: getImageName('LG_CL062'),
    filename: 'LG_CL062',
    faction: factions.SK,
    type: mobilityType.Treaded,
  },
  {
    name: 'M07CL Hooker',
    imageName: getImageName('LG_CL002'),
    filename: 'LG_CL002',
    faction: factions.TAK,
    type: mobilityType.Treaded,
  },
  {
    name: 'M05CL Custer',
    imageName: getImageName('LG_CL001'),
    filename: 'LG_CL001',
    faction: factions.TAK,
    type: mobilityType.Treaded,
  },
  {
    name: 'RFZ-CL-1',
    imageName: getImageName('LG_CL001'),
    filename: 'LG_CL001',
    faction: factions.TAK,
    isRaf: true,
    type: mobilityType.Treaded,
  },
  {
    name: 'M14CL Meade',
    imageName: getImageName('LG_CL003'),
    filename: 'LG_CL003',
    faction: factions.TAK,
    type: mobilityType.Treaded,
  },
  {
    name: 'MSK-CL110',
    imageName: getImageName('LG_CL031'),
    filename: 'LG_CL031',
    faction: factions.MSK,
    type: mobilityType.Treaded,
  },
  {
    name: 'RFZ-CL-X',
    imageName: getImageName('LG_CL031'),
    filename: 'LG_CL031',
    faction: factions.MSK,
    isRaf: true,
    type: mobilityType.Treaded,
  },
  {
    name: 'MSK-CL101',
    imageName: getImageName('LG_CL032'),
    filename: 'LG_CL032',
    faction: factions.MSK,
    type: mobilityType.Treaded,
  },
  {
    name: 'MSK-CL100',
    imageName: getImageName('LG_CL033'),
    filename: 'LG_CL033',
    faction: factions.MSK,
    type: mobilityType.Treaded,
  },
  {
    name: 'HL-Ghazal',
    imageName: getImageName('LG_HL061'),
    filename: 'LG_HL061',
    faction: factions.SK,
    type: mobilityType.Hover,
  },
  {
    name: 'RFZ-HL-2',
    imageName: getImageName('LG_HL061'),
    filename: 'LG_HL061',
    faction: factions.SK,
    isRaf: true,
    type: mobilityType.Hover,
  },
  {
    name: 'HL-Namir',
    imageName: getImageName('LG_HL063'),
    filename: 'LG_HL063',
    faction: factions.SK,
    type: mobilityType.Hover,
  },
  {
    name: 'M06HL Cushing',
    imageName: getImageName('LG_HL001'),
    filename: 'LG_HL001',
    faction: factions.TAK,
    type: mobilityType.Hover,
  },
  {
    name: 'HL-Labua',
    imageName: getImageName('LG_HL062'),
    filename: 'LG_HL062',
    faction: factions.SK,
    type: mobilityType.Hover,
  },
  {
    name: 'RFZ-HL-1',
    imageName: getImageName('LG_HL001'),
    filename: 'LG_HL001',
    faction: factions.TAK,
    isRaf: true,
    type: mobilityType.Hover,
  },
  {
    name: 'M12HL Wells',
    imageName: getImageName('LG_HL002'),
    filename: 'LG_HL002',
    faction: factions.TAK,
    type: mobilityType.Hover,
  },
  {
    name: 'MSK-HL601',
    imageName: getImageName('LG_HL032'),
    filename: 'LG_HL032',
    faction: factions.MSK,
    type: mobilityType.Hover,
  },
  {
    name: 'HL-Asad',
    imageName: getImageName('LG_HL064'),
    filename: 'LG_HL064',
    faction: factions.SK,
    type: mobilityType.Hover,
  },
  {
    name: 'MSK-HL600',
    imageName: getImageName('LG_HL031'),
    filename: 'LG_HL031',
    faction: factions.MSK,
    type: mobilityType.Hover,
  },
  {
    name: 'M02WL Grierson',
    imageName: getImageName('LG_WL001'),
    filename: 'LG_WL001',
    faction: factions.TAK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'M11WL Sheridan',
    imageName: getImageName('LG_WL002'),
    filename: 'LG_WL002',
    faction: factions.TAK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'M16WL Meagher',
    imageName: getImageName('LG_WL003'),
    filename: 'LG_WL003',
    faction: factions.TAK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'WL-Hisan',
    imageName: getImageName('LG_WL061'),
    filename: 'LG_WL061',
    faction: factions.SK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'RFZ-WL-1',
    imageName: getImageName('LG_WL001'),
    filename: 'LG_WL001',
    faction: factions.TAK,
    isRaf: true,
    type: mobilityType.Wheeled,
  },
  {
    name: 'RFZ-WL-2',
    imageName: getImageName('LG_WL061'),
    filename: 'LG_WL061',
    faction: factions.SK,
    isRaf: true,
    type: mobilityType.Wheeled,
  },
  {
    name: 'WL-Jawad',
    imageName: getImageName('LG_WL063'),
    filename: 'LG_WL063',
    faction: factions.SK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'WL-Faras',
    imageName: getImageName('LG_WL062'),
    filename: 'LG_WL062',
    faction: factions.SK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'MSK-WL300',
    imageName: getImageName('LG_WL031'),
    filename: 'LG_WL031',
    faction: factions.MSK,
    type: mobilityType.Wheeled,
  },
  {
    name: 'MSk-WL310',
    imageName: getImageName('LG_WL032'),
    filename: 'LG_WL032',
    faction: factions.MSK,
    type: mobilityType.Wheeled,
  }
]

export const partsCockpit: Cockpit[] = [
  {
    name: "C-Naml",
    imageName: getImageName('CK_CA062'),
    filename: "CK_CA062",
    faction: factions.SK,
    weight: 581,
    energyUse: 57,
    durability: 2836,
    defKE: 40,
    defCE: 38,
    systemSockets: 9,
    internalPower: 256,
    condenserCapacity: 1698,
    condenserRegen: 303,
    partsManagement: 19,
  }
];

export const partsMobilitySystemDevice: MobilitySystemDevice[] = [
  {
    name: 'MSK-MC1000',
    imageName: getImageName('CP_MC031'),
    filename: 'CP_MC031',
    socketUse: 2,
    speedEnhancement: 66,
    accelEnhancement: 85,
    // isRaf?: true,
  }
];

export const partsWeaponSystemDevice: WeaponSystemDevice[] = [
  {
    name: 'TC-Ithnan',
    imageName: getImageName('CP_AS061'),
    filename: 'CP_AS061',
    socketUse: 1,
    aimStability: 35,
    weaponSystems: 4,
    // isRaf?: true,
  }
];

export const partsStabilitySystemDevice: StabilitySystemDevice[] = [
  {
    name: 'RC-Khamsa',
    imageName: getImageName('CP_CT062'),
    filename: 'CP_CT062',
    socketUse: 1,
    stabilityBoost: 90,
    rotationBoost: 40,
    // isRaf?: true,
  }
];


export const partsSpacers: Spacer[] = [
  {
    name: 'RFZ-ASP-2',
    imageName: getImageName('AX_SP041'),
    filename: 'AX_SP041',
    faction: factions.MSK,
    isRaf: true,
    weight: 270,
    energyUse: 5,
    durability: 4000,
    defKE: 70,
    defCE: 52,
    connectionPoints: 2,
    shape: "Line"
  }
]

export const partsSensor: Sensor[] = [
  {
    name: 'MSK-SK111',
    imageName: getImageName('AX_SD032'),
    filename: 'AX_SD032',
    faction: factions.MSK,
    weight: 32,
    energyUse: 20,
    durability: 2531,
    defKE: 24,
    defCE: 16,
    type: sensorTypes.NightVision,
    range: 550,
  }
]

export const partsNaJammer: NaJammer[] = [
  {
    name: 'JM-Barq',
    imageName: getImageName('AX_JM061'),
    filename: 'AX_JM061',
    faction: factions.SK,
    weight: 135,
    durability: 2034,
    defKE: 30,
    defCE: 26,
    energyUse: 38,
    effectiveTime: 33,
  }
];

export const partsMissileCounter: MissileCounter[] = [
  {
    name: 'MS-Rih',
    imageName: getImageName(''),
    filename: '',
    faction: factions.SK,
    weight: 180,
    energyUse: 10,
    durability: 2763,
    defKE: 45,
    defCE: 36,
    powerLevel: 80,
    charges: 16,
  }
]

export const partsRotorcraft: Rotorcraft[] = [
  {
    name: 'RFZ-ARC-1',
    imageName: getImageName(''),
    filename: '',
    faction: factions.SK,
    isRaf: true,
    weight: 185,
    energyUse: 11,
    durability: 2231,
    defKE: 20,
    defCE: 30,
    lift: 280,
    condenserUse: 676,
  }
]

export const partsHeatSink: HeatSink[] = [
  {
    name: 'RD-Nahar',
    imageName: getImageName(''),
    filename: '',
    faction: factions.SK,
    weight: 86,energyUse: 15,
    durability: 2136,
    defKE: 27,
    defCE: 22,
    heatDispersion: 300,
  }
]

export const partsFuelTank: FuelTank[] = [
  {
    name: 'RFZ-AFS-1',
    imageName: getImageName(''),
    filename: '',
    faction: factions.SK,
    isRaf: true,
    weight: 104,
    energyUse: 2,
    durability: 935,
    defKE: 9,
    defCE: 2,
    additionalFuel: 50,
  }
]

export const partsArmor: Armor[] = [
  {
    name: 'RFZ-AAM-3',
    imageName: getImageName(''),
    filename: '',
    faction: factions.SK,
    isRaf: true,
    weight: 112,
    energyUse: 1,
    durability: 4252,
    defKE: 50,
    defCE: 30,
  }
]