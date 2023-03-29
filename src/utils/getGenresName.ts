import { GenreType } from '../types/Movies';
import map from 'lodash/map';

export const getGenresName = (genres?: GenreType[]) => {
  return map(genres, (item: GenreType) => item.name).toString();
};
