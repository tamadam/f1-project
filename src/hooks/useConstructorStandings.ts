import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import constructorStandingsService, { ConstructorStanding } from "../services/constructor-standings-service";

const useConstructorStandings = (year: string) => {
    const [constructorStandings, setConstructorStandings] = useState<ConstructorStanding[] | null>([]);
    const [errorConstructorStandings, setErrorConstructorStandings] = useState("")
    const [isLoadingConstructorStandings, setLoadingConstructorStandings] = useState(false)


    useEffect(() => {
        setLoadingConstructorStandings(true)
        const {request, cancel} = constructorStandingsService.getAll(year);

        request.then(response => {
            // checks constructor standings data availability
            const isDataAvailable = response.data.MRData.StandingsTable.StandingsLists.length !== 0
            isDataAvailable ? setConstructorStandings(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings) : setConstructorStandings(null)
            
            //console.log(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)

            setLoadingConstructorStandings(false)
        }).catch(error => {
            if (error instanceof CanceledError) return;
            setErrorConstructorStandings(error.message)
            setLoadingConstructorStandings(false)
        })



        return () => cancel(); 
    }, [year])

    return {constructorStandings, errorConstructorStandings, isLoadingConstructorStandings, setConstructorStandings, setErrorConstructorStandings}
 }

export default useConstructorStandings;