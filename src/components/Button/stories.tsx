import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Button, Props } from "./";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
		color: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<Props> = (args) => <Button {...args} >Text</Button>;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { type: 'primary' };

export const Success = Template.bind({});
Success.args = { type: 'success' };

export const Info = Template.bind({});
Info.args = { type: 'info' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning' };

export const Danger = Template.bind({});
Danger.args = { type: 'danger' };

export const Link = Template.bind({});
Link.args = { type: 'link' };
