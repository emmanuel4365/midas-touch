import { useEffect } from "react";
import { Slider } from "../components";
import { rightClick } from "../utils/RightArrow";
import globeGif from "../assets/globe3.gif";
import icanLogo from "../assets/ican-logo.png";
import citnLogo from "../assets/CITN-Logo.png";
import cimaLogo from "../assets/cima-logo.svg";
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
          <div className="logos-center">
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
      {/* <img src={underline} alt="" width="30px" height="20px" /> */}
    </main>
  );
};
export default LandingPage;
