import React from 'react';

interface ButtonProps {
  primary?: boolean;
  details?: string | number;
  label: string;
}

export const Title = ({
  primary = false,
  details,
  label = 'lorem ipsum',
  ...props
}: ButtonProps) => {
  const primaryButtonStyles = 'text-3xl md:text-5xl lg:text-5xl font-bold font-serif';
  const defaultStyle = 'text-md font-bold';
  const classes = `${primary ? primaryButtonStyles : defaultStyle}`;

  return (
    <div className="flex flex-col md:flex-row text-center md:text-start my-2">
      <h2 className={classes} {...props}>
        {label}
      </h2>
      {details && <p className="text-md px-2 font-light">{details}</p>}
    </div>
  );
};
