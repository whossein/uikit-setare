import { IColors, IOperator } from "./colors.types";
import { IFontWeight } from "./typography";

export type IShadow = {
  E1: string;
  E2: string;
  E3: string;
  E4: string;
  E5: string;
  E6: string;
  E7: string;
};

export type TDirection = "right" | "left";

export interface ICommon {
  direction: TDirection;
  operator: IOperator;
  shadow: IShadow;
  fontWeight: IFontWeight;
  name: string;
  isLight: boolean;
  isDark: boolean;
}

export type ITheme = IColors & ICommon;

export default ITheme;
