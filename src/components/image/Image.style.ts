import styled, { css } from "styled-components";
import Flex from "../flex";
import { IImageStyle } from "./Image.types";

export const ImageStyle = styled(Flex)<IImageStyle>`
  background-image: ${({ $backgroundUrl }) => `url(${$backgroundUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  div[size="${({ $loadingSize }) => $loadingSize}"] {
    position: absolute;
  }

  img {
    max-height: 100%;
    ${({ borderRadius }) => {
      if (borderRadius) {
        return css`
          border-radius: ${borderRadius}px;
        `;
      }

      return null;
    }}
  }
`;
