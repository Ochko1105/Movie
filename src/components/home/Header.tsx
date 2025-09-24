import { ModeToggle } from "./Theme";

import { Genrepage } from "./Genre";

import Link from "next/link";

import { SearchSection } from "./Senseisearchinput";

export function Header() {
  return (
    <div className="w-[375px] mx-auto sm:w-[1440px]">
      <div className="flex  mx-auto justify-between gap-2 items-center h-[59px] sm:h-[102px]">
        {" "}
        <div className=" gap-2 sm:block hidden  ">
          <div className="flex gap-2">
            {" "}
            <img src="/film.png" alt="" height={16} width={16} />
            <h2 className="text-base font-bold leading-4 text-indigo-700">
              <Link href="/">Movie Z</Link>
            </h2>
          </div>
        </div>
        <div className="flex gap-3 items-center ">
          <Genrepage></Genrepage>
          <SearchSection></SearchSection>
        </div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
