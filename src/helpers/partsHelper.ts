export function getPartFlags(part?: { filename: string }) {
  const partIdentifier = part?.filename.substring(0, 2) ?? '';
  const partIdentifierExtended = part?.filename.substring(0, 5) ?? '';
  return {
    isMobilityBase: partIdentifier === 'LG',
    isCockpit: partIdentifier === 'CK',
    isGenerator: partIdentifier === 'GE',
    isWeapon: partIdentifier === 'WP',
    isWeaponHeavy: partIdentifier === 'WH',

    isMobilitySystemDevice: partIdentifierExtended === 'CP_MC',
    isWeaponSystemDevice: partIdentifierExtended === 'CP_AS',
    isStabilityDevice: partIdentifierExtended === 'CP_CT',
    isSpacer: partIdentifierExtended === 'AX_SP',
    isSensor: partIdentifierExtended === 'AX_SD',
    isNaJammer: partIdentifierExtended === 'AX_JM',
    isMissileCounter: partIdentifierExtended === 'AX_MC',
    isRotorCraft: partIdentifierExtended === 'AX_RC',
    isHeatSink: partIdentifierExtended === 'AX_RD',
    isFuelTank: partIdentifierExtended === 'AX_FS',
    isArmor: partIdentifierExtended === 'AX_AM',
    isNaMaker: partIdentifierExtended === 'AX_NM',
  }
}