import React, { PropsWithChildren } from 'react';
import { Header } from '../header/Header';
import { NavBar } from '../nav-bar/NavBar';
import HeaderImage from '../assets/headerBackgroundImage.jpg'

export const PageLayout = ({children, displayImage = false
}: any) => {
  const containerClass = `
    container
    flex
    mx-auto
    justify-center
  `;

  return (
    <div className='bg-neutral'>
      <Header title='- Movie App -' />
      {displayImage && (<img src={HeaderImage} className='drop-shadow-xl'/>)}
      <div className={containerClass}>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
