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

  return (
    <div className="results-page-container">
      <YearSelectorWrapper
        selectedYear={selectedYear}
        currentYear={currentYear}
        baseYear={baseYear}
        onYearChange={handleYearChange}
      />
      <div className="results-page-test">
        <DriverList year={selectedYear} />
        <DriverStandingList year={selectedYear} />
        <ConstructorList year={selectedYear} />
        <ConstructorStandingList year={selectedYear} />
      </div>
    </div>
  );
};

export default LayoutResults;
