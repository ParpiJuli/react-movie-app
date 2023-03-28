import React from 'react';
import { MovieCardContainer } from '../../movie/moviesContainer/moviesCardContainer';
import PageLayout from '../pageLayout';
import { mockResponse } from '../../../utils/mockResponse';
import { useQuery } from 'react-query';
import { QueryResponseType } from '../../../types/Queries';
import { fetchPopularMovies } from '../../../services/fetchMoviesServices';
import { Title } from '../../title/Title';
import MovieCard from '../../movie/movieCard/movieCard';
import { getMoviePoster } from '../../../services/getApiUrls';
import { getReleaseYear } from '../../../utils/getReleaseYear';
import { getGenresName } from '../../../utils/getGenresName';
import { getAverage } from '../../../utils/getAverage';

export const DetailsPage: React.VFC = ({isDemo=true, movie}: any) => {
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
          <MovieCardContainer movies={movies} />
        </div>
      </div>
    </PageLayout>
  );

  if(isDemo) {
    return renderPage(mockResponse[1], mockResponse)
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

  return renderPage(data, [])
}

