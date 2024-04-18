import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import PropTypes from "prop-types";

import RecommandedCardDesktop from "./RecommandedCardDesktop";
import RecommandedCardMobile from "./RecommandedCardMobile";
import Pagination from "./Pagination";
import "../styles/RecommandedSection.scss";

function RecommandedList({ destinations, selectionManager }) {
  const [page, setPage] = useState(1);
  const recordsPerPage = 8;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pageDestinations = destinations.slice(startIndex, endIndex);

  const nPages = Math.ceil(destinations.length / recordsPerPage);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });

  return (
    <div className="recommended__section">
      <h3 className="white">Recommended for you</h3>
      <div className="recommended__carousel">
        {pageDestinations.map((destination) => (
          <div key={destination.ID}>
            {isDesktopOrLaptop ? (
              <div>
                <RecommandedCardDesktop
                  name={destination.Name}
                  src={destination.Src}
                  label={destination.Label}
                  text={destination.Text}
                  textDesktop={destination.TextDesktop}
                  isFavorite={destination.isFavorite}
                  selectionManager={selectionManager}
                  destination={destination}
                />
              </div>
            ) : (
              <RecommandedCardMobile
                name={destination.Name}
                src={destination.Src}
                label={destination.Label}
                text={destination.Text}
                isFavorite={destination.isFavorite}
                textDesktop={destination.TextDesktop}
                selectionManager={selectionManager}
                destination={destination}
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
  destinations: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};
export default RecommandedList;
