import { useState } from "react";
import "./App.css";
import YearSelector from "./components/YearSelector";
import DriverList from "./components/DriverList";
import DriverStandingList from "./components/DriverStandingList";
import ConstructorList from "./components/ConstructorList";
import ConstructorStandingList from "./components/ConstructorStandingList";
import NavBar from "./components/NavBar/NavBar";
import backgroundF1 from "./assets/background-f1.jpg";
import backgroundF1nosub from "./assets/f1back2.jpg";
import arrow from "./assets/icon.png";

function App() {
  const [year, setYear] = useState("current");

  const styles = {
    color: "white",
  };

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <div className="story-cards">
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
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    console.log("SUBMITTED.");
                  }}
                  className="form-container"
                >
                  <div className="input-c email-input-container">1</div>
                  <button
                    type="submit"
                    className="input-c submit-button-container"
                  >
                    <div className="button-label">
                      <span>Első lépések</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Hawkins-Icon Hawkins-Icon-Standard"
                        data-name="ChevronRight"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="separator-line"></div>

        <div className="story-card" style={styles}>
          <YearSelector onSelectYear={(year) => setYear(year)} />
          <div className="data-container">
            <DriverList year={year} />
            <DriverStandingList year={year} />

            <ConstructorList year={year} />
            <ConstructorStandingList year={year} />
          </div>
        </div>
      </div>
    </div>

    /*<div className="container">*/

    /*
      <header>
        <NavBar />
      </header>
      <div className="story-cards">
        <div className="test-title">Hello</div>
        <div className="hero-title">
          <div className="image-bg">
            <img src={backgroundF1} alt="" className="bg-image" />
            <div className="bg-color"></div>
          </div>
        </div>
      </div>
  */

    /*
      <div className="main-header">
        <img src={backgroundF1} alt="" className="background-image-header" />
        {<div className="background-header"></div>}

        <div className="hero">Text</div>
      </div>
        <YearSelector onSelectYear={(year) => setYear(year)} /> */

    /*<div className="data-container">
        <DriverList year={year} />
        <DriverStandingList year={year} />

        <ConstructorList year={year} />
        <ConstructorStandingList year={year} />
  </div>*/
    /*</div>*/
  );
}

export default App;
