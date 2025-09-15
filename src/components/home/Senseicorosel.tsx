"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { url } from "inspector";
type MovieType = {
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
};
type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

type MovieCarouselProps = {
  movies: MovieType[];
};
const getUpcomingmovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
const upcomingMovies: movieResponseType = await getUpcomingmovies();
export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-screen">
        <CarouselContent>
          {movies.slice(0, 3).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent
                    className={`flex aspect-video max-h-[600px] w-[1440px] items-center justify-center p-6 bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})]`}
                  >
                    <span className="text-4xl font-semibold">
                      {movie.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 items-center justify-center">
        {Array.from({ length: count })
          .slice(0, 3)
          .map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full size-4 ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          ))}
      </div>
    </>
  );
}
