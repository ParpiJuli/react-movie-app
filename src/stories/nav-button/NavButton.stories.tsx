import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavButton } from './NavButton';

export default {
  title: 'NabBar/Nav Button',
  component: NavButton,
  argTypes: {},
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => <NavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'NavButton',
};