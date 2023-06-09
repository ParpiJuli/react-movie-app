import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import MovieCard from '../movieCard/movieCard';
import { MovieType } from '../../../types/Movies';
import { getMoviePoster } from '../../../services/getApiUrls';

interface MoviesCardContainerProps {
  movies: MovieType[];
  isDemo?: boolean;
}

export const MoviesCardContainer = ({
  movies,
  isDemo,
  ...props
}: MoviesCardContainerProps) => {
  const containerClass = `
    flex 
    flex-auto
    justify-center
    m-auto
    flex-wrap
  `;

  const getCards = (movies: MovieType[]) => {
    if (isDemo) {
      return map(movies, (item, key) => (
        <a key={key} href={`/movies/${item.id}`}>
          <MovieCard
            moviePoster={getMoviePoster(item.poster_path)}
            altText={''}
            title={''}
            description={''}
          />
        </a>
      ));
    }

    return map(movies, (item, key) => (
      <Link key={key} to={`/movies/${item.id}`}>
        <MovieCard
          moviePoster={getMoviePoster(item.poster_path)}
          altText={''}
          title={''}
          description={''}
        />
      </Link>
    ));
  };

  return (
    <div className={containerClass} {...props}>
      {getCards(movies)}
    </div>
  );
};
