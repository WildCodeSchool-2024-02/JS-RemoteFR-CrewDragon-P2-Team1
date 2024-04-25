import PropTypes from "prop-types";

import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Footer from "./components/Footer";

import HeaderNavMobile from "./components/HeaderNavMobile";
import HeaderNavDesktop from "./components/HeaderNavDesktop";

function App({ selectionManager, destinations }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });

  const location = useLocation();

  return (
    <div className="root">
      {(location.pathname !== "/" || isTabletOrMobile) && (
        <HeaderNavMobile
          destinations={destinations}
          selectionManager={selectionManager}
        />
      )}

      {isDesktopOrLaptop && location.pathname === "/" && (
        <HeaderNavDesktop
          destinations={destinations}
          selectionManager={selectionManager}
        />
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  destinations: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};
export default App;
