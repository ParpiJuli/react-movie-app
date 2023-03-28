import React from 'react';
import sadPopcorn from '../../assets/sadPopcorn.jpg'
import { useRouteError } from 'react-router-dom';
import { RouterErrorType } from '../../../types/Router';

export const ErrorPage = ({errorMessage, isDemo=true}: any) => {
  const errorContainerStyles = `
  py-20
  !bg-light-blue
  flex
  flex-col
  m-auto
`;

  const renderPage = (showError, error, message) => {
    <section id="error-page">
      <h1 className={errorContainerStyles}>Oops!</h1>
      <p className='text-3xl flex m-auto'>{message}</p>
      <img src={sadPopcorn} alt="error-image" className='text-3xl flex m-auto'/>
      {
        showError && (
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        )
      }
    </section>
  }

  if(isDemo) return renderPage(false, {}, 'Sorry, an unexpected error has occurred.');

  const error = useRouteError() as RouterErrorType;
  const message = errorMessage ?? 'Sorry, an unexpected error has occurred.';

  return renderPage(true, error, message)
}

