import { MovieType } from './Movies';

export interface SearchResultsType {
  page: number
  results: MovieType[],
  total_pages: number,
  total_results: number
};

export interface ButtonProps {
  isStory?: boolean;
  backgroundColor?: string;
  label?: string;
  children?: any
  isDemo?: boolean;
  onClick?: () => void;
}