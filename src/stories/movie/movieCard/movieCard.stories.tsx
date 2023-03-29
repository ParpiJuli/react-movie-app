import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieCard } from './movieCard';

export default {
  title: 'Movies/Movie Card',
  component: MovieCard,
  argTypes: {}
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  altText: 'altText',
  title: 'Lorem Ipsum',
  year: '2020',
  category: 'Genre:',
  categoryDetails: 'Comedy',
  voteAverage: 9.2,
  voteCount: 23123,
  popularity: 231231,
  description:
    'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
};
