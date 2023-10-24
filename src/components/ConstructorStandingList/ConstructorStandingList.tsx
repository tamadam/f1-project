import "./ConstructorStandingList.css";
import useConstructorStandings from "../../hooks/useConstructorStandings";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import teamLogo from "../../assets/team-logo-default.png";
import { useEffect, useState } from "react";

const convertEmToPixel = (em: number) => {
  return em * 16;
};

const EM_THRESHOLD = 60;
const PIXEL_THRESHOLD = convertEmToPixel(EM_THRESHOLD);

interface Props {
  year: number;
}

const ConstructorStandingList = ({ year }: Props) => {
  /* const selectedYear =
    year === "current" ? new Date().getFullYear() : parseInt(year); */

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

  if (year < 1958)
    return (
      <>
        <h2>Constructor standings in {year}</h2>
        <p>The Constructors Championship was not awarded until 1958</p>
      </>
    );

  const { data, error, isLoading } = useConstructorStandings(year);

  return (
    <div className="constructor-standings-table-container">
      <h2 className="constructor-standings-table-title">
        Constructor standings
      </h2>
      {error && <p className="error-message">{error.message}</p>}

      <div className="constructor-standings-table-header">
        <div className="constructor-standings-table-header-item pos">POS</div>
        <div className="constructor-standings-table-header-item team">TEAM</div>
        <div className="constructor-standings-table-header-item points">
          POINTS
        </div>
      </div>
      <div className="constructor-standings-content">
        {isLoading && <LoadingIndicator />}

        {!isLoading && (
          <ul>
            {data?.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
              (constructorStanding) => (
                <li
                  className="constructor-standings-table-content-item"
                  key={constructorStanding.Constructor.constructorId}
                >
                  <span className="constructor-standings-team-position">
                    {constructorStanding.position}
                  </span>
                  <div className="constructor-standings-team-name">
                    <span>
                      <img
                        className="constructor-standings-team-icon"
                        src={teamLogo}
                        alt=""
                      />
                    </span>
                    <span>{constructorStanding.Constructor.name}</span>
                  </div>
                  <span className="constructor-standings-team-points">
                    {constructorStanding.points}
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

export default ConstructorStandingList;
