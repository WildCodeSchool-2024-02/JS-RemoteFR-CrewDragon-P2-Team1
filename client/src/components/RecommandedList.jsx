import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import PropTypes from "prop-types";

import RecommandedCardDesktop from "./RecommandedCardDesktop";
import RecommandedCardMobile from "./RecommandedCardMobile";
import Pagination from "./Pagination";
import "../styles/RecommandedSection.scss";

function RecommandedList({ destinations, selectionManager, manageLikes }) {
  const [page, setPage] = useState(1);
  const recordsPerPage = 8;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pageDestinations = destinations.slice(startIndex, endIndex);

  const nPages = Math.ceil(destinations.length / recordsPerPage);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 991px)" });

  return (
    <div className="recommended__section">
      <h3>Recommended for you</h3>
      <div className="recommended__carousel">
        {pageDestinations.map((destination) => (
          <div key={destination.ID}>
            {isDesktopOrLaptop ? (
              <div>
                <RecommandedCardDesktop
                  selectionManager={selectionManager}
                  destination={destination}
                  manageLikes={manageLikes}
                />
              </div>
            ) : (
              <RecommandedCardMobile
                selectionManager={selectionManager}
                destination={destination}
                manageLikes={manageLikes}
              />
            )}
          </div>
        ))}
      </div>
      <Pagination nPages={nPages} page={page} setPage={setPage} />
    </div>
  );
}

RecommandedList.propTypes = {
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
export default RecommandedList;
