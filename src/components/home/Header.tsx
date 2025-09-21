import { ModeToggle } from "./Theme";

import { Genrepage } from "./Genre";

import Link from "next/link";

import { SearchSection } from "./Senseisearchinput";

export async function Header() {
  return (
    <div className="w-[1280px] h-[60px] flex justify-between items-center ml-20 m-auto">
      <div className="flex gap-2">
        <img src="film.png" alt="" height={16} width={16} />
        <h2 className="text-base font-bold leading-4 text-indigo-700">
          <Link href="/">Movie Z</Link>
        </h2>
      </div>
      <div className="flex gap-3">
        <Genrepage></Genrepage>
        <SearchSection></SearchSection>
      </div>
      <ModeToggle></ModeToggle>
    </div>
  );
}
