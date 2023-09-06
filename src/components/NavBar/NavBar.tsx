import "./NavBar.css";
import mainLogo from "../../assets/f1logomain3.png";
import LanguageSelector from "../../languages/LanguageSelector/LanguageSelector";
import useLanguage from "../../languages/useLanguage";

const NavBar = () => {
  const { language } = useLanguage();

  return (
    <div className="main-page-navigation-bar-container">
      <div className="main-page-nav-item main-page-nav-item-container-1">
        <img
          className="main-page-navbar-main-logo"
          src={mainLogo}
          alt="f1 dataset logo"
        ></img>
      </div>
      <div className="main-page-nav-item main-page-nav-item-container-2">
        <LanguageSelector />
      </div>
      <div className="main-page-nav-item main-page-nav-item-container-3">
        <span className="main-page-explore-button">
          <a href="#">{language.navbar.buttonText}</a>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
