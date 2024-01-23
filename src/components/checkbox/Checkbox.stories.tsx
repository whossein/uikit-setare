import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import Checkbox from "./Checkbox";
import Text from "../text";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UiKit/Checkbox",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Box: Story = (args) => {
  const [, setArgs] = useArgs();

  const handleCheck = () => {
    setArgs({ ...args, checked: !args.checked });
  };

  return <Checkbox {...args} onClick={handleCheck} />;
};
Box.args = {
  label: (
    <Text width="100%" variant="body" fontWeight="regular">
      label
    </Text>
  ),
  mode: "box",
  checked: false,
};

export const Classic: Story = (args) => {
  const [, setArgs] = useArgs();

  const handleCheck = () => {
    setArgs({ ...args, checked: !args.checked });
  };

  return <Checkbox {...args} onClick={handleCheck} />;
};
Classic.args = {
  label: (
    <Text width="100%" variant="body" fontWeight="regular">
      label
    </Text>
  ),
  mode: "classic",
  checked: false,
};
