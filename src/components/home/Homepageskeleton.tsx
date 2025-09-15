import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="w-[1300px] h-[600px] ml-30 " />
      <div className="flex justify-center gap-2 w-[1300px] mt-10 ml-30">
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
      </div>

      <div className="flex justify-between w-[1440px]">
        <Skeleton className="h-[40] w-[120px] mt-10 ml-30 rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10 ml-30 rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 ml-[140px] mt-10 w-[1440px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex justify-between w-[1440px]">
        <Skeleton className="h-[40] w-[120px] mt-10 ml-30 rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10 ml-30 rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 ml-[140px] mt-10 w-[1440px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex justify-between w-[1440px]">
        <Skeleton className="h-[40] w-[120px] mt-10 ml-30 rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10 ml-30 rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 ml-[140px] mt-10 w-[1440px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
    </div>
  );
}
