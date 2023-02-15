import React from "react";

const Pagination = ({
  currentPage = 1,
  lastPage = 8,
  total = 150,
  isNextBtnDisabled = false,
  isPrevBtnDisabled = false,
  onClickNext,
  onClickPrev,
}) => {
  return (
    <div className="flex flex-col items-center my-8">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Pages{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {lastPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>{" "}
        Records
      </span>
      <div className="inline-flex mt-2 xs:mt-0 gap-2">
        {/* Buttons */}
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800  hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={isPrevBtnDisabled}
          style={
            isPrevBtnDisabled ? { cursor: "not-allowed", opacity: 0.5 } : null
          }
          onClick={onClickPrev}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Prev
        </button>
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={isNextBtnDisabled}
          style={
            isNextBtnDisabled ? { cursor: "not-allowed", opacity: 0.5 } : null
          }
          onClick={onClickNext}
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
