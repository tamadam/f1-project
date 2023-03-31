import { useState } from "react";
import "./App.css";
import YearSelector from "./components/YearSelector";
import DriverList from "./components/DriverList";

function App() {
  const [year, setYear] = useState("current");

  return (
    <div className="container">
      <YearSelector onSelectYear={(year) => setYear(year)} />

      <div className="data-container">
        <DriverList year={year} />
      </div>
    </div>
  );
}

export default App;
