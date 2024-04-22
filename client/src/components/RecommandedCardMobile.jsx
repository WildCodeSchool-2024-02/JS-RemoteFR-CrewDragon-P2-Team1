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
            <button
              type="button"
              className="button__like"
              onClick={(e) => {
                e.stopPropagation();
                toggleFunction();
              }}
            >
              {manageLikes.likeDestination.has(destination.ID) ? (
                <img
                  src="src/assets/images/blueheart.png"
                  alt="blueheart"
                  className="like"
                />
              ) : (
                <img
                  src="src/assets/images/greyheart.png"
                  alt="greyheart"
                  className="like"
                />
              )}
            </button>
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
