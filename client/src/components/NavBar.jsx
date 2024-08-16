import { Link } from "react-router-dom";
import LinksBar from "./LinksBar";
import midasLogo from "../assets/midas-touch-logo.png";
import { MdFormatAlignJustify } from "react-icons/md";
import addressIcon from "../assets/address-icon.svg";
import emailIcon from "../assets/email-icon.svg";
// import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="top-address-bar">
        <div className="top-address-center">
          <div className="top-address-contact email">
            <img src={emailIcon} alt="" />
            <span>midastouchconsult33@gmail.com</span>
          </div>
          <div className="top-address-contact address">
            <img src={addressIcon} alt="" />
            <span>23 Kunle Ogungba Street, Lekki, Lagos</span>
          </div>
        </div>
      </div>
      <div className="logo-links-center">
        <div className="midas-logo-container">
          <Link to="/">
            <img src={midasLogo} alt="midas logo" className="midas-logo" />
          </Link>
        </div>
        {/* <SearchBar /> */}
        <LinksBar />
        <MdFormatAlignJustify className="justify-icon" cursor="pointer" />
      </div>
    </nav>
  );
};
export default NavBar;
