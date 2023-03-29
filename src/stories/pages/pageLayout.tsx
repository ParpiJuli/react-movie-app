import React, { PropsWithChildren, ReactComponentElement, ReactElement, ReactNode } from 'react';
import { Header } from '../header/Header';

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[] | any,
  isDemo?: boolean,
}
export const PageLayout = ({children, isDemo}: LayoutProps) => {
  return (
    <div className='bg-neutral'>
      <Header title='- Movie App -' isDemo={isDemo} />
      <div className='container flex mx-auto justify-center'>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
