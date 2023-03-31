import useDrivers from "../hooks/useDrivers";

interface Props {
  year: string;
}

const DriverList = ({ year }: Props) => {
  const {
    drivers,
    errorDrivers,
    isLoadingDrivers,
    setDrivers,
    setErrorDrivers,
  } = useDrivers(year);

  const yearInTitle = year === "current" ? new Date().getFullYear() : year;

  return (
    <div className="">
      <h2>Driver list in {yearInTitle}</h2>
      {errorDrivers && <p className="error-message">{errorDrivers}</p>}
      {isLoadingDrivers && <div className="spinner-border"></div>}

      {!isLoadingDrivers && (
        <ul>
          {drivers.map((driver) => (
            <li key={driver.driverId}>
              {driver.driverId} {driver.familyName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverList;
