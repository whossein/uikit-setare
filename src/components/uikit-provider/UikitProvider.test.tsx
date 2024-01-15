import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ThemeProvider from "./UikitProvider";

describe("Running Test for Theme Provider", () => {
  test("Check Theme Provider", () => {
    render(<ThemeProvider> setare aval </ThemeProvider>);
  });
});
