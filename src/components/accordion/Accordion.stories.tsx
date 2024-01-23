import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "UiKit/Accordion",
  argTypes: {},
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = (args) => (
  <Accordion
    {...args}
    // elements={[
    //   {
    //     title: <span>test</span>,
    //     element: <span>test</span>,
    //   },
    // ]}
  />
);
Primary.args = {
  elements: [
    {
      title: <span>Accordion Title</span>,
      element: <span>Accordion Body</span>,
    },
  ],
};

export const Selectable: Story = (args) => <Accordion {...args} />;
Selectable.args = {
  ...Primary.args,
  selectable: true,
};

export const SelectableWithMaxCount: Story = (args) => <Accordion {...args} />;
SelectableWithMaxCount.args = {
  elements: [
    {
      title: <span>Accordion Title</span>,
      element: <span>Accordion Body</span>,
    },
    {
      title: <span>Accordion Title</span>,
      element: <span>Accordion Body</span>,
    },
    {
      title: <span>Accordion Title</span>,
      element: <span>Accordion Body</span>,
    },
    {
      title: <span>Accordion Title</span>,
      element: <span>Accordion Body</span>,
    },
  ],
  selectable: true,
  maxSelect: 3,
};
