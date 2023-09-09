import "./Footer.css";
import mainLogo from "../../../assets/f1DatasetLogo.png";
import LanguageSelector from "../../../languages/LanguageSelector/LanguageSelector";
import useLanguage from "../../../languages/useLanguage";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <div className="home-page-footer-container">
      <div className="home-page-footer-logo-container">
        <img
          src={mainLogo}
          alt="f1 dataset logo"
          className="home-page-footer-logo"
        />
      </div>
      <div className="home-page-footer-redirect-links-container">
        <a href="#">{language.mainFooter.linkContactUs}</a>
        <a href="#">{language.mainFooter.linkHelpCenter}</a>
        <a href="#">{language.mainFooter.linkAccount}</a>
        <a href="#">{language.mainFooter.linkAboutUs}</a>
        <a href="#">{language.mainFooter.linkSpeedTest}</a>
        <a href="#">{language.mainFooter.linkPrivacy}</a>
      </div>

      <LanguageSelector />
      <div className="home-page-footer-copyright-container">
        <span>©2023 F1 Dataset Hungary.</span>
      </div>
    </div>
  );
};

export default Footer;
