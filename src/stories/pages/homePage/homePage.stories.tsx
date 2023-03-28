import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './homePage';

export default {
  title: 'Pages/Home Page',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
