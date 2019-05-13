export interface Swatch {
  name: string
  hexValue: string
}

export interface IPalette {
  name: string
  id: string
  emoji: string
  colors: Swatch[]
}


const palette: IPalette[] = [
  {
    name: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      { name: "red", hexValue: "#F44336" },
      { name: "pink", hexValue: "#E91E63" },
      { name: "purple", hexValue: "#9C27B0" },
      { name: "deeppurple", hexValue: "#673AB7" },
      { name: "indigo", hexValue: "#3F51B5" },
      { name: "blue", hexValue: "#2196F3" },
      { name: "lightblue", hexValue: "#03A9F4" },
      { name: "cyan", hexValue: "#00BCD4" },
      { name: "teal", hexValue: "#009688" },
      { name: "green", hexValue: "#4CAF50" },
      { name: "lightgreen", hexValue: "#8BC34A" },
      { name: "lime", hexValue: "#CDDC39" },
      { name: "yellow", hexValue: "#FFEB3B" },
      { name: "amber", hexValue: "#FFC107" },
      { name: "orange", hexValue: "#FF9800" },
      { name: "deeporange", hexValue: "#FF5722" },
      { name: "brown", hexValue: "#795548" },
      { name: "grey", hexValue: "#9E9E9E" },
      { name: "bluegrey", hexValue: "#607D8B" }
    ]
  },
  {
    name: "Flat UI Colors v1",
    id: "flat-ui-colors-v1",
    emoji: "🤙",
    colors: [
      { name: "Turquoise", hexValue: "#1abc9c" },
      { name: "Emerald", hexValue: "#2ecc71" },
      { name: "PeterRiver", hexValue: "#3498db" },
      { name: "Amethyst", hexValue: "#9b59b6" },
      { name: "WetAsphalt", hexValue: "#34495e" },
      { name: "GreenSea", hexValue: "#16a085" },
      { name: "Nephritis", hexValue: "#27ae60" },
      { name: "BelizeHole", hexValue: "#2980b9" },
      { name: "Wisteria", hexValue: "#8e44ad" },
      { name: "MidnightBlue", hexValue: "#2c3e50" },
      { name: "SunFlower", hexValue: "#f1c40f" },
      { name: "Carrot", hexValue: "#e67e22" },
      { name: "Alizarin", hexValue: "#e74c3c" },
      { name: "Clouds", hexValue: "#ecf0f1" },
      { name: "Concrete", hexValue: "#95a5a6" },
      { name: "Orange", hexValue: "#f39c12" },
      { name: "Pumpkin", hexValue: "#d35400" },
      { name: "Pomegranate", hexValue: "#c0392b" },
      { name: "Silver", hexValue: "#bdc3c7" },
      { name: "Asbestos", hexValue: "#7f8c8d" }
    ]
  },
  {
    name: "Flat UI Colors Dutch",
    id: "flat-ui-colors-dutch",
    emoji: "🇳🇱",
    colors: [
      { name: "Sunflower", hexValue: "#FFC312" },
      { name: "Energos", hexValue: "#C4E538" },
      { name: "BlueMartina", hexValue: "#12CBC4" },
      { name: "LavenderRose", hexValue: "#FDA7DF" },
      { name: "BaraRose", hexValue: "#ED4C67" },
      { name: "RadiantYellow", hexValue: "#F79F1F" },
      { name: "AndroidGreen", hexValue: "#A3CB38" },
      { name: "MediterraneanSea", hexValue: "#1289A7" },
      { name: "LavenderTea", hexValue: "#D980FA" },
      { name: "VerryBerry", hexValue: "#B53471" },
      { name: "PuffinsBill", hexValue: "#EE5A24" },
      { name: "PixelatedGrass", hexValue: "#009432" },
      { name: "MerchantMarineBlue", hexValue: "#0652DD" },
      { name: "ForgottenPurple", hexValue: "#9980FA" },
      { name: "HollyHock", hexValue: "#833471" },
      { name: "RedPigment", hexValue: "#EA2027" },
      { name: "TurkishAqua", hexValue: "#006266" },
      { name: "20000LeaguesUnderTheSea", hexValue: "#1B1464" },
      { name: "CircumorbitalRing", hexValue: "#5758BB" },
      { name: "MagentaPurple", hexValue: "#6F1E51" }
    ]
  },
  {
    name: "Flat UI Colors American",
    id: "flat-ui-colors-american",
    emoji: "🇺🇸",
    colors: [
      { name: "LightGreenishBlue", hexValue: "#55efc4" },
      { name: "FadedPoster", hexValue: "#81ecec" },
      { name: "GreenDarnerTail", hexValue: "#74b9ff" },
      { name: "ShyMoment", hexValue: "#a29bfe" },
      { name: "CityLights", hexValue: "#dfe6e9" },
      { name: "MintLeaf", hexValue: "#00b894" },
      { name: "RobinsEggBlue", hexValue: "#00cec9" },
      { name: "ElectronBlue", hexValue: "#0984e3" },
      { name: "ExodusFruit", hexValue: "#6c5ce7" },
      { name: "SoothingBreeze", hexValue: "#b2bec3" },
      { name: "SourLemon", hexValue: "#ffeaa7" },
      { name: "FirstDate", hexValue: "#fab1a0" },
      { name: "PinkGlamour", hexValue: "#ff7675" },
      { name: "Pico8Pink", hexValue: "#fd79a8" },
      { name: "AmericanRiver", hexValue: "#636e72" },
      { name: "BrightYarrow", hexValue: "#fdcb6e" },
      { name: "OrangeVille", hexValue: "#e17055" },
      { name: "Chi-Gong", hexValue: "#d63031" },
      { name: "PrunusAvium", hexValue: "#e84393" },
      { name: "DraculaOrchid", hexValue: "#2d3436" }
    ]
  },
  {
    name: "Flat UI Colors Aussie",
    id: "flat-ui-colors-aussie",
    emoji: "🇦🇺",
    colors: [
      { name: "Beekeeper", hexValue: "#f6e58d" },
      { name: "SpicedNectarine", hexValue: "#ffbe76" },
      { name: "PinkGlamour", hexValue: "#ff7979" },
      { name: "JuneBud", hexValue: "#badc58" },
      { name: "CoastalBreeze", hexValue: "#dff9fb" },
      { name: "Turbo", hexValue: "#f9ca24" },
      { name: "QuinceJelly", hexValue: "#f0932b" },
      { name: "CarminePink", hexValue: "#eb4d4b" },
      { name: "PureApple", hexValue: "#6ab04c" },
      { name: "HintOfIcePack", hexValue: "#c7ecee" },
      { name: "MiddleBlue", hexValue: "#7ed6df" },
      { name: "Heliotrope", hexValue: "#e056fd" },
      { name: "ExodusFruit", hexValue: "#686de0" },
      { name: "DeepKoamaru", hexValue: "#30336b" },
      { name: "SoaringEagle", hexValue: "#95afc0" },
      { name: "GreenlandGreen", hexValue: "#22a6b3" },
      { name: "SteelPink", hexValue: "#be2edd" },
      { name: "Blurple", hexValue: "#4834d4" },
      { name: "DeepCove", hexValue: "#130f40" },
      { name: "WizardGrey", hexValue: "#535c68" }
    ]
  },
  {
    name: "Flat UI Colors British",
    id: "flat-ui-colors-british",
    emoji: "🇬🇧",
    colors: [
      { name: "ProtossPylon", hexValue: "#00a8ff" },
      { name: "Periwinkle", hexValue: "#9c88ff" },
      { name: "Rise-N-Shine", hexValue: "#fbc531" },
      { name: "DownloadProgress", hexValue: "#4cd137" },
      { name: "Seabrook", hexValue: "#487eb0" },
      { name: "VanaDylBlue", hexValue: "#0097e6" },
      { name: "MattPurple", hexValue: "#8c7ae6" },
      { name: "NanohanachaGold", hexValue: "#e1b12c" },
      { name: "SkirretGreen", hexValue: "#44bd32" },
      { name: "Naval", hexValue: "#40739e" },
      { name: "NasturcianFlower", hexValue: "#e84118" },
      { name: "LynxWhite", hexValue: "#f5f6fa" },
      { name: "BlueberrySoda", hexValue: "#7f8fa6" },
      { name: "MazarineBlue", hexValue: "#273c75" },
      { name: "BlueNights", hexValue: "#353b48" },
      { name: "HarleyOrange", hexValue: "#c23616" },
      { name: "HintOfPensive", hexValue: "#dcdde1" },
      { name: "ChainGangGrey", hexValue: "#718093" },
      { name: "PicoVoid", hexValue: "#192a56" },
      { name: "ElectroMagnetic", hexValue: "#2f3640" }
    ]
  },
  {
    name: "Flat UI Colors Spanish",
    id: "flat-ui-colors-spanish",
    emoji: "🇪🇸",
    colors: [
      { name: "JacksonsPurple", hexValue: "#40407a" },
      { name: "C64Purple", hexValue: "#706fd3" },
      { name: "SwanWhite", hexValue: "#f7f1e3" },
      { name: "SummerSky", hexValue: "#34ace0" },
      { name: "CelestialGreen", hexValue: "#33d9b2" },
      { name: "LuckyPoint", hexValue: "#2c2c54" },
      { name: "Liberty", hexValue: "#474787" },
      { name: "HotStone", hexValue: "#aaa69d" },
      { name: "DevilBlue", hexValue: "#227093" },
      { name: "PalmSpringsSplash", hexValue: "#218c74" },
      { name: "FlourescentRed", hexValue: "#ff5252" },
      { name: "SyntheticPumpkin", hexValue: "#ff793f" },
      { name: "CrocodileTooth", hexValue: "#d1ccc0" },
      { name: "MandarinSorbet", hexValue: "#ffb142" },
      { name: "SpicedButterNut", hexValue: "#ffda79" },
      { name: "EyeOfNewt", hexValue: "#b33939" },
      { name: "ChileanFire", hexValue: "#cd6133" },
      { name: "GreyPorcelain", hexValue: "#84817a" },
      { name: "AlamedaOchre", hexValue: "#cc8e35" },
      { name: "Desert", hexValue: "#ccae62" }
    ]
  },
  {
    name: "Flat UI Colors Indian",
    id: "flat-ui-colors-indian",
    emoji: "🇮🇳",
    colors: [
      { name: "OrchidOrange", hexValue: "#FEA47F" },
      { name: "SpiroDiscoBall", hexValue: "#25CCF7" },
      { name: "HoneyGlow", hexValue: "#EAB543" },
      { name: "SweetGarden", hexValue: "#55E6C1" },
      { name: "FallingStar", hexValue: "#CAD3C8" },
      { name: "RichGardenia", hexValue: "#F97F51" },
      { name: "ClearChill", hexValue: "#1B9CFC" },
      { name: "WhitePepper", hexValue: "#F8EFBA" },
      { name: "Keppel", hexValue: "#58B19F" },
      { name: "ShipsOfficer", hexValue: "#2C3A47" },
      { name: "FieryFuchsia", hexValue: "#B33771" },
      { name: "BlueBell", hexValue: "#3B3B98" },
      { name: "GeorgiaPeach", hexValue: "#FD7272" },
      { name: "OasisStream", hexValue: "#9AECDB" },
      { name: "BrightUbe", hexValue: "#D6A2E8" },
      { name: "MagentaPurple", hexValue: "#6D214F" },
      { name: "EndingNavyBlue", hexValue: "#182C61" },
      { name: "SasquatchSocks", hexValue: "#FC427B" },
      { name: "PineGlade", hexValue: "#BDC581" },
      { name: "HighlighterLavender", hexValue: "#82589F" }
    ]
  },
  {
    name: "Flat UI Colors French",
    id: "flat-ui-colors-french",
    emoji: "🇫🇷",
    colors: [
      { name: "FlatFlesh", hexValue: "#fad390" },
      { name: "MelonMelody", hexValue: "#f8c291" },
      { name: "Livid", hexValue: "#6a89cc" },
      { name: "Spray", hexValue: "#82ccdd" },
      { name: "ParadiseGreen", hexValue: "#b8e994" },
      { name: "SquashBlossom", hexValue: "#f6b93b" },
      { name: "MandarinRed", hexValue: "#e55039" },
      { name: "AzraqBlue", hexValue: "#4a69bd" },
      { name: "Dupain", hexValue: "#60a3bc" },
      { name: "AuroraGreen", hexValue: "#78e08f" },
      { name: "IcelandPoppy", hexValue: "#fa983a" },
      { name: "TomatoRed", hexValue: "#eb2f06" },
      { name: "YueGuangBlue", hexValue: "#1e3799" },
      { name: "GoodSamaritan", hexValue: "#3c6382" },
      { name: "Waterfall", hexValue: "#38ada9" },
      { name: "CarrotOrange", hexValue: "#e58e26" },
      { name: "JalapenoRed", hexValue: "#b71540" },
      { name: "DarkSapphire", hexValue: "#0c2461" },
      { name: "ForestBlues", hexValue: "#0a3d62" },
      { name: "ReefEncounter", hexValue: "#079992" }
    ]
  }
]

export default palette
