import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieDetails, MovieDetailsProps } from '../movieDetails/movieDetails';
import map from 'lodash/map'
import MovieCard from '../movieCard/movieCard';
import { MovieType } from '../../../types/Movies';
import { getMoviePoster } from '../../../services/getApiUrls';
import { useQuery } from 'react-query';
import { fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { QueryResponseType } from '../../../types/Queries';

interface MoviesCardContainerProps {
  movies: MovieType[];
}

export const MoviesCardContainer = ({
  movies,
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
    return map(movies, (item, key) => (
      <a key={key} href={`/movies/${item.id}`}>
          <MovieCard moviePoster={getMoviePoster(item.poster_path)} altText={''} title={''} description={''}/>
      </a>
    ))
  };

  return (
    <div className={containerClass} {...props}>
      {getCards(movies)}
    </div>
  );
}

