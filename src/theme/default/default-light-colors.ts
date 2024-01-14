import {
  IBGColor,
  IBorderColor,
  IColors,
  ITextColor,
  ITransparent,
} from "../../types/colors.types";

export const defaultBgColor: IBGColor = {
  1: "#FFFFFF",
  2: "#FFFFFF",
  3: "#F4F4FA",
  4: "#56596A",
  5: "#5439AC",
  6: "#E4E0F4",
  7: "#342A52",
  8: "#C6BFED",
  9: "#E54660",
  10: "#39AC65",
  11: "#F58122",
  12: "#DEF1F6",
  13: "#F6DEE5",
  16: "#676A79",
  17: "#F5F3FC",
};

export const defaultBorderColor: IBorderColor = {
  1: "#909090",
  2: "#D6D6D6",
  3: "#56596A",
  4: "#5439AC",
  5: "#909090",
  6: "#E54660",
  7: "#5439AC",
  8: "#39AC65",
  9: "#E4E0F4",
  10: "#C6BFED",
  11: "#E54660",
  12: "#39AC65",
  13: "#F58122",
};

export const defaultTextColor: ITextColor = {
  1: "#56596A",
  2: "#FFFFFF",
  3: "#909090",
  4: "#909090",
  5: "#342A52",
  6: "#5439AC",
  7: "#5439AC",
  8: "#D6D6D6",
  9: "#39AC65",
  10: "#E54660",
  11: "#FFFFFF",
  12: "#F58122",
};

export const defaultTransparentColor: ITransparent = {
  1: "rgba(229, 70 ,96, 0.15)",
  2: "rgba(57, 172, 101, 0.15)",
  3: "rgba(245, 129, 34, 0.15)",
  4: "rgba(255, 255, 255, 0.1)",
};

const defaultLightColors: IColors = {
  bgColor: defaultBgColor,
  borderColor: defaultBorderColor,
  textColor: defaultTextColor,
  transparentColor: defaultTransparentColor,
};

export default defaultLightColors;
