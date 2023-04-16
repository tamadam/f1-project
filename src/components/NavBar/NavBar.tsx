import "./NavBar.css";
import mainLogo from "../../assets/f1logomain3.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { LanguageContext } from "../../App";
import { useContext } from "react";

interface Props {
  onLanguageChange?: (language: string) => void;
}

const NavBar = ({ onLanguageChange }: Props) => {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (language: string) => {
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

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
        <LanguageSelector onLanguageChange={handleLanguageChange} />
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
