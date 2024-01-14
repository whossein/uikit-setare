import { IColors } from "../types/colors.types";
import ITheme, { IShadow, TDirection } from "../types/theme.types";
import createPalette, { TPaletteInput } from "./create-palette";
import defaultCommon, {
  defaultDirection,
  defaultShadow,
} from "./default/default-common";
import {
  defaultBgColor,
  defaultBorderColor,
  defaultTextColor,
  defaultTransparentColor,
} from "./default/default-light-colors";

export type TThemeInput = TPaletteInput & {
  name: string;
  // typography?: TypographyInput;
  direction?: TDirection;
  isDark?: boolean;
  shadow?: IShadow;
};

const createTheme = (options: TThemeInput): ITheme => {
  const {
    bgColor = defaultBgColor,
    borderColor = defaultBorderColor,
    textColor = defaultTextColor,
    transparentColor = defaultTransparentColor,
    direction = defaultDirection,
    isDark = false,
    shadow = defaultShadow,
    name,
  } = options || {};

  const palette: IColors = createPalette({
    bgColor,
    borderColor,
    textColor,
    transparentColor,
  });

  return {
    ...palette,
    ...defaultCommon,
    direction,
    isDark,
    isLight: !isDark,
    name,
    shadow,
  };
};

export default createTheme;
