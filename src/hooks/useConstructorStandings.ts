import { useQuery } from "@tanstack/react-query";
import constructorStandingsService, { ConstructorStandingsData } from "../services/constructor-standings-service";
import { CACHE_KEY_CONSTRUCTOR_STANDINGS } from "../constants";

const useConstructorStandings = (year: string) => {
    
    return useQuery<ConstructorStandingsData, Error>({
        queryKey: [CACHE_KEY_CONSTRUCTOR_STANDINGS, year], 
        queryFn: () => constructorStandingsService.getAll(year), 
        //staleTime: 3 * 1000,
    });
 }

export default useConstructorStandings;