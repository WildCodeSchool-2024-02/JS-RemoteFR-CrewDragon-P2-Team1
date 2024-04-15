import "./CardModal.css";
import PropTypes from "prop-types";

function CardModal({ countryList }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <div className="arrow-container">
            <img
              src="../src/assets/images/left-arrow-svgrepo-com.svg"
              alt="left arrow"
              className="arrow"
            />
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-content-header">
            <div className="modal-content-header-heart">
              <h1 className="countryH1">Visitez le {countryList.name} !</h1>
              <img
                src="src/assets/images/heart-svgrepo-com.svg"
                alt="blue heart"
                className="heart"
              />
            </div>
            <p>{countryList.textDesktop}</p>
          </div>
          <div className="modal-content-weather">
            <h2>La météo</h2>
            <div className="weather-first-block">
              <img src="src/assets/images/sun-svgrepo-com.svg" alt="sun logo" />
              <p className="weather-info">32°C</p>
              <p className="weather-info">Temps clair</p>
            </div>
            <div className="weather-second-block">
              <img
                src="src/assets/images/water-svgrepo-com.svg"
                alt="water drops"
              />
              <div className="humidity-info">
                <p>74%</p>
                <p>Humidité</p>
              </div>
              <img
                src="src/assets/images/weather-wind-svgrepo-com.svg"
                alt="wind logo"
              />
              <div className="wind-info">
                <p>5.31km/h</p>
                <p>Vitesse du vent</p>
              </div>
            </div>
          </div>
          <div className="modal-content-converter">
            <h2>Le convertisseur de devises</h2>
            <form>
              Depuis: <br />
              <input type="text" />
              <br />
              <br />
              Vers: <br />
              <input type="text" />
              <br />
              <br />
              Montant: <br />
              <input type="text" />
            </form>
            <br />
            <button className="button-convert" type="button">
              Convertir
            </button>
            <p className="amount-result">Montant (EUR): €</p>
          </div>
          <div className="modal-content-holidays">
            <h2>Les fêtes nationales</h2>
            <p>1er janvier : Jour de l'an</p>
            <p>4 février : Jour de la constitution mexicaine</p>
            <p>
              18 mars : naissance de Benito Juarez, héros démocrate de la
              république mexicaine
            </p>
            <p>Vendredi Saint, samedi, Dimanche de Pâques</p>
            <p>1er mai : fête du Travail</p>
            <p>16 septembre : fête de l'indépendance du Mexique</p>
            <p>18 novembre : fête de la Révolution mexicaine</p>
            <p>25 décembre : Noël</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardModal.propTypes = {
  countryList: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textDesktop: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardModal;
