import React from "react";
import { Corosel } from "@/components/home/Corosel";

import Upcoming from "@/components/home/Upcoming";

import TopRated from "@/components/home/TopRated";
import Popular from "@/components/home/Popular";
import { PaginationDemo } from "@/components/home/Pagination";

import { getMoviesList } from "../../../utilis/get-data";

import { movieResponseType } from "../../../type";

const upcomingMovies: movieResponseType = await getMoviesList("now_playing");

const Homepage = () => {
  return (
    <div>
      {" "}
      <div className="w-[1440px] flex flex-col ">
        <div className="ml-30">
          <Corosel movies={upcomingMovies.results}></Corosel>
        </div>

        <div>
          <Upcoming slice1={0} slice2={10}></Upcoming>
        </div>
        <div>
          <Popular slice1={0} slice2={10}></Popular>
        </div>
        <div>
          <TopRated slice1={0} slice2={10}></TopRated>
        </div>
        <div className="mt-10">
          <PaginationDemo></PaginationDemo>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
