import React from 'react';
import { MovieDetails, MovieDetailsProps } from '../movieDetails/movieDetails';

interface MovieCardProps extends MovieDetailsProps {
  moviePoster: string;
  altText: string;
  title: string;
  description: string;
}

export const MovieCard = ({
  moviePoster = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
  altText = 'movie-poster',
  title = '',
  description = '',
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
    flex
    gap-2
    md:gap-5
    md:my-5
    flex-col
    md:flex-row
    flex-auto
    justify-center
  `;

  return (
    <div className={containerClass}>
      <img
        className="rounded-xl flex m-auto md:mx-0 w-[230px] h-[300px]"
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
};

export default MovieCard;
