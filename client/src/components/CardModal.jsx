import "./CardModal.css";

function CardModal() {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <div className="arrow-container">
            <img
              src="../src/assets/images/left-arrow-svgrepo-com.svg"
              alt="left arrow"
              className="arrow"
            />
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-content-header">
            <div className="modal-content-header-heart">
              <h1 className="countryH1">Visitez le Mexique !</h1>
              <img
                src="../src/assets/images/heart-svgrepo-com.svg"
                alt="blue heart"
                className="heart"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              autem iusto dolor pariatur! Perspiciatis fuga sed incidunt at
              sint. Deleniti maxime pariatur eius suscipit? Blanditiis excepturi
              sapiente rerum ab voluptatibus.
            </p>
          </div>
        </div>
        <div className="modal-footer">ya</div>
      </div>
    </div>
  );
}

export default CardModal;
