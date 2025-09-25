import React, { Suspense } from "react";
import {
  Directorname,
  movieResponseType,
  MovieType,
  Trailer,
} from "../../../../type";
import {
  Getmoviesdescribtion,
  GetmoviesDirectorsname,
  GetmoviesMorelikethis,
  GetmoviesTrailer,
} from "../../../../utilis/get-data";
import { Moviecard } from "@/components/home/Moviecard";
import { Moviedescribecard } from "@/components/home/Moviedescribe";
import { Button } from "@/components/ui/button";
import {
  SkeletonCard,
  SkeletonCardMoviedetails,
} from "@/components/home/Homepageskeleton";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type MovieidPageProps = {
  params: Promise<{ id: string }>;
};
const Movieid = async ({ params }: MovieidPageProps) => {
  const params2 = await params;
  const id = params2.id;

  const Moviebyid: MovieType = await Getmoviesdescribtion(id);
  const Moviedirectorname: Directorname = await GetmoviesDirectorsname(id);
  const MorelikeThis: movieResponseType = await GetmoviesMorelikethis(
    id,
    "1",
    Moviebyid.title
  );
  const Movietrailer: movieResponseType = await GetmoviesTrailer(id);
  const Trailer = Movietrailer.results.find((item) => item.type === "Trailer");

  return (
    <Suspense fallback={<SkeletonCardMoviedetails />}>
      <div className="sm:w-[1280px] mx-auto">
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
          Movietrailer={Trailer?.key}
          key={""}
          adult={false}
          genre_ids={[]}
          original_language={""}
          poster_path={""}
          release_date={""}
          vote_average={0}
          src={""}
          name={""}
          type={""}
        ></Moviedescribecard>

        <div className="flex justify-between mt-10  sm:w-[1280px] w-[375px] ">
          {" "}
          <div className="text-4xl font-bold">More like this</div>{" "}
          <Link
            // href={`/Morelikethis?id=${MorelikeThis.id}`}
            href={`/Morelikethispage?id=${id}&title=${Moviebyid.title}`}
          >
            <Button>
              See more{" "}
              <FaChevronRight color="black" className="w-[16px] h-[16px]" />
            </Button>
          </Link>
        </div>
        <div className="flex  gap-6  mt-10 sm:flex-wrap w-[375px] ml-5 sm:w-[1280px] overflow-hidden">
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
    </Suspense>
  );
};

export default Movieid;
