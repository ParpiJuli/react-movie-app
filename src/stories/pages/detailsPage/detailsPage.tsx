import React from 'react';
import isNil from 'lodash/isNil';
import MovieCard from '../../movie/movieCard/movieCard';
import PageLayout from '../pageLayout';
import {
  fetchMovieById,
  fetchMoviesByGenre
} from '../../../services/fetchMoviesServices';
import { getMoviePoster } from '../../../services/getApiUrls';
import { getReleaseYear } from '../../../utils/getReleaseYear';
import { getGenresName } from '../../../utils/getGenresName';
import { getAverage } from '../../../utils/getAverage';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import { mockResponse } from '../../../utils/mockResponse';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { Title } from '../../title/Title';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../errorPage/errorPage';

export const DetailsPage: React.VFC = ({ isDemo = false }: { isDemo: boolean }) => {
  const renderPage = (movie, movies, genre?) => (
    <PageLayout isDemo={isDemo}>
      <div className="my-20">
        <MovieCard
          moviePoster={getMoviePoster(movie.poster_path)}
          altText={movie.title}
          title={movie.title}
          description={movie.overview}
          year={getReleaseYear(movie.release_date)}
          category="Genres:"
          categoryDetails={getGenresName(movie.genres)}
          popularity={movie.popularity}
          voteAverage={getAverage(movie.vote_average)}
          voteCount={movie.vote_count}
        />
        <div className="my-5 md:mt-20">
          <Title label={`${genre ? `${genre} films` : 'Related films'}`} />
          <MoviesCardContainer movies={movies} isDemo={isDemo} />
        </div>
      </div>
    </PageLayout>
  );

  if (isDemo) {
    return renderPage(mockResponse[1], mockResponse);
  }

  const params = useParams();
  const { id } = params;

  const { isLoading, isError, data, error }: QueryResponseType = useQuery({
    queryKey: ['currentMovie', id || ''],
    queryFn: ({ queryKey }) => fetchMovieById(queryKey[1])
  });

  const suggestedMoviesByGenre = data?.genres?.length
    ? data?.genres[0].id.toString()
    : 'popular';

  const { data: suggestedMovies }: QueryResponseType = useQuery({
    queryKey: ['currentMovie', suggestedMoviesByGenre],
    queryFn: ({ queryKey }) => fetchMoviesByGenre(queryKey[1])
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !id || isNil(data)) {
    return <ErrorPage errorMessage={error} />;
  }

  return renderPage(data, suggestedMovies?.results, data?.genres[0].name);
};
