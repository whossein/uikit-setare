// export interface ICommon {
//   direction: TDirection;
//   operator: IOperator;
//   shadow: IShadow;
//   fontWeight: ITextWeight;
//   name: string;
//   isLight: boolean;
//   isDark: boolean;
// }

import { IOperator } from "../../types/colors.types";
import { ICommon, IShadow, TDirection } from "../../types/theme.types";
import { IFontWeight } from "../../types/typography";

export const defaultDirection: TDirection = "right";

export const defaultOperatorColor: IOperator = {
  "01/light": "rgba(87, 197, 208, 0.15)",
  "02/light": "rgba(255, 179, 0, 0.15)",
  "03/light": "rgba(159, 51, 119, 0.15)",
  "04/light": "rgba(87,197,208, 0.25)",
  "05/light": "rgba(255,179,0, 0.25)",
  "06/light": "rgba(159,51,119, 0.25)",
  1: "#57C5D0",
  2: "#FFB300",
  3: "#9F3377",
};

export const defaultShadow: IShadow = {
  E1: "0px -1px 4px rgba(0, 0, 0, 0.04)",
  E2: "0px 1px 4px rgba(0, 0, 0, 0.04)",
  E3: "0px 1px 8px rgba(0, 0, 0, 0.08)",
  E4: "0px 1px 8px rgba(0, 0, 0, 0.12)",
  E5: "0px 8px 12px rgba(0, 0, 0, 0.12)",
  E6: "0px 8px 16px rgba(0, 0, 0, 0.16)",
  E7: "0px 16px 24px rgba(0, 0, 0, 0.16",
};

export const defaultFontWeight: IFontWeight = {
  light: 300,
  regular: 400,
  bold: 700,
};

export const defaultCommon: ICommon = {
  direction: defaultDirection,
  fontWeight: defaultFontWeight,
  isDark: false,
  isLight: true,
  name: "default-theme",
  operator: defaultOperatorColor,
  shadow: defaultShadow,
  autoSetLtrFontFamily: true,
};

export default defaultCommon;
