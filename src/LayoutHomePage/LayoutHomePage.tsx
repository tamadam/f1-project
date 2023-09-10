import { Outlet, useLocation } from "react-router-dom";
import "./LayoutHomePage.css";
import NavBar from "./components/NavBar/NavBar";
import { PATH_HOME_PAGE } from "../constants";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

const LayoutHomePage = () => {
  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
