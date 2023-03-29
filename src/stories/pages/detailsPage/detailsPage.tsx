import React from 'react';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import PageLayout from '../pageLayout';
import { mockResponse } from '../../../utils/mockResponse';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { fetchMovieById, fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { Title } from '../../title/Title';
import MovieCard from '../../movie/movieCard/movieCard';
import { getMoviePoster } from '../../../services/getApiUrls';
import { getReleaseYear } from '../../../utils/getReleaseYear';
import { getGenresName } from '../../../utils/getGenresName';
import { getAverage } from '../../../utils/getAverage';
import { useParams } from 'react-router-dom';
import isNil from 'lodash/isNil'

export const DetailsPage: React.VFC = ({isDemo=true}: any) => {
  const renderPage = (movie, movies) => (
    <PageLayout>
      <div className='my-20'>
        <MovieCard 
          moviePoster={getMoviePoster(movie.poster_path)}
          altText={movie.title}
          title={movie.title}
          description={movie.overview}
          year={getReleaseYear(movie.release_date)}
          category='Genres:'
          categoryDetails={getGenresName(movie.genres)}
          popularity={movie.popularity}
          voteAverage={getAverage(movie.vote_average)}
          voteCount={movie.vote_count}
        />
        <div className='my-5 md:mt-20'>
          <Title label={'Other related films'} />
          <MoviesCardContainer movies={movies} />
        </div>
      </div>
    </PageLayout>
  );

  if(isDemo) {
    return renderPage(mockResponse[1], mockResponse)
  }

  const params = useParams();
  const { id } = params;

  if(isNil(id)) {
    return <div />; // ver
  }

  const { isLoading, isError, data, error }: QueryResponseType =
  useQuery({
    queryKey: ['currentMovie', id],
    queryFn: ({ queryKey }) => fetchMovieById(queryKey[1]),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !id) {
    return <span>Error: {error?.message}</span>;
  }

  return renderPage(data, [])
}

