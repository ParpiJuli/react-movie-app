import React from 'react';
import { NavButton } from '../nav-button/NavButton';
import map from 'lodash/map';

interface ButtonProps {
  isStory?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const NavBar = ({
  isStory = false,
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
    }
  ];
  const Items = map(itemsMenu, (item, index) => {
    return (
      <NavButton label={isStory ? 'Category' : item.name} linkTo={isStory ? '' : item.href} {...props} />
    );
  });

  return (
    <div className='flex overflow-x-auto overflow-scroll justify-center'>
      {Items}
    </div>
  )
};  
