import React from 'react';
import PageLayout from '../pageLayout';
import { fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import { mockResponse } from '../../../utils/mockResponse';
import { NavBar } from '../../nav-bar/NavBar';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { Title } from '../../title/Title';

export const HomePage: React.VFC = ({isDemo=false}: {isDemo: boolean}) => {
  const renderPage = (movies) => (
    <PageLayout displayImage={true}>
      <div className='my-5'>
        <NavBar label={''} />
        <div className='my-10'>
          <Title label={'Most Popular'} primary={false}/>
          <MoviesCardContainer movies={movies} isDemo={isDemo}/>
        </div>
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

