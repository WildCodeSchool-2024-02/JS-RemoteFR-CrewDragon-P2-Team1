import PropTypes from "prop-types";
import "../styles/CardModal.scss";

function RecommandedCardMobile({ selectionManager, destination, manageLikes }) {
  const toggleFunction = () => {
    manageLikes.addOrRemoveDestination(destination);
  };

  const handleClick = () => {
    selectionManager.manageCountrySelection(destination);
  };

  return (
    <div
      className="container"
      onClick={() => handleClick(destination.Name)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === "Space") {
          handleClick(destination.Name);
        }
      }}
      role="button"
      tabIndex={0}
    >
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

          <div className="button__section">
            <svg
              onClick={(e) => {
                e.stopPropagation();
                toggleFunction();
              }}
              type="button"
              className="button__like"
              xmlns="http://www.w3.org/2000/svg"
              fill={
                manageLikes.likeDestination.has(destination.ID)
                  ? "#04bfbf"
                  : "#a6a6a6"
              }
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

RecommandedCardMobile.propTypes = {
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

export default RecommandedCardMobile;
