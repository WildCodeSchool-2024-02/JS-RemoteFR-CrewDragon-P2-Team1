import PropTypes from "prop-types";
import { useState } from "react";

function RecommandedCardMobile({ name, src, label, text, isFavorite }) {
  const [toggle, setToggle] = useState(isFavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
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
};

export default RecommandedCardMobile;
