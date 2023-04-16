import "./SupportedDevices.css";
import { useContext } from "react";
import { LanguageContext } from "../../App";
import notebookLogo from "../../assets/computer3.png";
import tabletPhoneLogo from "../../assets/tabletphone.png";

const SupportedDevices = () => {
  const language = useContext(LanguageContext);
  return (
    <div className="main-page-supported-devices-container">
      <div className="main-page-supported-devices-title">
        <h2>{language.supportedDevices.devicesTitle}</h2>
      </div>
      <div className="main-page-supported-devices-logo-container">
        <div className="main-page-supported-device">
          <img
            src={tabletPhoneLogo}
            alt="smartphone logo"
            className="main-page-device-logo-image"
          />
          <p className="main-page-device-logo-description">
            {language.supportedDevices.device1Subtitle}
          </p>
        </div>
        <div className="main-page-supported-device">
          <img
            src={notebookLogo}
            alt="notebook logo"
            className="main-page-device-logo-image"
          />
          <p className="main-page-device-logo-description">
            {language.supportedDevices.device2Subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportedDevices;
