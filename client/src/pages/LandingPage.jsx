import { useEffect } from "react";
import { GallerySectionSlider, Slider } from "../components";
import { gSectionRightClick } from "../utils/GSectionRightArrow";
import { gSectionLeftClick } from "../utils/GSectionLeftArrow";
import { rightClick } from "../utils/RightArrow";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import internalAuditMaterial from "../assets/files/internal-audit.pdf";
import icanLogo from "../assets/ican-logo.png";
import citnLogo from "../assets/CITN-Logo.png";
import icsanLogo from "../assets/icsan-logo.jpeg";
import service1Photo from "../assets/service1-image.jpg";
import service2Photo from "../assets/galleryPhotos/galleryPhoto20.jpeg";
import serviceEmpowerPhoto from "../assets/service-empower-image.jpg";
import BornoStateGovernmentLogo from "../assets/borno-government-logo.jpeg";
import FoodRatataLtdLogo from "../assets/food-ratata-logo.jpeg";
import SooyahBistroLtdLogo from "../assets/sooyah-bistro-logo.jpeg";
import StudentLogo from "../assets/student-logo.jpeg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    //Select elements
    let gSectionBox3 = document.querySelector(".g-section-num-stat.box3");
    let gSectionPhotos = [...document.querySelectorAll(".g-section-image")];
    gSectionBox3.textContent = gSectionPhotos.length;

    let a = setInterval(rightClick, 5000);
    let b = setInterval(gSectionRightClick, 5000);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <main className="landing-page">
      <Slider />
      <div className="services-container">
        <div className="services-dots dots">
          <div className="services-dot-left dot-left"></div>
          <div className="services-dot-right dot-right"></div>
        </div>
        <h2 className="services-heading">Our Services</h2>
        <br />
        <p className="services-paragraph">
          Our extensive span of services give organizations of all sizes the
          competitive advantage to thrive in the ever-changing business
          environment.
        </p>
        <div className="services-list">
          <div className="service service1">
            <div className="service1-image-container">
              <img src={service1Photo} alt="" className="service1-image" />
            </div>

            <h2 className="service1-heading">Corporate Services</h2>
            {/* <div className="service1-underline"></div> */}
            <hr width="95%" color="#409204" />
            <button className="service-button">
              <Link to="/corporate-and-advisory-services">READ MORE</Link>
            </button>
          </div>
          <div className="service service2">
            <div className="service2-image-container">
              <img src={service2Photo} alt="" className="service2-image" />
            </div>

            <h2 className="service2-heading">Learning & development</h2>
            {/* <div className="service2-underline"></div> */}
            <hr width="95%" color="#409204" />
            <button className="service-button">
              <Link to="/learning-and-development">READ MORE</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="service-empower-section-container">
        <div className="service-empower-image-container">
          <img
            src={serviceEmpowerPhoto}
            alt=""
            className="service-empower-photo"
          />
        </div>
        <div className="service-empower-writeup-container">
          <h2 className="service-empower-heading">
            Empowering individuals, Advancing organizations.
          </h2>
          <p className="service-empower-paragraph">
            At The Midas Touch Consultancy, we are a premier consulting firm
            dedicated to empowering individuals and organizations with expert
            guidance and innovative solutions. With offices in Lagos and
            Maiduguri, we have proudly served clients for the past five years,
            delivering excellence across a broad spectrum of services.
          </p>
          <button
            className="service-empower-button"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            <Link to="/about-us">MORE ABOUT US</Link>
          </button>
        </div>
      </div>
      <div className="our-clients-container">
        <div className="our-clients-dots dots">
          <div className="our-clients-dot-left dot-left"></div>
          <div className="our-clients-dot-right dot-right"></div>
        </div>
        <h1 className="our-clients-heading">Our Clients</h1>
        <p className="our-clients-text">
          We are trusted by these brands and many more to deliver transformative
          solutions.
        </p>
        <div className="clients-logos-container">
          <div className="clients-logos-center">
            <div className="client-logo-translate-container1">
              <div className="client-logo logo1">
                <img
                  src={BornoStateGovernmentLogo}
                  alt="Borno State Government logo"
                  className="borno-state-government"
                />
              </div>
              <div className="client-logo logo2">
                <img
                  src={FoodRatataLtdLogo}
                  alt="Food Ratata Ltd logo"
                  className="food-ratata"
                />
              </div>
              <div className="client-logo logo3">
                <img
                  src={SooyahBistroLtdLogo}
                  alt="Sooyah Bistro Ltd logo"
                  className="sooyah-bistro"
                />
              </div>
              <div className="client-logo logo4">
                <img src={StudentLogo} alt="student logo" className="student" />
              </div>
              <div className="client-logo logo5">
                {/* <img src={StudentLogo} alt="student logo" className="student" /> */}
              </div>
            </div>
            <div className="client-logo-translate-container2">
              <div className="client-logo logo1">
                <img
                  src={BornoStateGovernmentLogo}
                  alt="Borno State Government logo"
                  className="borno-state-government"
                />
              </div>
              <div className="client-logo logo2">
                <img
                  src={FoodRatataLtdLogo}
                  alt="Food Ratata Ltd logo"
                  className="food-ratata"
                />
              </div>
              <div className="client-logo logo3">
                <img
                  src={SooyahBistroLtdLogo}
                  alt="Sooyah Bistro Ltd logo"
                  className="sooyah-bistro"
                />
              </div>
              <div className="client-logo logo4">
                <img src={StudentLogo} alt="student logo" className="student" />
              </div>
              <div className="client-logo logo5">
                {/* <img src={StudentLogo} alt="student logo" className="student" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <h1 className="testimonial-heading">Testimonials</h1>
        <h2 className="testimonial-text">Client Feedback</h2>
        <div className="testimonial-statements">
          <div className="statement client1">
            <q className="statement-paragraph">
              I'm thrilled to share my amazing experience at Midas Touch ICAN
              Tutorial centre! My name is Shepherdess Bulus Wayar, an Accounting
              graduate and I attended their tutorial centre for my Skills level
              exam (May diet) and passed four out of five courses in one go! The
              instructors were exceptional, providing personalized attention and
              guidance that helped me excel. I'm grateful for the supportive
              learning environment and the significant impact it had on my
              academic success. I wholeheartedly recommend Midas Touch to anyone
              seeking top-notch tutoring for their ICAN journey. They truly
              deliver excellence!
            </q>
            <p className="client-status">
              <span className="testimony-giver-name">
                Shepherdess Bulus Wayar
              </span>
              , Student, Midas Touch ICAN Tutorial centre
            </p>
          </div>
          <div className="statement client2">
            <q className="statement-paragraph">
              MIDAS TOUCH reassured me to believe in myself. I registered as an
              ICAN student a decade ago, sat for two diets, and gave up. This
              year, the center was recommended for me, and I accepted. I
              registered, attended and participated in the class, sat for May
              2024 diet and cleared 2 out of 3 papers. I would say that I
              deserved failing PSAF because I also didn't do justice to it.
              MIDAS Touch is a place to be. Full of potentials to influence you
              academically, business wise, and in general decisions of live.
              Choose MidasTouch and be touched.
            </q>
            <p className="client-status">
              <span className="testimony-giver-name">Joy Malgwi</span>, Student,
              Midas Touch ICAN Tutorial centre
            </p>
          </div>
          <div className="statement client3">
            <q className="statement-paragraph">
              As the Chief Operating Officer of Food Ratata Ltd, I am delighted
              to share our positive experience with Midas Touch Consult. Their
              services have significantly transformed our operations,
              particularly in reducing costs and minimizing waste through their
              sound internal controls. Midas Touch Consult conducted a thorough
              analysis of our processes and implemented tailored internal
              control systems that have enhanced our efficiency. Their expert
              guidance helped us identify and eliminate unnecessary expenses,
              streamline our inventory management, and optimize resource
              utilization. As a result, we have seen a substantial reduction in
              waste and a marked improvement in our cost-saving measures. We
              highly recommend Midas Touch Consult to any organization seeking
              to enhance their internal controls, reduce costs, and boost
              profitability. Their expertise and dedication make them an
              invaluable partner in business success.
            </q>
            <p className="client-status">
              <span className="testimony-giver-name">Eboh Precious</span>, Chief
              Operating Officer, Food Ratata Ltd
            </p>
          </div>
        </div>
      </div>
      {/* <img src={underline} alt="" width="30px" height="20px" /> */}
      <div className="accreditations-and-memberships-container">
        <div className="accreditations-dots dots">
          <div className="accreditations-dot-left dot-left"></div>
          <div className="accreditations-dot-right dot-right"></div>
        </div>
        <h1 className="accreditations-and-memberships-heading">
          Accreditations and Memberships
        </h1>
        <p className="accreditations-and-memberships-text">
          Our industry accreditations and memberships highlight our commitment
          to quality and professionalism.
        </p>
        <div className="memberships-logos-container">
          <div className="memberships-logos-center">
            <div className="member-logo logo1">
              <img src={icanLogo} alt="ican logo" className="ican" />
            </div>
            <div className="member-logo logo2">
              <img src={citnLogo} alt="citn logo" className="citn" />
            </div>
            <div className="member-logo logo3">
              <img src={icsanLogo} alt="icsan logo" className="icsan" />
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-section-container">
        <GallerySectionSlider />
        <MdArrowLeft
          size={50}
          color="#000000"
          className="g-section-left-arrow"
          onClick={gSectionLeftClick}
          cursor="pointer"
        />
        <MdArrowRight
          size={50}
          color="#000000"
          className="g-section-right-arrow"
          onClick={gSectionRightClick}
          cursor="pointer"
        />
        <div className="g-section-num-stat-container">
          <div className="g-section-num-stat box box1">1</div>
          <div className="g-section-num-stat box box2">of</div>
          <div className="g-section-num-stat box box3"></div>
        </div>
      </div>
      <div className="calendar-download-container">
        <h4 className="learning-journey">
          Internal Audit Best Practices in The Humanitarian Sector
        </h4>
        <h3 style={{ color: "#53B508" }}>Download 2024</h3>
        <h2 style={{ color: "#53B508" }}>Webinar Material</h2>
        <button
          type="button"
          className="download-button"
          style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
        >
          <a
            href={internalAuditMaterial}
            className="download-link"
            download="internal-audit"
          >
            DOWNLOAD
          </a>
        </button>
      </div>
    </main>
  );
};
export default LandingPage;
