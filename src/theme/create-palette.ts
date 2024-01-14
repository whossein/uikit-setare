import {
  IBGColor,
  IBorderColor,
  IColors,
  ITextColor,
  ITransparent,
} from "../types/colors.types";
import {
  defaultBgColor,
  defaultBorderColor,
  defaultTextColor,
  defaultTransparentColor,
} from "./default/default-light-colors";

export type TPaletteInput = {
  bgColor?: IBGColor;
  textColor?: ITextColor;
  borderColor?: IBorderColor;
  transparentColor?: ITransparent;
};

const createPalette = (palette: TPaletteInput): IColors => {
  let {
    bgColor = defaultBgColor,
    borderColor = defaultBorderColor,
    textColor = defaultTextColor,
    transparentColor = defaultTransparentColor,
  } = palette;

  return {
    bgColor,
    borderColor,
    textColor,
    transparentColor,
  };
};

export default createPalette;
