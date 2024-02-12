import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";
import UikitProvider from "../uikit-provider";

describe("Running Test for Modal Component", () => {
  test("Check Modal Component", () => {
    render(
      <UikitProvider>
        <Modal isOpen>
            Modal Content
        </Modal>
      </UikitProvider>
    );
  });
});
