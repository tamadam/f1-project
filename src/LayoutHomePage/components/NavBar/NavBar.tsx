import arrowRight from "../../../assets/arrow-right.png";
import {
  PATH_HOME_PAGE,
  PATH_MAIN_PAGE,
  PATH_RESULTS_PAGE_FROM_HOME_PAGE,
  PATH_STATISTICS_PAGE_FROM_HOME_PAGE,
} from "../../../constants";
import mainLogo from "../../../assets/f1DatasetLogo.png";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const convertEmToPixel = (em: number) => {
  return em * 16;
};

const EM_THRESHOLD = 50;
const PIXEL_THRESHOLD = convertEmToPixel(EM_THRESHOLD);

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < PIXEL_THRESHOLD);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    if (isMenuOpen && isMobile) setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < PIXEL_THRESHOLD;
      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      {isMobile && isMenuOpen && (
        <div className="home-page-menu-cover" onClick={toggleMenu}></div>
      )}
      <div className="home-page-navigation-bar-container">
        <div className="home-page-nav-item">
          <NavLink
            to={PATH_HOME_PAGE}
            onClick={handleMenuClick}
            className={({ isActive }) => (isActive ? "nav-option-active" : "")}
          >
            <img
              className="home-page-navbar-main-logo"
              src={mainLogo}
              alt="f1 dataset logo"
            />
          </NavLink>
        </div>
        <div className="home-page-nav-item">
          {isMobile && (
            <div className="home-page-nav-menu-toggle" onClick={toggleMenu}>
              {!isMenuOpen && (
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15H23V12.5H0V15ZM0 8.75H23V6.25H0V8.75ZM0 0V2.5H23V0H0Z"
                    fill="#D81515"
                  />
                </svg>
              )}
              {isMenuOpen && (
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 2.01429L20.6836 0L11.5 7.98571L2.31643 0L0 2.01429L9.18357 10L0 17.9857L2.31643 20L11.5 12.0143L20.6836 20L23 17.9857L13.8164 10L23 2.01429Z"
                    fill="#ee0000"
                  />
                </svg>
              )}
            </div>
          )}

          <ul
            className={`home-page-nav-menu ${
              isMobile ? "small-screen" : "large-screen"
            } ${isMenuOpen ? "open" : ""}`}
          >
            <span className="home-page-nav-menu-options-wrapper">
              <li
                className="home-page-nav-menu-option"
                onClick={handleMenuClick}
              >
                <NavLink
                  to={PATH_RESULTS_PAGE_FROM_HOME_PAGE}
                  className={({ isActive }) =>
                    isActive ? "nav-option-active" : ""
                  }
                >
                  Results
                </NavLink>
                {isMobile && (
                  <img
                    className="home-page-nav-menu-option-img"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                )}
              </li>
              <li
                className="home-page-nav-menu-option"
                onClick={handleMenuClick}
              >
                <NavLink
                  to={PATH_STATISTICS_PAGE_FROM_HOME_PAGE}
                  className={({ isActive }) =>
                    isActive ? "nav-option-active" : ""
                  }
                >
                  Statistics
                </NavLink>
                {isMobile && (
                  <img
                    className="home-page-nav-menu-option-img"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                )}
              </li>
              <li
                className="home-page-nav-menu-option"
                onClick={handleMenuClick}
              >
                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    isActive ? "nav-option-active" : ""
                  }
                >
                  Future Feature
                </NavLink>
                {isMobile && (
                  <img
                    className="home-page-nav-menu-option-img"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                )}
              </li>
              <li
                className="home-page-nav-menu-option"
                onClick={handleMenuClick}
              >
                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    isActive ? "nav-option-active" : ""
                  }
                >
                  Videos
                </NavLink>
                {isMobile && (
                  <img
                    className="home-page-nav-menu-option-img"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                )}
              </li>
              <li
                className="home-page-nav-menu-option"
                onClick={handleMenuClick}
              >
                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    isActive ? "nav-option-active" : ""
                  }
                >
                  Power Rankings
                </NavLink>
                {isMobile && (
                  <img
                    className="home-page-nav-menu-option-img"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                )}
              </li>
            </span>
          </ul>
        </div>
        {/*       <GeneralButton
        label="Go to Results page"
        target={PATH_RESULTS_PAGE_FROM_HOME_PAGE}
      />
      <GeneralButton
        label="Go to Statistics page"
        target={PATH_STATISTICS_PAGE_FROM_HOME_PAGE}
      />
      <GeneralButton label="Go to Home page" target={PATH_HOME_PAGE} />
      <GeneralButton label="Go to Main page" target={PATH_MAIN_PAGE} /> */}
      </div>
    </>
  );
};

export default NavBar;
