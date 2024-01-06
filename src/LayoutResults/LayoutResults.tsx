import { useState } from "react";
import ConstructorList from "../components/ConstructorList";
import ConstructorStandingList from "../components/ConstructorStandingList/ConstructorStandingList";
import DriverList from "../components/DriverList";
import DriverStandingList from "../components/DriverStandingList/DriverStandingList";
import "./LayoutResults.css";

import {
  CACHE_KEY_CONSTRUCTORS,
  CACHE_KEY_CONSTRUCTOR_STANDINGS,
  CACHE_KEY_DRIVERS,
  CACHE_KEY_DRIVER_STANDINGS,
} from "../constants";
import { useQueryClient } from "@tanstack/react-query";
import YearSelectorWrapper from "./components/YearSelectorWrapper/YearSelectorWrapper";
import ResultSelector from "./components/ResultSelector/ResultSelector";

const LayoutResults = () => {
  const currentYear = new Date().getFullYear();
  const baseYear = 1950;

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const queryClient = useQueryClient();

  const handleYearChange = (year: number) => {
    queryClient.cancelQueries([CACHE_KEY_DRIVERS, year]);
    queryClient.cancelQueries([CACHE_KEY_DRIVER_STANDINGS, year]);
    queryClient.cancelQueries([CACHE_KEY_CONSTRUCTORS, year]);
    queryClient.cancelQueries([CACHE_KEY_CONSTRUCTOR_STANDINGS, year]);

    setSelectedYear(year);
  };

  const [activeContent, setActiveContent] = useState(1);

  const handleResultContentChange = (index: number) => {
    setActiveContent(index);
  };

  return (
    <div className="results-page-container">
      <YearSelectorWrapper
        selectedYear={selectedYear}
        currentYear={currentYear}
        baseYear={baseYear}
        onYearChange={handleYearChange}
      />
      <ResultSelector
        onChange={handleResultContentChange}
        startIndex={activeContent}
      />
      <div className="results-page-content">
        {/* <DriverList year={selectedYear} /> */}
        {/* <ConstructorList year={selectedYear} /> */}
        <div
          className={`component-content ${
            activeContent === 0 ? "visible" : ""
          }`}
        >
          <p>Work in progress</p>
        </div>
        <div
          className={`component-content ${
            activeContent === 1 ? "visible" : ""
          }`}
        >
          <DriverStandingList year={selectedYear} />
        </div>
        <div
          className={`component-content ${
            activeContent === 2 ? "visible" : ""
          }`}
        >
          <ConstructorStandingList year={selectedYear} />
        </div>
        <div
          className={`component-content ${
            activeContent === 3 ? "visible" : ""
          }`}
        >
          <p>Work in progress</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutResults;
