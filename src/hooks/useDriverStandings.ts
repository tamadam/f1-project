import { useQuery } from "@tanstack/react-query";
import driverStandingsService, { DriverStandingsData } from "../services/driver-standings-service";
import { CACHE_KEY_DRIVER_STANDINGS } from "../constants";


const useDriverStandings = (year: number) => {

    return useQuery<DriverStandingsData, Error>({
        queryKey: [CACHE_KEY_DRIVER_STANDINGS, year], 
        queryFn: ({signal}) => driverStandingsService.getAll(year, signal), 
        //staleTime: 3 * 1000,
    });

}

export default useDriverStandings;