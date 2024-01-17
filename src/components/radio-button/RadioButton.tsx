import React from "react";
import { forwardRef } from "react";
import { IRadioButtonProps } from "./RadioButton.types";
import { RadioButtonLabel } from "./RadioButton.style";

const RadioButton = forwardRef((props: IRadioButtonProps, ref: any) => {
  const { label, mode = "classic", width } = props;

  return (
    <RadioButtonLabel
      width={width}
      as={"label"}
      mode={mode}
      borderSize={props.borderSize}
      bgColor={props.bgColor}
      {...props}
    >
      <input {...props} type={"radio"} ref={ref} />
      {mode === "box" && <div className="ColorBorder" />}
      <div className="radioButton" />
      <div className="placeLabel">{label}</div>
    </RadioButtonLabel>
  );
});
export default RadioButton;
