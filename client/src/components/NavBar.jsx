import { Link } from "react-router-dom";
import LinksBar from "./LinksBar";
import midasLogo from "../assets/midas-touch-logo.png";
import SearchBar from "./SearchBar";
import { MdFormatAlignJustify } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-links-center">
        <div className="midas-logo-container">
          <Link to="/">
            <img src={midasLogo} alt="midas logo" className="midas-logo" />
          </Link>
        </div>
        <SearchBar />
        <LinksBar />
        <MdFormatAlignJustify className="justify-icon" />
        {/* <div className="search">Search</div> */}
        {/* <CartAndUser /> */}
      </div>
      {/* <ProductsLinksBar /> */}
    </nav>
  );
};
export default NavBar;
