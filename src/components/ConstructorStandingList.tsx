import useConstructorStandings from "../hooks/useConstructorStandings";

interface Props {
  year: string;
}

const ConstructorStandingList = ({ year }: Props) => {
  const { data, error, isLoading } = useConstructorStandings(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Constructor standings in {yearInTitle}</h2>
      {error && <p className="error-message">{error.message}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {/*   IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!
    {!constructorStandings && (
        <p className="warning-message">
          The Constructors Championship was not awarded until 1958
        </p>
      )} */}
      {!isLoading && (
        <ul>
          {data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
            (constructorStanding) => (
              <li key={constructorStanding.Constructor.constructorId}>
                {constructorStanding.position}{" "}
                {constructorStanding.Constructor.name}{" "}
                {constructorStanding.points}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default ConstructorStandingList;
