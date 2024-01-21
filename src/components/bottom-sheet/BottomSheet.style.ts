import styled, { DefaultTheme, css } from "styled-components";
import { BaseStyles } from "../base/Base.styles";

export interface ITheme {
  isFullScreen?: boolean;
}

export interface IChild {
  headerHeight: number;
  footerHeight: number;
  isFullScreen: boolean;
}

export const Line = styled.div`
  width: 60px;
  height: 5px;
  background: ${({ theme }) => theme.borderColor[2]};
  border-radius: 3px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Close = styled.div`
  position: absolute;
  height: 32px;
  width: 32px;
  right: 20px;
  top: 15px;
  opacity: 1;
`;

export const Header = styled(BaseStyles)<ITheme>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px 0px;
  width: 100%;
  height: auto;
  border-radius: ${({ isFullScreen }) =>
    isFullScreen ? "0px 0px 0px 0px" : "32px 32px 0px 0px"};
  path {
    fill: ${({ theme }) => theme.borderColor[1]};
  }
  ${({ padding, bgColor, theme }) => {
    return css`
      padding: ${padding === undefined ? "16px 20px 0px" : padding};
      background: ${bgColor === undefined ? theme.bgColor[1] : bgColor};
    `;
  }}
`;
export const Footer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
`;

export const Stage = styled(BaseStyles)<ITheme>`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor[1]};
  border-radius: ${({ isFullScreen }) =>
    isFullScreen ? "0px 0px 0px 0px" : "32px 32px 0px 0px"};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "100%" : "90%")};
  height: ${({ isFullScreen }) => isFullScreen && "100%"};
`;

export const Children = styled(BaseStyles)<IChild>`
  max-height: ${({ footerHeight, headerHeight }) =>
    `calc(100% - ${footerHeight + headerHeight}px)`};
  //max-height: max-content;
  overflow-y: auto;
  height: ${({ isFullScreen }) => isFullScreen && "100%"};
  ${({ padding }) => {
    return css`
      padding: ${padding === undefined ? "20px 20px 12px" : padding};
      @media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
        padding: ${padding === undefined ? "20px 20px 40px" : padding};
      }
    `;
  }};
`;

export const parentStyle: React.CSSProperties = {
  position: "absolute",
  backgroundColor: "#00000042",
  height: "100%",
  width: "100%",
  zIndex: "999",
  opacity: 0,
  top: 0,
  left: 0,
};
export const childStyle: React.CSSProperties = {
  display: "flex",
  backgroundColor: "transport",
  width: "100%",
  position: "absolute",
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  padding: "0",
  boxSizing: "border-box",
  bottom: "-100vh",
  flexDirection: "column",
  justifyContent: "flex-end",
};
