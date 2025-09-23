import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="w-[1300px] h-[600px]  mx-auto" />
      <div className="flex justify-center gap-2 w-[1300px] mt-10 mx-auto">
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
        <Skeleton className="rounded-full size-4"></Skeleton>
      </div>

      <div className="flex justify-between w-[1300px] mx-auto">
        <Skeleton className="h-[40] w-[120px] mt-10  rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10  rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 mx-auto mt-10 w-[1300px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex justify-between w-[1300px] mx-auto">
        <Skeleton className="h-[40] w-[120px] mt-10  rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10  rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 mx-auto mt-10 w-[1300px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex justify-between w-[1300px] mx-auto">
        <Skeleton className="h-[40] w-[120px] mt-10  rounded-md"></Skeleton>
        <Skeleton className="h-[40] w-[80px] mt-10  rounded-md"></Skeleton>
      </div>

      <div className="flex flex-wrap gap-4 mx-auto mt-10 w-[1300px]">
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
export function SkeletonCardMoviedetails() {
  return (
    <div>
      <div className="w-[1300px] mx-auto">
        {" "}
        <div className="w-[1300px] flex justify-between  ">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-10 w-[211px]  rounded-md"></Skeleton>
            <Skeleton className="h-[28px] w-[221px]   rounded-md"></Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[20px] w-[83px]   rounded-md"></Skeleton>
            <Skeleton className="h-[20px] w-[83px]   rounded-md"></Skeleton>
            <Skeleton className="h-[20px] w-[83px]   rounded-md"></Skeleton>
          </div>
        </div>
        <div className="w-[1300px] flex gap-[32px] mx-auto mt-10">
          <div>
            {" "}
            <div className="h-[428px] w-[390px]  rounded-md "></div>
          </div>
          <div>
            <div className="h-[428px] w-[870px]  rounded-md "></div>
          </div>
        </div>
        <div className="flex mt-10 gap-4">
          <Skeleton className="h-[20px] w-[77px]  rounded-md"></Skeleton>
          <Skeleton className="h-[20px] w-[77px]  rounded-md"></Skeleton>
          <Skeleton className="h-[20px] w-[77px]  rounded-md"></Skeleton>
        </div>
        <Skeleton className="w-[1300px] h-[22px]  rounded-md mt-5"></Skeleton>
        <Skeleton className="w-[1000px] h-[22px]  rounded-md mt-5"></Skeleton>
        <div className="flex gap-10">
          <Skeleton className="h-[28px] w-[64px]  rounded-md mt-5"></Skeleton>
          <Skeleton className="h-[28px] w-[137px]  rounded-md mt-5"></Skeleton>
        </div>
        <div className="flex gap-10">
          <Skeleton className="h-[28px] w-[64px]  rounded-md mt-5"></Skeleton>
          <Skeleton className="h-[28px] w-[360px]  rounded-md mt-5"></Skeleton>
        </div>
        <div className="flex gap-10">
          <Skeleton className="h-[28px] w-[64px]  rounded-md mt-5"></Skeleton>
          <Skeleton className="h-[28px] w-[360px]  rounded-md mt-5"></Skeleton>
        </div>
        <div className="flex gap-10 w-[1300px] justify-between">
          <Skeleton className="h-[28px] w-[250px]  rounded-md mt-5"></Skeleton>
          <Skeleton className="h-[28px] w-[165px]  rounded-md mt-5"></Skeleton>
        </div>
        <div className="flex flex-wrap gap-4  mt-10 w-[1300px]">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <Skeleton
                key={index}
                className="h-[440px] w-[245px]  p-0 rounded-md gap-2 px-0  "
              ></Skeleton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
