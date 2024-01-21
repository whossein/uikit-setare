import { IBaseProps } from "../base/Base.types";

export interface IBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactElement | string | null;
  showClose?: boolean;
  footer?: React.ReactElement;
  fullScreen?: boolean;
  headerStyle?: IBaseProps;
  bodyStyle?: IBaseProps;
}

export interface IPointerModel {
  point: {
    y: number;
    x: number;
  };
}
