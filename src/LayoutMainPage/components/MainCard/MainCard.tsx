import "./MainCard.css";
import mainPageBackground from "../../../assets/mainPageBackground.jpg";
import EmailForm from "../EmailForm/EmailForm";
import useLanguage from "../../../languages/useLanguage";

const MainCard = () => {
  const { language } = useLanguage();

  return (
    <div className="main-page-main-card-container">
      <div className="main-page-main-card-background">
        <img src={mainPageBackground} alt="f1 cars background" />
        <div className="main-page-main-card-color"></div>
      </div>
      <div className="main-page-main-card-text-container">
        <div className="main-page-main-card-title-container">
          <h1 className="main-page-main-card-title">
            {language.mainCard.mainTitle}
          </h1>
          <p className="main-page-main-card-subtitle">
            {language.mainCard.mainSubtitle}
          </p>
          <div className="main-page-main-card-first-steps-container">
            <div className="main-page-main-card-email-form-title">
              <h3>{language.mainCard.firstStepsTitle}</h3>
            </div>
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
