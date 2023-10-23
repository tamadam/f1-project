import useConstructors from "../hooks/useConstructors";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";

interface Props {
  year: number;
}

const ConstructorList = ({ year }: Props) => {
  const { data, error, isLoading } = useConstructors(year);

  /* const selectedYear = year === "current" ? new Date().getFullYear() : year; */

  return (
    <div className="">
      <h2>Constructor list in {year}</h2>
      {error && <p className="error-message">{error.message}</p>}
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <ul>
          {data?.MRData.ConstructorTable.Constructors.map((constructor) => (
            <li key={constructor.constructorId}>{constructor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConstructorList;
