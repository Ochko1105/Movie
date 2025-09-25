import { Corosel } from "@/components/home/Corosel";

import Upcoming from "@/components/home/Upcoming";

import { getMoviesList } from "../../../utilis/get-data";

import { movieResponseType } from "../../../type";

const upcomingMovies: movieResponseType = await getMoviesList(
  "now_playing",
  "1"
);

const Homepage = () => {
  return (
    <div>
      {" "}
      <div className="w-[375px] sm:w-[1440px] sm:mx-auto flex flex-col ">
        <div className=" relative">
          <Corosel movies={upcomingMovies}></Corosel>
        </div>

        <div>
          <Upcoming
            name="Upcoming"
            title={"upcoming"}
            slice1={0}
            slice2={10}
          ></Upcoming>
        </div>
        <div>
          <Upcoming
            name="Popular"
            title={"popular"}
            slice1={0}
            slice2={10}
          ></Upcoming>
        </div>
        <div>
          <Upcoming
            name="Top rated"
            title={"top_rated"}
            slice1={0}
            slice2={10}
          ></Upcoming>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
