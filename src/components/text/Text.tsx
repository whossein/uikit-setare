import React from "react";
import { ITextProps } from "./Text.types";
import { TextStyle } from "./Text.style";

export default function Text(props: ITextProps) {
  const {
    variant = "",
    children,
    label,
    component = "div",
    className = "",
    fontWeight = "regular",
    lineHeight,
    whiteSpace = "normal",
    useLtrFontFamily = false,
    ...otherProps
  } = props;

  return (
    <TextStyle
      as={component}
      variant={variant}
      className={`morph-text morph-text-${variant} ${className}`}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      whiteSpace={whiteSpace}
      useLtrFontFamily={useLtrFontFamily ? "true" : "false"}
      {...otherProps}
    >
      <>
        {label && label}
        {children && children}
      </>
    </TextStyle>
  );
}
