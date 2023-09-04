import useDrivers from "../hooks/useDrivers";

interface Props {
  year: string;
}

const DriverList = ({ year }: Props) => {
  const { data, error, isLoading } = useDrivers(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Driver list in {yearInTitle}</h2>
      {error && <p className="error-message">{error.message}</p>}
      {isLoading && <div className="spinner-border"></div>}

      {!isLoading && (
        <ul>
          {data?.MRData.DriverTable.Drivers.map((driver) => (
            <li key={driver.driverId}>
              {driver.familyName} {driver.nationality}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverList;
