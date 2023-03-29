import React from 'react';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import { NavBar } from '../../nav-bar/NavBar';
import PageLayout from '../pageLayout';
import { mockResponse } from '../../../utils/mockResponse';
import { QueryClient, useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { Title } from '../../title/Title';

export const GenrePage: React.VFC = ({isDemo=false}: any) => {
  const renderPage = (movies) => (
    <PageLayout>
      <div className='my-20'>
        <Title label={'Films by genre'} primary={false}/>
        <MoviesCardContainer movies={movies} isDemo={isDemo} />
      </div>
    </PageLayout>
  );

  if(isDemo) {
    return renderPage(mockResponse)
  }

  const { isLoading, isError, data, error }: QueryResponseType =
  useQuery({
      queryKey: ['movies', 'popular'],
      queryFn: ({ queryKey }) => fetchPopularMovies(queryKey[1]),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return renderPage(data.results)
}

