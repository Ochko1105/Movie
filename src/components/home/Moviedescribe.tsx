import { FaStar } from "react-icons/fa";

import { Youtubedialog } from "./Youtubedialog";
import { MovieType } from "../../../type";

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
    <div className="w-[1068px] h-fit ml-42">
      {" "}
      <div className="flex  justify-between w-[1068px]">
        <div>
          <div className="text-[36px] font-bold">{title}</div>
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
              <div className="flex text-xl">{Score}/10</div>
              <div>{vote_count}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${Image}`}
          alt=""
          className=" object-cover"
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
      <div className="flex gap-4 mt-10">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="border w-[100px] rounded-md border-white text-center"
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="mt-10">{overview}</div>
      <div className="text-2xl font-bold flex flex-col gap-4 mt-10">
        <div className="flex  items-center gap-10">
          <div> Director</div>
          <div className="text-[16px] font-normal">
            {crew.map((crew, index) => {
              if (crew.job === "Director") {
                return <div key={index}>{crew.name}</div>;
              }
            })}
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div> Writers</div>
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
        <div className="flex  items-center gap-10">
          <div> Stars</div>
          <div className="text-[16px] font-normal flex  gap-4">
            {cast.slice(0, 3).map((cast, index) => {
              return <div key={index}>{cast.name}</div>;
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
