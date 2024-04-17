import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CardModal from "./CardModal";

function ModalManager({ selectionManager }) {
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
};

export default ModalManager;
