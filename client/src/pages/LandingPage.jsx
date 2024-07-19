import { useEffect } from "react";
import { Slider } from "../components";
import { rightClick } from "../utils/RightArrow";
import globeGif from "../assets/globe3.gif";
import icanLogo from "../assets/ican-logo.png";
import citnLogo from "../assets/CITN-Logo.png";
import cimaLogo from "../assets/cima-logo.svg";
import learningImage from "../assets/learning.webp";
import advisoryImage from "../assets/advisory.webp";
// import underline from "../assets/underline.svg";

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
              <img src={cimaLogo} alt="cima logo" className="cima" />
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
            <div className="client-logo-translate-container">
              <div className="client-logo logo1">
                Borno Government
                {/* <img
                  src={BornoStateGovernmentLogo}
                  alt="Borno State Government logo"
                  className="Borno-State-Government"
                /> */}
              </div>
              <div className="client-logo logo2">
                Food Ratata Ltd
                {/* <img
                  src={FoodRatataLtdLogo}
                  alt="Food Ratata Ltd logo"
                  className="Food-Ratata-Ltd"
                /> */}
              </div>
              <div className="client-logo logo3">
                Sooyah Bistro Ltd
                {/* <img
                  src={SooyahBistroLtdLogo}
                  alt="Sooyah Bistro Ltd logo"
                  className="Sooyah-Bistro-Ltd"
                /> */}
              </div>
              <div className="client-logo logo4">
                Students
                {/* <img
                  src={StudentLogo}
                  alt="Sooyah Bistro Ltd logo"
                  className="Student"
                /> */}
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              accusantium optio deleniti necessitatibus cum officia. Expedita
              accusamus dolor ullam facere.
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">John Doe</span>, HR
              Manager, XYZ ltd
            </p>
          </div>
          <div className="statement client2">
            <p className="statement-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              accusantium optio deleniti necessitatibus cum officia. Expedita
              accusamus dolor ullam facere.
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">John Doe</span>, HR
              Manager, XYZ ltd
            </p>
          </div>
          <div className="statement client3">
            <p className="statement-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              accusantium optio deleniti necessitatibus cum officia. Expedita
              accusamus dolor ullam facere.
            </p>
            <p className="client-status">
              <span className="testimony-giver-name">John Doe</span>, HR
              Manager, XYZ ltd
            </p>
          </div>
        </div>
      </div>
      {/* <img src={underline} alt="" width="30px" height="20px" /> */}
    </main>
  );
};
export default LandingPage;
