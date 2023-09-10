import { useQuery } from "@tanstack/react-query";
import driverService, { DriverData } from "../services/driver-service";
import { CACHE_KEY_DRIVERS } from "../constants";

const useDrivers = (year: string) => {


    const query = useQuery<DriverData, Error>({
        queryKey: [CACHE_KEY_DRIVERS, year], 
        queryFn: ({signal}) => driverService.getAll(year, signal)

        //staleTime: 3 * 1000,
        
    });

    return query;
}

export default useDrivers;