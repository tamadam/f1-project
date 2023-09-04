import { useQuery } from "@tanstack/react-query";
import driverService, { DriverData } from "../services/driver-service";
import { CACHE_KEY_DRIVERS } from "../constants";

const useDrivers = (year: string) => {

    return useQuery<DriverData, Error>({
        queryKey: CACHE_KEY_DRIVERS, 
        queryFn: () => driverService.getAll(year), 
        //staleTime: 3 * 1000,
    });
}

export default useDrivers;