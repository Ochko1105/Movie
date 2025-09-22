import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { Moviecard } from "./Moviecard";

import { getMoviesList } from "../../../utilis/get-data";
import { movieResponseType } from "../../../type";

type Slicecount = {
  slice1: number | undefined;
  slice2: number | undefined;
};

export default async function Upcoming({ slice1, slice2 }: Slicecount) {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming", 1);

  return (
    <div>
      <div className="flex justify-between pl-30 pt-10">
        <div className="text-[24px] font-semibold">Upcoming</div>
        <Link href={`/Upcoming/page=${2}`}>
          {" "}
          <Button className="bg-white text-black ">
            See more{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="ml-40 mt-10">
        <div className="flex flex-wrap gap-4">
          {upcomingMovies.results.slice(slice1, slice2).map((movie) => (
            <Moviecard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
