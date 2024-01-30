import { IFlex } from "../flex/Flex.types";

export interface IImage extends IFlex {
  src: string;
  alt: string;
  loadImgTag?: boolean;
  loadingSize?: number;
  isWhiteLoading?: boolean;
  holderType?: "services" | "banner" | "mini-banner" | "profile" | "wallet";
}

export interface IImageStyle {
  $loadingSize: number;
  $backgroundUrl: string;
}
