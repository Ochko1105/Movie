import { Moviecard } from "./Moviecard";

import { movieResponseType } from "../../../type";

import { getMoviesbygenreid } from "../../../utilis/get-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: number }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || 1;
  let a = [];

  const filteredMoviesResponse: movieResponseType = await getMoviesbygenreid(
    id,
    page
  );

  const howManyMovies: number = filteredMoviesResponse.totalPages;

  const url = `/genre?id=${id}&name=${name}`;

  return (
    <div className="mt-30 max-w-[1280px] m-auto">
      <h2 className="text-[24px] font-bold flex justify-start">{name}</h2>
      <div className="flex justify-between w-[1280px] m-auto mt-[32px] flex-wrap gap-8">
        {filteredMoviesResponse.results.map((movie) => (
          <Moviecard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            Score={movie.vote_average}
            Image={movie.poster_path}
          />
        ))}
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
