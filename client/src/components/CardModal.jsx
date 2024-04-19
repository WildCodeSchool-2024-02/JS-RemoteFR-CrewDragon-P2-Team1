import { useState } from "react";
import "../styles/CardModal.scss";
import PropTypes from "prop-types";

function CardModal({ destination, onClose }) {
  window.scrollTo(0, 0);

  const [toggle, setToggle] = useState(destination.Isfavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="modal-container"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === "Space") {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="modal">
        <div className="modal-header">
          <img
            src={destination.Src}
            alt={destination.Name}
            className="modal-image"
          />
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="modal-content">
          <div className="modal-content-header">
            <div className="modal-content-header-heart">
              <h1 className="countryH1">Visit {destination.Name}!</h1>
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
            </div>
            <p>{destination.Text}</p>
            <p>{destination.TextDesktop}</p>
          </div>
          <div className="modal-content-weather">
            <h2 className="weather-title">Weather</h2>
            <div className="weather-blocks">
              <div className="weather-first-block">
                <img
                  src="src/assets/images/sun-svgrepo-com.svg"
                  alt="sun logo"
                  className="meteo-icon"
                />
                <p className="weather-info">32°C</p>
                <p className="weather-info">Clear sky</p>
              </div>
              <div className="weather-second-block">
                <div className="humidity">
                  <img
                    src="src/assets/images/water-svgrepo-com.svg"
                    alt="water drops"
                    className="meteo-icon"
                  />
                  <div className="humidity-info">
                    <p>74%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className="wind">
                  <img
                    src="src/assets/images/weather-wind-svgrepo-com.svg"
                    alt="wind logo"
                    className="meteo-icon"
                  />
                  <div className="wind-info">
                    <p>5.31km/h</p>
                    <p>Wind speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-content-converter">
            <h2>Currency Converter</h2>
            <div className="converter-text">
              <p> 1 euros </p>
              <p> =</p>
              <p> Equivalent en devise nationale </p>
            </div>
          </div>
          <div className="modal-content-holidays">
            <h2>National Holidays</h2>
            <div className="holidays-text">
              <p>January 1: New Year's Day</p>
              <p>February 4: Mexican Constitution Day</p>
              <p>March 18: Birth of Benito Juarez, Mexican Republic hero</p>
              <p>Good Friday, Saturday, Easter Sunday</p>
              <p>May 1: Labor Day</p>
              <p>September 16: Mexican Independence Day</p>
              <p>November 18: Mexican Revolution Day</p>
              <p>December 25: Christmas Day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  destination: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default CardModal;
