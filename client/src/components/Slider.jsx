import slider1Photo from "../assets/slider-photo1-new.jpg";
import slider2Photo from "../assets/ican-ats-background-pic.jpg";
import slider3Photo from "../assets/slider-photo2.png";
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
          <img
            src={slider1Photo}
            alt="man-with-chart photo"
            className="slider-photo1"
          />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Marc-Olivier Jodoin on Unsplash"
          >
            <h1 className="slider-heading heading1">
              Improve your organization’s performance and industry ratings, stay
              ahead of the curve with our tax, finance, audit, inventory and
              Business management solutions.
            </h1>
            <p className="slider-sub-heading sub-heading1">
              Let’s make tax filing and auditing a seamless process for your
              company.
            </p>
            <div className="slider-button-container">
              <button type="button" className="slider-button button1">
                <h4 className="slider-button-text">LEARN MORE</h4>
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
          <img src={slider2Photo} alt="students photo" />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Jeremy Doddridge on Unsplash"
          >
            <h1 className="slider-top-heading">ICAN/ATS Exams:</h1>
            <h2 className="slider-heading heading2">
              Become A Chartered Accountant With Ease! Let’s Hold Your hand on
              this Journey.
            </h2>
            <p className="slider-sub-heading sub-heading1">
              Let us ease the stress of your ICAN Exams with our personalized,
              expert tutorial services tailored to fit your needs and schedule.
              Rely on us to guide you successfully on your path to becoming a
              Chartered Accountant.
            </p>
            <div className="slider-button-container">
              <button type="button" className="slider-button button1">
                <h4 className="slider-button-text">LEARN MORE</h4>
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
          <img src={slider3Photo} alt="man-with-pen photo" />
          <div className="overlay"></div>
          <div
            className="text-button-container"
            // title="Photo by Maick Maciel on Unsplash"
          >
            <h1 className="slider-top-heading">Audit and Compliance:</h1>
            <p className="slider-sub-heading sub-heading1">
              Let Us Help You Navigate The Complexity of Regulatory, Donor And
              Internal Policy Compliance and Audit
            </p>
            <div className="slider-button-container">
              <button type="button" className="slider-button button1">
                <h4 className="slider-button-text">LEARN MORE</h4>
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
