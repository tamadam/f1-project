import "./MainFooter.css";
import mainLogo from "../../assets/f1logomain3.png";
import phoneLogo from "../../assets/phone10.png";
import notebookLogo from "../../assets/computer3.png";
import tabletLogo from "../../assets/tablet.png";
import tabletPhoneLogo from "../../assets/tabletphone.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { ReactNode } from "react";

const MainFooter = () => {
  return (
    <div className="main-footer-container">
      <div className="devices-title">
        <h2>Végtelen adat. Akár a zsebedben. </h2>
      </div>
      <div className="devices-logo-container">
        <div className="footer-device">
          <img
            src={tabletPhoneLogo}
            alt="smartphone logo"
            className="footer-phone-logo"
          />
          <p className="footer-logo-title">Mobil és táblagép</p>
        </div>
        <div className="footer-device">
          <img
            src={notebookLogo}
            alt="notebook logo"
            className="footer-notebook-logo"
          />
          <p className="footer-logo-title">Számítógép</p>
        </div>
      </div>
      <div className="footer-logo-container">
        <img src={mainLogo} alt="f1-dataset-logo" />
      </div>
      <div className="footer-warning-text-container">
        <span className="footer-warning-text">
          I built this site to gain experience working with React on the
          frontend and Node.js on the backend as part of my educational journey.
          This site is designed to provide information and data about Formula 1,
          that is publicly available through different data sources.{" "}
          <mark className="footer-warning-important">
            It is not intended to be used for commercial or monetary gain.
          </mark>
        </span>
      </div>
      <div className="footer-copyright-container">
        <span>©2023 F1 Dataset Hungary. </span>
      </div>
    </div>
  );
};

export default MainFooter;
