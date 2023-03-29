export interface MovieType {
  genres?: GenreType[];
  homepage?: string;
  id: number;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  production_countries?: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date?: string;
  title: string;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieDetailsInfoType {
  title: string;
  detail: string | number;
  movieDescription: string;
  category?: string;
  categoryDetails?: string | string[];
  popularity?: number;
  voteAverage?: number | null;
  voteCount?: number;
}

export interface GenreType {
  id: number;
  name: string;
}
