import { IBaseProps } from "../base/Base.types";

export type TVariant =
  | "headline"
  | "title1"
  | "title2"
  | "body"
  | "caption1"
  | "caption2";

export type TWhiteSpace = "break-spaces" | "normal" | "nowrap";

export interface ITextProps extends IBaseProps {
  variant?: TVariant;
  // children?: React.ReactNode;
  label?: React.ReactNode | string;
  useLtrFontFamily?: boolean;
  whiteSpace?: TWhiteSpace;
  letterSpacing?: string;
  fontStyle?: "normal" | "italic" | "oblique";
  lineHeight?: number;
}
