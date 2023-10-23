import React from "react";
import useDriverStandings from "../hooks/useDriverStandings";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";

interface Props {
  year: number;
}

const DriverStandingList = ({ year }: Props) => {
  const { data, error, isLoading } = useDriverStandings(year);

  /* const selectedYear = year === "current" ? new Date().getFullYear() : year; */

  return (
    <div className="">
      <h2>Driver standings in {year}</h2>
      {error && <p className="error-message">{error.message}</p>}
      {isLoading && <LoadingIndicator />}

      {!isLoading && (
        <ul>
          {data?.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            (driverStanding) => (
              <li key={driverStanding.Driver.driverId}>
                {driverStanding.position} {driverStanding.Driver.givenName}{" "}
                {driverStanding.Driver.familyName}{" "}
                {"(" + driverStanding.Constructors[0].name + ")"}{" "}
                {driverStanding.points}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default DriverStandingList;
