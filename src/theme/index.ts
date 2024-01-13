import createPalette, { Palette, PaletteInput } from "./create-palette";
import createTypography, {
  Typography,
  TypographyInput,
} from "./create-typography";
import zIndex, { ZIndex } from "./z-index";
import spacing, { Spacing } from "./spacing";

export interface ITheme {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  zIndex: ZIndex;
}

export interface ThemeInput {
  palette?: PaletteInput;
  typography?: TypographyInput;
}

const createTheme = (options: ThemeInput): ITheme => {
  const { palette: paletteInput = {}, typography: typographyInput = {} } =
    options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);

  return {
    palette,
    spacing,
    typography,
    zIndex,
  };
};

export default createTheme;
