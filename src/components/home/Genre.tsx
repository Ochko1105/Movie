import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaChevronRight } from "react-icons/fa";

import { getGenremovies } from "../../../utilis/get-data";
import { Badge } from "../ui/badge";

export async function Genrepage() {
  const Genremoviesresponse = await getGenremovies();

  return (
    <div className=" sm:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hidden sm:block sm:border-1">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuTrigger className="sm:hidden border-1"></NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="pl-2">
                <div className="text-[24px] font-semibold">Genre</div>
                <div className="pb-5 pt-2 text-[16px]">
                  See lists of movies by genre
                </div>
              </div>

              <div className="flex flex-wrap  sm:w-[577px] sm:h-[333px] items-center gap-2 w-[355px] h-[363px]">
                {Genremoviesresponse.genres.map(
                  (genre: { id: string; name: string }) => (
                    <div key={genre.id}>
                      <Badge>
                        <NavigationMenuLink
                          href={`/genre?id=${genre.id}&name=${
                            genre.name
                          }&page=${1}`}
                        >
                          <div className="flex items-center gap-2 ">
                            <span className="text-[12px] font-semibold">
                              {genre.name}
                            </span>
                            <FaChevronRight
                              color="#09090B"
                              className="w-[16px] h-[16px]"
                            />
                          </div>
                        </NavigationMenuLink>
                      </Badge>
                    </div>
                  )
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
