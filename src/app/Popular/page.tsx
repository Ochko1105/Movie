import { PaginationDemo } from "@/components/home/Pagination";
import Popular from "@/components/home/Popular";
export default function Popularpage() {
  return (
    <div>
      <Popular slice1={undefined} slice2={undefined}></Popular>
      <div className="mt-10">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
}
