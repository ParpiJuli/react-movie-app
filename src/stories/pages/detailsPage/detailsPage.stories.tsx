import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailsPage } from './detailsPage';

export default {
  title: 'Pages/DetailsPage',
  component: DetailsPage,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof DetailsPage>;

const Template: ComponentStory<typeof DetailsPage> = (args) => <DetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isDemo: true
};
