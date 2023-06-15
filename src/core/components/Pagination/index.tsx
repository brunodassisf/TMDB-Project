import React from "react";
import { animateScroll as scroll } from "react-scroll";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 1) {
      return null;
    }

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={` border border-gray-600 h-7 w-7 rounded-full mx-1 text-sm font-medium ${
            isActive ? "bg-blue-500 border-none text-white" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return <div className="my-5 flex justify-center">{renderPagination()}</div>;
};

export default Pagination;
