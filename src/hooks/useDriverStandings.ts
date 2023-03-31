import { CanceledError } from "axios";
import { useEffect, useState } from "react"
import driverStandingsService, { DriverStanding } from "../services/driver-standings-service";


const useDriverStandings = (year: string) => {
    const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
    const [errorDriverStandings, setErrorDriverStandings] = useState("");
    const [isLoadingDriverStandings, setLoadingDriverStanding] = useState(false);

    useEffect(() => {
        setLoadingDriverStanding(true);
        const { request, cancel } = driverStandingsService.getAll(year);
        request
          .then((response) => {
            console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            setDriverStandings(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            setLoadingDriverStanding(false);
          })
          .catch((error) => {
            if (error instanceof CanceledError) return;
            setErrorDriverStandings(error.message);
            setLoadingDriverStanding(false);

          });
  
    
        return () => cancel();
      }, [year]);
  
      return {driverStandings, errorDriverStandings, isLoadingDriverStandings, setDriverStandings, setErrorDriverStandings}
}

export default useDriverStandings;