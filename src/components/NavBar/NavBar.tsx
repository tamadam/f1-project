import "./NavBar.css";
import mainLogo from "../../assets/F1.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
//import { LanguageContext } from "../languages/LanguageContext";
import { LanguageContext } from "../../App";
import { useContext } from "react";

interface Props {
  onLanguageChange?: (language: string) => void;
}

const NavBar = ({ onLanguageChange }: Props) => {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (language: string) => {
    //console.log("changing language nav");
    //console.log(language);
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  };

  return (
    <div className="navigation-bar">
      <div className="nav-item item-container-1">
        <img className="main-logo" src={mainLogo}></img>
      </div>
      <div className="nav-item item-container-2">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
      </div>
      <div className="nav-item item-container-3">
        <span className="explore-button">
          <a href="#">{language.navbar.buttonText}</a>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
