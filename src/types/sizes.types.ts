export type IBorderRadius = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 64 | 80;
export type ITextSize = 10 | 12 | 14 | 16 | 18 | 24 | 32 | 48 | 72 | 96;
export type ISpacing =
  | 2
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

export type IMarginPatter =
  | `${ISpacing | number | 0}px`
  | `${ISpacing | number | 0}px ${ISpacing | number | 0}px`
  | `${ISpacing | 0}px ${ISpacing | 0}px ${ISpacing | 0}px`
  | `${ISpacing | 0}px ${ISpacing | 0}px ${ISpacing | 0}px ${ISpacing | 0}px`;
