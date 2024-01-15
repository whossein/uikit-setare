import styled, { css, keyframes } from "styled-components";
import { IFlex } from "./Flex.types";
import { BaseStyles } from "../base/Base.styles";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%,0.4);
  }
  100% {
    background-color: hsl(200, 20%, 95%,0.4);
  }
`;

export const FlexStyle = styled(BaseStyles)<IFlex>`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : "center"};
  justify-items: ${({ justifyItems }) =>
    justifyItems ? justifyItems : "center"};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  flex: ${({ flex }) => (flex ? flex : "unset")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "unset")};
  gap: ${({ gap }) => {
    if (gap) {
      if (typeof gap === "number") {
        return `${gap}px`;
      } else {
        return gap;
      }
    }

    return null;
  }};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "unset")};
  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }

    return null;
  }};
  animation-name: ${({ loading }) => loading && skeletonLoading};
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  overflow: ${({ overflow }) => (overflow ? overflow : "unset")};
  overflow-y: ${({ overflowY }) => (overflowY ? overflowY : "unset")};
  overflow-x: ${({ overflowX }) => (overflowX ? overflowX : "unset")};
`;
