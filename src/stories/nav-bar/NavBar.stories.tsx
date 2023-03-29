import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'NabBar/Nav Bar',
  component: NavBar,
  argTypes: {}
} as unknown as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'NavBar',
  isStory: true,
  isDemo: true
};
