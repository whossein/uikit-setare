import styled, { css } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IContainerProps, IContainerStyle } from "./Container.types";

export const ContainerStyle = styled(BaseStyles)<Partial<IContainerProps & IContainerStyle>>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({ $showNavbar, $size }) =>
    $showNavbar ? `calc(100% - 84px - ${$size}px )` : `calc(100% - ${$size}px)`};

  ${({ padding }) => {
    if (typeof padding === "undefined") {
      return css`
        padding: 20px 20px 0px;
      `;
    }
  }};

  ${({ pt }) => {
    if (typeof pt !== "undefined") {
      return css`
        padding-left: ${pt}px;
      `;
    }

    return;
  }};
  ${({ pl }) => {
    if (typeof pl !== "undefined") {
      return css`
        padding-left: ${pl}px;
      `;
    }

    return;
  }};

  ${({ pr }) => {
    if (typeof pr !== "undefined") {
      return css`
        padding-right: ${pr}px;
      `;
    }

    return;
  }};

  border-radius: 30px 30px 0 0;
  background-color: ${({ theme, bgColor }) =>
    theme.bgColor[bgColor!]};
  margin-top: ${({ $size }) => ($size === "full" ? 0 : $size + "px")};

  .morph-container-wrapper {
    height: 100%;

    .morph-container-content {
      overflow-y: auto;
      height: calc(100% - ${({ $showNavbar }) => ($showNavbar ? "84px" : "0px")});
      padding-bottom: ${({ $showNavbar }) => ($showNavbar ? "0px" : "20px")};

      ${({ $listFlex }) => {
        if ($listFlex) {
          return css`
            display: flex;
            flex-direction: column;
          `;
        }

        return null;
      }}
    }
  }

  .loading-wrapper {
    background: ${({ theme }) => {
      return theme.isDark ? "rgb(41 41 41 / 76%)" : "#d7d7d78a";
    }};
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
  }
`;
