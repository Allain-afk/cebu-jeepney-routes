import { JeepneyRoute, Location } from '../interfaces/types';

// Comprehensive locations in Cebu
const locations: { [key: string]: Location } = {
  // Major Malls & Commercial Centers
  SM_CEBU: {
    id: 'SM_CEBU',
    name: 'SM City Cebu',
    coordinates: [10.3118, 123.9154],
    aliases: ['sm', 'sm city', 'sm north', 'sm northwing']
  },
  SM_SEASIDE: {
    id: 'SM_SEASIDE',
    name: 'SM Seaside City Cebu',
    coordinates: [10.2712, 123.8786],
    aliases: ['sm seaside', 'seaside', 'smseaside']
  },
  AYALA: {
    id: 'AYALA',
    name: 'Ayala Center Cebu',
    coordinates: [10.3178, 123.9054],
    aliases: ['ayala', 'ayala mall', 'ayala center']
  },
  ROBINSONS_GALLERIA: {
    id: 'ROBINSONS_GALLERIA',
    name: 'Robinsons Galleria Cebu',
    coordinates: [10.3130, 123.9165],
    aliases: ['robinsons', 'galleria', 'robinsons galleria']
  },
  
  // Downtown & Historic Areas
  COLON: {
    id: 'COLON',
    name: 'Colon Street',
    coordinates: [10.2957, 123.8983],
    aliases: ['colon', 'downtown', 'downtown cebu']
  },
  CARBON: {
    id: 'CARBON',
    name: 'Carbon Market',
    coordinates: [10.2928, 123.8977],
    aliases: ['carbon', 'carbon market', 'market']
  },
  PLAZA_INDEPENDENCIA: {
    id: 'PLAZA_INDEPENDENCIA',
    name: 'Plaza Independencia',
    coordinates: [10.2926, 123.9020],
    aliases: ['plaza', 'plaza independencia', 'fort san pedro']
  },
  
  // Key Districts/Barangays
  MAMBALING: {
    id: 'MAMBALING',
    name: 'Mambaling',
    coordinates: [10.2915, 123.8803],
    aliases: ['mambaling', 'alaska']
  },
  LABANGON: {
    id: 'LABANGON',
    name: 'Labangon',
    coordinates: [10.3015, 123.8828],
    aliases: ['labangon']
  },
  GUADALUPE: {
    id: 'GUADALUPE',
    name: 'Guadalupe',
    coordinates: [10.3117, 123.8810],
    aliases: ['guadalupe', 'gpinoy', 'banawa']
  },
  LAHUG: {
    id: 'LAHUG',
    name: 'Lahug',
    coordinates: [10.3367, 123.8904],
    aliases: ['lahug', 'jy square', 'jy']
  },
  TALAMBAN: {
    id: 'TALAMBAN',
    name: 'Talamban',
    coordinates: [10.3708, 123.9101],
    aliases: ['talamban', 'nasipit']
  },
  MANDAUE: {
    id: 'MANDAUE',
    name: 'Mandaue City',
    coordinates: [10.3321, 123.9379],
    aliases: ['mandaue', 'mandaue city']
  },
  TALISAY: {
    id: 'TALISAY',
    name: 'Talisay City',
    coordinates: [10.2447, 123.8494],
    aliases: ['talisay', 'talisay city', 'tabunok']
  },
  PARDO: {
    id: 'PARDO',
    name: 'Pardo',
    coordinates: [10.2700, 123.8650],
    aliases: ['pardo', 'san nicolas', 'bulacao']
  },
  MABOLO: {
    id: 'MABOLO',
    name: 'Mabolo',
    coordinates: [10.3161, 123.9141],
    aliases: ['mabolo', 'kasambagan']
  },
  
  // Universities & Education
  USC: {
    id: 'USC',
    name: 'University of San Carlos (Main)',
    coordinates: [10.3006, 123.8932],
    aliases: ['usc', 'san carlos', 'university of san carlos']
  },
  USJR: {
    id: 'USJR',
    name: 'University of San Jose-Recoletos',
    coordinates: [10.2982, 123.9023],
    aliases: ['usjr', 'san jose', 'recoletos']
  },
  UP_CEBU: {
    id: 'UP_CEBU',
    name: 'UP Cebu',
    coordinates: [10.3222, 123.8978],
    aliases: ['up', 'up cebu', 'university of the philippines']
  },
  
  // Transportation Hubs
  SOUTH_BUS: {
    id: 'SOUTH_BUS',
    name: 'Cebu South Bus Terminal',
    coordinates: [10.2952, 123.8928],
    aliases: ['south bus', 'south bus terminal', 'south terminal']
  },
  NORTH_BUS: {
    id: 'NORTH_BUS',
    name: 'Cebu North Bus Terminal',
    coordinates: [10.3142, 123.9158],
    aliases: ['north bus', 'north bus terminal', 'north terminal']
  },
  PIER: {
    id: 'PIER',
    name: 'Cebu Pier (Port Area)',
    coordinates: [10.2930, 123.9058],
    aliases: ['pier', 'port', 'pier 1', 'pier 2', 'pier 3', 'pier 4']
  },
  
  // Hospitals
  CHONG_HUA: {
    id: 'CHONG_HUA',
    name: 'Chong Hua Hospital',
    coordinates: [10.3073, 123.8939],
    aliases: ['chong hua', 'chonghua', 'chong hua hospital']
  },
  VICENTE_SOTTO: {
    id: 'VICENTE_SOTTO',
    name: 'Vicente Sotto Memorial Medical Center',
    coordinates: [10.3156, 123.8838],
    aliases: ['sotto', 'vicente sotto', 'medical center']
  },
  CEBU_DOCTORS: {
    id: 'CEBU_DOCTORS',
    name: 'Cebu Doctors University Hospital',
    coordinates: [10.3139, 123.8913],
    aliases: ['cebu doctors', 'doctors', 'cebu doctors hospital']
  },
  
  // Other Important Landmarks
  CAPITOL: {
    id: 'CAPITOL',
    name: 'Cebu Provincial Capitol',
    coordinates: [10.3182, 123.8908],
    aliases: ['capitol', 'provincial capitol', 'fuente']
  },
  FUENTE_OSMENA: {
    id: 'FUENTE_OSMENA',
    name: 'Fuente Osmeña Circle',
    coordinates: [10.3103, 123.8914],
    aliases: ['fuente', 'fuente circle', 'fuente osmena']
  },
  IT_PARK: {
    id: 'IT_PARK',
    name: 'Cebu IT Park',
    coordinates: [10.3308, 123.9056],
    aliases: ['it park', 'cebu it park', 'asiatown']
  },
  
  // Adding IT Park Terminal and North Cebu destinations
  IT_PARK_TERMINAL: {
    id: 'IT_PARK_TERMINAL',
    name: 'IT Park Bus Terminal',
    coordinates: [10.3320, 123.9066],
    aliases: ['it park terminal', 'it terminal', 'asiatown terminal']
  },
  DANAO: {
    id: 'DANAO',
    name: 'Danao City',
    coordinates: [10.5520, 123.9553],
    aliases: ['danao', 'danao city']
  },
  LILOAN: {
    id: 'LILOAN',
    name: 'Liloan',
    coordinates: [10.3999, 123.9953],
    aliases: ['liloan', 'yati']
  },
  COMPOSTELA: {
    id: 'COMPOSTELA',
    name: 'Compostela',
    coordinates: [10.4580, 123.9563],
    aliases: ['compostela']
  },
  CARMEN: {
    id: 'CARMEN',
    name: 'Carmen',
    coordinates: [10.5953, 123.9664],
    aliases: ['carmen']
  },
  SOGOD: {
    id: 'SOGOD',
    name: 'Sogod',
    coordinates: [10.7290, 123.9984],
    aliases: ['sogod']
  },
  // Adding more specific locations for detailed routes
  URGELLO: {
    id: 'URGELLO',
    name: 'V. Urgello St',
    coordinates: [10.2991, 123.8914],
    aliases: ['urgello', 'v urgello', 'vicente urgello']
  },
  SACRED_HEART: {
    id: 'SACRED_HEART',
    name: 'Sacred Heart Hospital',
    coordinates: [10.3012, 123.8918],
    aliases: ['sacred heart', 'sacred heart hospital']
  },
  SOUTHWESTERN_UNIV: {
    id: 'SOUTHWESTERN_UNIV',
    name: 'Southwestern University',
    coordinates: [10.3025, 123.8932],
    aliases: ['southwestern', 'southwestern university', 'swu']
  },
  ELIZABETH_MALL: {
    id: 'ELIZABETH_MALL',
    name: 'Elizabeth Mall Emall',
    coordinates: [10.2976, 123.8961],
    aliases: ['elizabeth mall', 'emall']
  },
  LEON_KILAT: {
    id: 'LEON_KILAT',
    name: 'Leon Kilat St',
    coordinates: [10.2968, 123.8983],
    aliases: ['leon kilat', 'kilat']
  },
  METRO_GAISANO: {
    id: 'METRO_GAISANO',
    name: 'Metro Gaisano',
    coordinates: [10.2951, 123.8998],
    aliases: ['metro gaisano', 'gaisano metro']
  },
  GAISANO_MAIN: {
    id: 'GAISANO_MAIN',
    name: 'Gaisano Main',
    coordinates: [10.2949, 123.9010],
    aliases: ['gaisano main']
  },
  BRGY_PARIAN: {
    id: 'BRGY_PARIAN',
    name: 'Brgy. Parian',
    coordinates: [10.2962, 123.9020],
    aliases: ['parian', 'brgy parian']
  },
  ZULUETA_ST: {
    id: 'ZULUETA_ST',
    name: 'Zulueta St',
    coordinates: [10.2975, 123.9040],
    aliases: ['zulueta', 'zulueta street']
  },
  MJ_CUENCA_AVE: {
    id: 'MJ_CUENCA_AVE',
    name: 'MJ Cuenca Ave',
    coordinates: [10.2989, 123.9065],
    aliases: ['cuenca', 'mj cuenca']
  },
  NSO: {
    id: 'NSO',
    name: 'National Statistics Office',
    coordinates: [10.3010, 123.9089],
    aliases: ['nso', 'statistics office']
  },
  GEN_MAXILOM: {
    id: 'GEN_MAXILOM',
    name: 'General Maxilom Ave',
    coordinates: [10.3042, 123.9110],
    aliases: ['gen maxilom', 'maxilom', 'general maxilom']
  },
  SORIANO_AVE: {
    id: 'SORIANO_AVE',
    name: 'A. Soriano Ave',
    coordinates: [10.3070, 123.9130],
    aliases: ['soriano', 'a soriano']
  },
  PARKMALL: {
    id: 'PARKMALL',
    name: 'Parkmall',
    coordinates: [10.3295, 123.9217],
    aliases: ['parkmall', 'park mall']
  },
  // Adding more specific locations needed for detailed routes
  // Downtown locations
  COLONNADE: {
    id: 'COLONNADE',
    name: 'Colonnade Supermarket',
    coordinates: [10.2965, 123.8975],
    aliases: ['colonnade', 'colonnade market']
  },
  BASELINE: {
    id: 'BASELINE',
    name: 'Baseline Restaurant',
    coordinates: [10.3068, 123.8941],
    aliases: ['baseline', 'baseline restaurant']
  },
  UCMED: {
    id: 'UCMED',
    name: 'UC Med',
    coordinates: [10.3044, 123.8918],
    aliases: ['uc med', 'university of cebu medical']
  },

  // Mabolo area
  WATERFRONT: {
    id: 'WATERFRONT',
    name: 'Waterfront Hotel',
    coordinates: [10.3143, 123.9155],
    aliases: ['waterfront', 'waterfront hotel']
  },
  GRAND_CONVENTION: {
    id: 'GRAND_CONVENTION',
    name: 'Grand Convention Center',
    coordinates: [10.3155, 123.9116],
    aliases: ['grand convention', 'convention center']
  },
  
  // Lahug area
  JY_SQUARE: {
    id: 'JY_SQUARE',
    name: 'JY Square Mall',
    coordinates: [10.3367, 123.8904],
    aliases: ['jy square', 'jy mall']
  },
  GAISANO_COUNTRY: {
    id: 'GAISANO_COUNTRY',
    name: 'Gaisano Country Mall',
    coordinates: [10.3337, 123.9050],
    aliases: ['gaisano country', 'country mall']
  },
  
  // Guadalupe area
  BANAWA: {
    id: 'BANAWA',
    name: 'Banawa',
    coordinates: [10.3090, 123.8769],
    aliases: ['banawa']
  },
  V_RAMA: {
    id: 'V_RAMA',
    name: 'V. Rama Avenue',
    coordinates: [10.3065, 123.8817],
    aliases: ['v rama', 'v. rama', 'rama avenue']
  },
  
  // Labangon area
  KATIPUNAN: {
    id: 'KATIPUNAN',
    name: 'Katipunan Street',
    coordinates: [10.2986, 123.8796],
    aliases: ['katipunan', 'katipunan street']
  },
  PUNTA_PRINCESA: {
    id: 'PUNTA_PRINCESA',
    name: 'Punta Princesa',
    coordinates: [10.2936, 123.8752],
    aliases: ['punta princesa', 'punta']
  },
  
  // Bulacao/Pardo area
  TABOAN: {
    id: 'TABOAN',
    name: 'Taboan Public Market',
    coordinates: [10.2918, 123.8954],
    aliases: ['taboan', 'taboan market']
  },
  BULACAO_PARDO: {
    id: 'BULACAO_PARDO',
    name: 'Bulacao Pardo',
    coordinates: [10.2700, 123.8613],
    aliases: ['bulacao', 'bulacao pardo']
  },
  
  // Mandaue area
  BRIDGE: {
    id: 'BRIDGE',
    name: 'Marcelo Fernan Bridge',
    coordinates: [10.3338, 123.9467],
    aliases: ['marcelo fernan bridge', 'fernan bridge', 'bridge']
  },
  NFA: {
    id: 'NFA',
    name: 'NFA Warehouse',
    coordinates: [10.3271, 123.9325],
    aliases: ['nfa', 'nfa warehouse']
  },

  // New major landmarks
  CEBU_PORT: {
    id: 'CEBU_PORT',
    name: 'Cebu International Port',
    coordinates: [10.2945, 123.9065],
    aliases: ['cebu port', 'international port', 'port']
  },

  // Adding more location details
  JONES: {
    id: 'JONES',
    name: 'Jones Avenue',
    coordinates: [10.2975, 123.9015],
    aliases: ['jones', 'jones avenue']
  },
  IMUS: {
    id: 'IMUS',
    name: 'Imus Avenue',
    coordinates: [10.2985, 123.9030],
    aliases: ['imus', 'imus avenue']
  },
  TABO_AN: {
    id: 'TABO_AN',
    name: 'Tabo-an',
    coordinates: [10.2925, 123.8960],
    aliases: ['tabo-an', 'taboan']
  },
  PASIL: {
    id: 'PASIL',
    name: 'Pasil',
    coordinates: [10.2900, 123.9020],
    aliases: ['pasil']
  },
  MANALILI: {
    id: 'MANALILI',
    name: 'Manalili Street',
    coordinates: [10.2965, 123.8995],
    aliases: ['manalili', 'manalili street']
  },
  LEGASPI: {
    id: 'LEGASPI',
    name: 'Legaspi Street',
    coordinates: [10.2980, 123.9025],
    aliases: ['legaspi', 'legaspi street']
  },
  // North-bound locations
  SUBANGDAKU: {
    id: 'SUBANGDAKU',
    name: 'Subangdaku',
    coordinates: [10.3230, 123.9250],
    aliases: ['subangdaku']
  },
  TIPOLO: {
    id: 'TIPOLO',
    name: 'Tipolo',
    coordinates: [10.3280, 123.9280],
    aliases: ['tipolo']
  },
  OPAO: {
    id: 'OPAO',
    name: 'Opao',
    coordinates: [10.3320, 123.9310],
    aliases: ['opao']
  },
  AC_CORTES: {
    id: 'AC_CORTES',
    name: 'A.C. Cortes Avenue',
    coordinates: [10.3350, 123.9340],
    aliases: ['a.c. cortes', 'cortes avenue']
  },
  ALANG_ALANG: {
    id: 'ALANG_ALANG',
    name: 'Alang-Alang',
    coordinates: [10.3395, 123.9360],
    aliases: ['alang-alang', 'alang alang']
  },
  // South-bound locations
  TALISAY_PROPER: {
    id: 'TALISAY_PROPER',
    name: 'Talisay Proper',
    coordinates: [10.2447, 123.8494],
    aliases: ['talisay proper']
  },
  TABUNOK: {
    id: 'TABUNOK',
    name: 'Tabunok',
    coordinates: [10.2550, 123.8550],
    aliases: ['tabunok']
  },
  LINAO: {
    id: 'LINAO',
    name: 'Linao',
    coordinates: [10.2620, 123.8580],
    aliases: ['linao']
  },
  // Talamban route
  BANILAD: {
    id: 'BANILAD',
    name: 'Banilad',
    coordinates: [10.3550, 123.9020],
    aliases: ['banilad']
  },
  USC_TALAMBAN: {
    id: 'USC_TALAMBAN',
    name: 'USC Talamban Campus',
    coordinates: [10.3650, 123.9090],
    aliases: ['usc talamban', 'usc tc']
  },
  NASIPIT: {
    id: 'NASIPIT',
    name: 'Nasipit',
    coordinates: [10.3700, 123.9120],
    aliases: ['nasipit']
  },
  CABANCALAN: {
    id: 'CABANCALAN',
    name: 'Cabancalan',
    coordinates: [10.3680, 123.9200],
    aliases: ['cabancalan']
  }
};

