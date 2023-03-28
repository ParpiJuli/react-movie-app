import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  linkTo?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const NavButton = ({
  primary = false,
  size = 'medium',
  linkTo = '',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  return (
    <a
      href={linkTo} type="button"
      className='rounded-full border px-5 py-2 mx-1 my-auto rounded-full hover:bg-gray-dark hover:text-neutral text-xl'
      style={{ backgroundColor }}
      {...props}    >
      {label}
    </a>
  );
};  
