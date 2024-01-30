import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { IImage } from "./Image.types";
import ServicesHolderDark from "./holder-images/services-placeholder/ServicePlaceHolderDark.png";
import ServicesHolderLight from "./holder-images/services-placeholder/ServicePlaceHolderLight.png";
import BannerHolderDark from "./holder-images/banner-placeholder/BannerPlaceHolderDark.png";
import BannerHolderLight from "./holder-images/banner-placeholder/BannerPlaceHolderLight.png";
import MiniBannerHolderDark from "./holder-images/mini-banner-placeholder/MiniBannerDark.svg";
import MiniBannerHolderLight from "./holder-images/mini-banner-placeholder/MiniBannerLight.svg";
import ProfileHolderDark from "./holder-images/profile-placeholder/ProfilePlaceHolderDark.png";
import ProfileHolderLight from "./holder-images/profile-placeholder/ProfilePlaceHolderLight.png";
import WalletHolder from "./holder-images/wallet-placeholder/WalletPlaceholder.png";
import { ImageStyle } from "./Image.style";
import Flex from "../flex";
import Loading from "../loading";

const Image = (props: IImage) => {
  const {
    alt,
    loadImgTag = false,
    loadingSize = 30,
    isWhiteLoading,
    src,
    holderType = "services",
    ...otherProps
  } = props;
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(src);

  const renderHolderImage = () => {
    switch (holderType) {
      case "services": {
        if (theme.isDark) {
          return ServicesHolderDark;
        }
        return ServicesHolderLight;
      }
      case "banner": {
        if (theme.isDark) {
          return BannerHolderDark;
        }
        return BannerHolderLight;
      }
      case "mini-banner": {
        if (theme.isDark) {
          return MiniBannerHolderDark;
        }
        return MiniBannerHolderLight;
      }
      case "profile": {
        if (theme.isDark) {
          return ProfileHolderDark;
        }
        return ProfileHolderLight;
      }
      case "wallet": {
        return WalletHolder;
      }
    }
  };

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  const handleOnError = () => {
    setImageSrc(renderHolderImage());
  };

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src, alt]);

  return (
    <>
      {loadImgTag ? (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleOnLoad}
          onError={handleOnError}
        />
      ) : (
        <ImageStyle
          $backgroundUrl={isLoading ? renderHolderImage() : ""}
          {...(otherProps as IImage)}
          $loadingSize={loadingSize}
        >
          {isLoading ? (
            <Flex fullWidth>
              <Loading
                size={loadingSize}
                isWhite={theme.isDark || isWhiteLoading}
              />
            </Flex>
          ) : null}
          <img
            src={imageSrc}
            alt={alt}
            onLoad={handleOnLoad}
            onError={handleOnError}
          />
        </ImageStyle>
      )}
    </>
  );
};

export default Image;
