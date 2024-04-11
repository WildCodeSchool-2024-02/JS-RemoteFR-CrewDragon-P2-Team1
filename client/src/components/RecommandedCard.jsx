import PropTypes from "prop-types";
import { useState } from "react";

function RecommandedCard({ Name, Src, Label, Text, isFavorite }) {
  const [toggle, setToggle] = useState(isFavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img src={Src} alt={Name} className="card__image" />
        </div>
        <div className="card__body">
          <span className="tag">{Label}</span>
          <h4>Visitez {Name} !</h4>
          <p className="recommanded__text">{Text}</p>

          <div className="like__button__section">
            <button
              onClick={toggleFunction}
              type="button"
              className="button-like"
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

RecommandedCard.propTypes = {
  Name: PropTypes.string.isRequired,
  Src: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default RecommandedCard;
