import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  function handleClick(e) {
    let sidebar = e.currentTarget.parentElement;

    sidebar.classList.add("close");
  }

  function handleHomeAndContactClick(e) {
    let sidebar = e.currentTarget.parentElement.parentElement;

    sidebar.classList.add("close");
  }

  function handleAboutAndServicesClick(e) {
    let sidebar = e.currentTarget.parentElement.parentElement.parentElement;

    sidebar.classList.add("close");
  }

  function handleAboutClick(e) {
    let dropDownOne = e.currentTarget.firstElementChild;
    dropDownOne.classList.toggle("close");
  }

  function handleServicesClick(e) {
    let dropDownTwo = e.currentTarget.firstElementChild;
    dropDownTwo.classList.toggle("close");
  }

  return (
    <div className="sidebar" id="sidebar">
      <MdClose className="close-btn" onClick={handleClick} />
      <div className="links-sidebar">
        <div className="home-sidebar" onClick={handleHomeAndContactClick}>
          <Link to="/">Home</Link>
        </div>
        <div className="about-sidebar" onClick={handleAboutClick}>
          About Us
          <div
            className="sidebar-dropdown-list sidebar-dropdown-1 close"
            onClick={handleAboutAndServicesClick}
          >
            <ul className="sidebar-menu-list">
              <li>
                <Link to="/about-us">Who We Are</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="services-sidebar" onClick={handleServicesClick}>
          Services
          <div
            className="sidebar-dropdown-list sidebar-dropdown-2 close"
            onClick={handleAboutAndServicesClick}
          >
            <ul className="sidebar-menu-list">
              <li>
                <Link to="/learning-and-development">
                  Learning & Development
                </Link>
              </li>
              <li>
                <Link to="/corporate-and-advisory-services">
                  Corporate Services & Advisories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-sidebar" onClick={handleHomeAndContactClick}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
