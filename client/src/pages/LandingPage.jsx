import { useEffect } from "react";
import { Slider } from "../components";
import { rightClick } from "../utils/RightArrow";
import globeGif from "../assets/globe3.gif";
import icanLogo from "../assets/ican-logo.png";
import citnLogo from "../assets/CITN-Logo.png";
import icsanLogo from "../assets/icsan-logo.jpeg";
import BornoStateGovernmentLogo from "../assets/borno-government-logo.jpeg";
import FoodRatataLtdLogo from "../assets/food-ratata-logo.jpeg";
import SooyahBistroLtdLogo from "../assets/sooyah-bistro-logo.jpeg";
import StudentLogo from "../assets/student-logo.jpeg";

const LandingPage = () => {
  useEffect(() => {
    let a = setInterval(rightClick, 8000);
    return () => clearInterval(a);
  }, []);

  return (
    <main className="landing-page">
      <Slider />
      <div className="global-container">
        <div className="global-presence-container">
          <div className="global">
            GL
            <img
              src={globeGif}
              alt="globe image"
              width="70px"
              height="70px"
              className="globe-image"
            />
            BAL
          </div>
          <div className="presence">PRESENCE</div>
        </div>
        <div className="global-presence-text-container">
          <p className="global-presence-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            expedita tenetur aspernatur magni assumenda non! Quos illum nobis
            eum eos illo, corrupti minima amet nostrum cum inventore, natus
            consequuntur labore at possimus necessitatibus ea in sapiente
            nesciunt explicabo. Explicabo laudantium, quis ea adipisci sunt
            odit. Dolores obcaecati, quos laborum porro quam placeat hic
            temporibus labore consequuntur ipsam eos neque quasi molestiae
            deleniti architecto nihil, cum ipsum velit? Totam voluptatum,
            facilis neque libero minima aliquam sunt nobis ipsa delectus nam
            omnis sit tempore fuga cumque quas. Architecto, est? Iure quia,
            minima quasi obcaecati, totam veritatis excepturi facere perferendis
            minus ducimus quibusdam.
          </p>
        </div>
      </div>
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <hr width="100px" color="#a9ce4d" />
        <br />
        <p className="services-paragraph">
          Our extensive span of services give organizations of all sizes the
          competitive advantage to thrive in the ever-changing business
          environment.
        </p>
        <div className="services-list">
          <div className="service service1">
            <div className="learning-and-development-heading">
              Learning and Development
            </div>
            {/* <div className="services-image-container">
              <img src={learningImage} alt="" className="learning-image" />
            </div> */}
            <p className="learning-and-development-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              alias doloremque quae possimus sunt? Veniam quaerat iste ea quas
              ipsa explicabo iusto mollitia animi numquam quam, enim nesciunt
              nisi.
            </p>
            <button className="service-button">READ MORE</button>
          </div>
          <div className="service service2">
            <div className="coporate-services-and-advisories-heading">
              Corporate Services and Advisories
            </div>
            {/* <div className="services-image-container">
              <img src={advisoryImage} alt="" className="advisory-image" />
            </div> */}
            <p className="Coporate-Services-and-Advisories-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ullam placeat id autem obcaecati asperiores, corporis
              fuga vel sequi earum accusamus delectus harum quod aperiam iure
              unde porro iste nostrum.
            </p>
            <button className="service-button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="accreditations-and-memberships-container">
        <h1 className="accreditations-and-memberships-heading">
          Accreditations and Memberships
        </h1>
        <hr width="100px" color="#a9ce4d" />
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
      <div className="our-clients-container">
        <h1 className="our-clients-heading">Our Clients</h1>
        <hr width="100px" color="#a9ce4d" />
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
        <h4 className="learning-journey">START YOUR 2024 LEARNING JOURNEY </h4>
        <h3>Download 2024</h3>
        <h2>Training Calendar</h2>
        <button type="button" className="download-button">
          <a href="#" className="download-link">
            DOWNLOAD
          </a>
        </button>
      </div>
      <div className="testimonial-container">
        <h1 className="testimonial-heading">Testimonials</h1>
        <hr width="100px" color="#a9ce4d" />
        <h2 className="testimonial-text">What Clients Say</h2>
        <div className="testimonial-statements">
          <div className="statement client1">
            <p className="statement-paragraph">
              "I'm thrilled to share my amazing experience at Midas Touch ICAN
              Tutorial centre! My name is Shepherdess Bulus Wayar, an Accounting
              graduate and I attended their tutorial centre for my Skills level
              exam (May diet) and passed four out of five courses in one go! The
              instructors were exceptional, providing personalized attention and
              guidance that helped me excel. I'm grateful for the supportive
              learning environment and the significant impact it had on my
              academic success. I wholeheartedly recommend Midas Touch to anyone
              seeking top-notch tutoring for their ICAN journey. They truly
              deliver excellence!"
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">
                Shepherdess Bulus Wayar
              </span>
              , Student, Midas Touch ICAN Tutorial centre
            </p>
          </div>
          <div className="statement client2">
            <p className="statement-paragraph">
              "MIDAS TOUCH reassured me to believe in myself. I registered as an
              ICAN student a decade ago, sat for two diets, and gave up. This
              year, the center was recommended for me, and I accepted. I
              registered, attended and participated in the class, sat for May
              2024 diet and cleared 2 out of 3 papers. I would say that I
              deserved failing PSAF because I also didn't do justice to it.
              MIDAS Touch is a place to be. Full of potentials to influence you
              academically, business wise, and in general decisions of live.
              Choose MidasTouch and be touched."
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">Joy Malgwi</span>, Student,
              Midas Touch ICAN Tutorial centre
            </p>
          </div>
          <div className="statement client3">
            <p className="statement-paragraph">
              "As the Chief Operating Officer of Food Ratata Ltd, I am delighted
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
              invaluable partner in business success."
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">Eboh Precious</span>, Chief
              Operating Officer, Food Ratata Ltd
            </p>
          </div>
        </div>
      </div>
      {/* <img src={underline} alt="" width="30px" height="20px" /> */}
    </main>
  );
};
export default LandingPage;
