import PropTypes from "prop-types";
import RecommandedList from "../components/RecommandedList";
import PopularList from "../components/PopularList";
import ModalManager from "../components/ModalManager";
import LikeSection from "../components/LikeSection";

function Home({ selectionManager, destinations, manageLikes }) {
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
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
