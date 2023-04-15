import "./SupportedDevices.css";
import { useContext } from "react";
import notebookLogo from "../../assets/computer3.png";
import tabletPhoneLogo from "../../assets/tabletphone.png";
import { LanguageContext } from "../../App";

const SupportedDevices = () => {
  const language = useContext(LanguageContext);
  return (
    <div className="supported-devices-container">
      <div className="devices-title">
        <h2>{language.supportedDevices.devicesTitle}</h2>
      </div>
      <div className="devices-logo-container">
        <div className="footer-device">
          <img
            src={tabletPhoneLogo}
            alt="smartphone logo"
            className="footer-phone-logo"
          />
          <p className="footer-logo-title">
            {language.supportedDevices.device1Subtitle}
          </p>
        </div>
        <div className="footer-device">
          <img
            src={notebookLogo}
            alt="notebook logo"
            className="footer-notebook-logo"
          />
          <p className="footer-logo-title">
            {language.supportedDevices.device2Subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportedDevices;
