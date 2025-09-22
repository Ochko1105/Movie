import Upcoming from "@/components/home/Upcoming";

interface UpcomingPageProps {
  params: { page: string };
}

export default function Toprated({ params: { page } }: UpcomingPageProps) {
  return (
    <div>
      <div className="flex flex-wrap w-[1440px]">
        <Upcoming slice1={0} slice2={20}></Upcoming>
      </div>
    </div>
  );
}
