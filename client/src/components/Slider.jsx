import cityPhoto from "../assets/city-photo2.jpg";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="city-photo-container">
        <img src={cityPhoto} alt="city-photo" />
        <div className="overlay"></div>
        <div className="text-button-container">
          <h1 className="slider-heading heading1">
            Bridge the knowledge gap in your workforce
          </h1>
          <p className="slider-sub-heading sub-heading1">
            Equipping the workforce with the requisite skills to advance the
            growth of the organization as industry demands.
          </p>
          <div className="slider-button-container">
            <button type="button" className="slider-button button1">
              BOOk A CONSULTATION
            </button>
            {/* <button type="button" className="slider-button button2">
              REGISTER FOR TRAINING
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
