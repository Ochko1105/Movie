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
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-1">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="pl-2">
                <div className="text-[24px] font-semibold">Genre</div>
                <div className="pb-5 pt-2 text-[16px]">
                  See lists of movies by genre
                </div>
              </div>

              <div className="flex flex-wrap w-[577px] h-[333px] items-center gap-2">
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
