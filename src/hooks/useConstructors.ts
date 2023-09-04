import { useQuery } from "@tanstack/react-query";
import constructorService, { ConstructorData } from "../services/constructor-service";
import { CACHE_KEY_CONSTRUCTORS } from "../constants";

const useConstructors = (year: string) => {

    return useQuery<ConstructorData, Error>({
        queryKey: CACHE_KEY_CONSTRUCTORS, 
        queryFn: () => constructorService.getAll(year), 
        //staleTime: 3 * 1000,
    });

}

export default useConstructors;