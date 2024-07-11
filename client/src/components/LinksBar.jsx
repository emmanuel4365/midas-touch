import { Link } from "react-router-dom";

const LinksBar = () => {
  return (
    <div className="links-bar">
      <Link to="/" className="page-link home">
        Home
      </Link>
      <Link to="/" className="page-link about-us">
        About Us
      </Link>
      <Link to="/" className="page-link services">
        Services
      </Link>
      <Link to="/" className="page-link contact">
        Contact
      </Link>
    </div>
  );
};
export default LinksBar;
