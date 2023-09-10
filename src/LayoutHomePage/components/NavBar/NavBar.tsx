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

const EM_THRESHOLD = 60;
const PIXEL_THRESHOLD = convertEmToPixel(EM_THRESHOLD);

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < PIXEL_THRESHOLD);

  useEffect(() => {
    // Add the 'noscroll' class to the body element when isMenuOpen is true
    if (isMenuOpen) {
      document.body.classList.add("noscroll");
    } else {
      // Remove the 'noscroll' class from the body element when isMenuOpen is false
      document.body.classList.remove("noscroll");
    }

    // Clean up the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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
      {isMenuOpen && (
        <div className="home-page-nav-cover" onClick={toggleMenu}></div>
      )}
      <header className="home-page-navigation-bar-container">
        <div className="home-page-nav-items-wrapper">
          <div className="home-page-nav-item">
            <NavLink
              to={PATH_HOME_PAGE}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "home-page-nav-menu-logo-option"
                  : "home-page-nav-menu-logo-option"
              }
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
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20H26V16.6667H0V20ZM0 11.6667H26V8.33333H0V11.6667ZM0 0V3.33333H26V0H0Z"
                      fill="#D81515"
                    />
                  </svg>
                )}
                {isMenuOpen && (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
                      fill="#EA1111"
                    />
                  </svg>
                )}
              </div>
            )}

            <div
              className={`home-page-nav-menu ${
                isMobile ? "small-screen" : "large-screen"
              } ${isMenuOpen ? "open" : ""}`}
            >
              <span className="home-page-nav-menu-options-wrapper">
                <NavLink
                  to={PATH_RESULTS_PAGE_FROM_HOME_PAGE}
                  className={({ isActive }) =>
                    `${
                      isMobile
                        ? "home-page-nav-menu-option-mobile"
                        : isActive
                        ? "home-page-nav-menu-option nav-option-active"
                        : "home-page-nav-menu-option"
                    }`
                  }
                  onClick={isMobile ? toggleMenu : undefined}
                >
                  Results
                  {isMobile && (
                    <img
                      className="home-page-nav-menu-option-img"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  )}
                </NavLink>

                <NavLink
                  to={PATH_STATISTICS_PAGE_FROM_HOME_PAGE}
                  className={({ isActive }) =>
                    `${
                      isMobile
                        ? "home-page-nav-menu-option-mobile"
                        : isActive
                        ? "home-page-nav-menu-option nav-option-active"
                        : "home-page-nav-menu-option"
                    }`
                  }
                  onClick={isMobile ? toggleMenu : undefined}
                >
                  Statistics
                  {isMobile && (
                    <img
                      className="home-page-nav-menu-option-img"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  )}
                </NavLink>

                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    `${
                      isMobile
                        ? "home-page-nav-menu-option-mobile"
                        : isActive
                        ? "home-page-nav-menu-option nav-option-active"
                        : "home-page-nav-menu-option"
                    }`
                  }
                  onClick={isMobile ? toggleMenu : undefined}
                >
                  Future Feature
                  {isMobile && (
                    <img
                      className="home-page-nav-menu-option-img"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  )}
                </NavLink>

                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    `${
                      isMobile
                        ? "home-page-nav-menu-option-mobile"
                        : isActive
                        ? "home-page-nav-menu-option nav-option-active"
                        : "home-page-nav-menu-option"
                    }`
                  }
                  onClick={isMobile ? toggleMenu : undefined}
                >
                  Videos
                  {isMobile && (
                    <img
                      className="home-page-nav-menu-option-img"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  )}
                </NavLink>

                <NavLink
                  to={PATH_MAIN_PAGE}
                  className={({ isActive }) =>
                    `${
                      isMobile
                        ? "home-page-nav-menu-option-mobile"
                        : isActive
                        ? "home-page-nav-menu-option nav-option-active"
                        : "home-page-nav-menu-option"
                    }`
                  }
                  onClick={isMobile ? toggleMenu : undefined}
                >
                  Power Rankings
                  {isMobile && (
                    <img
                      className="home-page-nav-menu-option-img"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  )}
                </NavLink>
              </span>
            </div>
          </div>
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
      </header>
    </>
  );
};

export default NavBar;
