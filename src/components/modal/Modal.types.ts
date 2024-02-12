import { TListIcon } from "../icon/Icon.types";

export interface IModal {
  isOpen: boolean;
  title?: React.ReactElement | string | null;
  children?: React.ReactNode;
  buttons?: ButtonList[];
  iconType?: TListIcon;
  fullScreen?: boolean;
}

export interface ButtonList {
  title: string | null;
  onClick(): void;
  isLoading?: boolean;
}
