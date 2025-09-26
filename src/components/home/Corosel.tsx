"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { movieResponseType, MovieType } from "../../../type";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { GiPlayButton } from "react-icons/gi";
import { GetmoviesTrailer } from "../../../utilis/get-data";

type MovieCarouselProps = {
  movies: movieResponseType;
};

export const Corosel = ({ movies }: MovieCarouselProps) => {
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
    <Carousel setApi={setApi}>
      {" "}
      <CarouselContent className="m-auto">
        {movies.results.slice(0, 5).map((movie, index) => (
          <MovieCarouselItem key={index} movie={movie} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[20px]" />
      <CarouselNext className="right-[40px]" />
      <div className="flex gap-2 items-center justify-center mt-10 w-[375px] sm:w-[1440px]">
        {Array.from({ length: count })
          .slice(0, 5)
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
    </Carousel>
  );
};

const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  const getTrailerData = async () => {
    const trailerData: movieResponseType = await GetmoviesTrailer(
      movie.id.toString()
    );
    const trailer = trailerData.results.find((item) => item.type === "Trailer");
    setTrailerKey(trailer?.key || "");
  };

  React.useEffect(() => {
    getTrailerData();
  }, []);

  return (
    <CarouselItem
      key={movie.id}
      className="text-white w-[375px] h-[710px] relative sm:relative sm:w-[1440px] sm:h-[600px]"
    >
      {" "}
      <img
        className="absolute inset-0 h-[246px] w-[375px] sm:w-[1440px] sm:h-[600px]"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      ></img>
      <div className="pt-[274px]  w-[375px] sm:w-[1440px]  text-foreground  sm:absolute sm:pl-[140px] sm:pt-[178px]  ">
        <p>Now Playing :</p>
        <Link key={movie.id} href={`/moviebyid/${movie.id}`}>
          <p className="text-[36px] font-bold">{movie.title}</p>
        </Link>
        <p className="flex gap-2 items-center text-[18px] pt-[10px]">
          <FaStar className="h-[28px] w-[28px]" color="#FDE047" />
          {movie.vote_average}
          <span className="text-[16px] color-[#71717A]">/10</span>
        </p>
        <p className="sm:w-[500px] text-[12px] font-normal pt-[26px]">
          {movie.overview}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-white text-foreground mt-10  ">
              <GiPlayButton /> Watch trailer
            </Button>
          </DialogTrigger>
          <DialogTitle className="w-[1200px]"></DialogTitle>

          <DialogContent className="mx-auto w-[1000px] h-[561px] ">
            <iframe
              width={1000}
              height={561}
              src={`https://www.youtube-nocookie.com/embed/${trailerKey}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 block "
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </CarouselItem>
  );
};
