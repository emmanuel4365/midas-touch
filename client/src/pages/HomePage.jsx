import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomePage;
