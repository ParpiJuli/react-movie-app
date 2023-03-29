import React from 'react';
import { useRouteError } from 'react-router-dom';
import { RouterErrorType } from '../../../types/Router';

export const ErrorPage = ({ errorMessage }: { errorMessage?: string | any }) => {
  const errorContainerStyles = `
  py-20
  !bg-light-blue
  flex
  flex-col
  m-auto
`;

  const error = useRouteError() as RouterErrorType;
  const message = errorMessage ?? 'Sorry, an unexpected error has occurred.';

  return (
    <section id="error-page">
      <h1 className={errorContainerStyles}>Oops!</h1>
      <p className="text-3xl flex m-auto">{message}</p>
      <img src={''} alt="error-image" className="text-3xl flex m-auto" />
      <p>
        <i>{error.statusText || error.message || message}</i>
      </p>
    </section>
  );
};
