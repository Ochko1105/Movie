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

import { FaStar } from "react-icons/fa";

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

  return (
    <div>
      <Popover open={isOpen}>
        <PopoverTrigger>
          <Input
            value={searchValue}
            onChange={handleChange}
            className="pl-10"
            placeholder="Search.."
            type="search"
          />
        </PopoverTrigger>

        <PopoverContent
          className="w-[537px] left-172 top-12 flex flex-col gap-[25px] "
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {foundMovies?.results.slice(0, 5).map((movie, index) => {
            return (
              <div key={index} className="flex gap-4 ml-5  ">
                <div className="mt-2">
                  <img
                    height={100}
                    width={67}
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
                <div className="ml-[370px] mt-[71px] mb-[10px] absolute bg-transparent">
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
