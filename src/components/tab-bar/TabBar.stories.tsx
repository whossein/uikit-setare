import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TabBar from "./TabBar";

const meta: Meta<typeof TabBar> = {
  component: TabBar,
  title: "UiKit/TabBar",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TabBar>;

export const Primary: Story = (args) => <TabBar {...args} />;
Primary.args = {
  data: [
    {
      value: "value",
      title: "label1",
    },
    {
      value: "value",
      title: "label2",
    },
  ],
};

export const secondary: Story = (args) => <TabBar {...args} />;
secondary.args = {
  ...Primary.args,
  labelTitle: "for title",
};
