import {
  IBGColor,
  IBorderColor,
  IBorderRadius,
  IFontWeight,
  IMarginPatter,
  IOperator,
  IShadow,
  ISpacing,
  ITextColor,
  ITextSize,
  ITransparent,
} from "../../types";
import { MouseEventHandler } from "react";

export interface IBaseProps {
  mt?: ISpacing;
  mb?: ISpacing;
  mr?: ISpacing;
  ml?: ISpacing;
  margin?: `0 auto` | IMarginPatter;
  pt?: ISpacing | 0;
  pb?: ISpacing | 0;
  pr?: ISpacing | 0;
  pl?: ISpacing | 0;
  padding?: IMarginPatter;
  borderRadius?: IBorderRadius | 0;
  borderColor?: keyof IBorderColor;
  borderSize?: number;
  textColor?: keyof ITextColor;
  fontSize?: ITextSize;
  fontWeight?: keyof IFontWeight;
  shadow?: keyof IShadow;
  bgColor?: keyof IBGColor;
  bgColorOperator?: keyof IOperator;
  transparentColor?: keyof ITransparent;
  dir?: "ltr" | "rtl";
  textAlign?: "right" | "left" | "center" | "justify";
  onClick?: (e: MouseEventHandler) => void;
  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
  onPointerMove?: (e: React.UIEvent<HTMLElement>) => void;
  onDrag?: (e: React.UIEvent<HTMLElement>) => void;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  /** The flex property is a shorthand property for:
    flex-grow
    flex-shrink
    flex-basis 
    */
  flex?:
    | number
    | `${number}`
    | `${number} ${number}`
    | `${number} ${number} ${number}px`
    | `${number} ${number} ${number}%`
    | `${number} ${number} ${number}em`
    | `${number} ${number} ${number}rem`;
  rotate?: number;
  position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
  needPaddingTop?: boolean;
  isfixbottom?: "true" | "false";
  fillpadding?: "true" | "false";
  enableIphonePadding?: boolean;
  component?: React.ComponentType | string;
  className?: string;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  style?: any;
  id?: string;
}
