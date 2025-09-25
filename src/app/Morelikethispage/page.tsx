import { Moviecard } from "@/components/home/Moviecard";

import { movieResponseType } from "../../../type";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GetmoviesMorelikethis } from "../../../utilis/get-data";
import { Paginationcomponent } from "@/components/home/Pagination";

type MorePageProps = {
  searchParams: Promise<{ id: string; page: string; title: string }>;
};

const MorePage = async ({ searchParams }: MorePageProps) => {
  // https://localhost:3000/seeMore/upcoming?page=1

  const searchQuery = await searchParams;
  const id = searchQuery.id;
  const page = searchQuery.page || "1";
  const title = searchQuery.title;

  const moviesRes: movieResponseType = await GetmoviesMorelikethis(
    id,
    page,
    title
  );
  // /more?title=upcoming&page=3

  const currentUrl = `/Morelikethispage?id=${id}&title=${title}&`;

  return (
    <>
      <div className="w-[375px] sm:w-[1200px] sm:mx-auto flex flex-col ">
        <div className="text-3xl font-bold  mb-10 text-foreground">
          "{title}" shig kinonuud
        </div>
        <div className="flex gap-4 flex-wrap sm:w-[1440px] mx-auto ">
          {moviesRes.results.slice(0, 10).map((movie) => (
            <Moviecard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            />
          ))}
        </div>

        <Paginationcomponent
          page={page}
          currentUrl={currentUrl}
        ></Paginationcomponent>
      </div>
    </>
  );
};

export default MorePage;
