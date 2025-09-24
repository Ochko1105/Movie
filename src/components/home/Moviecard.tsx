import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

type MovieCardProps = {
  title: string;
  Score: number;
  Image: string;
  id: string;
};

export const Moviecard = ({ title, Score, Image, id }: MovieCardProps) => {
  return (
    <div>
      <Link href={`/moviebyid/${id}`}>
        <Card className="sm:h-[440px] w-[158px] h-[309px] sm:w-[230px] bg-secondary p-0 overflow-hidden gap-2 px-0">
          <CardContent className="w-[230px] sm:h-[340px] px-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${Image}`}
              alt=""
              className="sm:w-[230px] w-[158px] h-[233px] sm:h-[340px] object-cover"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start p-1 sm:p-2">
            <CardDescription className="flex gap-2">
              <span className="flex gap-2 items-center">
                {" "}
                <FaStar color="#FDE047" />
                <span className="text-[14px]"> {Score}</span> /10
              </span>
            </CardDescription>
            <CardTitle className="pt-2">{title}</CardTitle>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};
