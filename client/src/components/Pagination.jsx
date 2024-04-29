import PropTypes from "prop-types";

function Pagination({ nPages, page, setPage }) {
  const startPage = Math.floor((page - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, nPages);

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  return (
    <nav className="pagination__nav">
      <ul>
        <li>
          <svg
            onClick={goToPrevPage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="button__svg__nav"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </li>

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((pgNumber) => (
          <li key={pgNumber}>
            <button
              type="button"
              onClick={() => setPage(pgNumber)}
              className={`${page === pgNumber ? "active" : ""} `}
            >
              {pgNumber}
            </button>
          </li>
        ))}

        <li>
          <svg
            onClick={goToNextPage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="button__svg__nav"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  nPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
