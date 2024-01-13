import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UiKit/Button",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  children: "Primary",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  children: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  children: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  children: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  children: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  children: "Large",
};
