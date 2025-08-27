import addressIcon from "../assets/address-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";

const ContactPage = () => {
  window.scrollTo(0, 0);

  return (
    <main className="contact-page">
      <div className="contact-page-center">
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
              ICAN Regional Building, State Secretariat, Maiduguri, Borno State.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
