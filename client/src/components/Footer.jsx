import { Link } from "react-router-dom";
import linkedInIcon from "../assets/linkedin-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import midasLogo from "../assets/the-midas-logo.png";
import addressIcon from "../assets/address-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";

const Footer = () => {
  let year = new Date().getFullYear().toString();

  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-list-container">
          <div className="logo-and-contact-container">
            <div className="footer-logo">
              <img
                src={midasLogo}
                alt="footer-midas-logo"
                className="footer-midas-logo"
              />
            </div>
            <div className="footer-contact">
              <div className="contact phone">
                <img src={phoneIcon} alt="" />
                <span>+234 916 666 1459</span>
              </div>
              <div className="contact email">
                <img src={emailIcon} alt="" />
                <span>midastouchconsult33@gmail.com</span>
              </div>
              <div className="contact address">
                <img src={addressIcon} alt="" />
                <span>23 Kunle Ogungba Street, Lekki, Lagos</span>
              </div>
              <div className="contact address">
                <img src={addressIcon} alt="" />
                <span>
                  ICAN Regional Building, State Secretariat, Maiduguri, Borno
                  State.
                </span>
              </div>
            </div>
          </div>
          <div className="company-details-container">
            <h3>COMPANY</h3>
            <div className="footer-link about-us">
              <Link to="/about-us">About Us</Link>
            </div>
            <div className="footer-link contact-us">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-link faqs">
              <Link>FAQs</Link>
            </div>
          </div>
          <div className="connect-with-us-container">
            <h3>CONNECT WITH US</h3>
            <div className="footer-icon">
              <Link>
                <img src={linkedInIcon} alt="linkedin icon" />
              </Link>
            </div>
            <div className="footer-icon">
              <Link>
                <img src={instagramIcon} alt="instagram icon" />
              </Link>
            </div>
            <div className="footer-icon">
              <Link>
                <img src={facebookIcon} alt="facebook icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">
            &copy; {year} The Midas Touch Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
