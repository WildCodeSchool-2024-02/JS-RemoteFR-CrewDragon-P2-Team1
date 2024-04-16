import PropTypes from "prop-types";
import { useState } from "react";

function RecommandedCardDesktop({
  name,
  src,
  label,
  text,
  isFavorite,
  textDesktop,
}) {
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
          <h4>Visitez {name} !</h4>
          <p className="recommended__text">{text}</p>
          <p className="recommended__text__desktop"> {textDesktop}</p>

          <div className="button__section">
            <div className="button__desktop">
              <button className="button__showmore" type="button">
                En savoir plus
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="button-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
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

RecommandedCardDesktop.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  textDesktop: PropTypes.string.isRequired,
};

export default RecommandedCardDesktop;
