import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieDetails, MovieDetailsProps } from './movieDetails';

interface MovieCardProps extends MovieDetailsProps{
  moviePoster: string,
  altText: string,
  title: string,
  description: string,
}

export const MovieCard = ({
  moviePoster='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
  altText='movie-poster',
  title='',
  description='',
  year,
  category,
  categoryDetails,
  popularity,
  voteAverage,
  voteCount,
  ...props
}: MovieCardProps) => {

  const containerClass = `
    hover:drop-shadow-xl
    hover:origin-top-right
    p-5
    flex
    flex-col
    md:flex-row
    flex-auto
    justify-center
  `;

  return (
    <div className={containerClass}>
      <img
        className='rounded-xl flex my-auto md:w-[300px] md:h-[300px]'
        src={moviePoster}
        alt={altText}
        {...props}
      />
      <MovieDetails
        title={title}
        description={description}
        year={year}
        category={category}
        categoryDetails={categoryDetails}
        popularity={popularity}
        voteAverage={voteAverage}
        voteCount={voteCount}
      />
    </div>
  );
}

export default MovieCard;
