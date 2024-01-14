import React from "react";
import { BaseStyles } from "./Base.styles";
import { BaseProps } from "./Base.types";

const Base = React.forwardRef((props: BaseProps, ref: any) => {
  const {
    component = "div",
    className = "",
    isfixbottom = false,
    fillpadding = false,
    enableIphonePadding = false,
    ...otherProps
  } = props;

  return (
    <BaseStyles
      as={component}
      ref={ref}
      className={`morph-base ${className}`}
      isfixbottom={isfixbottom ? "true" : "false"}
      fillpadding={fillpadding ? "true" : "false"}
      {...otherProps}
    />
  );
});

export default Base;
