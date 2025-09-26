import { Moviecard } from "@/components/home/Moviecard";
import { getGenremovies, Getmoviebysearch } from "../../../../utilis/get-data";

import { movieResponseType, MovieType } from "../../../../type";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Paginationcomponent } from "@/components/home/Pagination";
import { Button } from "@/components/ui/button";

type SearchPageProps = {
  params: Promise<{ value: string }>;
  searchParams: Promise<{ id: string; name: string }>;
};
type genreResponsiveType = {
  genres: genretype[];
};
type genretype = {
  name: string;
  id: string;
};

const SearchPage = async ({ params, searchParams }: SearchPageProps) => {
  const Dynamicroute = await params;
  const TermToUse = Dynamicroute.value;
  const Selectedgenreid = (await searchParams).id;
  const name = (await searchParams).name;

  const movies: movieResponseType = await Getmoviebysearch(TermToUse);

  const Genremoviesresponse: genreResponsiveType = await getGenremovies();
  const FilteredSearchMovies =
    Selectedgenreid != undefined
      ? movies.results.filter((movie) =>
          movie.genre_ids.toString().includes(Selectedgenreid)
        )
      : movies.results;

  return (
    <div className="h-fit mx-auto w-[375px] sm:w-[1280px] sm:mt-20 ">
      <div>
        {" "}
        <div className="text-foreground  text-[24px] sm:text-4xl font-bold">
          Search results
        </div>
      </div>

      <div className="sm:flex mt-[32px] sm:mt-10">
        <div>
          {" "}
          <div className="text-foreground text-[20px] font-bold sm:text-2xl sm:mt-10 mb-10">
            {FilteredSearchMovies.length} results for "{TermToUse}" and genre ni
            : "{name ? name : "All type Genre"}"
          </div>
          <div className="sm:block hidden">
            {" "}
            <div className="flex flex-wrap gap-4 w-[375px] sm:w-[970px]">
              {movies.results.length > 0 ? (
                ""
              ) : (
                <div className="text-black h-[95px] w-[804px] mt-50 ml-30 mb-100 bg-white border flex items-center justify-center">
                  <div> No results found</div>
                </div>
              )}
              {FilteredSearchMovies?.map((movie) => (
                <div key={movie.id}>
                  <Moviecard
                    title={movie.title}
                    Score={movie.vote_average}
                    Image={movie.poster_path}
                    id={movie.id}
                  ></Moviecard>
                </div>
              ))}
              <Paginationcomponent
                currentUrl={`/Search/${TermToUse}?id=${Selectedgenreid}&name=${name}&`}
                page="1"
              ></Paginationcomponent>
            </div>
          </div>
          <div className="sm:hidden block">
            {" "}
            <div className="flex flex-wrap gap-4 w-[375px] sm:w-[970px]">
              {movies.results.length > 0 ? (
                ""
              ) : (
                <div className="text-black h-[95px] w-[804px] sm:mt-50 sm:ml-30 sm:mb-100 bg-white border flex items-center justify-center">
                  <div> No results found</div>
                </div>
              )}
              {FilteredSearchMovies?.slice(0, 5).map((movie) => (
                <div key={movie.id}>
                  <Moviecard
                    title={movie.title}
                    Score={movie.vote_average}
                    Image={movie.poster_path}
                    id={movie.id}
                  ></Moviecard>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-10  h-[400px]  sm:mt-10 sm:ml-20 gap-4 justify-start ">
          <div className="pl-2  mb-2 sm:h-0 h-[0px]">
            <div className="text-[24px] font-semibold">Genre</div>
            <div className="pb-0 pt-2 text-[16px]">
              See lists of movies by genre
            </div>
          </div>
          <div className="flex mt-10  flex-wrap gap-4 sm:w-[387px] ">
            {" "}
            {Genremoviesresponse.genres.map(
              (genre: { id: string; name: string }) => (
                <Link
                  key={genre.id}
                  href={`/Search/${TermToUse}?id=${genre.id}&name=${genre.name}`}
                >
                  {genre.name === name ? (
                    <Badge className="flex items-center bg-black text-white  border border-whitegap-2 py-2">
                      <span className="text-[12px] font-semibold ">
                        {genre.name}
                      </span>
                      <Link href={`/Search/${TermToUse}`}>
                        <Badge>X</Badge>
                      </Link>
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
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
