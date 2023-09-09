import { Outlet, useLocation } from "react-router-dom";
import "./LayoutHomePage.css";
import NavBar from "./components/NavBar/NavBar";
import { PATH_HOME_PAGE } from "../constants";
import Footer from "./components/Footer/Footer";

const LayoutHomePage = () => {
  const location = useLocation();

  return (
    <div className="home-page-container">
      <NavBar />
      <main className="home-page-content">
        {location.pathname === PATH_HOME_PAGE ? (
          "Default content here"
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutHomePage;
