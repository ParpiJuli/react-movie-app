import {
  getOneApiUrl,
  getMoviesByGenderApiUrl,
  getMoviesKeywordApiUrl,
  getMoviesByReleaseYear,
  getMoviePoster,
  getAllGenres
} from './getApiUrls';

export const fetchPopularMovies = async(path: string) => {
  const response = await fetch(getOneApiUrl(path));
  return response.json();
};

export const fetchMovieById = async(id: number | string) => {
  const response = await fetch(getOneApiUrl(id));
  return response.json();
};

export const fetchMoviesByGenre = async(genreId: number | string) => {
  const response = await fetch(getMoviesByGenderApiUrl(genreId));
  return response.json();
};

export const fetchMoviesByNameSearch= async(keyword: string) => {
  const response = await fetch(getMoviesKeywordApiUrl(keyword));
  return response.json();
};


export const fetchMoviesByReleaseDate= async(searchYear: string) => {
  const response = await fetch(getMoviesByReleaseYear(searchYear));
  return response.json();
};

export const fetchMoviePoster= async(posterPath:string) => {
  const response = await fetch(getMoviePoster(posterPath));
  return response.json();
};

export const fetchAllGenres= async() => {
  const response = await fetch(getAllGenres());
  return response.json();
};
