export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  runtime: number;
  genres: string[];
  crew: string[];
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  id: number;
  results: MovieType[];
};

export type Directorname = {
  cast: string[];
  crew: string[];
};
