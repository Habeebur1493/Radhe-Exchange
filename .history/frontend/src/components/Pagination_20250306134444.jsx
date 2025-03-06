import React from "react";

const Pagination = ({ data, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="border p-2 mx-1 bg-gray-200 rounded"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`border p-2 mx-1 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="border p-2 mx-1 bg-gray-200 rounded"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
