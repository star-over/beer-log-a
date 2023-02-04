export interface Beer {
  id:                number;
  name:              string;
  tagline:           string;
  first_brewed:      string;
  description:       string;
  image_url:         null | string;
  abv:               number; //0.5 - 55
  ibu:               number | null; // 0 - 1157
  target_fg:         number | null; // 0 - 1125
  target_og:         number | null; // 0 - 1157
  ebc:               number | null; // 0 - 600
  srm:               number | null; // 0 - 305
  ph:                number | null; // 0 - 79
  attenuation_level: number | null;  // 0 - 102.3
  volume:            ValueUnit;
  boil_volume:       ValueUnit;
  method:            Method;
  ingredients:       Ingredients;
  food_pairing:      string[];
  brewers_tips:      string;
}

export interface ValueUnit {
  value: number | null;
  unit:  Unit;
}

export enum Unit {
  Grams = "grams",
  Kilogram = "kilogram",
  Kilograms = "kilograms",
  Ml = "ml",
  Litres = "litres",
  Total = "total",
  Celsius = "celsius",
}


export interface Ingredients {
  malt:  Malt[];
  hops:  Hop[];
  yeast: null | string;
}

export interface Hop {
  name:      string;
  amount:    ValueUnit;
  add:       string; //start,middle,end,dry hop,15,0,fv,FV,90,whirlpool,secondary,maturation,60,30,Start,Middle,End,Dry Hop,Whirlpool,Mash,Additions,70,Flame Out,First Wort Hops,10,Flame out,Wood Ageing,Kettle,FV Addition,45,65
  attribute: Attribute;
}

export enum Attribute {
  Aroma = "aroma",
  PurpleAroma = "Aroma",
  AromaBitter = "aroma / bitter",
  AttributeAroma = " aroma",
  Bitering = "Bitering",
  Bittering = "Bittering",
  AttributeBitter = "Bitter",
  Bitter = "bitter",
  AttributeFlavour = "Flavour",
  Flavoour = "flavoour",
  Flavouor = "flavouor",
  Flavour = "flavour",
  Twist = "twist",
  WoodAgeing = "Wood Ageing",
}

export interface Malt {
  name:   string;
  amount: ValueUnit;
}

export interface Method {
  mash_temp:    MashTemp[];
  fermentation: Fermentation;
  twist:        null | string;
}

export interface Fermentation {
  temp: ValueUnit;
}

export interface MashTemp {
  temp:     ValueUnit;
  duration: number | null;
}
