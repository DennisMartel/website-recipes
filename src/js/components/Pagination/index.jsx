import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Pagination.scss";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

export const DOTS = "...";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}) => {
  const [search, setSearch] = useSearchParams();

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (currentPage > 1) {
      search.set("page", currentPage);
    } else {
      if (search.get("page")) {
        search.delete("page");
      }
    }
    setSearch(search);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (!(currentPage === lastPage)) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (!(currentPage === 1)) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <div className={styles.content}>
          <div className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-rose-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Anterior &amp;laquo;" onClick={onPrevious}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
          {paginationRange.map((pageNumber, key) => {
            if (pageNumber === DOTS) {
              return (
                <div key={key} class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-rose-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" aria-label="Ir a la página 2" dangerouslySetInnerHTML={{ __html: "&raquo" }} />
              )
            }

            if (pageNumber == currentPage) {
              return (
                <div key={key} className="z-10 relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-rose-600 bg-rose-50 border border-rose-500 cursor-default leading-5">{pageNumber}</div>
              )
            } else {
              return (
                <div
                  key={key}
                  onClick={() => onPageChange(pageNumber)}
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-rose-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" aria-label="Ir a la página 2"
                >
                  {pageNumber}
                </div>
              )
            }
          })}
          <div className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-rose-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Siguiente &amp;raquo;" onClick={onNext}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

Pagination.defaultProps = {
  siblingCount: 1
}

export default Pagination