import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import Button from "../button";
import { useArgs } from "@storybook/preview-api";
import Base from "../base";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: "UiKit/BottomSheet",
  argTypes: {},
  // tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Primary: Story = (args) => {
  const [, setArgs] = useArgs();

  const onClose = () => {
    setArgs({ ...args, isOpen: false });
  };

  return (
    <Base position="relative">
      <Button onClick={() => setArgs({ ...args, isOpen: true })}>
        Open BottomSheet
      </Button>
      <BottomSheet {...args} onClose={onClose} />
    </Base>
  );
};

Primary.args = {
  bodyStyle: { minHeight: 300 },
  children: "bottom sheet content",
  title: "bottom sheet title",
};
