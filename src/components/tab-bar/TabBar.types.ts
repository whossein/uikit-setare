import { FormEvent } from "react";
import { IBorderColor } from "../../types";
import { IBaseProps } from "../base/Base.types";
import { TListIcon } from "../icon/Icon.types";

export interface ITabBar extends IBaseProps {
  data: ITabBarItem[];
  className?: string;
  onChange?: (value: string | number) => void;
  defaultValueTab?: string | number;
  labelTitle?: string | null;
  showSeprator?: boolean;
  sepratorColor?: keyof IBorderColor;
}

export type ITabBarItem = {
  title: string;
  value: string;
  icon?: TListIcon;
};

export interface IItemsWrapper {
  onClick?: (e: FormEvent<HTMLDivElement>) => void;
  showSeparator?: boolean;
  separatorColor?: keyof IBorderColor;
}

export interface IOuterInnerWrapperStyle {
  labelTitle?: boolean;
}
