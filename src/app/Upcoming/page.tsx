import Link from "next/link";

import { PaginationDemo } from "@/components/home/Pagination";

import Upcoming from "@/components/home/Upcoming";
export default async function Toprated() {
  return (
    <div>
      <div className="flex flex-wrap w-[1440px]">
        <Upcoming slice1={0} slice2={10}></Upcoming>
      </div>
      <div className="mt-10 items-end flex">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
}
