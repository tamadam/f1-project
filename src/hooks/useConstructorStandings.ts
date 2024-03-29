import { useQuery } from "@tanstack/react-query";
import constructorStandingsService, { ConstructorStandingsData } from "../services/constructor-standings-service";
import { CACHE_KEY_CONSTRUCTOR_STANDINGS } from "../constants";

const useConstructorStandings = (year: number) => {
    
    return useQuery<ConstructorStandingsData, Error>({
        queryKey: [CACHE_KEY_CONSTRUCTOR_STANDINGS, year], 
        queryFn: ({signal}) => constructorStandingsService.getAll(year, signal), 
        //staleTime: 3 * 1000,
    });
 }

export default useConstructorStandings;