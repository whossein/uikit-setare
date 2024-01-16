import { MouseEventHandler } from "react";
import { IBaseProps } from "../base/Base.types";

type TPureButton = IBaseProps &
  Omit<React.HTMLProps<HTMLButtonElement>, "size" | "label" | "onClick">;

export type TColorType = "primary" | "green" | "orange" | "custom";

export interface IButtonProps extends TPureButton {
  variant?: "fill" | "outlined" | "text";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  loading?: number;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: "button" | "reset" | "submit";
  colorType?: TColorType;
  href?: string;
  link?: string;
  label?: string | null;
  loadingSize?: number;
  navigate?: (link: string) => void;
  onClick?: (
    e: MouseEventHandler | MouseEventHandler<HTMLButtonElement>
  ) => void;
}
