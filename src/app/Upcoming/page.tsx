import { Moviecard } from "@/components/home/Moviecard";
import { movieResponseType } from "../../../type";
import { getMoviesList } from "../../../utilis/get-data";

import { Paginationcomponent } from "@/components/home/Pagination";

type MorePageProps = {
  searchParams: Promise<{ title: string; page: string; name: string }>;
};

const MorePage = async ({ searchParams }: MorePageProps) => {
  const searchQuery = await searchParams;
  const title = searchQuery.title;
  const name = searchQuery.name;
  const page = searchQuery.page || "1";

  const moviesRes: movieResponseType = await getMoviesList(title, page);

  const currentUrl = `/Upcoming?title=${title}&name=${name}&`;
  return (
    <>
      <div className="text-3xl font-bold ml-30 mb-10 text-foreground">
        {name}
      </div>
      <div className="flex gap-4 flex-wrap sm:w-[1440px] ml-50 mx-auto">
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
    </>
  );
};

export default MorePage;
