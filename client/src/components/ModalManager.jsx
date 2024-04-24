import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CardModal from "./CardModal";

function ModalManager({ selectionManager, manageLikes }) {
  const [cardModalOpen, setCardModalOpen] = useState(false);

  const toggleModal = () => {
    setCardModalOpen(!cardModalOpen);
    selectionManager.manageCountrySelection(null);
  };

  useEffect(() => {
    document.body.style.overflow = cardModalOpen ? "hidden" : "initial";
  }, [cardModalOpen]);

  useEffect(() => {
    if (selectionManager.selectedCountry !== null) {
      setCardModalOpen(true);
    }
  }, [selectionManager.selectedCountry]);

  return (
    <div>
      {cardModalOpen &&
        selectionManager &&
        selectionManager.selectedCountry && (
          <CardModal
            destination={selectionManager.selectedCountry}
            onClose={toggleModal}
            manageLikes={manageLikes}
          />
        )}
    </div>
  );
}

ModalManager.propTypes = {
  selectionManager: PropTypes.shape({
    selectedCountry: PropTypes.string,
    manageCountrySelection: PropTypes.func.isRequired,
  }).isRequired,
  manageLikes: PropTypes.shape({
    likeDestination: PropTypes.instanceOf(Map).isRequired,
    addOrRemoveDestination: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModalManager;
