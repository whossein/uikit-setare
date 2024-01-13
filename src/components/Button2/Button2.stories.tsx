import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button2 from "./Button2";

const meta: Meta<typeof Button2> = {
  component: Button2,
  title: "UiKit/Button2",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button2>;

export const Primary: Story = (args) => (
  <Button2 data-testId="InputField-id2" {...args} />
);
Primary.args = {
  children: "label",
};
