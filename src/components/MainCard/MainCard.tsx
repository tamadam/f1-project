import backgroundF1nosub from "../../assets/f1back2.jpg";
import "./MainCard.css";
import EmailForm from "../EmailForm/EmailForm";
import { useContext } from "react";
import { LanguageContext } from "../../App";

const MainCard = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="story-card">
      <div className="story-card-bg">
        <img src={backgroundF1nosub} alt="" />
        <div className="bg-color"></div>
      </div>
      <div className="story-card-text-container">
        <div className="card-text-main-title-container">
          <h1 className="card-text-main-title">
            {language.mainCard.mainTitle}
          </h1>
          <p className="card-text-subtitle">{language.mainCard.mainSubtitle}</p>
          <div className="first-steps-container">
            <div className="form-title">
              <h3>{language.mainCard.firstStepsTitle}</h3>
            </div>
            {/* Form container*/}
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
