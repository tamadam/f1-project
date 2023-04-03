import "./NavBar.css";
import mainLogo from "../../assets/F1.png";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <div className="nav-item item-container-1">
        <img src={mainLogo}></img>
      </div>
      <div className="nav-item item-container-2">Item2</div>
      <div className="nav-item item-container-3">
        <span className="explore-button">
          <a href="#">Bejelentkezés</a>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
