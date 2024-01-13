export interface Palette {
  white: string;
  grey: string;
  black: string;
  primary: string;
  secondary: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
  const {
    white = "#fff",
    grey = "#f7f9fa",
    black = "#222",
    primary = "#6d30e7",
    secondary = "#dfdded",
  } = palette;

  return {
    white,
    grey,
    black,
    primary,
    secondary,
  };
};

export default createPalette;
