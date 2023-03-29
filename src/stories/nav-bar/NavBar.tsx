import React from 'react';
import { NavButton } from '../nav-button/NavButton';
import map from 'lodash/map';
import { ButtonProps } from '../../types/Search';

export const NavBar = ({
  isStory = false,
  backgroundColor,
  label,
  children,
  isDemo,
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
      <NavButton
        key={index}
        label={isStory ? 'Category' : item.name}
        linkTo={isStory ? '' : item.href}
        isDemo={isDemo}
        {...props} />
    );
  });

  return (
    <div className='flex overflow-x-auto overflow-scroll justify-center'>
      {Items}
      {children}
    </div>
  )
};  
