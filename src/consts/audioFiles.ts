
export type SoundFileDetails = {
  filename: string,
  searchWords: string[],
  durationS: number,
  filesize: number,
}

const ignoreWords = [
  '',
  'OR',
  'THE',
  'AND',
  'BUT',
  '4',
  '5',
  '01',
].map(term => term.toUpperCase());

export const sound_CH_WaveBank_SE: SoundFileDetails[] = [
  {
    "filename": "00000000",
    "searchWords": [
      "Balastic",
      "mb"
    ],
    "durationS": 1.365,
    "filesize": 120436
  },
  {
    "filename": "00000001",
    "searchWords": [
      "Heavy",
      "Round",
      "Impacting",
      "Ground",
      "MB"
    ],
    "durationS": 2.428,
    "filesize": 214182
  },
  {
    "filename": "00000002",
    "searchWords": [
      "Heavy",
      "Fire",
      "or",
      "Impact",
      "Round",
      "Hitting"
    ],
    "durationS": 3.149,
    "filesize": 277768
  },
  {
    "filename": "00000003",
    "searchWords": [
      "Heavy",
      "Round",
      "Fired"
    ],
    "durationS": 1.687,
    "filesize": 148812
  },
  {
    "filename": "00000004",
    "searchWords": [
      "Very",
      "Low",
      "Bassy",
      "Thud",
      "Quad",
      "Leg",
      "MB",
      "Mob",
      "Base"
    ],
    "durationS": 0.743,
    "filesize": 65606
  },
  {
    "filename": "00000005",
    "searchWords": [
      "Impact",
      "Then",
      "Fire"
    ],
    "durationS": 4.406,
    "filesize": 388652
  },
  {
    "filename": "00000006",
    "searchWords": [
      "Metal",
      "Hitting",
      "Metal",
      "Hollow",
      "Reverb"
    ],
    "durationS": 1.694,
    "filesize": 149422
  },
  {
    "filename": "00000007",
    "searchWords": [
      "Round",
      "Splash",
      "Long",
      "Falloff"
    ],
    "durationS": 2.618,
    "filesize": 230956
  },
  {
    "filename": "00000008",
    "searchWords": [
      "Water",
      "Splash",
      "Round"
    ],
    "durationS": 3.434,
    "filesize": 302892
  },
  {
    "filename": "00000009",
    "searchWords": [
      "Water",
      "Splash",
      "Impact"
    ],
    "durationS": 1.232,
    "filesize": 108688
  },
  {
    "filename": "0000000a",
    "searchWords": [
      "Round",
      "Into",
      "Water",
      "Cannon"
    ],
    "durationS": 0.857,
    "filesize": 75606
  },
  {
    "filename": "0000000b",
    "searchWords": [
      "Round",
      "Into",
      "Water",
      "AR"
    ],
    "durationS": 0.479,
    "filesize": 42322
  },
  {
    "filename": "0000000c",
    "searchWords": [
      "AR",
      "Fired"
    ],
    "durationS": 1.346,
    "filesize": 118796
  },
  {
    "filename": "0000000d",
    "searchWords": [
      "Mob",
      "Base",
      "01",
      "Burns",
      "Or",
      "Hancock"
    ],
    "durationS": 0.985,
    "filesize": 86956
  },
  {
    "filename": "0000000e",
    "searchWords": [
      "Cannon",
      "01",
      "Sifa",
      "Or",
      "Bastard"
    ],
    "durationS": 2.833,
    "filesize": 249900
  },
  {
    "filename": "0000000f",
    "searchWords": [
      "Heavy",
      "Cannon",
      "01"
    ],
    "durationS": 3.733,
    "filesize": 329260
  },
  {
    "filename": "00000010",
    "searchWords": [
      "Howie",
      "or",
      "Heavy",
      "Rockets"
    ],
    "durationS": 3.796,
    "filesize": 334892
  },
  {
    "filename": "00000011",
    "searchWords": [
      "Heavy",
      "Round",
      "Impact",
      "or",
      "Fire"
    ],
    "durationS": 2.363,
    "filesize": 208428
  },
  {
    "filename": "00000012",
    "searchWords": [
      "Light",
      "Thud",
      "with",
      "Reverb"
    ],
    "durationS": 1.945,
    "filesize": 171564
  },
  {
    "filename": "00000013",
    "searchWords": [
      "Shotty",
      "like",
      "Single",
      "Shot"
    ],
    "durationS": 1.112,
    "filesize": 98092
  },
  {
    "filename": "00000014",
    "searchWords": [
      "Shotty",
      "like",
      "Single",
      "Shot"
    ],
    "durationS": 1.365,
    "filesize": 120436
  },
  {
    "filename": "00000015",
    "searchWords": [
      "Rocket",
      "with",
      "Woosh"
    ],
    "durationS": 2.879,
    "filesize": 253996
  },
  {
    "filename": "00000016",
    "searchWords": [
      "Rocket",
      "with",
      "Woosh"
    ],
    "durationS": 4.0,
    "filesize": 352812
  },
  {
    "filename": "00000017",
    "searchWords": [
      "Rocket",
      "with",
      "Woosh"
    ],
    "durationS": 3.207,
    "filesize": 282882
  },
  {
    "filename": "00000018",
    "searchWords": [
      "Shotgun",
      "Metal",
      "maybe",
      "SG200"
    ],
    "durationS": 2.821,
    "filesize": 248876
  },
  {
    "filename": "00000019",
    "searchWords": [
      "Sniper",
      "Cannon",
      "MB",
      "Himmas"
    ],
    "durationS": 1.458,
    "filesize": 128632
  },
  {
    "filename": "0000001a",
    "searchWords": [
      "AR",
      "Shot",
      "Fire"
    ],
    "durationS": 0.987,
    "filesize": 87084
  },
  {
    "filename": "0000001b",
    "searchWords": [
      "Building",
      "Collapse",
      "Metalic"
    ],
    "durationS": 1.998,
    "filesize": 176300
  },
  {
    "filename": "0000001c",
    "searchWords": [
      "Round",
      "Impact",
      "Softer",
      "Sounding"
    ],
    "durationS": 2.93,
    "filesize": 258476
  },
  {
    "filename": "0000001d",
    "searchWords": [
      "Powering",
      "Down",
      "Long",
      "Windy",
      "Wirr"
    ],
    "durationS": 1.888,
    "filesize": 166524
  },
  {
    "filename": "0000001e",
    "searchWords": [
      "Damaged",
      "Part",
      "Spark",
      "Static"
    ],
    "durationS": 1.773,
    "filesize": 156460
  },
  {
    "filename": "0000001f",
    "searchWords": [
      "Fire"
    ],
    "durationS": 6.014,
    "filesize": 530476
  },
  {
    "filename": "00000020",
    "searchWords": [
      "Building",
      "Hit"
    ],
    "durationS": 1.196,
    "filesize": 105516
  },
  {
    "filename": "00000021",
    "searchWords": [
      "Building",
      "Hit"
    ],
    "durationS": 1.534,
    "filesize": 135366
  },
  {
    "filename": "00000022",
    "searchWords": [
      "Metal",
      "hitting",
      "Hollow"
    ],
    "durationS": 1.344,
    "filesize": 118592
  },
  {
    "filename": "00000023",
    "searchWords": [
      "Metal",
      "hit",
      "High",
      "Pitched"
    ],
    "durationS": 1.053,
    "filesize": 92934
  },
  {
    "filename": "00000024",
    "searchWords": [
      "Metal",
      "hit",
      "Super",
      "High",
      "Pitched"
    ],
    "durationS": 0.851,
    "filesize": 75068
  },
  {
    "filename": "00000025",
    "searchWords": [
      "Metal",
      "hit",
      "Super",
      "Dusty"
    ],
    "durationS": 1.231,
    "filesize": 108588
  },
  {
    "filename": "00000026",
    "searchWords": [
      "Engine",
      "Starts",
      "Up",
      "Genny",
      "or",
      "Tracks"
    ],
    "durationS": 6.13,
    "filesize": 540716
  },
  {
    "filename": "00000027",
    "searchWords": [
      "Tracks",
      "or",
      "Such",
      "Moving"
    ],
    "durationS": 1.44,
    "filesize": 127020
  },
  {
    "filename": "00000028",
    "searchWords": [
      "Bassy",
      "mb",
      "Foot",
      "Impact"
    ],
    "durationS": 0.547,
    "filesize": 48322
  },
  {
    "filename": "00000029",
    "searchWords": [
      "Mob",
      "Base",
      "Recoil",
      "Reboot",
      "mb"
    ],
    "durationS": 0.983,
    "filesize": 86732
  },
  {
    "filename": "0000002a",
    "searchWords": [
      "Mob",
      "Base",
      "Singular",
      "Noise"
    ],
    "durationS": 0.836,
    "filesize": 73772
  },
  {
    "filename": "0000002b",
    "searchWords": [
      "Mob",
      "Base",
      "Singular",
      "Noise"
    ],
    "durationS": 1.094,
    "filesize": 96556
  },
  {
    "filename": "0000002c",
    "searchWords": [
      "Mob",
      "Base",
      "Hydralic",
      "Sounding"
    ],
    "durationS": 1.378,
    "filesize": 121592
  },
  {
    "filename": "0000002d",
    "searchWords": [
      "Mob",
      "Base",
      "Tank",
      "Tracks"
    ],
    "durationS": 2.046,
    "filesize": 180524
  },
  {
    "filename": "0000002e",
    "searchWords": [
      "Mob",
      "Base",
      "Tank",
      "Tracks",
      "Trangular",
      "MB"
    ],
    "durationS": 3.477,
    "filesize": 306732
  },
  {
    "filename": "0000002f",
    "searchWords": [
      "Mob",
      "Base",
      "Hiss",
      "then",
      "Hover"
    ],
    "durationS": 6.0,
    "filesize": 529244
  },
  {
    "filename": "00000030",
    "searchWords": [
      "Digital",
      "Bootup",
      "like",
      "NA",
      "mb"
    ],
    "durationS": 1.035,
    "filesize": 91340
  },
  {
    "filename": "00000031",
    "searchWords": [
      "Bassy",
      "Empty",
      "Sounding",
      "Initialize"
    ],
    "durationS": 1.616,
    "filesize": 142550
  },
  {
    "filename": "00000032",
    "searchWords": [
      "Heavy",
      "Weapon",
      "mb",
      "Impact"
    ],
    "durationS": 1.113,
    "filesize": 98220
  },
  {
    "filename": "00000033",
    "searchWords": [
      "Building",
      "Impact",
      "mb",
      "Rubble",
      "Walls"
    ],
    "durationS": 1.296,
    "filesize": 114362
  },
  {
    "filename": "00000034",
    "searchWords": [
      "Crumble",
      "Noise",
      "Rocky"
    ],
    "durationS": 1.307,
    "filesize": 115292
  },
  {
    "filename": "00000035",
    "searchWords": [
      "Heavy",
      "Foot"
    ],
    "durationS": 0.798,
    "filesize": 70456
  },
  {
    "filename": "00000036",
    "searchWords": [
      "Foot",
      "Water",
      "mb"
    ],
    "durationS": 1.337,
    "filesize": 117936
  },
  {
    "filename": "00000037",
    "searchWords": [
      "Heavy",
      "Foot",
      "Impact"
    ],
    "durationS": 0.798,
    "filesize": 70456
  },
  {
    "filename": "00000038",
    "searchWords": [
      "Light",
      "Impact",
      "Rubble"
    ],
    "durationS": 1.161,
    "filesize": 102444
  },
  {
    "filename": "00000039",
    "searchWords": [
      "Light",
      "Impact",
      "Rubble",
      "More",
      "Crumble"
    ],
    "durationS": 1.315,
    "filesize": 115990
  },
  {
    "filename": "0000003a",
    "searchWords": [
      "Heavy",
      "Round",
      "Hit",
      "Rubble",
      "MB"
    ],
    "durationS": 2.428,
    "filesize": 214182
  },
  {
    "filename": "0000003b",
    "searchWords": [
      "Heavy",
      "Round",
      "Hit",
      "Rubble",
      "MB"
    ],
    "durationS": 3.149,
    "filesize": 277768
  },
  {
    "filename": "0000003c",
    "searchWords": [
      "Light",
      "Round",
      "Impact",
      "Almost",
      "Small",
      "Building"
    ],
    "durationS": 1.687,
    "filesize": 148814
  },
  {
    "filename": "0000003d",
    "searchWords": [
      "Rubble",
      "Sound",
      "Steping",
      "On",
      "Mob",
      "Base"
    ],
    "durationS": 1.01,
    "filesize": 89158
  },
  {
    "filename": "0000003e",
    "searchWords": [
      "Impact",
      "Then",
      "Fire"
    ],
    "durationS": 4.406,
    "filesize": 388652
  },
  {
    "filename": "0000003f",
    "searchWords": [
      "Building",
      "Collapse",
      "Rubble",
      "Wall",
      "MB",
      "Small"
    ],
    "durationS": 1.321,
    "filesize": 116572
  },
  {
    "filename": "00000040",
    "searchWords": [
      "Building",
      "Collapse",
      "Thud",
      "Crumble"
    ],
    "durationS": 0.908,
    "filesize": 80172
  },
  {
    "filename": "00000041",
    "searchWords": [
      "Building",
      "Collapse",
      "Thud",
      "Crumble"
    ],
    "durationS": 1.176,
    "filesize": 103724
  },
  {
    "filename": "00000042",
    "searchWords": [
      "Building",
      "Collapse",
      "Thud",
      "Crumble"
    ],
    "durationS": 0.653,
    "filesize": 57646
  },
  {
    "filename": "00000043",
    "searchWords": [
      "Building",
      "Collapse",
      "Thud",
      "Short",
      "Crumble"
    ],
    "durationS": 0.742,
    "filesize": 65452
  },
  {
    "filename": "00000044",
    "searchWords": [
      "Quick",
      "Metal",
      "Impact",
      "Slight",
      "Crumble"
    ],
    "durationS": 0.47,
    "filesize": 41516
  },
  {
    "filename": "00000045",
    "searchWords": [
      "Dusty",
      "Thud",
      "Crumble"
    ],
    "durationS": 1.527,
    "filesize": 134700
  },
  {
    "filename": "00000046",
    "searchWords": [
      "Dusty",
      "Impact",
      "Long"
    ],
    "durationS": 2.428,
    "filesize": 214182
  },
  {
    "filename": "00000047",
    "searchWords": [
      "Heavy",
      "Dusty",
      "Impact",
      "Long"
    ],
    "durationS": 3.149,
    "filesize": 277768
  },
  {
    "filename": "00000048",
    "searchWords": [
      "Grenade",
      "mb",
      "Impact"
    ],
    "durationS": 1.687,
    "filesize": 148812
  },
  {
    "filename": "00000049",
    "searchWords": [
      "Mob",
      "Base",
      "mb",
      "Recoil",
      "Hollow",
      "Bassy"
    ],
    "durationS": 1.125,
    "filesize": 99276
  },
  {
    "filename": "0000004a",
    "searchWords": [
      "Impact",
      "Then",
      "Fire"
    ],
    "durationS": 4.406,
    "filesize": 388652
  },
  {
    "filename": "0000004b",
    "searchWords": [
      "Glass",
      "Rubble",
      "Sound",
      "Slight",
      "Smash"
    ],
    "durationS": 1.556,
    "filesize": 137260
  },
  {
    "filename": "0000004c",
    "searchWords": [
      "Glass",
      "Rubble",
      "Sound",
      "Slight",
      "Smash"
    ],
    "durationS": 1.132,
    "filesize": 99884
  },
  {
    "filename": "0000004d",
    "searchWords": [
      "Glass",
      "Rubble",
      "Sound",
      "Slight",
      "Smash"
    ],
    "durationS": 1.019,
    "filesize": 89884
  },
  {
    "filename": "0000004e",
    "searchWords": [
      "Rocky",
      "Smash"
    ],
    "durationS": 0.645,
    "filesize": 56896
  },
  {
    "filename": "0000004f",
    "searchWords": [
      "Rocky",
      "Smash",
      "Crumble"
    ],
    "durationS": 0.731,
    "filesize": 64512
  },
  {
    "filename": "00000050",
    "searchWords": [
      "High",
      "Pitch",
      "Impact",
      "Crumble"
    ],
    "durationS": 0.527,
    "filesize": 46540
  },
  {
    "filename": "00000051",
    "searchWords": [
      "Building",
      "Collapse",
      "Impact",
      "Crumble"
    ],
    "durationS": 1.315,
    "filesize": 115990
  },
  {
    "filename": "00000052",
    "searchWords": [
      "Heavy",
      "Impact",
      "Crumble"
    ],
    "durationS": 2.428,
    "filesize": 214178
  },
  {
    "filename": "00000053",
    "searchWords": [
      "Heavy",
      "Impact",
      "Crumble"
    ],
    "durationS": 3.149,
    "filesize": 277768
  },
  {
    "filename": "00000054",
    "searchWords": [
      "Heavy",
      "Impact",
      "Crumble"
    ],
    "durationS": 2.038,
    "filesize": 179776
  },
  {
    "filename": "00000055",
    "searchWords": [
      "Mob",
      "Base",
      "Step",
      "Crumble"
    ],
    "durationS": 1.01,
    "filesize": 89162
  },
  {
    "filename": "00000056",
    "searchWords": [
      "Heavy",
      "Impact",
      "Crumble",
      "Fire"
    ],
    "durationS": 4.406,
    "filesize": 388652
  },
  {
    "filename": "00000057",
    "searchWords": [
      "Impact",
      "Crumble"
    ],
    "durationS": 1.321,
    "filesize": 116572
  },
  {
    "filename": "00000058",
    "searchWords": [
      "Light",
      "Dusty",
      "Impact",
      "Crumble"
    ],
    "durationS": 0.967,
    "filesize": 85292
  },
  {
    "filename": "00000059",
    "searchWords": [
      "Light",
      "Dusty",
      "Impact",
      "Crumble"
    ],
    "durationS": 0.928,
    "filesize": 81876
  },
  {
    "filename": "0000005a",
    "searchWords": [
      "Rocky",
      "Smash",
      "Crumble"
    ],
    "durationS": 0.876,
    "filesize": 77312
  },
  {
    "filename": "0000005b",
    "searchWords": [
      "Soft",
      "Smash",
      "or",
      "Crumble"
    ],
    "durationS": 0.9,
    "filesize": 79424
  },
  {
    "filename": "0000005c",
    "searchWords": [
      "Rubbley",
      "Dirty",
      "Impact"
    ],
    "durationS": 1.113,
    "filesize": 98220
  },
  {
    "filename": "0000005d",
    "searchWords": [
      "Rubbley",
      "Thud"
    ],
    "durationS": 1.296,
    "filesize": 114362
  },
  {
    "filename": "0000005e",
    "searchWords": [
      "Rubbley",
      "Crumble"
    ],
    "durationS": 1.307,
    "filesize": 115292
  },
  {
    "filename": "0000005f",
    "searchWords": [
      "Mob",
      "Base",
      "Mechanical",
      "Clunk",
      "Softish",
      "or",
      "Impact"
    ],
    "durationS": 0.798,
    "filesize": 70456
  },
  {
    "filename": "00000060",
    "searchWords": [
      "Impact",
      "Water",
      "or",
      "Light",
      "Building"
    ],
    "durationS": 1.337,
    "filesize": 117936
  },
  {
    "filename": "00000061",
    "searchWords": [
      "Mob",
      "Base",
      "Heavy",
      "Foot"
    ],
    "durationS": 0.798,
    "filesize": 70456
  },
  {
    "filename": "00000062",
    "searchWords": [
      "Mob",
      "Base",
      "Wispey",
      "Rockettey"
    ],
    "durationS": 1.811,
    "filesize": 159772
  },
  {
    "filename": "00000063",
    "searchWords": [
      "Mob",
      "Base",
      "Rotorcraft"
    ],
    "durationS": 1.559,
    "filesize": 137508
  },
  {
    "filename": "00000064",
    "searchWords": [
      "Mob",
      "Base",
      "Wispey",
      "Rockettey"
    ],
    "durationS": 1.292,
    "filesize": 114042
  },
  {
    "filename": "00000065",
    "searchWords": [
      "Background",
      "Windy"
    ],
    "durationS": 9.288,
    "filesize": 1638444
  },
  {
    "filename": "00000066",
    "searchWords": [
      "Building",
      "Collapse",
      "Loud",
      "Wodden",
      "Crumble"
    ],
    "durationS": 4.65,
    "filesize": 410152
  },
  {
    "filename": "00000067",
    "searchWords": [
      "UI",
      "Map",
      "and",
      "Parts"
    ],
    "durationS": 0.156,
    "filesize": 13806
  },
  {
    "filename": "00000068",
    "searchWords": [
      "UI",
      "Map",
      "Zoom",
      "mb"
    ],
    "durationS": 0.053,
    "filesize": 4726
  },
  {
    "filename": "00000069",
    "searchWords": [
      "UI",
      "Weapon",
      "Set",
      "Change"
    ],
    "durationS": 0.46,
    "filesize": 40596
  },
  {
    "filename": "0000006a",
    "searchWords": [
      "Low",
      "Wirr"
    ],
    "durationS": 0.984,
    "filesize": 86828
  },
  {
    "filename": "0000006b",
    "searchWords": [
      "Three",
      "Low",
      "Siren",
      "Like",
      "Chirps"
    ],
    "durationS": 1.66,
    "filesize": 146438
  },
  {
    "filename": "0000006c",
    "searchWords": [
      "Strong",
      "Ringing",
      "Fades",
      "Out"
    ],
    "durationS": 3.35,
    "filesize": 295484
  },
  {
    "filename": "0000006d",
    "searchWords": [
      "NA",
      "Associated"
    ],
    "durationS": 0.208,
    "filesize": 18368
  },
  {
    "filename": "0000006e",
    "searchWords": [
      "UI",
      "Single",
      "Beep",
      "Keyboard",
      "UI"
    ],
    "durationS": 0.046,
    "filesize": 4142
  },
  {
    "filename": "0000006f",
    "searchWords": [
      "UI",
      "Garage",
      "Navigation",
      "Beep"
    ],
    "durationS": 0.072,
    "filesize": 6382
  },
  {
    "filename": "00000070",
    "searchWords": [
      "Single",
      "High",
      "Pitched",
      "Beep",
      "mb",
      "Missile",
      "Counter"
    ],
    "durationS": 0.046,
    "filesize": 4142
  },
  {
    "filename": "00000071",
    "searchWords": [
      "UI",
      "Garage",
      "Bassy",
      "Low",
      "Womp",
      "Thud"
    ],
    "durationS": 0.536,
    "filesize": 47306
  },
  {
    "filename": "00000072",
    "searchWords": [
      "Building",
      "Collapse",
      "Wood",
      "Crumble"
    ],
    "durationS": 4.135,
    "filesize": 364772
  },
  {
    "filename": "00000073",
    "searchWords": [
      "Building",
      "Collapse",
      "Impact",
      "Wood",
      "Crumble"
    ],
    "durationS": 1.083,
    "filesize": 95532
  },
  {
    "filename": "00000074",
    "searchWords": [
      "Building",
      "Collapse",
      "Large"
    ],
    "durationS": 6.095,
    "filesize": 537644
  },
  {
    "filename": "00000075",
    "searchWords": [
      "Building",
      "Collapse",
      "Large"
    ],
    "durationS": 6.618,
    "filesize": 583724
  },
  {
    "filename": "00000076",
    "searchWords": [
      "Building",
      "Collapse",
      "Large"
    ],
    "durationS": 6.449,
    "filesize": 568876
  },
  {
    "filename": "00000077",
    "searchWords": [
      "Building",
      "Collapse",
      "Medium",
      "Dusty"
    ],
    "durationS": 2.321,
    "filesize": 204780
  },
  {
    "filename": "00000078",
    "searchWords": [
      "Crumble",
      "Fence",
      "etc",
      "Wall"
    ],
    "durationS": 1.944,
    "filesize": 171548
  },
  {
    "filename": "00000079",
    "searchWords": [
      "Wooden",
      "Impact",
      "mb"
    ],
    "durationS": 2.313,
    "filesize": 204076
  },
  {
    "filename": "0000007a",
    "searchWords": [
      "Building",
      "Collapse",
      "Long",
      "And",
      "Loud"
    ],
    "durationS": 7.225,
    "filesize": 637266
  },
  {
    "filename": "0000007b",
    "searchWords": [
      "Building",
      "Collapse",
      "Long",
      "And",
      "Loud"
    ],
    "durationS": 6.211,
    "filesize": 547884
  },
  {
    "filename": "0000007c",
    "searchWords": [
      "Tree",
      "Fell",
      "or",
      "Push",
      "out",
      "of",
      "Way"
    ],
    "durationS": 4.623,
    "filesize": 407798
  },
  {
    "filename": "0000007d",
    "searchWords": [
      "Glass",
      "Shattering"
    ],
    "durationS": 2.63,
    "filesize": 232036
  },
  {
    "filename": "0000007e",
    "searchWords": [
      "Rubble",
      "or",
      "Wood",
      "Smashing",
      "Crunching"
    ],
    "durationS": 1.347,
    "filesize": 118836
  },
  {
    "filename": "0000007f",
    "searchWords": [
      "Building",
      "Collapse"
    ],
    "durationS": 3.937,
    "filesize": 347308
  },
  {
    "filename": "00000080",
    "searchWords": [
      "Wooden",
      "Snapping",
      "Breaking"
    ],
    "durationS": 1.068,
    "filesize": 94252
  },
  {
    "filename": "00000081",
    "searchWords": [
      "Building",
      "Collapse",
      "Large"
    ],
    "durationS": 7.262,
    "filesize": 640588
  },
  {
    "filename": "00000082",
    "searchWords": [
      "Single",
      "Puff"
    ],
    "durationS": 0.932,
    "filesize": 82220
  },
  {
    "filename": "00000083",
    "searchWords": [
      "Crumble",
      "Glass"
    ],
    "durationS": 4.249,
    "filesize": 374828
  },
  {
    "filename": "00000084",
    "searchWords": [
      "Crumble",
      "Glass",
      "Loud"
    ],
    "durationS": 3.066,
    "filesize": 270434
  },
  {
    "filename": "00000085",
    "searchWords": [
      "Crumble",
      "Glass",
      "Loud"
    ],
    "durationS": 6.017,
    "filesize": 530732
  },
  {
    "filename": "00000086",
    "searchWords": [
      "Crumble",
      "Glass",
      "Loud"
    ],
    "durationS": 6.339,
    "filesize": 559148
  },
  {
    "filename": "00000087",
    "searchWords": [
      "Rubble",
      "Crumble",
      "Glass",
      "Loud",
      "Long"
    ],
    "durationS": 7.449,
    "filesize": 657004
  },
  {
    "filename": "00000088",
    "searchWords": [
      "Loug",
      "Crumble",
      "Then",
      "Quiet",
      "Falloff"
    ],
    "durationS": 6.264,
    "filesize": 552556
  },
  {
    "filename": "00000089",
    "searchWords": [
      "Wooden",
      "Impact",
      "Clatter"
    ],
    "durationS": 2.166,
    "filesize": 191116
  },
  {
    "filename": "0000008a",
    "searchWords": [
      "Rubble",
      "or",
      "Wood",
      "Smashing",
      "Crunching"
    ],
    "durationS": 3.071,
    "filesize": 270892
  },
  {
    "filename": "0000008b",
    "searchWords": [
      "Light",
      "Impact",
      "or",
      "Cannon",
      "like"
    ],
    "durationS": 1.693,
    "filesize": 149398
  },
  {
    "filename": "0000008c",
    "searchWords": [
      "Building",
      "Collapse",
      "Long",
      "And",
      "Loud"
    ],
    "durationS": 6.385,
    "filesize": 563242
  },
  {
    "filename": "0000008d",
    "searchWords": [
      "Building",
      "Collapse",
      "Distant",
      "ish"
    ],
    "durationS": 5.515,
    "filesize": 486444
  },
  {
    "filename": "0000008e",
    "searchWords": [
      "Background",
      "Rain"
    ],
    "durationS": 2.898,
    "filesize": 511324
  },
  {
    "filename": "0000008f",
    "searchWords": [
      "Background",
      "Wind",
      "Omnomious"
    ],
    "durationS": 7.391,
    "filesize": 1303768
  },
  {
    "filename": "00000090",
    "searchWords": [
      "Background",
      "Crickets"
    ],
    "durationS": 11.819,
    "filesize": 2084908
  },
  {
    "filename": "00000091",
    "searchWords": [
      "Main",
      "Menu",
      "Hit",
      "Start",
      "Background",
      "Defeat",
      "Game"
    ],
    "durationS": 5.05,
    "filesize": 890924
  },
  {
    "filename": "00000092",
    "searchWords": [
      "UI",
      "Menu",
      "Nav",
      "or",
      "Rewards"
    ],
    "durationS": 0.118,
    "filesize": 10416
  },
  {
    "filename": "00000093",
    "searchWords": [
      "UI",
      "Garage",
      "Apply",
      "Part"
    ],
    "durationS": 2.09,
    "filesize": 368684
  },
  {
    "filename": "00000094",
    "searchWords": [
      "UI",
      "Activation",
      "Sensor",
      "etc",
      "mb"
    ],
    "durationS": 0.658,
    "filesize": 58056
  },
  {
    "filename": "00000095",
    "searchWords": [
      "Background",
      "UI",
      "Turn",
      "Around"
    ],
    "durationS": 0.416,
    "filesize": 36722
  },
  {
    "filename": "00000096",
    "searchWords": [
      "Background",
      "Running",
      "Water"
    ],
    "durationS": 2.064,
    "filesize": 364152
  },
  {
    "filename": "00000097",
    "searchWords": [
      "Light",
      "Thud",
      "Slight",
      "Crumble"
    ],
    "durationS": 1.82,
    "filesize": 160556
  },
  {
    "filename": "00000098",
    "searchWords": [
      "Crumble",
      "Wood",
      "Light"
    ],
    "durationS": 2.443,
    "filesize": 215520
  },
  {
    "filename": "00000099",
    "searchWords": [
      "Crumble",
      "Wood",
      "Light"
    ],
    "durationS": 2.169,
    "filesize": 191316
  },
  {
    "filename": "0000009a",
    "searchWords": [
      "Single",
      "Pop",
      "Thud",
      "with",
      "Reverb"
    ],
    "durationS": 2.647,
    "filesize": 233516
  },
  {
    "filename": "0000009b",
    "searchWords": [
      "Dusty",
      "Drum",
      "Hit"
    ],
    "durationS": 2.235,
    "filesize": 197184
  },
  {
    "filename": "0000009c",
    "searchWords": [
      "Single",
      "Pop",
      "Thud",
      "with",
      "Reverb"
    ],
    "durationS": 2.02,
    "filesize": 178220
  },
  {
    "filename": "0000009d",
    "searchWords": [
      "Single",
      "Pop",
      "Thud",
      "with",
      "Reverb",
      "Dusty"
    ],
    "durationS": 2.357,
    "filesize": 207916
  },
  {
    "filename": "0000009e",
    "searchWords": [
      "Single",
      "Pop",
      "Thud",
      "with",
      "Reverb"
    ],
    "durationS": 1.98,
    "filesize": 174636
  },
  {
    "filename": "0000009f",
    "searchWords": [
      "UI",
      "MB",
      "Live",
      "Connection"
    ],
    "durationS": 0.369,
    "filesize": 32606
  },
  {
    "filename": "000000a0",
    "searchWords": [
      "Angry",
      "Buzz",
      "or",
      "Lazer"
    ],
    "durationS": 1.001,
    "filesize": 88372
  },
  {
    "filename": "000000a1",
    "searchWords": [
      "Part",
      "Loss"
    ],
    "durationS": 0.76,
    "filesize": 67116
  },
  {
    "filename": "000000a2",
    "searchWords": [
      "UI",
      "Comms",
      "Menu"
    ],
    "durationS": 0.22,
    "filesize": 19444
  },
  {
    "filename": "000000a3",
    "searchWords": [
      "Cannon"
    ],
    "durationS": 3.663,
    "filesize": 323088
  },
  {
    "filename": "000000a4",
    "searchWords": [
      "Building",
      "Collapse"
    ],
    "durationS": 1.468,
    "filesize": 129558
  },
  {
    "filename": "000000a5",
    "searchWords": [
      "Building",
      "Collapse",
      "or",
      "Pile"
    ],
    "durationS": 1.535,
    "filesize": 135438
  },
  {
    "filename": "000000a6",
    "searchWords": [
      "Building",
      "Collapse",
      "Explosion",
      "Like"
    ],
    "durationS": 3.808,
    "filesize": 335916
  },
  {
    "filename": "000000a7",
    "searchWords": [
      "Building",
      "Collapse"
    ],
    "durationS": 2.621,
    "filesize": 231200
  },
  {
    "filename": "000000a8",
    "searchWords": [
      "Heavy",
      "Cannon",
      "with",
      "Eject"
    ],
    "durationS": 2.814,
    "filesize": 248236
  },
  {
    "filename": "000000a9",
    "searchWords": [
      "Metalic",
      "Maybe",
      "Cutscene"
    ],
    "durationS": 2.501,
    "filesize": 220628
  },
  {
    "filename": "000000aa",
    "searchWords": [
      "AR",
      "Hanger",
      "Single",
      "Shot"
    ],
    "durationS": 1.023,
    "filesize": 90244
  },
  {
    "filename": "000000ab",
    "searchWords": [
      "Heavy",
      "Cannon",
      "or",
      "Lightning"
    ],
    "durationS": 2.881,
    "filesize": 254140
  },
  {
    "filename": "000000ac",
    "searchWords": [
      "Cannon"
    ],
    "durationS": 2.618,
    "filesize": 230940
  },
  {
    "filename": "000000ad",
    "searchWords": [
      "GL"
    ],
    "durationS": 0.764,
    "filesize": 67462
  },
  {
    "filename": "000000ae",
    "searchWords": [
      "Sniper",
      "Cannon"
    ],
    "durationS": 3.57,
    "filesize": 314924
  },
  {
    "filename": "000000af",
    "searchWords": [
      "GL"
    ],
    "durationS": 1.263,
    "filesize": 111404
  },
  {
    "filename": "000000b0",
    "searchWords": [
      "Cannon"
    ],
    "durationS": 4.0,
    "filesize": 352812
  },
  {
    "filename": "000000b1",
    "searchWords": [
      "Shotgun",
      "mb"
    ],
    "durationS": 2.014,
    "filesize": 177708
  },
  {
    "filename": "000000b2",
    "searchWords": [
      "Mortar"
    ],
    "durationS": 0.993,
    "filesize": 87596
  },
  {
    "filename": "000000b3",
    "searchWords": [
      "Mob",
      "Base",
      "Tracks",
      "MB",
      "or",
      "Genny"
    ],
    "durationS": 1.109,
    "filesize": 97836
  },
  {
    "filename": "000000b4",
    "searchWords": [
      "Mob",
      "Base",
      "Tracks"
    ],
    "durationS": 3.773,
    "filesize": 332844
  },
  {
    "filename": "000000b5",
    "searchWords": [
      "Mob",
      "Base",
      "Idle",
      "Or",
      "Genny",
      "Humm"
    ],
    "durationS": 2.792,
    "filesize": 246316
  },
  {
    "filename": "000000b6",
    "searchWords": [
      "Mob",
      "Base",
      "Hover",
      "Craft"
    ],
    "durationS": 3.019,
    "filesize": 266284
  },
  {
    "filename": "000000b7",
    "searchWords": [
      "Mob",
      "Base",
      "Hover",
      "Craft"
    ],
    "durationS": 2.438,
    "filesize": 215084
  },
  {
    "filename": "000000b8",
    "searchWords": [
      "Background",
      "Crickets"
    ],
    "durationS": 1.001,
    "filesize": 176628
  },
  {
    "filename": "000000b9",
    "searchWords": [
      "Background",
      "Rain"
    ],
    "durationS": 11.119,
    "filesize": 1961452
  },
  {
    "filename": "000000ba",
    "searchWords": [
      "Background",
      "Rain",
      "And",
      "Thunder"
    ],
    "durationS": 13.933,
    "filesize": 2457756
  },
  {
    "filename": "000000bb",
    "searchWords": [
      "Background",
      "Rain",
      "Lots"
    ],
    "durationS": 1.875,
    "filesize": 330732
  },
  {
    "filename": "000000bc",
    "searchWords": [
      "Background",
      "Wind",
      "Birds",
      "Water",
      "MB"
    ],
    "durationS": 8.02,
    "filesize": 1414700
  },
  {
    "filename": "000000bd",
    "searchWords": [
      "Background",
      "Sand",
      "MB",
      "or",
      "City"
    ],
    "durationS": 5.859,
    "filesize": 1033516
  },
  {
    "filename": "000000be",
    "searchWords": [
      "Background",
      "Lots",
      "Of",
      "Nature"
    ],
    "durationS": 6.236,
    "filesize": 1100140
  },
  {
    "filename": "000000bf",
    "searchWords": [
      "Background",
      "Birds"
    ],
    "durationS": 4.976,
    "filesize": 877800
  },
  {
    "filename": "000000c0",
    "searchWords": [
      "Background",
      "Ocean"
    ],
    "durationS": 4.594,
    "filesize": 810380
  },
  {
    "filename": "000000c1",
    "searchWords": [
      "Background",
      "Animals"
    ],
    "durationS": 5.55,
    "filesize": 978988
  },
  {
    "filename": "000000c2",
    "searchWords": [
      "Background",
      "Bird",
      "Chirps"
    ],
    "durationS": 8.502,
    "filesize": 1499788
  },
  {
    "filename": "000000c3",
    "searchWords": [
      "Background",
      "Windy",
      "Hills",
      "MB"
    ],
    "durationS": 2.305,
    "filesize": 406700
  },
  {
    "filename": "000000c4",
    "searchWords": [
      "Background",
      "Waves"
    ],
    "durationS": 10.551,
    "filesize": 1861164
  },
  {
    "filename": "000000c5",
    "searchWords": [
      "Background",
      "Dock",
      "Harbor",
      "Bird"
    ],
    "durationS": 16.161,
    "filesize": 2850860
  },
  {
    "filename": "000000c6",
    "searchWords": [
      "UI",
      "Garage",
      "Navigation",
      "Selection"
    ],
    "durationS": 1.051,
    "filesize": 92716
  },
  {
    "filename": "000000c7",
    "searchWords": [
      "Background",
      "Bird",
      "Chirps",
      "Stero"
    ],
    "durationS": 4.087,
    "filesize": 720940
  },
  {
    "filename": "000000c8",
    "searchWords": [
      "Background",
      "Birds",
      "Stero"
    ],
    "durationS": 5.283,
    "filesize": 931884
  },
  {
    "filename": "000000c9",
    "searchWords": [
      "Building",
      "Sound",
      "Alarm"
    ],
    "durationS": 1.614,
    "filesize": 284748
  },
  {
    "filename": "000000ca",
    "searchWords": [
      "Rain"
    ],
    "durationS": 3.997,
    "filesize": 705068
  },
  {
    "filename": "000000cb",
    "searchWords": [
      "Birds"
    ],
    "durationS": 6.594,
    "filesize": 1163308
  },
  {
    "filename": "000000cc",
    "searchWords": [
      "Birds"
    ],
    "durationS": 7.351,
    "filesize": 1296736
  },
  {
    "filename": "000000cd",
    "searchWords": [
      "Birds",
      "Flapping"
    ],
    "durationS": 2.148,
    "filesize": 378924
  },
  {
    "filename": "000000ce",
    "searchWords": [
      "Klink"
    ],
    "durationS": 0.639,
    "filesize": 56396
  },
  {
    "filename": "000000cf",
    "searchWords": [
      "MG"
    ],
    "durationS": 0.07,
    "filesize": 6228
  },
  {
    "filename": "000000d0",
    "searchWords": [
      "NA",
      "Mob",
      "B",
      "Wirr"
    ],
    "durationS": 1.342,
    "filesize": 118404
  },
  {
    "filename": "000000d1",
    "searchWords": [
      "Mob",
      "Base",
      "Hover"
    ],
    "durationS": 3.245,
    "filesize": 286252
  },
  {
    "filename": "000000d2",
    "searchWords": [
      "Plasticaly",
      "Clunk"
    ],
    "durationS": 0.506,
    "filesize": 44716
  },
  {
    "filename": "000000d3",
    "searchWords": [
      "Round",
      "Eject",
      "or",
      "Pile",
      "or",
      "Heavy",
      "Gun"
    ],
    "durationS": 1.458,
    "filesize": 128632
  },
  {
    "filename": "000000d4",
    "searchWords": [
      "Mine",
      "Bomb",
      "Deploy",
      "MB"
    ],
    "durationS": 1.612,
    "filesize": 142188
  },
  {
    "filename": "000000d5",
    "searchWords": [
      "Bassy",
      "Mine",
      "Bomb",
      "Mechanical",
      "MB"
    ],
    "durationS": 2.156,
    "filesize": 190196
  },
  {
    "filename": "000000d6",
    "searchWords": [
      "Gun",
      "Fire",
      "MB",
      "Hitting",
      "Ground"
    ],
    "durationS": 0.633,
    "filesize": 55916
  },
  {
    "filename": "000000d7",
    "searchWords": [
      "Heavy",
      "Gun",
      "Metalic",
      "Sound",
      "Round",
      "Eject",
      "MB"
    ],
    "durationS": 1.268,
    "filesize": 111916
  },
  {
    "filename": "000000d8",
    "searchWords": [
      "Cannon",
      "But",
      "Light"
    ],
    "durationS": 1.276,
    "filesize": 112556
  },
  {
    "filename": "000000d9",
    "searchWords": [
      "Round",
      "Eject"
    ],
    "durationS": 1.946,
    "filesize": 171682
  },
  {
    "filename": "000000da",
    "searchWords": [
      "Gun",
      "Fire",
      "MB",
      "Hitting",
      "Ground",
      "Stylads",
      "MB"
    ],
    "durationS": 0.891,
    "filesize": 78624
  },
  {
    "filename": "000000db",
    "searchWords": [
      "Klink"
    ],
    "durationS": 1.226,
    "filesize": 108170
  },
  {
    "filename": "000000dc",
    "searchWords": [
      "Bassy",
      "Thud",
      "Or",
      "Fire",
      "MB",
      "Shotty",
      "Impact"
    ],
    "durationS": 0.919,
    "filesize": 81068
  },
  {
    "filename": "000000dd",
    "searchWords": [
      "Heavy",
      "Round",
      "or",
      "Hound",
      "Destruction"
    ],
    "durationS": 5.586,
    "filesize": 985484
  },
  {
    "filename": "000000de",
    "searchWords": [
      "Bassy",
      "Mine",
      "Bomb",
      "Mechanical",
      "MB",
      "or",
      "Mob",
      "Base"
    ],
    "durationS": 0.744,
    "filesize": 65652
  },
  {
    "filename": "000000df",
    "searchWords": [
      "Water",
      "Flowing"
    ],
    "durationS": 4.036,
    "filesize": 356000
  },
  {
    "filename": "000000e0",
    "searchWords": [
      "Wheels",
      "Turning",
      "MB"
    ],
    "durationS": 0.907,
    "filesize": 80064
  },
  {
    "filename": "000000e1",
    "searchWords": [
      "Clunk",
      "and",
      "Digital",
      "Noise"
    ],
    "durationS": 1.425,
    "filesize": 125740
  },
  {
    "filename": "000000e2",
    "searchWords": [
      "High",
      "Pitched",
      "Single",
      "Chime"
    ],
    "durationS": 0.037,
    "filesize": 3338
  },
  {
    "filename": "000000e3",
    "searchWords": [
      "Low",
      "Windy",
      "Rumble",
      "Idle",
      "Something",
      "MB"
    ],
    "durationS": 5.201,
    "filesize": 458796
  },
  {
    "filename": "000000e4",
    "searchWords": [
      "Rain",
      "Swampy",
      "Or",
      "Something"
    ],
    "durationS": 3.32,
    "filesize": 585772
  },
  {
    "filename": "000000e5",
    "searchWords": [
      "Genny",
      "or",
      "NA"
    ],
    "durationS": 1.757,
    "filesize": 155020
  },
  {
    "filename": "000000e6",
    "searchWords": [
      "Morar",
      "Flare"
    ],
    "durationS": 1.295,
    "filesize": 114220
  },
  {
    "filename": "000000e7",
    "searchWords": [
      "Single",
      "Chime",
      "Almost",
      "Interrupt",
      "This",
      "Broadcast"
    ],
    "durationS": 0.188,
    "filesize": 16652
  },
  {
    "filename": "000000e8",
    "searchWords": [
      "Lighter",
      "Round",
      "or",
      "Mob",
      "Base",
      "Setteling"
    ],
    "durationS": 1.419,
    "filesize": 125212
  },
  {
    "filename": "000000e9",
    "searchWords": [
      "Thuddy",
      "Mine",
      "Bomb",
      "Mechanical",
      "MB"
    ],
    "durationS": 0.682,
    "filesize": 60174
  },
  {
    "filename": "000000ea",
    "searchWords": [
      "Round",
      "Hitting",
      "Water"
    ],
    "durationS": 0.36,
    "filesize": 31788
  },
  {
    "filename": "000000eb",
    "searchWords": [
      "Round",
      "Hitting",
      "Tree",
      "MB",
      "Soft"
    ],
    "durationS": 0.418,
    "filesize": 36908
  },
  {
    "filename": "000000ec",
    "searchWords": [
      "Very",
      "Light",
      "Quiet",
      "Pop",
      "Human",
      "GM"
    ],
    "durationS": 0.337,
    "filesize": 29740
  },
  {
    "filename": "000000ed",
    "searchWords": [
      "Something",
      "Hitting",
      "Water"
    ],
    "durationS": 0.586,
    "filesize": 51756
  },
  {
    "filename": "000000ee",
    "searchWords": [
      "Round",
      "Hitting",
      "Tree",
      "MB",
      "Soft"
    ],
    "durationS": 0.406,
    "filesize": 35884
  },
  {
    "filename": "000000ef",
    "searchWords": [
      "Hearing",
      "Underwater"
    ],
    "durationS": 3.077,
    "filesize": 271422
  },
  {
    "filename": "000000f0",
    "searchWords": [
      "Helicopter"
    ],
    "durationS": 0.428,
    "filesize": 37828
  },
  {
    "filename": "000000f1",
    "searchWords": [
      "Very",
      "Mechanical",
      "Almost",
      "Reload"
    ],
    "durationS": 0.946,
    "filesize": 83494
  },
  {
    "filename": "000000f2",
    "searchWords": [
      "Mob",
      "Base",
      "Leg",
      "or",
      "Bassy",
      "Something"
    ],
    "durationS": 0.812,
    "filesize": 71674
  },
  {
    "filename": "000000f3",
    "searchWords": [
      "Windy",
      "Wind",
      "Up",
      "Air",
      "Intake",
      "MB"
    ],
    "durationS": 1.041,
    "filesize": 91822
  },
  {
    "filename": "000000f4",
    "searchWords": [
      "Chime",
      "Gets",
      "Pitchy",
      "Enter",
      "Warp"
    ],
    "durationS": 1.869,
    "filesize": 164908
  },
  {
    "filename": "000000f5",
    "searchWords": [
      "Windy",
      "Like",
      "Wind",
      "Up",
      "Engine",
      "Warp"
    ],
    "durationS": 3.907,
    "filesize": 344620
  },
  {
    "filename": "000000f6",
    "searchWords": [
      "Mob",
      "Base",
      "Wirr",
      "Up",
      "Quads",
      "MB"
    ],
    "durationS": 1.108,
    "filesize": 97794
  },
  {
    "filename": "000000f7",
    "searchWords": [
      "Thud",
      "And",
      "Wind",
      "Back",
      "MB",
      "Sal",
      "Kar",
      "Leg",
      "Stomp"
    ],
    "durationS": 1.654,
    "filesize": 145908
  },
  {
    "filename": "000000f8",
    "searchWords": [
      "Almost",
      "Industrial",
      "Thudish",
      "and",
      "Windup"
    ],
    "durationS": 1.875,
    "filesize": 165422
  },
  {
    "filename": "000000f9",
    "searchWords": [
      "Light",
      "Mechanical",
      "Activate",
      "and",
      "Wind",
      "Back",
      "with",
      "Woosh"
    ],
    "durationS": 1.298,
    "filesize": 114496
  },
  {
    "filename": "000000fa",
    "searchWords": [
      "Mob",
      "Base",
      "Almost",
      "Recoilling"
    ],
    "durationS": 1.419,
    "filesize": 125212
  },
  {
    "filename": "000000fb",
    "searchWords": [
      "Long",
      "Mechanical",
      "Sound",
      "Almost",
      "Light",
      "Mob",
      "Base",
      "Walking",
      "Quad",
      "MB"
    ],
    "durationS": 1.814,
    "filesize": 160044
  },
  {
    "filename": "000000fc",
    "searchWords": [
      "Mob",
      "Base",
      "Large",
      "Ish",
      "Setteling"
    ],
    "durationS": 1.917,
    "filesize": 169090
  },
  {
    "filename": "000000fd",
    "searchWords": [
      "General",
      "Squad",
      "Gunfire",
      "Recording"
    ],
    "durationS": 12.26,
    "filesize": 2162732
  },
  {
    "filename": "000000fe",
    "searchWords": [
      "Mission",
      "Complete",
      "Beats"
    ],
    "durationS": 3.071,
    "filesize": 541740
  },
  {
    "filename": "000000ff",
    "searchWords": [
      "Fire"
    ],
    "durationS": 6.014,
    "filesize": 530476
  },
  {
    "filename": "00000100",
    "searchWords": [
      "UI",
      "Zwip",
      "Comms",
      "Confirmation"
    ],
    "durationS": 0.536,
    "filesize": 47306
  },
  {
    "filename": "00000101",
    "searchWords": [
      "UI",
      "Rewards",
      "Accept"
    ],
    "durationS": 0.508,
    "filesize": 44844
  },
  {
    "filename": "00000102",
    "searchWords": [
      "Mob",
      "Base",
      "mb",
      "Mechanical",
      "Active"
    ],
    "durationS": 4.071,
    "filesize": 359084
  },
  {
    "filename": "00000103",
    "searchWords": [
      "Bassy",
      "Impact",
      "Falloff"
    ],
    "durationS": 1.3,
    "filesize": 114732
  },
  {
    "filename": "00000104",
    "searchWords": [
      "Super",
      "Weapon",
      "Load",
      "and",
      "Churn"
    ],
    "durationS": 2.324,
    "filesize": 204984
  },
  {
    "filename": "00000105",
    "searchWords": [
      "Bassy",
      "Foot",
      "mb",
      "Super",
      "Weapon"
    ],
    "durationS": 1.65,
    "filesize": 145572
  },
  {
    "filename": "00000106",
    "searchWords": [
      "Super",
      "Weapon",
      "TAK",
      "Treads"
    ],
    "durationS": 4.07,
    "filesize": 359022
  },
  {
    "filename": "00000107",
    "searchWords": [
      "Splintery",
      "Clatter",
      "Crumble",
      "Quiet"
    ],
    "durationS": 1.687,
    "filesize": 148810
  },
  {
    "filename": "00000108",
    "searchWords": [
      "Foot",
      "Mechanical",
      "Close"
    ],
    "durationS": 1.219,
    "filesize": 107586
  },
  {
    "filename": "00000109",
    "searchWords": [
      "Super",
      "Weapon",
      "Activation",
      "TAK",
      "Door",
      "mb"
    ],
    "durationS": 4.089,
    "filesize": 360728
  },
  {
    "filename": "0000010a",
    "searchWords": [
      "Mob",
      "Base",
      "Mechanical",
      "Hydralic",
      "Activation"
    ],
    "durationS": 2.057,
    "filesize": 181490
  },
  {
    "filename": "0000010b",
    "searchWords": [
      "Super",
      "Weapon",
      "Activation",
      "Barrel",
      "Missiles",
      "Doors",
      "etc"
    ],
    "durationS": 4.656,
    "filesize": 410668
  },
  {
    "filename": "0000010c",
    "searchWords": [
      "Set",
      "of",
      "Rasps",
      "against",
      "Material"
    ],
    "durationS": 0.232,
    "filesize": 20492
  },
  {
    "filename": "0000010d",
    "searchWords": [
      "Single",
      "Rasp",
      "against",
      "Material",
      "Light"
    ],
    "durationS": 0.417,
    "filesize": 36856
  },
  {
    "filename": "0000010e",
    "searchWords": [
      "Single",
      "Rasp",
      "against",
      "Rapt"
    ],
    "durationS": 0.43,
    "filesize": 37932
  },
  {
    "filename": "0000010f",
    "searchWords": [
      "Mechanical",
      "Slide",
      "or",
      "Zip"
    ],
    "durationS": 0.3,
    "filesize": 26504
  },
  {
    "filename": "00000110",
    "searchWords": [
      "UI",
      "Nav"
    ],
    "durationS": 0.427,
    "filesize": 37724
  },
  {
    "filename": "00000111",
    "searchWords": [
      "Rapid",
      "5",
      "Beep",
      "Long",
      "Silence",
      "End"
    ],
    "durationS": 1.008,
    "filesize": 88984
  },
  {
    "filename": "00000112",
    "searchWords": [
      "Quiet",
      "Impact",
      "Explosion",
      "Falloff"
    ],
    "durationS": 4.899,
    "filesize": 432172
  },
  {
    "filename": "00000113",
    "searchWords": [
      "Fanfare",
      "Do",
      "Do",
      "Magical"
    ],
    "durationS": 2.99,
    "filesize": 263724
  },
  {
    "filename": "00000114",
    "searchWords": [
      "Quick",
      "Beep",
      "Magical"
    ],
    "durationS": 1.079,
    "filesize": 95180
  },
  {
    "filename": "00000115",
    "searchWords": [
      "UI",
      "Nav"
    ],
    "durationS": 0.29,
    "filesize": 25590
  },
  {
    "filename": "00000116",
    "searchWords": [
      "Fanfare",
      "Do",
      "Do",
      "Magical"
    ],
    "durationS": 2.99,
    "filesize": 263724
  },
  {
    "filename": "00000117",
    "searchWords": [
      "UI",
      "Super",
      "Short",
      "Chirp",
      "Mechanical"
    ],
    "durationS": 0.045,
    "filesize": 3972
  },
  {
    "filename": "00000118",
    "searchWords": [
      "High",
      "Pitched",
      "Clink",
      "Falloff"
    ],
    "durationS": 1.283,
    "filesize": 113196
  },
  {
    "filename": "00000119",
    "searchWords": [
      "Dusty",
      "Dur",
      "Dum",
      "Tish",
      "Fanfare"
    ],
    "durationS": 2.448,
    "filesize": 215960
  },
  {
    "filename": "0000011a",
    "searchWords": [
      "Drum",
      "Tish"
    ],
    "durationS": 2.961,
    "filesize": 261164
  },
  {
    "filename": "0000011b",
    "searchWords": [
      "UI",
      "Menu",
      "Navigation",
      "or",
      "Choices",
      "Leaders"
    ],
    "durationS": 0.361,
    "filesize": 31898
  },
  {
    "filename": "0000011c",
    "searchWords": [
      "Beeps",
      "then",
      "Hydraulic"
    ],
    "durationS": 2.075,
    "filesize": 183084
  },
  {
    "filename": "0000011d",
    "searchWords": [
      "UI",
      "Change",
      "Weapon",
      "Set",
      "MB"
    ],
    "durationS": 0.156,
    "filesize": 13806
  },
  {
    "filename": "0000011e",
    "searchWords": [
      "UI",
      "Change",
      "Weapon",
      "Set",
      "MB"
    ],
    "durationS": 0.053,
    "filesize": 4726
  },
  {
    "filename": "0000011f",
    "searchWords": [
      "Angelic",
      "Chime"
    ],
    "durationS": 3.08,
    "filesize": 543392
  },
  {
    "filename": "00000120",
    "searchWords": [
      "Dusty",
      "Impact"
    ],
    "durationS": 1.687,
    "filesize": 148812
  },
  {
    "filename": "00000121",
    "searchWords": [
      "Super",
      "Weapon",
      "Supports",
      "Door",
      "Unlock",
      "Any",
      "Of",
      "Them"
    ],
    "durationS": 3.448,
    "filesize": 304172
  },
  {
    "filename": "00000122",
    "searchWords": [
      "Mechanical",
      "Windy",
      "Wirr",
      "Higher",
      "Pitched"
    ],
    "durationS": 2.407,
    "filesize": 212332
  },
  {
    "filename": "00000123",
    "searchWords": [
      "Mechanical",
      "Windy",
      "Wirr"
    ],
    "durationS": 3.077,
    "filesize": 271404
  },
  {
    "filename": "00000124",
    "searchWords": [
      "Engine",
      "Clatter",
      "Then",
      "Activation",
      "Cuts",
      "Off",
      "Fade"
    ],
    "durationS": 1.953,
    "filesize": 172268
  },
  {
    "filename": "00000125",
    "searchWords": [
      "Dusty",
      "Mechanical",
      "Clatter",
      "Stop"
    ],
    "durationS": 1.634,
    "filesize": 144172
  },
  {
    "filename": "00000126",
    "searchWords": [
      "Tractor",
      "Sounding",
      "Genny",
      "mb"
    ],
    "durationS": 1.953,
    "filesize": 172268
  },
  {
    "filename": "00000127",
    "searchWords": [
      "Mob",
      "Base",
      "Legs",
      "Articulation"
    ],
    "durationS": 1.177,
    "filesize": 103884
  },
  {
    "filename": "00000128",
    "searchWords": [
      "Heavy",
      "Shot",
      "Fire"
    ],
    "durationS": 4.429,
    "filesize": 390700
  },
  {
    "filename": "00000129",
    "searchWords": [
      "Fire",
      "Fade",
      "Second",
      "Noise",
      "More",
      "Fade"
    ],
    "durationS": 7.454,
    "filesize": 657452
  },
  {
    "filename": "0000012a",
    "searchWords": [
      "Building",
      "Collapse",
      "long",
      "Reverb",
      "or",
      "Explosion"
    ],
    "durationS": 7.454,
    "filesize": 657452
  },
  {
    "filename": "0000012b",
    "searchWords": [
      "Low",
      "Rotor",
      "like",
      "Humm"
    ],
    "durationS": 1.252,
    "filesize": 110444
  },
  {
    "filename": "0000012c",
    "searchWords": [
      "Mob",
      "Base",
      "Hover",
      "Starting",
      "Up"
    ],
    "durationS": 2.851,
    "filesize": 251514
  },
  {
    "filename": "0000012d",
    "searchWords": [
      "Human",
      "Rifle",
      "Pop",
      "or",
      "Impact"
    ],
    "durationS": 0.337,
    "filesize": 29740
  },
  {
    "filename": "0000012e",
    "searchWords": [
      "Mob",
      "Base",
      "Treads",
      "or",
      "Genny"
    ],
    "durationS": 2.397,
    "filesize": 211448
  },
  {
    "filename": "0000012f",
    "searchWords": [
      "Mob",
      "Base",
      "MB",
      "Dusty",
      "Mechanical",
      "Movement"
    ],
    "durationS": 1.805,
    "filesize": 159276
  },
  {
    "filename": "00000130",
    "searchWords": [
      "Mechanical",
      "Single",
      "Articulation"
    ],
    "durationS": 2.156,
    "filesize": 190196
  },
  {
    "filename": "00000131",
    "searchWords": [
      "Engine",
      "Mob",
      "Base",
      "Genny"
    ],
    "durationS": 2.078,
    "filesize": 183340
  },
  {
    "filename": "00000132",
    "searchWords": [
      "Windy",
      "Wind",
      "Up",
      "Stops",
      "Double",
      "Clonk"
    ],
    "durationS": 2.642,
    "filesize": 233058
  },
  {
    "filename": "00000133",
    "searchWords": [
      "Engine",
      "Mob",
      "Base",
      "Genny"
    ],
    "durationS": 2.049,
    "filesize": 180786
  },
  {
    "filename": "00000134",
    "searchWords": [
      "Super",
      "Weapon",
      "mb",
      "Articulation",
      "Foot"
    ],
    "durationS": 1.729,
    "filesize": 152504
  },
  {
    "filename": "00000135",
    "searchWords": [
      "Mechanical",
      "Activation",
      "The",
      "Running"
    ],
    "durationS": 2.226,
    "filesize": 196396
  },
  {
    "filename": "00000136",
    "searchWords": [
      "Soft",
      "Clatter"
    ],
    "durationS": 0.467,
    "filesize": 41196
  },
  {
    "filename": "00000137",
    "searchWords": [
      "Soft",
      "Clatter",
      "Trees",
      "mb"
    ],
    "durationS": 3.506,
    "filesize": 309292
  },
  {
    "filename": "00000138",
    "searchWords": [
      "Showmp",
      "Magical"
    ],
    "durationS": 2.647,
    "filesize": 233516
  },
  {
    "filename": "00000139",
    "searchWords": [
      "4",
      "Beeps",
      "Each",
      "Falloff"
    ],
    "durationS": 0.618,
    "filesize": 54572
  },
  {
    "filename": "0000013a",
    "searchWords": [
      "Typewriter",
      "Digital"
    ],
    "durationS": 0.637,
    "filesize": 56200
  },
  {
    "filename": "0000013b",
    "searchWords": [
      "Chirps",
      "and",
      "Beep"
    ],
    "durationS": 0.861,
    "filesize": 75984
  },
  {
    "filename": "0000013c",
    "searchWords": [
      "Sega",
      "Like",
      "Fanfare",
      "Magical"
    ],
    "durationS": 3.715,
    "filesize": 327724
  }
]
.map(sound => {
  // sound.searchWords = sound.searchWords.filter(word =>
  //   ignoreWords.some(ignore => ignore === word.toUpperCase()) === false
  // );
  sound.searchWords = sound.searchWords.map(word => {
    if (word.toUpperCase() === 'MB') {
      return 'Maybe';
    }
    return word;
  });
  return sound;
})

export const longestFile = sound_CH_WaveBank_SE.reduce((ac, cur) => {
  if (ac.durationS < cur.durationS) {
    return cur;
  }
  return ac;
}, sound_CH_WaveBank_SE[0]);

function getAllSearchWords(files: SoundFileDetails[]): string[] {
  const allWords = {} as Record<string, boolean>;
  for (const { searchWords } of files) {
    for (const wordCased of searchWords) {
      const word = wordCased.toUpperCase();
      if (ignoreWords.some(ignore => ignore === word)) {
        continue;
      }
      if (allWords[word] == undefined) {
        allWords[word] = true;
      }
    }
  }
  return Object.keys(allWords).sort();
}
export const sound_CH_WaveBank_SE_searchWords = getAllSearchWords(sound_CH_WaveBank_SE);