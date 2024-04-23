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
