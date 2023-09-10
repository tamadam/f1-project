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

const LayoutResults = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  //calculating all the years since F1 started
  const baseYear = 1950;
  const currentYear = new Date().getFullYear();
  const allYears = Array.from(
    new Array(currentYear - baseYear + 1),
    (val, index) => "" + -1 * (index - currentYear)
  );

  const queryClient = useQueryClient();

  const handleUpYear = () => {
    console.log(queryClient.getQueryCache());
    setYear(year + 1);
  };

  const handleDownYear = () => {
    queryClient.cancelQueries([CACHE_KEY_DRIVERS]);
    queryClient.cancelQueries([CACHE_KEY_DRIVER_STANDINGS, year.toString()]);
    queryClient.cancelQueries([CACHE_KEY_CONSTRUCTORS, year.toString()]);
    queryClient.cancelQueries([
      CACHE_KEY_CONSTRUCTOR_STANDINGS,
      year.toString(),
    ]);
    setYear(year - 1);
  };

  const handleDriverLoading = () => {
    console.log("driver loading finished");
  };

  const handleDriverStandingsLoading = () => {
    console.log("driverstandings loading finished");
  };

  const handleConstructorLoading = () => {
    console.log("constructor loading finished");
  };

  const handleConstructorStandingsLoading = () => {
    console.log("constructorstandings loading finished");
  };

  return (
    <div className="results-page-container">
      <div className="results-page-year-selector-wrapper">
        <div className="results-page-year-selector">
          {/*           <YearSelector onSelectYear={(year) => setYear(year)} /> */}
        </div>
        <span className="year">
          <select
            value={year}
            onChange={(event) => setYear(parseInt(event.target.value))}
          >
            {allYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </span>
        <span className="upYear" onClick={handleUpYear}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65801 15.8457H17.5171C17.6675 15.8452 17.815 15.8037 17.9436 15.7257C18.0722 15.6476 18.1771 15.536 18.247 15.4028C18.3169 15.2695 18.3491 15.1198 18.3402 14.9696C18.3313 14.8194 18.2816 14.6745 18.1965 14.5505L10.7669 3.81894C10.459 3.37399 9.71771 3.37399 9.40897 3.81894L1.97944 14.5505C1.89345 14.6743 1.84302 14.8192 1.83363 14.9697C1.82425 15.1201 1.85627 15.2702 1.92621 15.4037C1.99616 15.5372 2.10135 15.649 2.23037 15.7269C2.35938 15.8049 2.50729 15.8459 2.65801 15.8457Z"
              fill="#00A19B"
            />
          </svg>
        </span>
        <span className="downYear" onClick={handleDownYear}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65801 15.8457H17.5171C17.6675 15.8452 17.815 15.8037 17.9436 15.7257C18.0722 15.6476 18.1771 15.536 18.247 15.4028C18.3169 15.2695 18.3491 15.1198 18.3402 14.9696C18.3313 14.8194 18.2816 14.6745 18.1965 14.5505L10.7669 3.81894C10.459 3.37399 9.71771 3.37399 9.40897 3.81894L1.97944 14.5505C1.89345 14.6743 1.84302 14.8192 1.83363 14.9697C1.82425 15.1201 1.85627 15.2702 1.92621 15.4037C1.99616 15.5372 2.10135 15.649 2.23037 15.7269C2.35938 15.8049 2.50729 15.8459 2.65801 15.8457Z"
              fill="#00A19B"
            />
          </svg>
        </span>
      </div>

      <div className="results-page-test">
        <DriverList year={year.toString()} />
        <DriverStandingList year={year.toString()} />
        <ConstructorList year={year.toString()} />
        <ConstructorStandingList year={year.toString()} />
      </div>
    </div>
  );
};

export default LayoutResults;
