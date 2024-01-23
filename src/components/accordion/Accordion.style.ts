import styled from "styled-components";
import { IItemAccordion } from "./Accordion.types";

export const ItemAccordion = styled.div<IItemAccordion>`
  transition: all 0.2s ease-in;
  height: ${({ $headerHeight }) => {
    return `${$headerHeight}px`;
  }};
  overflow: hidden;
  width: 100%;
  border-radius: ${({ $noBorder }) => ($noBorder ? "0px" : "16px")};
  margin-bottom: 12px;

  &.checked {
    border: ${({ theme }) => `1px solid ${theme.bgColor[5]}`};
  }

  border: ${({ theme, $noBorder }) =>
    $noBorder ? 0 : `1px solid ${theme.borderColor[2]}`};
  border-bottom: ${({ theme, $noBorder }) =>
    $noBorder && `1px solid ${theme.borderColor[2]}`};

  &.arrow {
    .header {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding: 12px 0;
      border-bottom: ${({ theme }) => `1px solid ${theme.borderColor[1]}`};
    }

    .content {
      padding: 2px 16px;
    }
  }

  &.open {
    height: calc(
      ${(props) => props.$headerHeight}px + ${(props) => props.$dataHeight}px
    );

    &.plus {
      background-color: ${({ theme, $noBorder }) =>
        $noBorder ? "none" : theme.bgColor[3]};
    }
  }

  .close {
    &.open {
      .btn {
        background-color: ${({ theme }) => theme.transparentColor[3]};

        .iconClose {
          transform: translate(0, 4px) rotate(-45deg);
          opacity: 1;
        }
      }

      .arrow {
        transform: rotate(180deg);
      }
    }

    .btn {
      transition: all 0.2s ease-in;
      background-color: rgb(87 197 208 / 38%);
      width: 100%;
      height: 100%;
      border-radius: 22px;
      text-align: center;
      line-height: 24px;
      font-size: 19px;

      .iconClose {
        transition: all 0.2s ease-in;
        margin: 0 auto;
        transform: translate(0, 4px);
      }
    }

    .arrow {
      transition: all 0.2s ease-in;
    }

    padding: 2px;
    width: 24px;
    height: 24px;
  }
`;
