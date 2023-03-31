import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import constructorService, { Constructor } from "../services/constructor-service";

const useConstructors = (year: string) => {

    const [constructors, setConstructors] = useState<Constructor[]>([]);
    const [errorConstructors, setErrorConstructors] = useState("");
    const [isLoadingConstructors, setLoadingConstructors] = useState(false);

    useEffect(() => {
        setLoadingConstructors(true);
        const {request, cancel} = constructorService.getAll(year);
        request.then((response) => {
        console.log(response.data.MRData.ConstructorTable.Constructors);
        setConstructors(response.data.MRData.ConstructorTable.Constructors);
        setLoadingConstructors(false);
        })
        .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrorConstructors(error.message);
        setLoadingConstructors(false);
        });

        return () => cancel()
    }, [year]);

    return {constructors, errorConstructors, isLoadingConstructors, setConstructors, setErrorConstructors}
}

export default useConstructors;