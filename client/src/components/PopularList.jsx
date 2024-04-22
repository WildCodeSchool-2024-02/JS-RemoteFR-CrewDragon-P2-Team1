import { useState } from "react";
import PropTypes from "prop-types";
import PopularCard from "./PopularCard";
import "../styles/SectionPopular.scss";

function PopularList({ destinations, selectionManager, manageLikes }) {
  const [page, setPage] = useState(4);
  const recordsPerPage = 3;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pageDestinations = destinations.slice(startIndex, endIndex);

  const nPages = Math.ceil(destinations.length / recordsPerPage);

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  return (
    <div className="popular__section">
      <h3> Popular destinations </h3>

      <div className="popular_list">
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
        {pageDestinations.map((destination) => (
          <PopularCard
            key={destination.ID}
            selectionManager={selectionManager}
            destination={destination}
            manageLikes={manageLikes}
          />
        ))}
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
      </div>
    </div>
  );
}

PopularList.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Src: PropTypes.string.isRequired,
      Label: PropTypes.string.isRequired,
      Text: PropTypes.string.isRequired,
      TextDesktop: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      Capital: PropTypes.string.isRequired,
      CountryCode: PropTypes.string.isRequired,
      Currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default PopularList;
