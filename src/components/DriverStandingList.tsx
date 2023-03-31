import React from "react";
import useDriverStandings from "../hooks/useDriverStandings";

interface Props {
  year: string;
}

const DriverStandingList = ({ year }: Props) => {
  const {
    driverStandings,
    errorDriverStandings,
    isLoadingDriverStandings,
    setDriverStandings,
    setErrorDriverStandings,
  } = useDriverStandings(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Driver standings in {yearInTitle}</h2>
      {errorDriverStandings && (
        <p className="error-message">{errorDriverStandings}</p>
      )}
      {isLoadingDriverStandings && <div className="spinner-border"></div>}

      {!isLoadingDriverStandings && (
        <ul>
          {driverStandings.map((driverStanding) => (
            <li key={driverStanding.Driver.driverId}>
              {driverStanding.Driver.code} {driverStanding.Constructors[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverStandingList;
