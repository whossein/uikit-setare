import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Text from "./Text";
import UikitProvider from "../uikit-provider";

describe("Running Test for Text Component", () => {
  test("Check Text Component", () => {
    render(
      <UikitProvider>
        <Text> Text Component </Text>
      </UikitProvider>
    );
  });
});
