import "./DriverStandingList.css";
import useDriverStandings from "../../hooks/useDriverStandings";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import helmet from "../../assets/helmet.png";
import { useEffect, useState } from "react";

const convertEmToPixel = (em: number) => {
  return em * 16;
};

const EM_THRESHOLD = 60;
const PIXEL_THRESHOLD = convertEmToPixel(EM_THRESHOLD);

interface Props {
  year: number;
}

const DriverStandingList = ({ year }: Props) => {
  const { data, error, isLoading } = useDriverStandings(year);

  const [isMobile, setIsMobile] = useState(window.innerWidth < PIXEL_THRESHOLD);

  useEffect(() => {
    const handleResize = () => {
      console.log(isMobile);
      const isMobileNow = window.innerWidth < PIXEL_THRESHOLD;
      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  /* const selectedYear = year === "current" ? new Date().getFullYear() : year; */

  const driverData = data?.MRData.StandingsTable.StandingsLists[0];

  return (
    <div className="driver-standings-table-container">
      <h2 className="driver-standings-table-title">Driver standings</h2>
      {error && <p className="error-message">{error.message}</p>}

      <div className="driver-standings-table-header">
        <div className="driver-standings-table-header-item pos">POS</div>
        <div className="driver-standings-table-header-item driver">DRIVER</div>
        {!isMobile && (
          <>
            <div className="driver-standings-table-header-item nationality">
              NATIONALITY
            </div>
            <div className="driver-standings-table-header-item car">CAR</div>
          </>
        )}
        <div className="driver-standings-table-header-item points">POINTS</div>
      </div>
      <div className="driver-standings-content">
        {isLoading && <LoadingIndicator />}
        {!isLoading && (
          <ul>
            {!driverData && (
              <p className="info-text">The season hasn't started yet</p>
            )}
            {driverData &&
              data?.MRData.StandingsTable.StandingsLists[0]?.DriverStandings.map(
                (driverStanding) => (
                  <li
                    className="driver-standings-table-content-item"
                    key={driverStanding.Driver.driverId}
                  >
                    <span className="driver-standings-driver-position">
                      {`${driverStanding.position}.`}
                    </span>
                    <div className="driver-standings-driver-name">
                      <span>
                        <img
                          className="driver-standings-helmet-icon"
                          src={helmet}
                          alt=""
                        />
                      </span>
                      <span>
                        {driverStanding.Driver.givenName}{" "}
                        {driverStanding.Driver.familyName}
                      </span>
                    </div>
                    {!isMobile && (
                      <>
                        <span className="driver-standings-driver-nationality">
                          {driverStanding.Driver.nationality}
                        </span>
                        <span className="driver-standings-driver-car">
                          {driverStanding.Constructors[0].name}
                        </span>
                      </>
                    )}
                    <span className="driver-standings-driver-points">
                      {driverStanding.points}
                    </span>
                  </li>
                )
              )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DriverStandingList;
