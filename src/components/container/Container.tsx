import React, { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Base from "../base";
import { ContainerStyle } from "./Container.style";
import { IContainerProps } from "./Container.types";
import Loading from "../loading";

const Container = (props: IContainerProps) => {
  const {
    size = "full",
    className = "",
    component = "div",
    noPadding = false,
    children,
    bgColor = 1,
    pb = 32,
    childrenProps,
    loading = false,
    listFlex = false,
    showNavbar = false,
    onScroll,
    needIphonePadding = true,
    containerBgColor,
    ...otherProps
  } = props;

  const outletContext = useOutletContext<{
    isLoading?: boolean;
  }>();
  const ContainerScrollRef = useRef();
  const containerLoading = loading || outletContext?.isLoading;

  return (
    <ContainerStyle
      as={component}
      $size={size}
      $noPadding={noPadding}
      className={`morph-container ${className}`}
      $listFlex={listFlex}
      $showNavbar={showNavbar}
      bgColor={containerBgColor}
      {...otherProps}
    >
      <div className="morph-container-wrapper">
        <Base
          ref={ContainerScrollRef}
          onScroll={onScroll}
          component="div"
          bgColor={bgColor}
          className="morph-container-content"
          pb={pb}
          position={containerLoading ? "relative" : "static"}
          {...childrenProps}
        >
          {children}
          {containerLoading && (
            <div className="loading-wrapper">
              <Loading size={64} />
            </div>
          )}
        </Base>
      </div>
    </ContainerStyle>
  );
};

export default Container;
