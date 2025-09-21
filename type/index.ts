export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  runtime: number;
  genres: CrewType[];
  Movietrailer: any;
  vote_count: number;
  src: string;
  type: string;
  key: string;
  name: string;
  Score: number;
  Image: string;
  releasedate: string;
  crew: CrewType[];
  cast: CrewType[];
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  id: string;
  key: string;
  type: string;
  name: string;
  results: MovieType[];
};
export type Trailer = {
  key: string;
};

export type CrewType = {
  job: string;
  name: string;
};

export type Directorname = {
  cast: CrewType[];
  crew: CrewType[];
};
