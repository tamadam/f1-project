import { Link, Outlet } from "react-router-dom";
import "./LayoutHomePage.css";
import GeneralButton from "../components/GeneralButton/GeneralButton";

const LayoutHomePage = () => {
  return (
    <div className="home-page">
      <p>HomePage</p>
      <div className="home-page-test">
        <GeneralButton label="Go to Results page" target="results" />
        <GeneralButton label="Go to Statistics page" target="statistics" />
        <GeneralButton label="Go to Home page" target="" />
        <GeneralButton label="Go to Main page" target="/" />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutHomePage;
