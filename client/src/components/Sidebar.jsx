import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export const sidebar = document.querySelector(".sidebar");

export const homeSideBarLink = document.querySelector(".home-sidebar");

export const aboutDropDown = document.querySelector(".sidebar-dropdown-1");

export const servicesDropDown = document.querySelector(".sidebar-dropdown-2");

export const contactSideBarLink = document.querySelector(".contact-sidebar");

function Sidebar() {
  function handleClick() {
    sidebar.classList.add("close");
  }

  return (
    <div className="sidebar">
      <MdClose
        className="close-btn"
        onClick={() => {
          handleClick();
        }}
      />
      <div className="links-sidebar">
        <div
          className="home-sidebar"
          onClick={() => {
            sidebar.classList.add("close");
          }}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          className="about-sidebar"
          onClick={() => {
            aboutDropDown.classList.toggle("close");
          }}
        >
          About Us
          <div
            className="sidebar-dropdown-list sidebar-dropdown-1 close"
            onClick={() => {
              sidebar.classList.add("close");
            }}
          >
            <ul className="sidebar-menu-list">
              <li>
                <Link to="/about-us">Who We Are</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="services-sidebar"
          onClick={() => {
            servicesDropDown.classList.toggle("close");
          }}
        >
          Services
          <div
            className="sidebar-dropdown-list sidebar-dropdown-2 close"
            onClick={() => {
              sidebar.classList.add("close");
            }}
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
        <div
          className="contact-sidebar"
          onClick={() => {
            sidebar.classList.add("close");
          }}
        >
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
