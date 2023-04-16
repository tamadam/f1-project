import "./MainCard.css";
import backgroundF1nosub from "../../assets/f1back2.jpg";
import EmailForm from "../EmailForm/EmailForm";
import { useContext } from "react";
import { LanguageContext } from "../../App";

const MainCard = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="main-page-main-card-container">
      <div className="main-page-main-card-background">
        <img src={backgroundF1nosub} alt="f1 cars background" />
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
