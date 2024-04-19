import { useState } from "react";
import PropTypes from "prop-types";

function PopularCard({
  src,
  name,
  Isfavorite,
  city,
  selectionManager,
  destination,
}) {
  const handleClick = () => {
    selectionManager.manageCountrySelection(destination);
  };

  const [toggle, setToggle] = useState(Isfavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div
        className="PopularContainer"
        onClick={() => handleClick(name)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Space") {
            handleClick(name);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="CardsContainer">
          <div className="PopularLeft">
            <img src={src} alt={name} className="ImgPays" />
          </div>
          <div className="desc">
            <h4>{name}</h4>
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

              <p className="PopularText">{city}</p>
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
                {toggle ? (
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
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  Isfavorite: PropTypes.bool.isRequired,
  destination: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default PopularCard;
