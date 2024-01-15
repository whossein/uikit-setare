import { IBaseProps } from "../base/Base.types";

type TJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

type TAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

type TAlignContent =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "initial"
  | "inherit";

export interface IFlex extends IBaseProps {
  alignItems?: TAlignItems;
  justifyContent?: TJustify;
  alignContent?: TAlignContent;
  justifyItems?: TJustify;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  loading?: number;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: number | string;
  fullWidth?: boolean;
  overflow?: "auto" | "visible" | "hidden" | "clip" | "scroll";
  overflowY?: "auto" | "visible" | "hidden" | "clip" | "scroll";
  overflowX?: "auto" | "visible" | "hidden" | "clip" | "scroll";
}
