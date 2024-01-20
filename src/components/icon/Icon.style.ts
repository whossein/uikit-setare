import styled, { css } from "styled-components";
import { BaseStyles } from "../base/Base.styles";
import { IIconProps, TWidth } from "./Icon.types";

export const IconWrapper = styled(BaseStyles)<
  Partial<IIconProps & { $width?: TWidth }>
>`
  min-width: ${({ $width }) => $width}px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    display: table;
    margin: 0 auto;
  }

  ${({ borderColor, theme }) => {
    if (borderColor && theme.borderColor) {
      return css`
        border: none;
        svg {
          path {
            fill: ${theme.borderColor[borderColor]};
          }
        }
      `;
    }

    return;
  }}

  ${({ color }) => {
    if (color) {
      return css`
        svg {
          path {
            fill: ${color};
          }
        }
      `;
    }

    return;
  }}

  
${({ $width }) => {
    if ($width) {
      return css`
        svg {
          width: ${$width}px;
        }
      `;
    }

    return;
  }}
`;
