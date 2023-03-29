import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  backgroundColor?: string;
  linkTo?: string;
  isDemo?: boolean;
  label: string;
  onClick?: () => void;
}

export const NavButton = ({
  linkTo = '',
  isDemo,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  if (isDemo) {
    return (
      <a
        href="#"
        type="button"
        className="rounded-full border px-5 py-2 mx-1 my-auto rounded-full hover:bg-gray-dark hover:text-neutral text-xl"
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={linkTo}
      type="button"
      className="rounded-full border px-5 py-2 mx-1 my-auto rounded-full hover:bg-gray-dark hover:text-neutral text-xl"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Link>
  );
};
