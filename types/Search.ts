import { MovieType } from './Movies';

export interface SearchResultsType {
  page: number
  results: MovieType[],
  total_pages: number,
  total_results: number
};

