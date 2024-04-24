import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CardModal.scss";

function CardModal({ destination, onClose, manageLikes }) {
  const [isLoading, setIsLoading] = useState(true);

  const [time, setTime] = useState([]);
  const [dayOff, setDayOff] = useState([]);
  const [exchange, setExchange] = useState([]);
  const [timeZone, setTimeZone] = useState([]);

  const [numberOfHolidaysToDisplay, setNumberOfHolidaysToDisplay] = useState(4);
  const [displayMoreToggle, setDisplayMoreToggle] = useState(false);

  useEffect(() => {
    setNumberOfHolidaysToDisplay(displayMoreToggle ? dayOff.length : 4);
  }, [displayMoreToggle]);

  window.scrollTo(0, 0);

  const toggleFunction = () => {
    manageLikes.addOrRemoveDestination(destination);
  };

  /**
   * API TIMEZONE
   */
  const getTime = () => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${destination.TimeZone}`)
      .then((response) => {
        setTimeZone(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * API DAYOFF
   */
  const getPublicHolidays = () => {
    axios
      .get(
        `https://date.nager.at/api/v3/PublicHolidays/2024/${destination.CountryCode}`
      )
      .then((response) => {
        setDayOff(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * API WEATHER
   */
  const getWeather = (KEYWEATHER) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${destination.Capital}&appid=${KEYWEATHER}`
      )
      .then((response) => {
        setTime(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * API EXCHANGE
   */
  const getExchange = (KEYCHANGE) => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/${KEYCHANGE}/latest/${destination.Currency}`
      )
      .then((response) => {
        setExchange(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const KEYWEATHER = "a64b288f12ac5afada93e8e8c413d270";
    const KEYCHANGE = "a9ac5f398a1be13e9f3d8995";
    getTime();
    getPublicHolidays();
    getWeather(KEYWEATHER);
    getExchange(KEYCHANGE);
  }, [destination]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div className="modal-container">
          <button
            type="button"
            className="button-close"
            onClick={onClose}
            name="closebutton"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
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
                  <h1 className="countryH1">
                    Visit {destination.Name}!
                    <img
                      src={`https://flagcdn.com/${destination.CountryCode}.svg`}
                      width="30"
                      alt={destination.CountryCode}
                    />
                  </h1>
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
                <p>{destination.Text}</p>
                <p>{destination.TextDesktop}</p>
              </div>
              <div className="modal-content-time">
                <h2 className="modal-section-title"> Time </h2>
                <p>{timeZone.datetime}</p>
              </div>
              <div className="modal-content-weather">
                <h2 className="modal-section-title">Weather</h2>
                <div className="weather-blocks">
                  <div className="weather">
                    <img
                      src={`https://openweathermap.org/img/wn/${time?.weather[0].icon}@2x.png`}
                      alt="sun logo"
                      className="meteo-icon"
                    />
                    {/* vue avec antho */}
                    {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                    <p>{Math.floor(time?.main.temp - 273.15)} °C</p>
                    <p>{time?.weather[0].description}</p>
                  </div>
                  <div className="weather">
                    <img
                      src="src/assets/images/water-svgrepo-com.svg"
                      alt="water drops"
                      className="meteo-icon"
                    />
                    <div className="humidity-info">
                      <p>{time?.main.humidity} %</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                  <div className="weather">
                    <img
                      src="src/assets/images/weather-wind-svgrepo-com.svg"
                      alt="wind logo"
                      className="meteo-icon"
                    />
                    <div className="wind-info">
                      <p>{time?.wind.speed} m/s</p>
                      <p>Wind speed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-content-converter">
                <h2 className="modal-section-title">Currency Converter</h2>
                <div className="converter-text">
                  <p> 1 {destination.Currency} </p>
                  <p> =</p>
                  <p>
                    {exchange?.conversion_rates.USD} USD /
                    {exchange?.conversion_rates.EUR} EUR
                  </p>
                </div>
              </div>
              <div className="modal-content-holidays">
                <h2 className="modal-section-title">National Holidays</h2>
                <div className="holidays-text">
                  <span>
                    {dayOff.slice(0, numberOfHolidaysToDisplay).map((e) => (
                      <div key={e.name}>
                        <p>
                          {e.date} : {e.name} ({e.localName})
                        </p>
                      </div>
                    ))}
                    <div className="showmore-section">
                      <button
                        className="showmore-button"
                        type="button"
                        onClick={() => {
                          setDisplayMoreToggle(!displayMoreToggle);
                        }}
                      >
                        {displayMoreToggle ? "Show less" : "Show more"}
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default CardModal;
