import useConstructorStandings from "../hooks/useConstructorStandings";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";

interface Props {
  year: string;
}

const ConstructorStandingList = ({ year }: Props) => {
  const selectedYear =
    year === "current" ? new Date().getFullYear() : parseInt(year);

  if (selectedYear < 1958)
    return (
      <>
        <h2>Constructor standings in {selectedYear}</h2>
        <p>The Constructors Championship was not awarded until 1958</p>
      </>
    );

  const { data, error, isLoading } = useConstructorStandings(year);

  return (
    <div className="">
      <h2>Constructor standings in {selectedYear}</h2>
      {error && <p className="error-message">{error.message}</p>}
      {isLoading && <LoadingIndicator />}
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
