import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import Icon from "../icon";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UiKit/Input",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => <Input {...args} />;
Primary.args = {
  label: "label",
  height: 48,
};

export const StartIcon: Story = (args) => <Input {...args} />;
StartIcon.args = {
  ...Primary.args,
  startIcon: <Icon type="Big-Yes" />,
};

export const EndIcon: Story = (args) => <Input {...args} />;
EndIcon.args = {
  ...Primary.args,
  endIcon: <Icon type="Big-Yes" />,
};

export const ShrinkedInput: Story = (args) => <Input {...args} />;
ShrinkedInput.args = {
  ...Primary.args,
  shrink: true,
};
