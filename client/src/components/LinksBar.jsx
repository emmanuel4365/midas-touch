import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const LinksBar = () => {
  return (
    <div className="links-bar">
      <div className="page-link home">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      <div className="page-link about-us">
        <Link to="/" className="about-us-link">
          About Us
          <MdArrowDropDown className="dropdown-icon" />
          <MdArrowDropUp className="dropup-icon" />
        </Link>
        <div className="dropdown-menu">
          <ul className="menu-list">
            <li>Who We Are</li>
            <li>Management Team</li>
          </ul>
        </div>
      </div>
      <div className="page-link services">
        <Link to="/" className="services-link">
          Services
          <MdArrowDropDown className="dropdown-icon" />
          <MdArrowDropUp className="dropup-icon" />
        </Link>
        <div className="dropdown-menu">
          <ul className="menu-list">
            <li>Learning & Development</li>
            <li>Corporate Services & Advisories</li>
          </ul>
        </div>
      </div>
      <div className="page-link contact">
        <Link to="/" className="contact-link">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default LinksBar;
