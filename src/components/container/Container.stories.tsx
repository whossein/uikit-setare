import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "UiKit/Container",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Primary: Story = (args) => <Container {...args} />;
Primary.args = {
  children: "label",
  minHeight: 100,
  childrenProps: {
    minHeight: 200,
  },
};

export const loadingContainer: Story = (args) => <Container {...args} />;
loadingContainer.args = {
  ...Primary.args,
  loading: true,
  containerBgColor: 5
};
