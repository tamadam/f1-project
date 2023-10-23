import { useQuery } from "@tanstack/react-query";
import constructorService, { ConstructorData } from "../services/constructor-service";
import { CACHE_KEY_CONSTRUCTORS } from "../constants";

const useConstructors = (year: number) => {

    return useQuery<ConstructorData, Error>({
        queryKey: [CACHE_KEY_CONSTRUCTORS, year], 
        queryFn: ({signal}) => constructorService.getAll(year, signal), 
        //staleTime: 3 * 1000,
    });

}

export default useConstructors;