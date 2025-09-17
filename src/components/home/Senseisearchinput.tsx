"use client";

import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Input } from "../ui/input";

import { movieResponseType } from "../../../type";
import { Getmoviebysearch } from "../../../utilis/get-data";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useRouter } from "next/router";



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
    <div >
      <Input
        value={searchValue}
        onChange={handleChange}
        className="pl-10"
        placeholder="Search.."
    
      />
      
        <Popover open={isOpen}>
          <PopoverTrigger className="hidden"></PopoverTrigger>
          <PopoverContent className="w-120 left-172 top-12  ">
            {foundMovies?.results.slice(0, 5).map((movie: { title: string  } ,index) => {
              return <div key={index}>{movie.title}</div>;
            })}
            <Link href={`/Search/${searchValue}`}>
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
     
    </div>
  );
};