import Link from "next/link";

import { PaginationDemo } from "@/components/home/Pagination";
import TopRated from "@/components/home/TopRated";
export default async function Toprated() {
  return (
    <div>
      <TopRated slice1={undefined} slice2={undefined}></TopRated>
      <div className="mt-10">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
}
