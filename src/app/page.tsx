import Homepage from "@/components/home/Homepage";
import { SkeletonCard } from "@/components/home/Homepageskeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<SkeletonCard />}>
        <Homepage></Homepage>
      </Suspense>
    </div>
  );
}
