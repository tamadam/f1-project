import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import driverService, { Driver } from "../services/driver-service";

const useDrivers = (year: string) => {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [errorDrivers, setErrorDrivers] = useState("");
    const [isLoadingDrivers, setLoadingDrivers] = useState(false);

  
    useEffect(() => {
      setLoadingDrivers(true);
      const { request, cancel } = driverService.getAll(year);
      request
        .then((response) => {
          console.log(response.data.MRData.DriverTable.Drivers);
          setDrivers(response.data.MRData.DriverTable.Drivers);
          setLoadingDrivers(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setErrorDrivers(error.message);
          setLoadingDrivers(false);
        });

  
      return () => cancel();
    }, [year]);

    return {drivers, errorDrivers, isLoadingDrivers, setDrivers, setErrorDrivers}
}

export default useDrivers;