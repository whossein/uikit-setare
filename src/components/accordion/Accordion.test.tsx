import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Accordion from "./Accordion";
import UikitProvider from "../uikit-provider";

describe("Running Test for Accordion Component", () => {
  test("Check Accordion Component", () => {
    render(
      <UikitProvider>
        <Accordion
          elements={[
            {
              title: <span>Accordion Title</span>,
              element: <span>Accordion Body</span>,
            },
          ]}
        />
      </UikitProvider>
    );
  });
});