// Comprehensive jeepney routes in Cebu
export const jeepneyRoutes: JeepneyRoute[] = [
  {
    id: '01C',
    code: '01C',
    name: 'Private - Colon',
    color: '#E74C3C',
    stops: [
      locations.COLON,
      locations.CARBON,
      locations.FUENTE_OSMENA,
      locations.LAHUG
    ],
    fare: 11.00
  },
  {
    id: '01K',
    code: '01K',
    name: 'Urgello - Parkmall',
    color: '#FF0000',
    stops: [
      locations.URGELLO,
      locations.SACRED_HEART,
      locations.SOUTHWESTERN_UNIV,
      locations.ELIZABETH_MALL,
      locations.LEON_KILAT,
      locations.COLON,
      locations.METRO_GAISANO,
      locations.GAISANO_MAIN,
      locations.BRGY_PARIAN,
      locations.ZULUETA_ST,
      locations.MJ_CUENCA_AVE,
      locations.NSO,
      locations.GEN_MAXILOM,
      locations.SORIANO_AVE,
      locations.SM_CEBU,
      locations.PARKMALL
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.URGELLO,
        to: locations.PARKMALL,
        waypoints: [
          { coordinates: [10.3012, 123.8918] }, // Sacred Heart Hospital
          { coordinates: [10.3025, 123.8932] }, // Southwestern University
          { coordinates: [10.2976, 123.8961] }, // Elizabeth Mall
          { coordinates: [10.2968, 123.8983] }, // Leon Kilat St
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2951, 123.8998] }, // Metro Gaisano
          { coordinates: [10.2949, 123.9010] }, // Gaisano Main
          { coordinates: [10.2962, 123.9020] }, // Brgy. Parian
          { coordinates: [10.2975, 123.9040] }, // Zulueta St
          { coordinates: [10.2989, 123.9065] }, // MJ Cuenca Ave
          { coordinates: [10.3010, 123.9089] }, // NSO
          { coordinates: [10.3042, 123.9110] }, // Gen. Maxilom Ave
          { coordinates: [10.3070, 123.9130] }, // A. Soriano Ave
          { coordinates: [10.3118, 123.9154] }, // SM City Cebu
          { coordinates: [10.3295, 123.9217] }  // Parkmall
        ]
      }
    ]
  },
  {
    id: '02B',
    code: '02B',
    name: 'South Bus Terminal - Colon',
    color: '#3498DB',
    stops: [
      locations.SOUTH_BUS,
      locations.USC,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '03A',
    code: '03A',
    name: 'Mabolo - Carbon',
    color: '#00FFFF',
    stops: [
      locations.GRAND_CONVENTION,
      locations.MABOLO,
      locations.WATERFRONT,
      locations.SM_CEBU,
      locations.NFA,
      locations.CEBU_PORT,
      locations.CARBON
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.GRAND_CONVENTION,
        to: locations.CARBON,
        waypoints: [
          { coordinates: [10.3155, 123.9116] }, // Grand Convention
          { coordinates: [10.3161, 123.9141] }, // Mabolo
          { coordinates: [10.3143, 123.9155] }, // Waterfront
          { coordinates: [10.3118, 123.9154] }, // SM City Cebu
          { coordinates: [10.3271, 123.9325] }, // NFA Warehouse
          { coordinates: [10.3050, 123.9120] }, // Near Port area
          { coordinates: [10.2945, 123.9065] }, // Cebu Port
          { coordinates: [10.2928, 123.8977] }  // Carbon
        ]
      }
    ]
  },
  {
    id: '03B',
    code: '03B',
    name: 'Mabolo - Carbon',
    color: '#27AE60',
    stops: [
      locations.MABOLO,
      locations.SM_CEBU,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '03L',
    code: '03L',
    name: 'Mabolo - Carbon',
    color: '#F1C40F',
    stops: [
      locations.MABOLO,
      locations.SM_CEBU,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '03Q',
    code: '03Q',
    name: 'Ayala - SM',
    color: '#9B59B6',
    stops: [
      locations.AYALA,
      locations.MABOLO,
      locations.SM_CEBU
    ],
    fare: 11.00
  },
  {
    id: '04B',
    code: '04B',
    name: 'Lahug - Carbon',
    color: '#16A085',
    stops: [
      locations.LAHUG,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '04H',
    code: '04H',
    name: 'Plaza Housing - Carbon',
    color: '#D35400',
    stops: [
      locations.LAHUG,
      locations.CAPITOL,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '04I',
    code: '04I',
    name: 'Plaza Housing - Carbon',
    color: '#20B2AA',
    stops: [
      locations.LAHUG,
      locations.CAPITOL,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '04L',
    code: '04L',
    name: 'Lahug - Ayala',
    color: '#00FF00',
    stops: [
      locations.JY_SQUARE,
      locations.LAHUG,
      locations.GAISANO_COUNTRY,
      locations.IT_PARK,
      locations.UCMED,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.BASELINE,
      locations.AYALA
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.JY_SQUARE,
        to: locations.AYALA,
        waypoints: [
          { coordinates: [10.3367, 123.8904] }, // JY Square
          { coordinates: [10.3337, 123.8950] }, // Along Gochan
          { coordinates: [10.3337, 123.9050] }, // Gaisano Country Mall
          { coordinates: [10.3308, 123.9056] }, // IT Park
          { coordinates: [10.3255, 123.9010] }, // Along Salinas Drive
          { coordinates: [10.3197, 123.8940] }, // Along Gov. Cuenco
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.3068, 123.8941] }, // Baseline area
          { coordinates: [10.3178, 123.9054] }  // Ayala
        ]
      }
    ]
  },
  {
    id: '04M',
    code: '04M',
    name: 'Lahug - Ayala',
    color: '#2980B9',
    stops: [
      locations.LAHUG,
      locations.IT_PARK,
      locations.CAPITOL,
      locations.AYALA
    ],
    fare: 11.00
  },
  {
    id: '06B',
    code: '06B',
    name: 'Guadalupe - Carbon',
    color: '#FFA500',
    stops: [
      locations.BANAWA,
      locations.GUADALUPE,
      locations.V_RAMA,
      locations.FUENTE_OSMENA,
      locations.JONES,
      locations.COLON,
      locations.CARBON
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.BANAWA,
        to: locations.CARBON,
        waypoints: [
          { coordinates: [10.3090, 123.8769] }, // Banawa
          { coordinates: [10.3117, 123.8810] }, // Guadalupe
          { coordinates: [10.3065, 123.8817] }, // V. Rama
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.3006, 123.8932] }, // USC Main
          { coordinates: [10.2975, 123.9015] }, // Jones Avenue
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2928, 123.8977] }  // Carbon
        ]
      }
    ]
  },
  {
    id: '06C',
    code: '06C',
    name: 'Guadalupe - Carbon',
    color: '#8E44AD',
    stops: [
      locations.GUADALUPE,
      locations.FUENTE_OSMENA,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '06G',
    code: '06G',
    name: 'Guadalupe - Tabo-an',
    color: '#C0392B',
    stops: [
      locations.GUADALUPE,
      locations.FUENTE_OSMENA,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '06H',
    code: '06H',
    name: 'Guadalupe - SM',
    color: '#1ABC9C',
    stops: [
      locations.GUADALUPE,
      locations.FUENTE_OSMENA,
      locations.SM_CEBU
    ],
    fare: 11.00
  },
  {
    id: '07B',
    code: '07B',
    name: 'Banawa - Carbon',
    color: '#F39C12',
    stops: [
      locations.GUADALUPE,
      locations.FUENTE_OSMENA,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '08F',
    code: '08F',
    name: 'Alumnos - SM',
    color: '#2C3E50',
    stops: [
      locations.PARDO,
      locations.COLON,
      locations.SM_CEBU
    ],
    fare: 11.00
  },
  {
    id: '08G',
    code: '08G',
    name: 'Alumnos - Colon',
    color: '#7F8C8D',
    stops: [
      locations.PARDO,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '09C',
    code: '09C',
    name: 'Basak - Colon',
    color: '#800080',
    stops: [
      locations.MAMBALING,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '09F',
    code: '09F',
    name: 'Basak - Ibabao',
    color: '#34495E',
    stops: [
      locations.MAMBALING,
      locations.COLON,
      locations.MANDAUE
    ],
    fare: 14.00
  },
  {
    id: '09G',
    code: '09G',
    name: 'Basak - Colon',
    color: '#E67E22',
    stops: [
      locations.MAMBALING,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '10F',
    code: '10F',
    name: 'Bulacao - Colon',
    color: '#ECF0F1',
    stops: [
      locations.PARDO,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '10G',
    code: '10G',
    name: 'Pardo - Magallanes',
    color: '#95A5A6',
    stops: [
      locations.PARDO,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '10H',
    code: '10H',
    name: 'Bulacao - SM',
    color: '#0000FF',
    stops: [
      locations.BULACAO_PARDO,
      locations.PARDO,
      locations.LABANGON,
      locations.KATIPUNAN,
      locations.TABOAN,
      locations.CARBON,
      locations.COLON,
      locations.CEBU_PORT,
      locations.SM_CEBU
    ],
    fare: 14.00,
    pathSegments: [
      {
        from: locations.BULACAO_PARDO,
        to: locations.SM_CEBU,
        waypoints: [
          { coordinates: [10.2700, 123.8613] }, // Bulacao
          { coordinates: [10.2715, 123.8650] }, // Along N. Bacalso
          { coordinates: [10.2777, 123.8700] }, // Pardo area
          { coordinates: [10.2879, 123.8770] }, // Labangon area
          { coordinates: [10.2918, 123.8954] }, // Taboan
          { coordinates: [10.2928, 123.8977] }, // Carbon
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2945, 123.9065] }, // Cebu Port
          { coordinates: [10.3040, 123.9130] }, // Along port area
          { coordinates: [10.3118, 123.9154] }  // SM City
        ]
      }
    ]
  },
  {
    id: '10M',
    code: '10M',
    name: 'Bulacao - SM',
    color: '#D35400',
    stops: [
      locations.PARDO,
      locations.COLON,
      locations.SM_CEBU
    ],
    fare: 14.00
  },
  {
    id: '11A',
    code: '11A',
    name: 'Inayawan - Colon',
    color: '#1E8449',
    stops: [
      locations.PARDO,
      locations.MAMBALING,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '12D',
    code: '12D',
    name: 'Labangon - Colon',
    color: '#F7DC6F',
    stops: [
      locations.LABANGON,
      locations.MAMBALING,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '12G',
    code: '12G',
    name: 'Labangon - SM',
    color: '#7D3C98',
    stops: [
      locations.LABANGON,
      locations.COLON,
      locations.SM_CEBU
    ],
    fare: 14.00
  },
  {
    id: '12I',
    code: '12I',
    name: 'Labangon - SM',
    color: '#A93226',
    stops: [
      locations.LABANGON,
      locations.COLON,
      locations.SM_CEBU
    ],
    fare: 14.00
  },
  {
    id: '12L',
    code: '12L',
    name: 'Labangon - Ayala',
    color: '#FFFF00',
    stops: [
      locations.LABANGON,
      locations.KATIPUNAN,
      locations.PUNTA_PRINCESA,
      locations.V_RAMA,
      locations.GUADALUPE,
      locations.BANAWA,
      locations.BASELINE,
      locations.AYALA
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.LABANGON,
        to: locations.AYALA,
        waypoints: [
          { coordinates: [10.2986, 123.8796] }, // Labangon
          { coordinates: [10.2936, 123.8752] }, // Punta Princesa
          { coordinates: [10.3065, 123.8817] }, // V. Rama
          { coordinates: [10.3117, 123.8810] }, // Guadalupe
          { coordinates: [10.3090, 123.8769] }, // Banawa
          { coordinates: [10.3092, 123.8870] }, // Up B. Rodriguez
          { coordinates: [10.3068, 123.8941] }, // Baseline area
          { coordinates: [10.3178, 123.9054] }  // Ayala
        ]
      }
    ]
  },
  {
    id: '13B',
    code: '13B',
    name: 'Talamban - Carbon',
    color: '#2E86C1',
    stops: [
      locations.TALAMBAN,
      locations.NASIPIT,
      locations.USC_TALAMBAN,
      locations.BANILAD,
      locations.LAHUG,
      locations.JY_SQUARE,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.COLON,
      locations.CARBON
    ],
    fare: 13.00,
    pathSegments: [
      {
        from: locations.TALAMBAN,
        to: locations.CARBON,
        waypoints: [
          { coordinates: [10.3708, 123.9101] }, // Talamban
          { coordinates: [10.3700, 123.9120] }, // Nasipit
          { coordinates: [10.3650, 123.9090] }, // USC Talamban
          { coordinates: [10.3550, 123.9020] }, // Banilad
          { coordinates: [10.3367, 123.8904] }, // JY Square
          { coordinates: [10.3322, 123.8907] }, // Lahug area
          { coordinates: [10.3257, 123.8912] }, // Along Osmena Blvd
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.3006, 123.8932] }, // USC Area
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2928, 123.8977] }  // Carbon
        ]
      }
    ]
  },
  {
    id: '13C',
    code: '13C',
    name: 'Talamban - Colon',
    color: '#008000',
    stops: [
      locations.TALAMBAN,
      locations.LAHUG,
      locations.CAPITOL,
      locations.COLON
    ],
    fare: 13.00
  },
  {
    id: '13H',
    code: '13H',
    name: 'Pit-os - Mandaue',
    color: '#EC7063',
    stops: [
      locations.TALAMBAN,
      locations.LAHUG,
      locations.MANDAUE
    ],
    fare: 15.00
  },
  {
    id: '14D',
    code: '14D',
    name: 'Ayala - Colon',
    color: '#FF4500',
    stops: [
      locations.AYALA,
      locations.CAPITOL,
      locations.COLON
    ],
    fare: 11.00
  },
  {
    id: '17B',
    code: '17B',
    name: 'Apas - Carbon',
    color: '#FF00FF',
    stops: [
      locations.IT_PARK,
      locations.LAHUG,
      locations.JY_SQUARE,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.COLON,
      locations.CARBON
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.IT_PARK,
        to: locations.CARBON,
        waypoints: [
          { coordinates: [10.3308, 123.9056] }, // IT Park
          { coordinates: [10.3367, 123.8904] }, // JY Square
          { coordinates: [10.3322, 123.8907] }, // Lahug area
          { coordinates: [10.3257, 123.8912] }, // Along Osmena Blvd
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.3006, 123.8932] }, // USC Area
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2928, 123.8977] }  // Carbon
        ]
      }
    ]
  },
  {
    id: '17C',
    code: '17C',
    name: 'Apas - Carbon',
    color: '#5DADE2',
    stops: [
      locations.LAHUG,
      locations.CAPITOL,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '17D',
    code: '17D',
    name: 'Apas - Carbon',
    color: '#48C9B0',
    stops: [
      locations.LAHUG,
      locations.CAPITOL,
      locations.CARBON
    ],
    fare: 11.00
  },
  {
    id: '20A',
    code: '20A',
    name: 'Mandaue - Ayala',
    color: '#2E8B57',
    stops: [
      locations.MANDAUE,
      locations.SM_CEBU,
      locations.MABOLO,
      locations.GRAND_CONVENTION,
      locations.UCMED,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.BASELINE,
      locations.AYALA
    ],
    fare: 14.00,
    pathSegments: [
      {
        from: locations.MANDAUE,
        to: locations.AYALA,
        waypoints: [
          { coordinates: [10.3321, 123.9379] }, // Mandaue
          { coordinates: [10.3271, 123.9325] }, // NFA Warehouse
          { coordinates: [10.3118, 123.9154] }, // SM City Cebu
          { coordinates: [10.3161, 123.9141] }, // Mabolo
          { coordinates: [10.3155, 123.9116] }, // Grand Convention
          { coordinates: [10.3044, 123.8918] }, // UC Med
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.3068, 123.8941] }, // Baseline
          { coordinates: [10.3178, 123.9054] }  // Ayala
        ]
      }
    ]
  },
  {
    id: '21A',
    code: '21A',
    name: 'Mandaue - Cathedral',
    color: '#A52A2A',
    stops: [
      locations.ALANG_ALANG,
      locations.AC_CORTES,
      locations.OPAO,
      locations.TIPOLO,
      locations.SUBANGDAKU,
      locations.MANDAUE,
      locations.NFA,
      locations.SM_CEBU,
      locations.MABOLO,
      locations.WATERFRONT,
      locations.CEBU_PORT,
      locations.MANALILI,
      locations.COLON
    ],
    fare: 14.00,
    pathSegments: [
      {
        from: locations.ALANG_ALANG,
        to: locations.COLON,
        waypoints: [
          { coordinates: [10.3395, 123.9360] }, // Alang-Alang
          { coordinates: [10.3350, 123.9340] }, // A.C. Cortes
          { coordinates: [10.3320, 123.9310] }, // Opao
          { coordinates: [10.3280, 123.9280] }, // Tipolo
          { coordinates: [10.3230, 123.9250] }, // Subangdaku
          { coordinates: [10.3321, 123.9379] }, // Mandaue
          { coordinates: [10.3271, 123.9325] }, // NFA Warehouse
          { coordinates: [10.3118, 123.9154] }, // SM City Cebu
          { coordinates: [10.3161, 123.9141] }, // Mabolo
          { coordinates: [10.3155, 123.9116] }, // Grand Convention
          { coordinates: [10.3044, 123.8918] }, // UC Med
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.2957, 123.8983] }  // Colon
        ]
      }
    ]
  },
  {
    id: '22A',
    code: '22A',
    name: 'Mandaue - Cathedral',
    color: '#641E16',
    stops: [
      locations.MANDAUE,
      locations.SM_CEBU,
      locations.COLON
    ],
    fare: 14.00
  },
  {
    id: '22D',
    code: '22D',
    name: 'Mandaue - Cathedral',
    color: '#17202A',
    stops: [
      locations.MANDAUE,
      locations.SM_CEBU,
      locations.COLON
    ],
    fare: 14.00
  },
  {
    id: '22I',
    code: '22I',
    name: 'Mandaue - Gaisano Country Mall',
    color: '#4B0082',
    stops: [
      locations.TIPOLO,
      locations.SUBANGDAKU,
      locations.MANDAUE,
      locations.MABOLO,
      locations.GRAND_CONVENTION,
      locations.IT_PARK,
      locations.GAISANO_COUNTRY,
      locations.LAHUG
    ],
    fare: 11.00,
    pathSegments: [
      {
        from: locations.TIPOLO,
        to: locations.LAHUG,
        waypoints: [
          { coordinates: [10.3280, 123.9280] }, // Tipolo
          { coordinates: [10.3230, 123.9250] }, // Subangdaku
          { coordinates: [10.3321, 123.9379] }, // Mandaue
          { coordinates: [10.3161, 123.9141] }, // Mabolo
          { coordinates: [10.3155, 123.9116] }, // Grand Convention
          { coordinates: [10.3308, 123.9056] }, // IT Park
          { coordinates: [10.3337, 123.9050] }, // Gaisano Country Mall
          { coordinates: [10.3367, 123.8904] }  // Lahug
        ]
      }
    ]
  },
  {
    id: '23',
    code: '23',
    name: 'Parkmall - Punta Engaño',
    color: '#5499C7',
    stops: [
      locations.MANDAUE,
      locations.MABOLO
    ],
    fare: 11.00
  },
  {
    id: '23D',
    code: '23D',
    name: 'Parkmall - Opon',
    color: '#A9DFBF',
    stops: [
      locations.MANDAUE,
      locations.MABOLO
    ],
    fare: 11.00
  },
  {
    id: '62B',
    code: '62B',
    name: 'Pit-os - Carbon',
    color: '#FF6347',
    stops: [
      locations.CABANCALAN,
      locations.TALAMBAN,
      locations.NASIPIT,
      locations.BANILAD,
      locations.LAHUG,
      locations.CAPITOL,
      locations.FUENTE_OSMENA,
      locations.JONES,
      locations.COLON,
      locations.CARBON
    ],
    fare: 13.00,
    pathSegments: [
      {
        from: locations.CABANCALAN,
        to: locations.CARBON,
        waypoints: [
          { coordinates: [10.3680, 123.9200] }, // Cabancalan
          { coordinates: [10.3708, 123.9101] }, // Talamban
          { coordinates: [10.3700, 123.9120] }, // Nasipit
          { coordinates: [10.3550, 123.9020] }, // Banilad
          { coordinates: [10.3367, 123.8904] }, // Lahug
          { coordinates: [10.3182, 123.8908] }, // Capitol
          { coordinates: [10.3103, 123.8914] }, // Fuente Osmeña
          { coordinates: [10.2975, 123.9015] }, // Jones Avenue
          { coordinates: [10.2957, 123.8983] }, // Colon
          { coordinates: [10.2928, 123.8977] }  // Carbon
        ]
      }
    ]
  },
  {
    id: '38I',
    code: '38I',
    name: 'Ayala - SM Seaside',
    color: '#8A2BE2',
    stops: [
      locations.AYALA,
      locations.SM_SEASIDE
    ],
    fare: 11.00
  },
  
  // Adding bus routes from IT Park Terminal
  {
    id: 'ITPARK-DANAO',
    code: 'IT-D',
    name: 'IT Park Terminal - Danao',
    color: '#8B4513', // Brown
    stops: [
      locations.IT_PARK_TERMINAL,
      locations.MANDAUE,
      locations.LILOAN,
      locations.COMPOSTELA,
      locations.DANAO
    ],
    fare: 45.00
  },
  {
    id: 'ITPARK-LILOAN',
    code: 'IT-L',
    name: 'IT Park Terminal - Liloan',
    color: '#FF8C00', // Dark Orange
    stops: [
      locations.IT_PARK_TERMINAL,
      locations.MANDAUE,
      locations.LILOAN
    ],
    fare: 25.00
  },
  {
    id: 'ITPARK-COMPOSTELA',
    code: 'IT-C',
    name: 'IT Park Terminal - Compostela',
    color: '#9370DB', // Medium Purple
    stops: [
      locations.IT_PARK_TERMINAL,
      locations.MANDAUE,
      locations.LILOAN,
      locations.COMPOSTELA
    ],
    fare: 35.00
  },
  {
    id: 'ITPARK-CARMEN',
    code: 'IT-CM',
    name: 'IT Park Terminal - Carmen',
    color: '#20B2AA', // Light Sea Green
    stops: [
      locations.IT_PARK_TERMINAL,
      locations.MANDAUE,
      locations.LILOAN,
      locations.COMPOSTELA,
      locations.DANAO,
      locations.CARMEN
    ],
    fare: 55.00
  },
  {
    id: 'ITPARK-SOGOD',
    code: 'IT-S',
    name: 'IT Park Terminal - Sogod',
    color: '#6A5ACD', // Slate Blue
    stops: [
      locations.IT_PARK_TERMINAL,
      locations.MANDAUE,
      locations.LILOAN,
      locations.COMPOSTELA,
      locations.DANAO,
      locations.CARMEN,
      locations.SOGOD
    ],
    fare: 65.00
  }
];

