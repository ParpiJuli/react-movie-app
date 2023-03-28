const API_KEY = process.env.REACT_APP_API_URL;
const baseAPi = 'https://api.themoviedb.org/3';
const baseImageApi = 'http://image.tmdb.org/t/p/w500';
const discoverMovieApi = `${baseAPi}/discover/movie?api_key=${API_KEY}`;

export const getOneApiUrl = (path: string | number) => {
  return `${baseAPi}/movie/${path}?api_key=${API_KEY}`;
};

export const getMoviesKeywordApiUrl = (keyword: string) => {
  return `${baseAPi}/search/movie?api_key=${API_KEY}&query=${keyword}`;
};

export const getAllGenres = () => {
  return `${baseAPi}/genre/movie/list?api_key=${API_KEY}`;
};

export const getMoviePoster = (posterPath: string) => {
  return `${baseImageApi}${posterPath}?api_key=${API_KEY}`;
};

export const getMoviesByReleaseYear = (searchYear: string | number) => {
  return `${discoverMovieApi}release_date.lte=${searchYear}`;
};

export const getMoviesByGenderApiUrl = (genreId: number | string) => {
  return `${discoverMovieApi}with_genres=${genreId}`;
};

export const getMoviesByRateApiUrl = (rate: number) => {
  return `${discoverMovieApi}&vote_average.gte=${rate}`;
};
