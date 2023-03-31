import React from "react";
import useConstructorStandings from "../hooks/useConstructorStandings";

interface Props {
  year: string;
}

const ConstructorStandingList = ({ year }: Props) => {
  const {
    constructorStandings,
    errorConstructorStandings,
    isLoadingConstructorStandings,
    setConstructorStandings,
    setErrorConstructorStandings,
  } = useConstructorStandings(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Constructor standings in {yearInTitle}</h2>
      {errorConstructorStandings && (
        <p className="error-message">{errorConstructorStandings}</p>
      )}
      {isLoadingConstructorStandings && <div className="spinner-border"></div>}
      {!isLoadingConstructorStandings && (
        <ul>
          {!constructorStandings && (
            <p className="warning-message">
              The Constructors Championship was not awarded until 1958
            </p>
          )}
          {constructorStandings?.map((constructorStanding) => (
            <li key={constructorStanding.Constructor.constructorId}>
              {constructorStanding.Constructor.constructorId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConstructorStandingList;
