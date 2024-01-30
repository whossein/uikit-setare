import { IBGColor } from "../../types";
import { IBaseProps } from "../base/Base.types";

export interface IContainerProps extends IBaseProps {
  size?: "full" | 20 | 80 | 130 | 180;
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
  childrenProps?: IBaseProps;
  loading?: boolean;
  listFlex?: boolean;
  showNavbar?: boolean;
  containerBgColor?: keyof IBGColor;
  needIphonePadding?: boolean;
}

export interface IContainerStyle {
  $size?: string | number;
  $noPadding?: boolean;
  $listFlex?: boolean;
  $showNavbar?: boolean;
}
