import { Link } from "react-router-dom";
import "../styles/HeaderNavMobile.scss";
import { useClickAway } from "@uidotdev/usehooks";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import routes from "../routes";
import logo from "../assets/images/GlobPrewiew.png";

function HeaderNavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

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
        <p>Bienvenue chez</p>
        <h1>GLOBE GUIDE</h1>
        <input
          className="headerInput"
          type="text"
          placeholder="Search destination"
        />
      </div>
    </div>
  );
}
export default HeaderNavMobile;
