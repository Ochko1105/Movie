import React from "react";
import { Directorname, movieResponseType, MovieType } from "../../../../type";
import {
  Getmoviesdescribtion,
  GetmoviesDirectorsname,
  GetmoviesMorelikethis,
  GetmoviesTrailer,
} from "../../../../utilis/get-data";
import { Moviecard } from "@/components/home/Moviecard";
import { Moviedescribecard } from "@/components/home/Moviedescribe";
import { Button } from "@/components/ui/button";

type MovieidPageProps = {
  params: Promise<{ id: string }>;
};
const Movieid = async ({ params }: MovieidPageProps) => {
  const params2 = await params;
  const id = params2.id;

  const Moviebyid: MovieType = await Getmoviesdescribtion(id);
  const Moviedirectorname: Directorname = await GetmoviesDirectorsname(id);
  const MorelikeThis: movieResponseType = await GetmoviesMorelikethis(id);
  const Movietrailer: movieResponseType = await GetmoviesTrailer(id);

 

  return (
    <div>
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
        vote_count={Moviebyid.vote_count}
        Movietrailer={Movietrailer.results[1].key}
        type={Movietrailer.results[0].name}
      ></Moviedescribecard>

      <div className="flex justify-between mt-10 ml-42 w-[1200px]">
        {" "}
        <div className="text-4xl font-bold">More like this</div>{" "}
        <Button>See more</Button>
      </div>
      <div className="flex  gap-6 ml-42 mt-10 flex-wrap w-[1280px]">
        {" "}
        {MorelikeThis.results.slice(0, 5).map((movie) => (
          <Moviecard
            key={movie.id}
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
