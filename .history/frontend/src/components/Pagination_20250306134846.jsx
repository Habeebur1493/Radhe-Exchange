import React from "react";

const Pagination = ({ data, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage + 1;
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, data.length);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 border-t border-gray-300">
      {/* Left Side: Showing Entries */}
      <div className="text-sm text-gray-600">
        Showing {indexOfFirstItem} to {indexOfLastItem} of {data.length} entries
      </div>

      {/* Right Side: Pagination Buttons */}
      <div className="flex space-x-2">
        <button
          className="border px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`border px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="border px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
