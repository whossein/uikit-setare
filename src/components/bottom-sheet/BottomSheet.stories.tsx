import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import Button from "../button";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: "UiKit/BottomSheet",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

const ButtonWithHooks = (args) => {
  // Sets the hooks for both the label and primary props
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click Me</Button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
        label
      </BottomSheet>
    </>
  );
};

export const Primary: Story = (args) => <ButtonWithHooks {...args} />;
Primary.args = {
  children: "label",
};
