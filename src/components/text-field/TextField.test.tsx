import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import TextField from "./TextField";
import UikitProvider from "../uikit-provider";

describe("Running Test for TextField Component", () => {
  test("Check TextField Component", () => {
    render(
      <UikitProvider>
        <TextField label="label" />
      </UikitProvider>
    );
  });
});
