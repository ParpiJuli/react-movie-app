import React from 'react';
import find from 'lodash/find'
import PageLayout from '../pageLayout';
import { fetchAllGenres, fetchMoviesByGenre } from '../../../services/fetchMoviesServices';
import { GenreType } from '../../../types/Movies';
import { MoviesCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import { mockResponse } from '../../../utils/mockResponse';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { Title } from '../../title/Title';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../errorPage/errorPage';

export const GenrePage: React.VFC = ({isDemo=false}: {isDemo: boolean}) => {
  const renderPage = (movies, genre?) => (
    <PageLayout isDemo={isDemo}>
      <div className='my-20'>
        <Title label={`${genre ? `${genre} films` : 'Films by genre'}`} primary={false}/>
        <MoviesCardContainer movies={movies} isDemo={isDemo} />
      </div>
    </PageLayout>
  );

  if(isDemo) {
    return renderPage(mockResponse)
  }

  const params = useParams();
  const { genre } = params;

  const { data: allGenres }: QueryResponseType = useQuery({
    queryKey: ['currentGenre'],
    queryFn: () => fetchAllGenres(),
  });

  const getSelectedGenre = (genres: GenreType[]) => {
    return find(genres, (item) => item.name.toUpperCase() === genre?.toUpperCase());
  };
  
  const currentGenre = getSelectedGenre(allGenres?.genres);

  const { isLoading, isError, data, error }: QueryResponseType =
    useQuery({
      queryKey: ['movies', currentGenre?.id.toString()],
      queryFn: ({ queryKey }) => fetchMoviesByGenre(queryKey[1]),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return renderPage(data.results, currentGenre?.name)
}

