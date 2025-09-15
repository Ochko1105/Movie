import { ModeToggle } from "./Theme";
import { Genrepage } from "./Genre";
import { SearchInput } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

import Link from "next/link";

export async function Header() {
  return (
    <div className="w-[1280px] h-[60px] flex justify-between items-center ml-20 m-auto">
      <div className="flex gap-2">
        <img className="w-[16px] h-[16px] " src="film.png" alt="" />
        <h2 className="text-base font-bold leading-4 text-indigo-700">
          <Link href="/">Movie Z</Link>
        </h2>
      </div>
      <div className="flex gap-3">
        <Genrepage></Genrepage>
        <div className="flex items-center gap-2 h-[36px] w-[355px] border rounded-md">
          <IoIosSearch className="ml-2" />
          <SearchInput
            type="search"
            placeholder="Search ..."
            className="w-[379px] h-[36px] border-0"
          />
        </div>
      </div>
      <ModeToggle></ModeToggle>
    </div>
  );
}
