import "./NavBar.css";
import mainLogo from "../../assets/f1logomain3.png";
import LanguageSelector from "../../languages/LanguageSelector/LanguageSelector";
import useLanguage from "../../languages/useLanguage";
import GeneralButton from "../GeneralButton/GeneralButton";

const NavBar = () => {
  const { language } = useLanguage();

  return (
    <div className="main-page-navigation-bar-container">
      <div className="main-page-nav-item">
        <img
          className="main-page-navbar-main-logo"
          src={mainLogo}
          alt="f1 dataset logo"
        ></img>
      </div>
      <div className="main-page-nav-item">
        <LanguageSelector />
        <GeneralButton label={language.navbar.buttonText} />
      </div>
    </div>
  );
};

export default NavBar;
