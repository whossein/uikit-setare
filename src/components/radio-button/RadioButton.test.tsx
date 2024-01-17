import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import RadioButton from "./RadioButton";
import UikitProvider from "../uikit-provider";

describe("Running Test for RadioButton Component", () => {
  test("Check RadioButton Component", () => {
    render(
      <UikitProvider>
        <RadioButton />
      </UikitProvider>
    );
  });
});
