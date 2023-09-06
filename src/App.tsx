import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import MainPageCards from "./components/MainPageCards/MainPageCards";
import MainFooter from "./components/MainFooter/MainFooter";
import uploadLogo from "./assets/upload.png";

import DriverList from "./components/DriverList";
import DriverStandingList from "./components/DriverStandingList";
import ConstructorList from "./components/ConstructorList";
import ConstructorStandingList from "./components/ConstructorStandingList";
import LanguageProvider from "./languages/LanguageProvider";

function App() {
  const [isArrowVisible, setArrowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setArrowVisible(true);
      } else {
        setArrowVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <LanguageProvider>
        {isArrowVisible && (
          <div className="arrow-container" onClick={handleArrowClick}>
            <img src={uploadLogo} alt="" />
          </div>
        )}
        <header>
          <NavBar />
        </header>
        <MainPageCards />
        <footer>
          <MainFooter />
        </footer>
        <div className="tmp-results">
          <DriverList year="2023" />
          <DriverStandingList year="2023" />
          <ConstructorList year="2023" />
          <ConstructorStandingList year="2023" />
        </div>
      </LanguageProvider>
    </div>
  );
}

export default App;
