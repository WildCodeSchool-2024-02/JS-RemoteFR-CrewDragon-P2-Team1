import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import RecommandedCardDesktop from "./RecommandedCardDesktop";
import RecommandedCardMobile from "./RecommandedCardMobile";

function LikeSection({ selectionManager, manageLikes }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 991px)" });

  return (
    <div className="recommended__section">
      <h3> Liked destinations </h3>
      <div className="recommended__carousel">
        {[...manageLikes.likeDestination.values()].map((destination) => (
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
    </div>
  );
}

LikeSection.propTypes = {
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default LikeSection;
