import "./MainFooter.css";
import mainLogo from "../../../assets/f1DatasetLogo.png";
import LanguageSelector from "../../../languages/LanguageSelector/LanguageSelector";
import useLanguage from "../../../languages/useLanguage";

const MainFooter = () => {
  const { language } = useLanguage();

  return (
    <div className="main-page-footer-container">
      <div className="main-page-footer-logo-container">
        <img
          src={mainLogo}
          alt="f1 dataset logo"
          className="main-page-footer-logo"
        />
      </div>
      <div className="main-page-footer-redirect-links-container">
        <a href="#">{language.mainFooter.linkContactUs}</a>
        <a href="#">{language.mainFooter.linkHelpCenter}</a>
        <a href="#">{language.mainFooter.linkAccount}</a>
        <a href="#">{language.mainFooter.linkAboutUs}</a>
        <a href="#">{language.mainFooter.linkSpeedTest}</a>
        <a href="#">{language.mainFooter.linkPrivacy}</a>
      </div>
      <div className="main-page-footer-warning-text-container">
        <span className="main-page-footer-warning-text">
          {language.mainFooter.warningMessage}{" "}
          <mark className="main-page-footer-warning-important">
            {language.mainFooter.warningMessageImportant}
          </mark>
        </span>
      </div>
      <LanguageSelector />
      <div className="main-page-footer-copyright-container">
        <span>©2023 F1 Dataset Hungary.</span>
      </div>
    </div>
  );
};

export default MainFooter;
