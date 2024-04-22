import PropTypes from "prop-types";

function PopularCard({ selectionManager, destination, manageLikes }) {
  const handleClick = () => {
    selectionManager.manageCountrySelection(destination);
  };

  const toggleFunction = () => {
    manageLikes.addOrRemoveDestination(destination);
  };

  return (
    <div>
      <div
        className="PopularContainer"
        onClick={() => handleClick(destination.Name)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Space") {
            handleClick(destination.Name);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="CardsContainer">
          <div className="PopularLeft">
            <img
              src={destination.Src}
              alt={destination.Name}
              className="ImgPays"
            />
          </div>
          <div className="desc">
            <h4>{destination.Name}</h4>
            <div className="PopularCity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="map"
              >
                <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p className="PopularText">{destination.Capital}</p>
            </div>
            <div className="PopularLike">
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
                  <img
                    src="src/assets/images/greyheart.png"
                    alt="greyheart"
                    className="like"
                  />
                )}
              </button>
              <p className="PopularText"> Favoris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PopularCard.propTypes = {
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

export default PopularCard;
