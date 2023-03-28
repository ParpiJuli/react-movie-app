import React from 'react';

import { Button } from '../button/Button';
import { NavButton } from '../nav-button/NavButton';

interface HeaderProps {
  title: string;
}

export const Header = ({ title='lorem ipsum' }: HeaderProps) => (
  <header>
    <div className="flex justify-center px-5 m-auto bg-gray-dark rounded-full">
      <div className='flex my-3'>
        <h1 className='text-3xl text-gray hover:text-neutral'>{title}</h1>
      </div>
    </div>
  </header>
);
