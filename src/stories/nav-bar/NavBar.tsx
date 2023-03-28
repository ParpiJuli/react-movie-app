import React from 'react';
import { NavButton } from '../nav-button/NavButton';
import map from 'lodash/map';

interface ButtonProps {
  isStory?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const NavBar = ({
  isStory = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const itemsMenu = [
    {
      href: '/comedy',
      name: 'Comedy'
    },
    {
      href: '/action',
      name: 'Action'
    },
    {
      href: '/drama',
      name: 'Drama'
    },
    {
      href: '/thriller',
      name: 'Thriller'
    },
    {
      href: '/storybook',
      name: 'Storybook'
    }
  ];
  const Items = map(itemsMenu, (item, index) => {
    return (
      <NavButton label={isStory ? 'Category' : item.name} linkTo={isStory ? '' : item.href} {...props} />
    );
  });

  return (
    <div className='flex overflow-x-auto overflow-scroll justify-evenly'>
      {Items}
    </div>
  )
};  
