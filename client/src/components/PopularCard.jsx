import { useState } from "react";
import PropTypes from "prop-types";

function PopularCard({ image, country, Isfavorite, city }) {
  const [toggle, setToggle] = useState(Isfavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  PopularCard.propTypes = {
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    Isfavorite: PropTypes.bool.isRequired,
  };

  return (
    <section className="PopularContainer">
      <div className="CardsContainer">
        <div className="PopularLeft">
          <img src={image} alt={country} className="ImgPays" />
        </div>
        <div className="desc">
          <h4>{country}</h4>
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
              onClick={toggleFunction}
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
    </section>
  );
}

export default PopularCard;
