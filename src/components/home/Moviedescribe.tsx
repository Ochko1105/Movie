import { FaStar } from "react-icons/fa";

import { Youtubedialog } from "./Youtubedialog";
import { MovieType } from "../../../type";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export const Moviedescribecard = ({
  title,
  Score,
  Image,
  releasedate,
  runtime,
  backdrop_path,
  genres,
  overview,
  crew,
  cast,
  vote_count,
  Movietrailer,
}: MovieType) => {
  return (
    <div className="sm:w-[1200px] h-fit w-[375px] ">
      {" "}
      <div className="flex  justify-between w-[375px] sm:w-[1200px]">
        <div>
          <div className="text-[24px] sm:text-[36px] font-bold">{title}</div>
          <div>
            {releasedate} PG {Math.floor(runtime / 60)} h {runtime % 60} min
          </div>
        </div>

        <div>
          {" "}
          <div className="text-[12px]">Rating</div>
          <div className="flex gap-2 items-center">
            <FaStar color="#FDE047" className="text-2xl"></FaStar>
            <div>
              {" "}
              <div className="flex text-xl">{Math.floor(Score)} / 10</div>
              <div>{vote_count}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${Image}`}
          alt=""
          className=" object-cover sm:block hidden"
          height={450}
          width={290}
        />

        <div>
          <Youtubedialog
            image={backdrop_path}
            Movietrailer={Movietrailer}
          ></Youtubedialog>
        </div>
      </div>
      <div className="sm:block hidden">
        <div className="flex gap-4 mt-10 ">
          {genres.map((genre, index) => (
            <Link
              key={index}
              href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}
            >
              {" "}
              <div className="border w-[100px] rounded-md border-white text-center">
                {genre.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">{overview}</div>
      </div>
      <div className="flex w-[375px] mt-10 gap-6 ml-8 sm:hidden">
        <div>
          {" "}
          <img
            src={`https://image.tmdb.org/t/p/w500/${Image}`}
            alt=""
            className=" object-cover sm:hidden block"
            height={148}
            width={100}
          />
        </div>
        <div className="w-[201px]">
          {" "}
          <div className="flex gap-4  w-[201px] flex-wrap">
            {genres.map((genre, index) => (
              <Link href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}>
                {" "}
                <Badge
                  key={index}
                  className="border w-[80px] rounded-md border-white text-center"
                >
                  {genre.name}
                </Badge>
              </Link>
            ))}
          </div>
          <div className="mt-10">{overview}</div>
        </div>
      </div>
      <div className="text-2xl font-bold flex flex-col gap-6 mt-10">
        <div className="flex  items-center gap-[53px]">
          <div className="w-[64px]"> Director</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew, index) => {
              if (crew.job === "Director") {
                return <div key={index}>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-[53px]">
          <div className="w-[64px]"> Writers</div>
          <div className="text-[16px] font-normal flex gap-4">
            {crew
              .slice(0, 3)
              .map((crew: { job: string; name: string }, index) => {
                if (
                  crew.job === "Story" ||
                  crew.job === "Novel" ||
                  crew.job === "Original Story" ||
                  crew.job === "Producer"
                ) {
                  return <div key={index}>{crew.name}</div>;
                }
              })}
          </div>
        </div>
        <div className="flex  items-center gap-[53px]">
          <div className="w-[64px]"> Stars</div>
          <div className="text-[16px] font-normal flex  gap-4">
            {cast.slice(0, 3).map((cast, index) => {
              return <div key={index}>{cast.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
