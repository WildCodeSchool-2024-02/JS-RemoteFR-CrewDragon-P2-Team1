import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/HeaderNavDesktop.scss";
import routes from "../routes";

function HeaderNavDesktop({ selectionManager, destinations }) {
  const [selection, setSelection] = useState("");

  const navSelectedCountry = destinations.map((data) => (
    <option value={data.Name} key={data.Name}>
      {data.Name}
    </option>
  ));

  useEffect(() => {
    // early return
    if (!selection) {
      return;
    }

    const indexOfSelection = destinations.findIndex(
      (d) => d.Name === selection
    );

    if (indexOfSelection !== undefined) {
      const destinationToReturn = destinations[indexOfSelection];

      selectionManager.manageCountrySelection(destinationToReturn);
    }
  }, [selection]);

  return (
    <div className="DHearderContainer">
      <span className="DHearderNav">
        {routes.map((route) => (
          <a className="" href={route.href} key={route.title}>
            <span className="DlinkHeader">
              <Link to={route.path}>{route.title}</Link>
            </span>
          </a>
        ))}
      </span>
      <div className="DHearderTitle">
        <h1>GLOBE GUIDE</h1>
        <div className="DinputBtn">
          <form>
            <select
              name="countrie"
              id=""
              className="DheaderInput"
              onChange={(e) => setSelection(e.target.value)}
            >
              <option value="">choose your country</option>
              {navSelectedCountry}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

HeaderNavDesktop.propTypes = {
  destinations: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderNavDesktop;
