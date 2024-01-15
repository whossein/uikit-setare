import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Flex from "./Flex";
import UikitProvider from "../uikit-provider";

describe("Running Test for Base Component", () => {
  test("Check Base Component", () => {
    render(
      <UikitProvider>
        <Flex> Flex Component </Flex>
      </UikitProvider>
    );
  });
});
