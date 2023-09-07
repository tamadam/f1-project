import { useEffect, useState } from "react";
import ConstructorList from "../components/ConstructorList";
import ConstructorStandingList from "../components/ConstructorStandingList";
import DriverList from "../components/DriverList";
import DriverStandingList from "../components/DriverStandingList";
import GeneralButton from "../components/GeneralButton/GeneralButton";
import YearSelector from "../components/YearSelector";
import "./LayoutResults.css";

const LayoutResults = () => {
  const [year, setYear] = useState("current");

  useEffect(() => {
    console.log(year);
  });

  return (
    <div className="results-page">
      <p>ResultsPage</p>
      <div className="results-page-test">
        <YearSelector onSelectYear={(year) => setYear(year)} />
        <DriverList year={year} />
        <DriverStandingList year={year} />
        <ConstructorList year={year} />
        <ConstructorStandingList year={year} />
      </div>
    </div>
  );
};

export default LayoutResults;
