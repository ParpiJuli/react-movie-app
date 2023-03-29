import React from 'react';  
import { Link } from 'react-router-dom';
import { HeaderProps } from '../../types/Titles';

export const Header = ({ title='lorem ipsum', isDemo=false}: HeaderProps) => (
  <header className='fixed w-full z-10'>
    <div className="flex justify-center px-5 m-auto bg-gray-dark">
      <div className='flex my-1 md:my-3'>
        {!isDemo ? (
          <Link className='text-3xl text-gray hover:text-neutral' to={'/'}>{title}</Link>
        ): (
          <h1 className='text-3xl text-gray hover:text-neutral'>{title}</h1>
        )}
      </div>
    </div>
  </header>
);
