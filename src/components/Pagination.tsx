import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const Pagination = ({
  data,
  currentPage,
  pageLimit,
  operation,
  sortFilterValue,
  loadUserData,
}) => {
  //don't show button if users are less than 10
  if (data.length < pageLimit && currentPage === 0) return null;

  //he is in current page
  if (currentPage === 0) {
    console.log(
      "begin currentpage:",
      currentPage,
      " Pagelimit:",
      pageLimit,
      " datalength:",
      data.length
    );
    return (
      <div className="text-xs text-[var(--secondaryParagraphColor)] p-2 border-t-2">
        {/* 4 means 4 users ,1 means increase page */}
        <BsArrowRight
          className="border-none bg-none"
          onClick={() =>
            loadUserData(
              pageLimit,
              2 * pageLimit,
              1,
              operation,
              sortFilterValue
            )
          }
        >
          Next
        </BsArrowRight>
        Showing 1 of {pageLimit} entries
      </div>
    );
  }
  //dont display next button if the data is less than 4
  else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
    console.log(
      "Middleone currentpage:",
      currentPage,
      " Pagelimit:",
      pageLimit,
      " datalength:",
      data.length
    );
    return (
      <div className="text-xs p-2 border-t-2">
        <div className="flex gap-3">
          <BsArrowLeft
            onClick={() =>
              loadUserData(
                (currentPage - 1) * pageLimit,
                currentPage * pageLimit,
                -1,
                operation,
                sortFilterValue
              )
            }
          >
            Prev
          </BsArrowLeft>

          <BsArrowRight
            onClick={() =>
              loadUserData(
                (currentPage + 1) * pageLimit,
                (currentPage + 2) * pageLimit,
                1,
                operation,
                sortFilterValue
              )
            }
          >
            Next
          </BsArrowRight>
        </div>
        Showing {currentPage + 1} of {pageLimit} entries
      </div>
    );
  } else {
    console.log(
      "lastone currentpage:",
      currentPage,
      " Pagelimit:",
      pageLimit,
      " datalength:",
      data.length
    );
    return (
      <div className="text-xs p-2 border-t-2">
        <BsArrowLeft
          onClick={() =>
            loadUserData(
              (currentPage - 1) * pageLimit,
              currentPage * pageLimit,
              -1,
              operation,
              sortFilterValue
            )
          }
        >
          Prev
        </BsArrowLeft>
        Showing page {currentPage + 1} of {data.length} entries
      </div>
    );
  }
};
