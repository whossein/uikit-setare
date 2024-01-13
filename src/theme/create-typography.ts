export interface Typography {
  fontFamily: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeH4: string;
  fontSizeH5: string;
  fontSizeH6: string;
  fontSizeButton: string;
  fontWeightNormal: number;
  fontWeightLight: number;
  fontWeightBold: number;
}

export type TypographyInput = {
  +readonly [K in keyof Typography]+?: Typography[K];
} & {
  fontSize?: number;
  htmlFontSize?: number;
};

const defaultFontFamily = "'PX Grotesk', sansSerif";

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontFamily = defaultFontFamily,

    /* sizes */
    fontSize = 14,
    htmlFontSize = 16,

    /* weights */
    fontWeightNormal = 400,
    fontWeightLight = 300,
    fontWeightBold = 700,
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    fontFamily,
    fontSizeH1: pxToRem(96),
    fontSizeH2: pxToRem(60),
    fontSizeH3: pxToRem(48),
    fontSizeH4: pxToRem(34),
    fontSizeH5: pxToRem(24),
    fontSizeH6: pxToRem(20),
    fontSizeButton: pxToRem(14),
    fontWeightNormal,
    fontWeightLight,
    fontWeightBold,
  };
};

export default createTypography;
