"use client";

import { useState } from "react";
import { Input } from "../ui/input";

import { movieResponseType } from "../../../type";
import { Getmoviebysearch } from "../../../utilis/get-data";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

import { FaSearch, FaStar } from "react-icons/fa";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await Getmoviebysearch(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Popover
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(false);
        }}
      >
        <PopoverTrigger>
          <div className="flex items-center gap-4 h-[59px] sm:hidden">
            <Button
              onClick={toggleVisibility}
              className="bg-foreground sm:hidden"
            >
              <FaSearch></FaSearch>
            </Button>
            {isVisible ? (
              <div className="flex gap-2">
                {" "}
                <Input
                  value={searchValue}
                  onChange={handleChange}
                  className=" w-[180px] sm:visible"
                  placeholder="Search.."
                  type="search"
                />
                <Button
                  onClick={toggleVisibility}
                  className="bg-gray-500 sm:hidden"
                >
                  X
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                {" "}
                <img src="/film.png" alt="" height={16} width={16} />
                <h2 className="text-base font-bold leading-4 text-indigo-700">
                  <Link href="/">Movie Z</Link>
                </h2>
              </div>
            )}
          </div>
          <Input
            value={searchValue}
            onChange={handleChange}
            className="hidden sm:block w-[180px] "
            placeholder="Search.."
            type="search"
          />
        </PopoverTrigger>

        <PopoverContent
          className="sm:w-[537px] left-172 top-12 flex flex-col gap-[25px] w-[375px]"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {foundMovies?.results.slice(0, 5).map((movie, index) => {
            return (
              <div key={index} className="flex gap-4 ml-5  ">
                <div className="mt-2">
                  <img
                    className="h-[100px] w-[67px]   "
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </div>
                <div>
                  {" "}
                  <div className="mt-2">{movie.title}</div>
                  <div>
                    <span className="flex gap-2 items-center">
                      <FaStar color="#FDE047" />
                      <span className="text-[14px]">
                        {" "}
                        {movie.vote_average}
                      </span>{" "}
                      /10
                    </span>
                  </div>
                  <div className="mt-4">{movie.release_date}</div>
                </div>
                <div className="ml-52 mt-17.5 sm:ml-[370px] sm:mt-[71px] sm:mb-[10px] absolute bg-foreground rounded-md">
                  {" "}
                  <Link href={`/moviebyid/${movie.id}`}>
                    {" "}
                    <Button>See more</Button>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className=" border flex justify-center rounded-md py-2">
            {foundMovies?.results.length === 0 ? (
              <Link href={`/Search/${searchValue}`}>Not results found </Link>
            ) : (
              <Link href={`/Search/${searchValue}`}>
                See all results for "{searchValue}"
              </Link>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
