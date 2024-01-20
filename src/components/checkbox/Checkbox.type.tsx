import { MouseEventHandler } from "react";
import { IBaseProps } from "../base/Base.types";

export type TPureCheckbox = IBaseProps &
  Omit<React.HTMLProps<HTMLInputElement>, "onClick">;

export interface ICheckbox extends TPureCheckbox {
  label?: React.ReactNode | JSX.Element | JSX.Element[] | any;
  onCheckBoxClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onWrapperClick?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  onClick?: TCheckBoxClick;
  showTick?: boolean;
  mode?: "classic" | "box";
  disabled?: boolean;
}

export type TCheckBoxClick = (
  e: MouseEventHandler | React.MouseEvent<HTMLInputElement, MouseEvent>
) => void;
