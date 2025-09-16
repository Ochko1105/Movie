import Link from "next/link";

import { PaginationDemo } from "@/components/home/Pagination";

import Upcoming from "@/components/home/Upcoming";
export default async function Toprated() {
  return (
    <div>
      <Upcoming slice1={undefined} slice2={undefined}></Upcoming>
      <div className="mt-10">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
}
