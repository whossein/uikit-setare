import {
  IBGColor,
  IBorderColor,
  IColors,
  ITextColor,
  ITransparent,
} from "../../types/colors.types";

export const defaultBgColor: IBGColor = {
  1: "#202020",
  2: "#444444",
  3: "#303030",
  4: "#202020",
  5: "#57c5d0",
  6: "#444444",
  7: "#FFFFFF",
  8: "#577176",
  9: "#E54660",
  10: "#39AC65",
  11: "#F58122",
  12: "#334647",
  13: "#4B3337",
  16: "#373737",
  17: "#303030",
};

export const defaultBorderColor: IBorderColor = {
  1: "#909090",
  2: "#D6D6D6",
  3: "#FFFFFF",
  4: "#FFFFFF",
  5: "#FFFFFF",
  6: "#E54660",
  7: "#53C5D0",
  8: "#39AC65",
  9: "#444444",
  10: "#577176",
  11: "#E54660",
  12: "#39AC65",
  13: "#F58122",
};

export const defaultTextColor: ITextColor = {
  1: "#FFFFFF",
  2: "#56596A",
  3: "#909090",
  4: "#F4F4FA",
  5: "#FFFFFF",
  6: "#FFFFFF",
  7: "#53C5D0",
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
