import { useState, createContext } from "react";
import "./App.css";
import YearSelector from "./components/YearSelector";
import DriverList from "./components/DriverList";
import DriverStandingList from "./components/DriverStandingList";
import ConstructorList from "./components/ConstructorList";
import ConstructorStandingList from "./components/ConstructorStandingList";
import NavBar from "./components/NavBar/NavBar";
import MainCard from "./components/MainCard/MainCard";
//import { LanguageContextProvider } from "./components/languages/LanguageContext";
import { languageHUN } from "./components/languages/languageHUN";
import { languageEN } from "./components/languages/languageEN";

type Props = {
  children: React.ReactNode;
};

export const LanguageContext = createContext(languageEN);

function App() {
  const [year, setYear] = useState("current");

  const [currentLanguage, setCurrentLanguage] = useState(languageHUN);

  const handleLanguageChange = (selectedLanguage: string) => {
    if (selectedLanguage === "hu") {
      setCurrentLanguage(languageHUN);
    } else if (selectedLanguage === "en") {
      setCurrentLanguage(languageEN);
    } else {
      setCurrentLanguage(languageHUN);
    }
  };

  return (
    <div className="container">
      <LanguageContext.Provider value={currentLanguage}>
        <header>
          <NavBar onLanguageChange={handleLanguageChange} />
        </header>
        <div className="story-cards">
          <MainCard />

          {/* ------------------- */}
          <div className="separator-line"></div>

          <div className="story-card">
            <YearSelector onSelectYear={(year) => setYear(year)} />
            <div className="data-container">
              <DriverList year={year} />
              <DriverStandingList year={year} />

              <ConstructorList year={year} />
              <ConstructorStandingList year={year} />
            </div>
          </div>
        </div>
      </LanguageContext.Provider>
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
