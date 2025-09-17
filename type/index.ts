import { string } from "zod";

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
  genres: CrewType[];

  vote_count: number;
  src: string;
  type: string;
  key: string;
  name: string;
  
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  id: number;
  key: string;
  type: string;
  name: string;
  results: MovieType[];
};

export type CrewType = {
  job: string;
  name: string;
};

export type Directorname = {
  cast: CrewType[];

  crew: CrewType[];
};
