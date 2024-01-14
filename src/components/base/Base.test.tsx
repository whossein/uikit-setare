import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Base from "./Base";
import ThemeProvider from "../theme-provider";

describe("Running Test for Base Component", () => {
  test("Check Base Component", () => {
    render(
      <ThemeProvider>
        <Base> Base Component </Base>
      </ThemeProvider>
    );
  });
});
