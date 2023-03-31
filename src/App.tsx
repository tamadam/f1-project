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
            </div>
          </div>
        </div>
        <div className="separator-line"></div>
        <div className="story-card" style={styles}>
          <YearSelector onSelectYear={(year) => setYear(year)} />
          <DriverList year={year} />
          <DriverStandingList year={year} />

          <ConstructorList year={year} />
          <ConstructorStandingList year={year} />
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
