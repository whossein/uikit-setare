import React from "react";
import Loading from "../loading/Loading";
import { ButtonStyle } from "./button.style";
import { IButtonProps } from "./Button.types";
import { MouseEventHandler } from "react";
import Flex from "../";

const Button = (props: IButtonProps) => {
  const {
    component = "button",
    className = "",
    variant = "fill",
    size = "medium",
    loading = false,
    loadingSize = 40,
    children,
    label,
    disabled = false,
    onClick,
    startIcon,
    endIcon,
    colorType = "primary",
    href,
    link,
    margin = "0 auto",
    fontSize,
    navigate,
    ...otherProps
  } = props;
  // TODO: fix height & width Loading

  return (
    <ButtonStyle
      as={component}
      className={`morph-button ${className}`}
      variant={variant}
      size={size}
      loading={loading ? 1 : 0}
      disabled={disabled}
      onClick={(e: MouseEventHandler) => {
        if (disabled || loading) {
          return;
        }

        if (onClick instanceof Function) {
          return onClick(e);
        } else if (href) {
          window.open(href);
        } else if (link) {
          if (navigate) {
            navigate(link);
          } else {
            console.error(
              "can not find 'navigate' props, need for Button Component"
            );
          }
          // console.error(link);
        }
      }}
      colorType={colorType}
      margin={margin}
      {...otherProps}
    >
      {loading ? (
        <Loading size={loadingSize} isWhite={variant === "fill"} />
      ) : (
        <Flex className="morph-button-children">
          {startIcon && (
            <Flex className="morph-button-start-icon"> {startIcon} </Flex>
          )}
          <Flex
            fontSize={fontSize}
            className="morph-button-label"
            margin="0px 4px"
          >
            {children ? children : label}
          </Flex>
          {endIcon && (
            <Flex className="morph-button-end-icon"> {endIcon} </Flex>
          )}
        </Flex>
      )}
    </ButtonStyle>
  );
};

export default Button;
