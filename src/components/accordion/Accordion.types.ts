import { ReactElement } from "react";

export interface IAccordion {
  type?: "arrow" | "plus";
  elements: IElement[];
  selectable?: boolean;
  className?: string;
  onChange?(e: any[]): void;
  maxSelect?: number;
  noBorder?: boolean;
}

export interface IElement {
  element: ReactElement;
  title: string | ReactElement;
  value?: number | string;
}

export interface IItemAccordion {
  $dataHeight: number;
  $noBorder?: boolean;
  $headerHeight: number;
//   $showHeaderBorder: boolean;
}
