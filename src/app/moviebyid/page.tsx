import React from "react";
import { Directorname, movieResponseType, MovieType } from "../../../type";
import {
  Getmoviesdescribtion,
  GetmoviesDirectorsname,
  GetmoviesMorelikethis,
  GetmoviesTrailer,
} from "../../../utilis/get-data";
import { Moviecard } from "@/components/home/Moviecard";
import { Moviedescribecard } from "@/components/home/Moviedescribe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type MovieidPageProps = {
  searchParams: Promise<{ id: string }>;
};
const Movieid = async ({ searchParams }: MovieidPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const Moviebyid: MovieType = await Getmoviesdescribtion(id);
  const Moviedirectorname: Directorname = await GetmoviesDirectorsname(id);
  const MorelikeThis: movieResponseType = await GetmoviesMorelikethis(id);
  const Movietrailer: MovieType = await GetmoviesTrailer(id);
  console.log("movieid", Moviebyid);
  console.log("Director name ", Moviedirectorname);
  console.log("Morelikethis", MorelikeThis);
  console.log("Movietrailer", Movietrailer);

  return (
    <div>
      {/* {Moviebyid.results.map((movie: MovieType) => (
        <Moviecard
          id={movie.id}
          title={movie.title}
          Score={movie.vote_average}
          Image={movie.poster_path}
        ></Moviecard>
      ))} */}
      <Moviedescribecard
        title={Moviebyid.title}
        Score={Moviebyid.vote_average}
        Image={Moviebyid.poster_path}
        releasedate={Moviebyid.release_date}
        id={Moviebyid.id}
        runtime={Moviebyid.runtime}
        backdrop_path={Moviebyid.backdrop_path}
        genres={Moviebyid.genres}
        overview={Moviebyid.overview}
        crew={Moviedirectorname.crew}
        cast={Moviedirectorname.cast}
      ></Moviedescribecard>
      <div className="flex justify-between mt-10 ml-42 w-[1200px]">
        {" "}
        <div className="text-4xl font-bold">More like this</div>{" "}
        <Button>See more</Button>
      </div>
      <div className="flex  gap-4 ml-42 mt-10">
        {" "}
        {MorelikeThis.results.slice(0, 5).map((movie) => (
          <Moviecard
            title={movie.title}
            Score={movie.vote_average}
            Image={movie.poster_path}
            id={movie.id}
          ></Moviecard>
        ))}
      </div>
    </div>
  );
};

export default Movieid;
