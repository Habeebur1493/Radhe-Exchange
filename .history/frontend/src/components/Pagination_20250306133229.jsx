import { useState } from "react";

const Pagination = ({ data = [], itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle empty data case
  if (!Array.isArray(data)) {
    console.error("Invalid data provided to Pagination component.");
    return <p>Error: Invalid data format.</p>;
  }

  // Calculate total pages
  const totalPages = data.length ? Math.ceil(data.length / itemsPerPage) : 1;

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  return (
    <div>
      {/* Render Data */}
      <ul>
        {currentData.map((item, index) => (
          <li key={index} className="border p-2">
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-[14px]">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, data.length)} of {data.length} entries
        </h1>

        <div className="text-white text-[14px]">
          <button
            className="btn3 border border-gray-400 p-2 rounded-l-sm"
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            className="btn3 border border-gray-400 p-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="btnsp border border-gray-400 p-2 px-4">
            {currentPage}
          </span>
          <button
            className="btn3 border border-gray-400 p-2"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            className="btn3 border border-gray-400 p-2 rounded-r-sm"
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const App = () => {
  const sampleData = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  return <Pagination data={sampleData} itemsPerPage={5} />;
};

export default Pagination;
