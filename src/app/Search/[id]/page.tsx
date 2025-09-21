import { Moviecard } from "@/components/home/Moviecard";
import { getGenremovies, Getmoviebysearch } from "../../../../utilis/get-data";

import { movieResponseType, MovieType } from "../../../../type";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface SearchPageProps {
  params: { id: string };
}
const SearchPage = async ({ params: { id } }: SearchPageProps) => {
  const TermToUse = decodeURI(id);

  const movies: movieResponseType = await Getmoviebysearch(TermToUse);
  const Genremoviesresponse = await getGenremovies();

  return (
    <div className="mx-auto w-[1440px] ">
      <div>
        {" "}
        <div className="text-foreground text-4xl font-bold">Search results</div>
        <div className="text-foreground text-2xl">
          {movies.results.length} results for "{TermToUse}"
        </div>
      </div>

      <div className="flex mt-10">
        {" "}
        <div className="flex flex-wrap gap-4 w-[970px]">
          {movies.results.length > 0 ? (
            ""
          ) : (
            <div className="text-black h-[95px] w-[804px] mt-50 ml-30 mb-100 bg-white border flex items-center justify-center">
              <div> No results found</div>
            </div>
          )}
          {movies.results.slice(0, 10).map((movie) => (
            <div key={movie.id}>
              <Moviecard
                title={movie.title}
                Score={movie.vote_average}
                Image={movie.poster_path}
                id={movie.id}
              ></Moviecard>
            </div>
          ))}
        </div>{" "}
        <div className="flex flex-wrap w-[387px] h-[200px] ml-30 gap-4 justify-start ">
          <div className="pl-2  mb-2">
            <div className="text-[24px] font-semibold">Genre</div>
            <div className="pb-0 pt-2 text-[16px]">
              See lists of movies by genre
            </div>
          </div>
          <div className="flex flex-wrap w-[387px] mr-30">
            {" "}
            {Genremoviesresponse.genres.map(
              (genre: { id: string; name: string }) => (
                <Link
                  key={genre.id}
                  href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}
                >
                  <div className="border border-white rounded-md   ">
                    <Badge className="flex items-center gap-2 ">
                      <span className="text-[12px] font-semibold ">
                        {genre.name}
                      </span>
                      <FaChevronRight
                        color="#09090B"
                        className="w-[16px] h-[16px]"
                      />
                    </Badge>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default SearchPage;