// Helper function to calculate the similarity between two strings
function stringSimilarity(str1: string, str2: string): number {
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  
  if (str1 === str2) return 1.0;
  if (str1.length === 0 || str2.length === 0) return 0.0;
  
  // Check if one string contains the other
  if (str1.includes(str2) || str2.includes(str1)) {
    const minLength = Math.min(str1.length, str2.length);
    const maxLength = Math.max(str1.length, str2.length);
    return minLength / maxLength;
  }
  
  // Calculate Levenshtein distance
  const matrix: number[][] = [];
  
  // Initialize the matrix
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }
  
  // Fill the matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,     // deletion
        matrix[i][j - 1] + 1,     // insertion
        matrix[i - 1][j - 1] + cost  // substitution
      );
    }
  }
  
  // Calculate similarity from the distance
  const distance = matrix[str1.length][str2.length];
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - distance / maxLength;
}

// Find the closest location to the user input
export const findClosestLocation = (input: string): Location | null => {
  if (!input || input.trim() === '') return null;
  
  input = input.toLowerCase().trim();
  
  let bestMatch: Location | null = null;
  let bestSimilarity = 0;
  
  // First check for exact matches or aliases
  for (const key in locations) {
    const location = locations[key];
    
    // Check name
    if (location.name.toLowerCase() === input) {
      return location;
    }
    
    // Check aliases
    if (location.aliases && location.aliases.includes(input)) {
      return location;
    }
  }
  
  // If no exact match, find the closest match
  for (const key in locations) {
    const location = locations[key];
    
    // Check similarity with name
    const nameSimil = stringSimilarity(location.name, input);
    if (nameSimil > bestSimilarity) {
      bestSimilarity = nameSimil;
      bestMatch = location;
    }
    
    // Check similarity with aliases
    if (location.aliases) {
      for (const alias of location.aliases) {
        const aliasSimil = stringSimilarity(alias, input);
        if (aliasSimil > bestSimilarity) {
          bestSimilarity = aliasSimil;
          bestMatch = location;
        }
      }
    }
  }
  
  // Only return a match if similarity is above a threshold
  return bestSimilarity > 0.4 ? bestMatch : null;
};

