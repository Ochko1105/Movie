import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type Paginationprops = {
  page: string;
  currentUrl: string;
};

export function Paginationcomponent({ page, currentUrl }: Paginationprops) {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {page !== "1" && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`${currentUrl}page=${Number(page) - 1}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${currentUrl}page=${Number(page) - 1}`}>
                {Number(page) - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationLink isActive href="#">
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={`${currentUrl}page=${Number(page) + 1}`}>
            {Number(page) + 1}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${currentUrl}page=${Number(page) + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
