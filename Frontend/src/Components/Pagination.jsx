import React, { useState } from "react";

const Pagination = ({ page, setPage, docNum }) => {
  const pages = Math.ceil(docNum / 10);

  return (
    <div>
      <div className="flex justify-center items-center mt-5 gap-2">
        {page > 1 && (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            className="bg-gray-300  shadow-lg font-bold hover:bg-gray-200 rounded-md text-sm p-2"
          >
            Previous
          </button>
        )}

        {page < pages && (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className="bg-gray-300 shhadow-lg font-bold hover:bg-gray-200 rounded-md text-sm p-2"
          >
            Next
          </button>
        )}
        <p className="text-gray-500 font-bold text-sm">
          {" "}
          page {page} of {pages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
