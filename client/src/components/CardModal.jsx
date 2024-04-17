import "../styles/CardModal.scss";
import PropTypes from "prop-types";

function CardModal({ name, src, text, onClose }) {
  window.scrollTo(0, 0);

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <img src={src} alt="" className="modal-image" />
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
              <h1 className="countryH1">Visit {name}!</h1>
            </div>
            <p>{text}</p>
            <p>text</p>
          </div>
          <div className="modal-content-weather">
            <h2>Weather</h2>
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
              <img
                src="src/assets/images/water-svgrepo-com.svg"
                alt="water drops"
                className="meteo-icon"
              />
              <div className="humidity-info">
                <p>74%</p>
                <p>Humidity</p>
              </div>
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
          <div className="modal-content-converter">
            <h2>Currency Converter</h2>
            <form>
              <label htmlFor="fromCurrency">From:</label>
              <input type="text" id="fromCurrency" />
              <br />
              <label htmlFor="toCurrency">To:</label>
              <input type="text" id="toCurrency" />
              <br />
              <label htmlFor="amount">Amount:</label>
              <input type="text" id="amount" />
              <br />
              <button className="button-convert" type="button">
                Convert
              </button>
              <p className="amount-result">Amount (EUR): €</p>
            </form>
          </div>
          <div className="modal-content-holidays">
            <h2>National Holidays</h2>
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
  );
}

CardModal.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardModal;
