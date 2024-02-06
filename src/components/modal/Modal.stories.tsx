import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Base from "../base";
import Button from "../button";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "UiKit/Modal",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = (args) => {
  const [, setArgs] = useArgs();

  const onClose = () => {
    setArgs({ ...args, isOpen: false });
  };

  return (
    <Base position="relative" id="root">
      <Button onClick={() => setArgs({ ...args, isOpen: true })}>
        Open Modal
      </Button>
      <Modal
        {...args}
        buttons={[{ title: "Close Modal", onClick: onClose }]}
      ></Modal>
    </Base>
  );
};
Primary.args = {
  children: "Modal Content",
};
