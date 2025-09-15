import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { Moviecard } from "./Moviecard";
import { Key } from "react";
import { getMoviesList } from "../../../utilis/get-data";
import { movieResponseType } from "../../../type";

type Slicecount = {
  slice1: number | undefined;
  slice2: number | undefined;
};

export default async function TopRated({ slice1, slice2 }: Slicecount) {
  const upcomingMovies: movieResponseType = await getMoviesList("top_rated");

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Top rated</div>
        <Link href="/Toprated">
          {" "}
          <Button className="bg-white text-black ">
            See more{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4">
          {upcomingMovies.results
            .slice(slice1, slice2)
            .map(
              (movie: {
                title: string;
                vote_average: number;
                poster_path: string;
                id: number;
              }) => (
                <Moviecard
                  id={movie.id}
                  key={movie.id}
                  title={movie.title}
                  Score={movie.vote_average}
                  Image={movie.poster_path}
                />
              )
            )}
        </div>{" "}
      </div>
    </div>
  );
}
