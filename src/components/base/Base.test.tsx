import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Base from "./Base";
import UikitProvider from "../uikit-provider";

describe("Running Test for Base Component", () => {
  test("Check Base Component", () => {
    render(
      <UikitProvider>
        <Base> Base Component </Base>
      </UikitProvider>
    );
  });
});
