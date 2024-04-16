import { useState } from "react";
import PropTypes from "prop-types";

function PopularCard({ image, country, Isfavorite, city, Text }) {
  const [toggle, setToggle] = useState(Isfavorite);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  PopularCard.propTypes = {
    image: PropTypes.string.isRequired,
    Text: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    Isfavorite: PropTypes.bool.isRequired,
  };

  return (
    <section className="PopularContainer">
      <div className="CardsContainer">
        <img src={image} alt={country} className="ImgPays" />
      </div>
      <div className="desc">
        <p className="pays">{country}</p>
        <p className="ville">{city}</p>
        <p>{Text}</p>

        <p className="favoris">{Isfavorite}</p>
        <button
          onClick={toggleFunction}
          type="button"
          className="button_hearth"
        >
          {toggle ? (
            <img
              src="/src/assets/hearth_blue.png"
              alt="hearth"
              className="hearth"
            />
          ) : (
            <img
              src="/src/assets/hearth_grey.png"
              alt="hearth"
              className="hearth"
            />
          )}
        </button>
      </div>
    </section>
  );
}

export default PopularCard;
