import { Outlet } from "react-router-dom";
import { Footer, NavBar, Sidebar } from "../components";

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <Sidebar />
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomePage;
