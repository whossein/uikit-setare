import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Button from "./";
import UikitProvider from "../uikit-provider";

describe("Running Test for Button Component", () => {
  test("Check Button Component", () => {
    render(
      <UikitProvider>
        <Button> Button Component </Button>
      </UikitProvider>
    );
  });
});
