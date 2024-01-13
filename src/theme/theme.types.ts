export type ITheme = IColors &
  ICommon & {
    mode: string;
    isLight: boolean;
    isDark: boolean;
  };

export interface IColors {
  bgColor: IBGColor;
  textColor: ITextColor;
  borderColor: IBorderColor;
  transparentColor: ITransparent;
}

// color
export type IBorderColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
};
export type ITextColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};
export type IBGColor = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  16: string;
  17: string;
};
export type ITransparent = {
  1: string;
  2: string;
  3: string;
  4: string;
};
export type IOperator = {
  "01/light": string;
  "02/light": string;
  "03/light": string;
  "04/light": string;
  "05/light": string;
  "06/light": string;
  1: string;
  2: string;
  3: string;
};

// morph constants
export type ISpacing =
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 52
  | 64
  | 80
  | 120
  | -4
  | -8;
export type IBorderRadius = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 64 | 80;
export type ITextSize = 10 | 12 | 14 | 16 | 18 | 24 | 32 | 48 | 72 | 96;
export type ITextWeight = { bold: number; regular: number; light: number };
export type IShadow = {
  E1: string;
  E2: string;
  E3: string;
  E4: string;
  E5: string;
  E6: string;
  E7: string;
};

export interface ICommon {
  direction: "right" | "left";
  operator: IOperator;
  shadow: IShadow;
  fontWeight: ITextWeight;
}

export default ITheme;
