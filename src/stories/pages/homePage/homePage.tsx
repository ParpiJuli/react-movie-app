import React, { useState } from 'react';
import PageLayout from '../pageLayout';
import { ErrorPage } from '../errorPage/errorPage';
import { fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import { mockResponse } from '../../../utils/mockResponse';
import { NavBar } from '../../nav-bar/NavBar';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { Title } from '../../title/Title';
import { useFilterResultsByName } from '../../../hooks/useFilters';
import SearchBar from '../../search/searchBar';

export const HomePage: React.VFC = ({ isDemo = false }: { isDemo: boolean }) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const { data: moviesByName } = useFilterResultsByName(filterValue);

  const renderPage = (movies) => (
    <PageLayout isDemo={isDemo}>
      <div className="my-36">
        <NavBar label={''} isDemo={isDemo}>
          <SearchBar
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterValue(e?.target?.value)
            }
          />
        </NavBar>
        <div className="my-10">
          <Title label={'Most Popular'} primary={false} />
          <MoviesCardContainer movies={movies} isDemo={isDemo} />
        </div>
      </div>
    </PageLayout>
  );

  if (isDemo) {
    return renderPage(mockResponse);
  }

  const {
    isLoading,
    isError,
    data: popularFilms,
    error
  }: QueryResponseType = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: ({ queryKey }) => fetchPopularMovies(queryKey[1])
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <ErrorPage errorMessage={error} />;
  }

  const moviesToDisplay =
    moviesByName?.total_results > 0 ? moviesByName?.results : popularFilms?.results;

  return renderPage(moviesToDisplay);
};
