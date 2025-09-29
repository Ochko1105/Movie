import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GiPlayButton } from "react-icons/gi";
type Youtubeprops = {
  Movietrailer: any;

  image: string;
};

export function Youtubedialog({ Movietrailer, image }: Youtubeprops) {
  return (
    <div className="h-[211px] sm:h-[430px] w-[375px] sm:w-[880px] bg-gray-400 flex items-end pb-10 pl-10  relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        className="absolute inset-0 object-cover sm:h-[430px] sm:w-[880px] w-[375px] h-[211px]"
      ></img>{" "}
      <div>
        {" "}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="absolute rounded-full">
              <GiPlayButton /> Play trailer
            </Button>
          </DialogTrigger>

          <DialogTitle className="w-[1200px]"></DialogTitle>

          <DialogContent className="mt-[-100px] ml-[-400px] w-[1400px] h-[561px]">
            <iframe
              src={`https://www.youtube.com/embed/${Movietrailer}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 block sm:w-[1400px] sm:h-[761px]  "
            ></iframe>
          </DialogContent>
          <DialogContent className="sm:hidden block ">
            <iframe
              src={`https://www.youtube.com/embed/${Movietrailer}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 block sm:w-[1400px] sm:h-[761px] w-[375px] h-[500px] "
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
