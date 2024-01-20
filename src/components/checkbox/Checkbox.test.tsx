import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import CheckBox from "./";
import UikitProvider from "../uikit-provider";

describe("Running Test for CheckBox Component", () => {
  test("Check CheckBox Component", () => {
    render(
      <UikitProvider>
        <CheckBox> CheckBox Component </CheckBox>
      </UikitProvider>
    );
  });
});