// Function to find possible routes between two locations
export const findRoutes = (startPoint: string, destination: string): JeepneyRoute[] => {
  // Find direct routes first
  const directRoutes = jeepneyRoutes.filter(route => {
    const stopIds = route.stops.map(stop => stop.id);
    return stopIds.includes(startPoint) && stopIds.includes(destination);
  });

  return directRoutes;
};

// Function to check if a transfer is needed and suggest transfer routes
export const findTransferRoutes = (startPoint: string, destination: string): { primaryRoute: JeepneyRoute, transferRoute: JeepneyRoute, transferPoint: Location }[] => {
  const results: { primaryRoute: JeepneyRoute, transferRoute: JeepneyRoute, transferPoint: Location }[] = [];
  
  // Get routes that include the start point
  const startRoutes = jeepneyRoutes.filter(route => 
    route.stops.some(stop => stop.id === startPoint)
  );
  
  // Get routes that include the destination
  const destRoutes = jeepneyRoutes.filter(route => 
    route.stops.some(stop => stop.id === destination)
  );
  
  // Find potential transfer points
  for (const startRoute of startRoutes) {
    for (const destRoute of destRoutes) {
      // Skip if it's the same route (direct route)
      if (startRoute.id === destRoute.id) continue;
      
      // Find common stops between the two routes that could serve as transfer points
      const transferPoints = startRoute.stops.filter(stop => 
        destRoute.stops.some(destStop => destStop.id === stop.id)
      );
      
      for (const transferPoint of transferPoints) {
        results.push({
          primaryRoute: startRoute,
          transferRoute: destRoute,
          transferPoint: transferPoint
        });
      }
    }
  }
  
  return results;
}; 