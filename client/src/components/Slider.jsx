import cityPhoto from "../assets/slider-photo1.jpg";
import bridgePhoto from "../assets/slider-photo2.png";
import roadPhoto from "../assets/slider-photo3.jpg";
import { rightClick } from "../utils/RightArrow";
import { leftClick } from "../utils/LeftArrow";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="image-container">
        <div
          className="image image1"
          id="0"
          data-translate="0"
          data-selected="true"
        >
          <img src={cityPhoto} alt="city photo" className="slider-photo1" />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Marc-Olivier Jodoin on Unsplash"
          >
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
        <div
          className="image image2"
          id="1"
          data-translate="100"
          data-selected="false"
        >
          <img src={bridgePhoto} alt="bridge photo" />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Jeremy Doddridge on Unsplash"
          >
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
        <div
          className="image image3"
          id="2"
          data-translate="200"
          data-selected="false"
        >
          <img src={roadPhoto} alt="road photo" />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Maick Maciel on Unsplash"
          >
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
      <MdArrowBackIos
        size={24}
        color="#fff"
        className="left-arrow"
        onClick={leftClick}
        cursor="pointer"
      />
      <MdArrowForwardIos
        size={24}
        color="#fff"
        className="right-arrow"
        onClick={rightClick}
        cursor="pointer"
      />
    </div>
  );
};
export default Slider;
