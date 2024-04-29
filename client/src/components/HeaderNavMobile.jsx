import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/HeaderNavMobile.scss";
import { useClickAway } from "@uidotdev/usehooks";
import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

import routes from "../routes";
import logo from "../assets/images/GlobPrewiew.png";

function HeaderNavMobile({ selectionManager, destinations }) {
  const location = useLocation();

  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

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
    <div className="HearderContainer">
      <div className="NavLogo">
        <div ref={ref} className="HamburgerNav">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          <AnimatePresence className="anim">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="motionDiv"
              >
                <ul className="ulHearder">
                  {routes.map((route, idx) => (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                        delay: 0.01 + idx / 100,
                      }}
                      key={route.title}
                      className="ilHearder"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className=""
                        href={route.href}
                      >
                        <span className="linkHeader">
                          <img
                            src={route.Icon}
                            alt="icon"
                            className="iconNav"
                          />
                          <Link to={route.path}>{route.title}</Link>
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <img src={logo} alt="logo" id="HeaderLogo" />
      </div>
      <div className="HearderTitle">
        <p>Welcome to</p>
        <h1>GLOBE GUIDE</h1>
        {location.pathname === "/" && (
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
        )}
      </div>
    </div>
  );
}

HeaderNavMobile.propTypes = {
  destinations: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderNavMobile;
