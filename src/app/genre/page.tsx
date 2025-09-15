import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../../type";
import { getMoviesbygenreid, getMoviesList } from "../../../utilis/get-data";
import { PaginationDemo } from "@/components/home/Pagination";
import { getGenremovies } from "../../../utilis/get-data";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Getmoviesdescribtion } from "../../../utilis/get-data";

type GenrePageProps = {
  searchParams: Promise<{ id: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id
  );

  const Genremoviesresponse = await getGenremovies();

  return (
    <div>
      <div className="flex gap-33">
        <div className="text-4xl font-bold ml-30 mt-20 mb-10">
          Search Filter
        </div>
        <div className="text-4xl font-bold ml-30 mt-20 mb-10">
          {" "}
          {filteredMoviesResponse.results.length} titles in {}
        </div>
        <div></div>
      </div>

      <div className="flex">
        {" "}
        <div className="flex flex-wrap w-[313px] h-[200px] ml-30 gap-4 justify-start ">
          <div className="pl-2  mb-10">
            <div className="text-[24px] font-semibold">Genre</div>
            <div className="pb-5 pt-2 text-[16px]">
              See lists of movies by genre
            </div>
          </div>
          {Genremoviesresponse.genres.map(
            (genre: { id: string; name: string }) => (
              <Link key={genre.id} href={`/genre?id=${genre.id}`}>
                <div className="border border-white rounded-md   ">
                  <Button className="flex items-center gap-2 ">
                    <span className="text-[12px] font-semibold ">
                      {genre.name}
                    </span>
                    <FaChevronRight
                      color="#09090B"
                      className="w-[16px] h-[16px]"
                    />
                  </Button>
                </div>
              </Link>
            )
          )}
        </div>{" "}
        <div className="flex flex-wrap gap-3 w-[970px] ml-[140px]">
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

      <div className="mt-10 ml-165">
        {" "}
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
};

export default Genre;
