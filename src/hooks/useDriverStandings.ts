import { useQuery } from "@tanstack/react-query";
import driverStandingsService, { DriverStandingsData } from "../services/driver-standings-service";
import { CACHE_KEY_DRIVER_STANDINGS } from "../constants";


const useDriverStandings = (year: string) => {

    return useQuery<DriverStandingsData, Error>({
        queryKey: [CACHE_KEY_DRIVER_STANDINGS, year], 
        queryFn: () => driverStandingsService.getAll(year), 
        //staleTime: 3 * 1000,
    });

}

export default useDriverStandings;