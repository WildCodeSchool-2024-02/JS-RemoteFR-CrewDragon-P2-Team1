import PropTypes from "prop-types";
import RecommandedList from "../components/RecommandedList";
import PopularList from "../components/PopularList";
import ModalManager from "../components/ModalManager";
import LikeSection from "../components/LikeSection";
import ManageLikes from "../components/LikeDestinationsManagers";

function Home({ selectionManager, destinations }) {
  const manageLikes = new ManageLikes();

  return (
    <div>
      <ModalManager
        selectionManager={selectionManager}
        manageLikes={manageLikes}
      />
      <RecommandedList
        destinations={destinations}
        selectionManager={selectionManager}
        manageLikes={manageLikes}
      />
      <PopularList
        destinations={destinations}
        selectionManager={selectionManager}
        manageLikes={manageLikes}
      />
      <LikeSection
        selectionManager={selectionManager}
        manageLikes={manageLikes}
      />
    </div>
  );
}

Home.propTypes = {
  destinations: PropTypes.arrayOf.isRequired,
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
