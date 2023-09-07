import { Outlet, useLocation } from "react-router-dom";
import "./LayoutHomePage.css";
import NavBar from "./components/NavBar/NavBar";
import { PATH_HOME_PAGE } from "../constants";

const LayoutHomePage = () => {
  const location = useLocation();

  return (
    <div className="home-page-container">
      <NavBar />
      <div className="home-page-content">
        {location.pathname === PATH_HOME_PAGE ? (
          "Default content here"
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default LayoutHomePage;
