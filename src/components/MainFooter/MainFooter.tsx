import "./MainFooter.css";
import mainLogo from "../../assets/f1logomain3.png";
import phoneLogo from "../../assets/phone10.png";
import notebookLogo from "../../assets/computer3.png";
import tabletLogo from "../../assets/tablet.png";
import tabletPhoneLogo from "../../assets/tabletphone.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { ReactNode, useContext } from "react";
import { LanguageContext } from "../../App";

const MainFooter = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="main-footer-container">
      <div className="footer-redirect-links-container">
        <a href="#">{language.mainFooter.linkContactUs}</a>
        <a href="#">{language.mainFooter.linkHelpCenter}</a>
        <a href="#">{language.mainFooter.linkAccount}</a>
      </div>
      <div className="footer-logo-container">
        <img src={mainLogo} alt="f1-dataset-logo" />
      </div>
      <div className="footer-warning-text-container">
        <span className="footer-warning-text">
          {language.mainFooter.warningMessage}{" "}
          <mark className="footer-warning-important">
            {language.mainFooter.warningMessageImportant}
          </mark>
        </span>
      </div>
      <div className="footer-copyright-container">
        <span>©2023 F1 Dataset Hungary.</span>
      </div>
    </div>
  );
};

export default MainFooter;
