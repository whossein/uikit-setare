import React from "react";
import { BaseStyles } from "./Base.styles";
import { IBaseProps } from "./Base.types";

const Base = React.forwardRef((props: IBaseProps, ref: any) => {
  const {
    component = "div",
    className = "",
    isFixBottom = false,
    fillPadding = false,
    enableIphonePadding = false,
    ...otherProps
  } = props;

  return (
    <BaseStyles
      as={component}
      ref={ref}
      className={`morph-base ${className}`}
      $isFixBottom={isFixBottom ? "true" : "false"}
      $fillPadding={fillPadding ? "true" : "false"}
      {...otherProps}
    />
  );
});

export default Base;
