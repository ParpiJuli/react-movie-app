import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Text components/Title',
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Lorem Ipsum',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Title:',
  details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem '
};