import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComp({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const renderPages = () => {
    const pages = [];

    // Always show the first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className={
            currentPage === 1 ? "bg-[var(--primary-color)] border-none cursor-pointer pagination-active rounded-none" : "cursor-pointer pItems rounded-none"
          }
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if currentPage > 3
    if (currentPage > 3) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis className="pItems rounded-none" />
        </PaginationItem>
      );
    }

    // Show pages around currentPage (excluding 1 and totalPages)
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => setCurrentPage(i)}
            className={
              currentPage === i ? "bg-[var(--primary-color)] cursor-pointer border-none pagination-active rounded-none" : "cursor-pointer pItems rounded-none"
            }
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if currentPage < totalPages - 2
    if (currentPage < totalPages - 2) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis className="pItems rounded-none" />
        </PaginationItem>
      );
    }

    // Always show the last page if it's more than 1
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className={
              currentPage === totalPages
                ? "bg-[var(--primary-color)] cursor-pointer pagination-active rounded-none"
                : "cursor-pointer pItems rounded-none"
            }
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <Pagination className="w-full justify-center mt-5 pagination">
      <PaginationContent className="bg-[#1E293B] jakarta rounded-[12px] pBorders p-0 m-0 gap-0 border border-[#495870]">
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer pItems rounded-none"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {renderPages()}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
