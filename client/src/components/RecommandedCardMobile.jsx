import { useState } from "react";
import PropTypes from "prop-types";

import CardModal from "./CardModal";

import "../styles/CardModal.scss";

function RecommandedCardMobile({ name, src, label, text, isFavorite }) {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [toggle, setToggle] = useState(isFavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const [cardModalOpen, setCardModalOpen] = useState(false);

  const toggleModal = () => {
    setCardModalOpen(!cardModalOpen);
    document.body.style.overflow = "hidden";
  };

  const handleClick = (country) => {
    console.info("c'est nous, c'est derrick je suis a ", country);
    setSelectedCountry({ name, src, label, text });
    toggleModal();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <img src={src} alt={name} className="card__image" />
        </div>
        <div
          className="card__body"
          onClick={() => handleClick(name)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === "Space") {
              handleClick(name);
            }
          }}
          role="button"
          tabIndex={0}
        >
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
      {cardModalOpen && (
        <CardModal
          name={selectedCountry.name}
          src={selectedCountry.src}
          text={selectedCountry.text}
          isFavorite={toggle}
          onClose={toggleModal}
        />
      )}
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
