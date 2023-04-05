import backgroundF1nosub from "../../assets/f1back2.jpg";
import "./MainCard.css";
import EmailForm from "../EmailForm/EmailForm";

const MainCard = () => {
  return (
    <div className="story-card">
      <div className="story-card-bg">
        <img src={backgroundF1nosub} alt="" />
        <div className="bg-color"></div>
      </div>
      <div className="story-card-text-container">
        <div className="card-text-main-title-container">
          <h1 className="card-text-main-title">
            Forma 1 adatok és elemzések korlátlan kínálata.
          </h1>
          <p className="card-text-subtitle">
            Bárhol nézheted. Amikor csak akarod.
          </p>
          <div className="first-steps-container">
            <div className="form-title">
              <h3>
                Készülj fel, a lámpák mindjárt kialszanak! Add meg az
                email-címedet és már kezdheted is.
              </h3>
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
