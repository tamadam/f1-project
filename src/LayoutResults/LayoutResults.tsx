import { useState } from "react";
import ConstructorList from "../components/ConstructorList";
import ConstructorStandingList from "../components/ConstructorStandingList";
import DriverList from "../components/DriverList";
import DriverStandingList from "../components/DriverStandingList";
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

  const [activeContent, setActiveContent] = useState(0);

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
      <ResultSelector onChange={handleResultContentChange} />
      <div className="results-page-test">
        {/* <DriverList year={selectedYear} /> */}
        {/* <ConstructorList year={selectedYear} /> */}
        {activeContent === 0 && <p>Work in progress</p>}
        {activeContent === 1 && <DriverStandingList year={selectedYear} />}
        {activeContent === 2 && <ConstructorStandingList year={selectedYear} />}
        {activeContent === 3 && <p>Work in progress</p>}
      </div>
    </div>
  );
};

export default LayoutResults;
