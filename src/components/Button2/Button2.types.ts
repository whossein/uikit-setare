import { MouseEventHandler } from "react";

export interface ButtonProps {
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
