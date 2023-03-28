import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface MoviePosterProps {
  moviePoster: string,
  altText: string,
}

export const MoviePoster = ({
  moviePoster='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
  altText='movie-poster',
  ...props
}: MoviePosterProps) => {

  const containerClass = `
    hover:drop-shadow-xl
    origin-center
    hover:origin-top-right
    p-5
  `;

  return (
    <div className={containerClass}>
      <img
        className='rounded-xl md:w-[300px] md:h-[300px]'
        src={moviePoster}
        alt={altText}
        {...props}
      />
    </div>
  );
}

export default MoviePoster;
