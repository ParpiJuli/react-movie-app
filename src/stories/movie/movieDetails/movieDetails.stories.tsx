import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieDetails } from './movieDetails';

export default {
  title: 'Text Components/Movie Details',
  component: MovieDetails,
  argTypes: {}
} as ComponentMeta<typeof MovieDetails>;

const Template: ComponentStory<typeof MovieDetails> = (args) => (
  <MovieDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem Ipsum',
  year: '2020',
  category: 'Genre:',
  categoryDetails: 'Comedy',
  voteAverage: 9.2,
  voteCount: 23123,
  popularity: 2331,
  description:
    'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
};
