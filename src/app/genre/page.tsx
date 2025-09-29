import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../../type";
import { getMoviesbygenreid } from "../../../utilis/get-data";

import { getGenremovies } from "../../../utilis/get-data";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Paginationcomponent } from "@/components/home/Pagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id,
    page
  );

  const Genremoviesresponse = await getGenremovies();

  const url = `/genre?id=${id}&name=${name}&`;

  return (
    <div className="mx-auto sm:w-[1440px]">
      <div className="flex gap-33">
        <div className="text-4xl font-bold  mt-20 mb-10">Search Filter</div>
        <div className="text-4xl font-bold  mt-20 mb-10 ml-30 sm:block hidden">
          {" "}
          {filteredMoviesResponse.total_results} titles in {name}
        </div>
      </div>

      <div className="sm:flex">
        {" "}
        <div className="sm:flex flex-wrap w-[313px] h-[200px]  gap-4 justify-start ">
          <div className="pl-2  ">
            <div className="text-[24px] font-semibold">Genre</div>
            <div className="pb-5 pt-2 text-[16px]">
              See lists of movies by genre
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {" "}
            {Genremoviesresponse.genres.map(
              (genre: { id: string; name: string }) => (
                <Link
                  key={genre.id}
                  href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}
                >
                  <div>
                    {" "}
                    {genre.name === name ? (
                      <Badge className="flex items-center bg-black text-white  border border-whitegap-2 py-2">
                        <span className="text-[12px] font-semibold ">
                          {genre.name}
                        </span>
                        X
                      </Badge>
                    ) : (
                      <Badge className="flex items-center gap-2 py-2 bg-foreground">
                        <span className="text-[12px] font-semibold ">
                          {genre.name}
                        </span>
                        <FaChevronRight
                          color="#09090B"
                          className="w-[16px] h-[16px]"
                        />
                      </Badge>
                    )}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>{" "}
        <div className="text-[20px] font-bold mt-50 sm:hidden">
          {" "}
          {filteredMoviesResponse.total_results} titles in {name}
        </div>
        <div className="flex flex-wrap gap-3 w-[375px] sm:mt-0 mt-10 sm:w-[970px] sm:ml-[140px]">
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
            <Moviecard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>
      </div>

      <Paginationcomponent currentUrl={url} page={page}></Paginationcomponent>
    </div>
  );
};

export default Genre;
