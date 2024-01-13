import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Base from "./Base";

const meta: Meta<typeof Base> = {
  component: Base,
  title: "UiKit/Base",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Base>;

export const Primary: Story = (args) => (
  <Base data-testId="InputField-id2" {...args} />
);
Primary.args = {
  children: "label",
};
