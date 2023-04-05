import "./NavBar.css";
import mainLogo from "../../assets/F1.png";
import LanguageSelector, {
  Language,
} from "../LanguageSelector/LanguageSelector";

const NavBar = () => {
  const handleLanguageChange = (language: Language) => {
    console.log("changing language");
    console.log(language);
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
          <a href="#">Bejelentkezés</a>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
