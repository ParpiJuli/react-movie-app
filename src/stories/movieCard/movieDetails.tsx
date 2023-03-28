import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Title } from '../title/Title';

export interface MovieDetailsProps {
  title: string;
  description: string;
  year?: number | string
  category?: string;
  categoryDetails?: string;
  popularity?: number;
  voteAverage?: number;
  voteCount?: number;
}

export const MovieDetails = ({
  title='false',
  description='',
  year,
  category,
  categoryDetails,
  popularity,
  voteAverage,
  voteCount,
  ...props
}: MovieDetailsProps) => {
  return (
    <div className='px-10 py-2'>
      { year && (<p className='text-gray my-2 md:my-0 text-center md:text-start'>{year}</p>) }
      <Title label={title} primary={true}/>
      <p className='font-light'>{description}</p>
      <div className='mt-5'>
        { category && categoryDetails && <Title label={category} details={categoryDetails}/>}
        { popularity && <Title label='Popularity:' details={`${popularity} views`}/>}
        { voteCount && <Title label='Reviews:' details={`${voteCount} votes`}/>}
        { voteAverage && <Title label='Rate:' details={voteAverage}/>}
      </div>
    </div>
  );
};  
