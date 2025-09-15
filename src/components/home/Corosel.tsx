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
import { MdOutlinePlayArrow } from "react-icons/md";
import { MovieType } from "../../../type";

type MovieCarouselProps = {
  movies: MovieType[];
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
        {movies.slice(0, 5).map((movie, image) => {
          return (
            <CarouselItem
              key={movie.id}
              className="text-white w-[1440px] h-[600px] relative"
            >
              <img
                className="absolute inset-0"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                height={600}
                width={1440}
              ></img>
              <div className="pt-[178px] pl-[140px] absolute ">
                <p>Now Playing :</p>
                <p className="text-[36px] font-bold">{movie.title}</p>
                <p className="flex gap-2 items-center text-[18px] pt-[10px]">
                  <FaStar className="h-[28px] w-[28px]" color="#FDE047" />
                  {movie.vote_average}
                  <span className="text-[16px] color-[#71717A]">/10</span>
                </p>
                <p className="w-[500px] text-[12px] font-normal pt-[26px]">
                  {movie.overview}
                </p>
                <Button className="bg-white text-black mt-4">
                  <MdOutlinePlayArrow />
                  Watch Trailer
                </Button>
              </div>
            </CarouselItem>
          );
        })}

        {/* <CarouselItem className="text-white w-[1440px] h-[600px] bg-[url(https://assets.murphysmultiverse.com/uploads/2022/02/knight.jpg)] bg-no-repeat bg-cover bg-center">
          <div className="pt-[178px] pl-[140px]">
            <p>Now Playing :</p>
            <p className="text-[36px] font-bold">Batman arkham city</p>
            <p className="flex gap-2 items-center">
              <FaStar color="#FDE047" />
              8/10
            </p>
            <p className="w-[500px] text-[12px] font-normal pt-[26px]">
              {" "}
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
            <Button className="bg-white text-black mt-4">
              <MdOutlinePlayArrow />
              Watch Trailer
            </Button>
          </div>
        </CarouselItem>
        <CarouselItem className="text-white w-[1440px] h-[600px] bg-[url(https://wallpapers.com/images/hd/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q.jpg)] bg-no-repeat bg-cover bg-center">
          <div className="pt-[178px] pl-[140px]">
            <p>Now Playing :</p>
            <p className="text-[36px] font-bold">Demon Slayer</p>
            <p className="flex gap-2 items-center">
              <FaStar color="#FDE047" />
              8.3/10
            </p>
            <p className="w-[500px] text-[12px] font-normal pt-[26px]">
              {" "}
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
            <Button className="bg-white text-black mt-4">
              <MdOutlinePlayArrow />
              Watch Trailer
            </Button>
          </div>
        </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious className="left-[20px]" />
      <CarouselNext className="right-[40px]" />
      <div className="flex gap-2 items-center justify-center mt-10">
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
