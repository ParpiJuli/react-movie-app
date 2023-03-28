import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GenrePage } from './genrePage';

export default {
  title: 'Pages/Genre Page',
  component: GenrePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GenrePage>;

const Template: ComponentStory<typeof GenrePage> = (args) => <GenrePage {...args} />;

export const Primary = Template.bind({});
