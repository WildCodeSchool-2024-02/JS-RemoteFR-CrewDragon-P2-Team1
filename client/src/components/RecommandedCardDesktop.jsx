import PropTypes from "prop-types";
import greyheart from "../assets/images/greyheart.png";

function RecommandedCardDesktop({
  selectionManager,
  destination,
  manageLikes,
}) {
  const toggleFunction = () => {
    manageLikes.addOrRemoveDestination(destination);
  };

  const handleClick = () => {
    selectionManager.manageCountrySelection(destination);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img
            src={destination.Src}
            alt={destination.Name}
            className="card__image"
          />
        </div>
        <div className="card__body">
          <span className="tag">{destination.Label}</span>
          <h4>Visit {destination.Name} !</h4>
          <p className="recommended__text">{destination.Text}</p>
          <p className="recommended__text__desktop">
            {" "}
            {destination.TextDesktop}
          </p>

          <div
            className="button__section"
            onClick={() => handleClick(destination.Name)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Space") {
                handleClick(destination.Name);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="button__desktop">
              <button className="button__showmore" type="button">
                Know more
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="button-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFunction();
              }}
              type="button"
              className="button__like"
            >
              {manageLikes.likeDestination.has(destination.ID) ? (
                <img
                  src="src/assets/images/blueheart.png"
                  alt="blueheart"
                  className="like"
                />
              ) : (
                <img src={greyheart} alt="greyheart" className="like" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

RecommandedCardDesktop.propTypes = {
  destination: PropTypes.shape({
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
  }).isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecommandedCardDesktop;
