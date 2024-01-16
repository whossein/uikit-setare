import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Button from "./";
import UikitProvider from "../uikit-provider";

describe("Running Test for Base Component", () => {
  test("Check Base Component", () => {
    render(
      <UikitProvider>
        <Button> Flex Component </Button>
      </UikitProvider>
    );
  });
});
