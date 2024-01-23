import React from "react";
import { CheckBoxContainer } from "./Checkbox.style";
import { ICheckbox } from "./Checkbox.type";
import Base from "../base";

const Checkbox = (props: ICheckbox) => {
  const {
    label,
    onCheckBoxClick,
    onClick,
    showTick = false,
    margin,
    padding,
    mode = "classic",
    width,
    disabled = false,
    children,
    labelProps,
    borderColor = 4,
    ...otherProps
  } = props;

  return (
    <Base margin={margin} padding={padding} width={width}>
      <CheckBoxContainer
        disabled={disabled}
        mode={mode}
        onClick={onClick}
        $hasTick={showTick}
        component={"label"}
        $labelBorder={borderColor}
        {...otherProps}
      >
        <input type="checkbox" {...otherProps} onClick={onCheckBoxClick} />
        <div className="check-wrapper">
          <div className="checkboxItem" />
          <div className="check" />
        </div>
        {label ? (
          <Base className="label" {...labelProps}>
            {label}
          </Base>
        ) : null}
        {children}
      </CheckBoxContainer>
    </Base>
  );
};
export default Checkbox;
