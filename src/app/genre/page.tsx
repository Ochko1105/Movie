import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../../type";
import { getMoviesbygenreid } from "../../../utilis/get-data";

import { getGenremovies } from "../../../utilis/get-data";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: number }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || 1;

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id,
    page
  );

  const Genremoviesresponse = await getGenremovies();
  const Totalpage: number = filteredMoviesResponse.totalPages;

  const url = `/genre?id=${id}&name=${name}`;

  return (
    <div>
      <div className="flex gap-33">
        <div className="text-4xl font-bold ml-30 mt-20 mb-10">
          Search Filter
        </div>
        <div className="text-4xl font-bold ml-30 mt-20 mb-10">
          {" "}
          {filteredMoviesResponse.results.length} titles in {name}
        </div>
        <div></div>
      </div>

      <div className="flex">
        {" "}
        <div className="flex flex-wrap w-[313px] h-[200px] ml-30 gap-4 justify-start ">
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
                  <div className="border border-white rounded-md   ">
                    <Badge className="flex items-center gap-2 py-2">
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
      <Pagination className="flex justify-end mt-[32px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`${url}&page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={1 === Number(page)}
              href={`${url}&page=1`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          {Number(page)! > 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <>
            {Array.from({ length: 100 })
              .map((_, i) => i + 1)
              .filter((p) => p >= Number(page) - 2 && p <= Number(page) + 2)
              .map(
                (p: number) =>
                  p !== 1 && (
                    <div key={p}>
                      <PaginationItem>
                        <PaginationLink
                          isActive={p === Number(page)}
                          href={`${url}&page=${p}`}
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    </div>
                  )
              )}
          </>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`${url}&page=100`}>100</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`${url}&page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Genre;
