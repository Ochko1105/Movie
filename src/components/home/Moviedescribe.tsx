import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

type MovieCardProps = {
  title: string;
  Score: number;
  Image: string;
  id: number;
  releasedate: string;
  runtime: number;
  backdrop_path: string;
  genres: string[];
  overview: string;
  crew: string[];
  cast: string[];
};

export const Moviedescribecard = ({
  title,
  Score,
  Image,
  id,
  releasedate,
  runtime,
  backdrop_path,
  genres,
  overview,
  crew,
  cast,
}: MovieCardProps) => {
  return (
    <div className="w-[1068px] h-fit ml-42">
      {" "}
      <div className="flex  justify-between w-[1068px]">
        <div>
          <div>{title}</div>
          <div>
            {releasedate} PG {runtime}
          </div>
        </div>

        <div>
          {" "}
          <div>Rating</div>
          <div className="flex">
            <FaStar color="yellow"></FaStar>
            {Score}/10
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${Image}`}
          alt=""
          className="w-[290px] h-[428px] object-cover"
        />
        <img
          className=" "
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          height={428}
          width={760}
        ></img>
      </div>
      <div className="flex gap-4 mt-10">
        {genres.map((genre) => (
          <div className="border w-[100px] rounded-md border-white text-center">
            {genre.name}
          </div>
        ))}
      </div>
      <div className="mt-10">{overview}</div>
      <div className="text-2xl font-bold flex flex-col gap-4 mt-10">
        <div className="flex  items-center gap-10">
          <div> Director</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew) => {
              if (crew.job === "Director") {
                return <div>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div> Writers</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew) => {
              if (
                crew.job === "Story" ||
                crew.job === "Novel" ||
                crew.job === "Original Story"
              ) {
                return <div>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div> Stars</div>
          <div className="text-[16px] font-normal flex  gap-4">
            {cast.slice(0, 3).map((cast) => {
              return <div>{cast.name}</div>;
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
