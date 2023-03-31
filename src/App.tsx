import { useState } from "react";
import "./App.css";
import YearSelector from "./components/YearSelector";
import DriverList from "./components/DriverList";
import DriverStandingList from "./components/DriverStandingList";
import ConstructorList from "./components/ConstructorList";
import ConstructorStandingList from "./components/ConstructorStandingList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [year, setYear] = useState("current");

  return (
    <div className="container">
      <NavBar />
      <YearSelector onSelectYear={(year) => setYear(year)} />

      <div className="data-container">
        <DriverList year={year} />
        <DriverStandingList year={year} />

        <ConstructorList year={year} />
        <ConstructorStandingList year={year} />
      </div>
    </div>
  );
}

export default App;
