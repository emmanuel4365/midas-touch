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
            <li>
              <Link to="/about-us">Who We Are</Link>
            </li>
            {/* <li>
              <Link to="/management-team">Management Team</Link>
            </li> */}
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
            <li>
              <Link to="/learning-and-development">Learning & Development</Link>
            </li>
            <li>
              <Link to="/corporate-and-advisory-services">
                Corporate Services & Advisories
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-link contact">
        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default LinksBar;
