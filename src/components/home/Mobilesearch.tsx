"use client";

import { useState } from "react";
import { SearchSection } from "./Searchinput";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { Genrepage } from "./Genre";
import Link from "next/link";
import { GenreDropdown } from "./MobileGenredropdown";

type GenreResponseType = {
  genres: GenreType[];
};
type GenreType = {
  id: number;
  name: string;
};

export const MobileSearch = ({
  genresResponse,
}: {
  genresResponse: GenreResponseType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block sm:hidden">
      {isOpen ? (
        <div className="flex gap-2">
          <GenreDropdown genresResponse={genresResponse}></GenreDropdown>
          <SearchSection />
        </div>
      ) : (
        <div className="flex">
          <div className=" gap-2 sm:block block  ">
            <div className="flex gap-2">
              {" "}
              <img src="/film.png" alt="" height={16} width={16} />
              <h2 className="text-base font-bold leading-4 text-indigo-700">
                <Link href="/">Movie Z</Link>
              </h2>
            </div>
          </div>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Search />
          </Button>
        </div>
      )}
    </div>
  );
};
