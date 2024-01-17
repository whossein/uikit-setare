import { IBaseProps } from "../base/Base.types";

type TPureCheckbox = IBaseProps & React.HTMLProps<HTMLInputElement>;

export interface IRadioButtonProps extends TPureCheckbox {
    label?: React.ReactNode | JSX.Element | JSX.Element[] | any;
    validatior?: any;
    mode?: "classic" | "box" | "onlyLabel" | "labelIcon";
    width?: string | number;
  }