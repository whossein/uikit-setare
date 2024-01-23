import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Container from "./Container";
import UikitProvider from "../uikit-provider";

describe("Running Test for Container Component", () => {
  test("Check Container Component", () => {
    render(
      <UikitProvider>
        <Container size={"full"}> Button Component </Container>
      </UikitProvider>
    );
  });
});
