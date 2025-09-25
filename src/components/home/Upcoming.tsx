import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { Moviecard } from "./Moviecard";

import { getMoviesList } from "../../../utilis/get-data";
import { movieResponseType } from "../../../type";

type Slicecount = {
  slice1: number | undefined;
  slice2: number | undefined;
  title: string;
  name: string;
};

export default async function Upcoming({
  slice1,
  slice2,
  title,
  name,
}: Slicecount) {
  const upcomingMovies: movieResponseType = await getMoviesList(title, "1");

  return (
    <div className="sm:w-[1440px] sm:mx-auto w-[375px]">
      <div className="flex justify-between sm:ml-20 mx-auto  pt-10 sm:mr-35">
        <div className="text-[24px] font-semibold">{name}</div>
        <Link href={`/Upcoming?title=${title}&name=${name}`}>
          {" "}
          <Button className="bg-white text-black ">
            See more{" "}
            <FaChevronRight color="black" className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="sm:ml-20 mx-5  mt-10">
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
