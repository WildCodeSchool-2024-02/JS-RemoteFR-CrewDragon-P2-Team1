import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/CardModal.scss";

function RecommandedCardMobile({
  name,
  src,
  label,
  text,
  isFavorite,
  selectionManager,
  destination,
}) {
  const [toggle, setToggle] = useState(isFavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    selectionManager.manageCountrySelection(destination);
  };

  return (
    <div
      className="container"
      onClick={() => handleClick(name)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === "Space") {
          handleClick(name);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="card">
        <div className="card__header">
          <img src={src} alt={name} className="card__image" />
        </div>
        <div className="card__body">
          <span className="tag">{label}</span>
          <h4>Visit {name} !</h4>
          <p className="recommended__text">{text}</p>

          <div className="button__section">
            <button
              type="button"
              className="button__like"
              onClick={toggleFunction}
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
        </div>
      </div>
    </div>
  );
}

RecommandedCardMobile.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  destination: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecommandedCardMobile;
