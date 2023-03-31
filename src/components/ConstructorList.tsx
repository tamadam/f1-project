import React from "react";
import useConstructors from "../hooks/useConstructors";

interface Props {
  year: string;
}

const ConstructorList = ({ year }: Props) => {
  const {
    constructors,
    errorConstructors,
    isLoadingConstructors,
    setConstructors,
    setErrorConstructors,
  } = useConstructors(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Constructor list in {yearInTitle}</h2>
      {errorConstructors && (
        <p className="error-message">{errorConstructors}</p>
      )}
      {isLoadingConstructors && <div className="spinner-border"></div>}

      {!isLoadingConstructors && (
        <ul>
          {constructors.map((constructor) => (
            <li key={constructor.constructorId}>
              {constructor.name} {constructor.nationality}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConstructorList;
