import APIClient from "./api-client";
import { Constructor } from "./constructor-service";

export interface ConstructorStandingsData {
    MRData: MRData;
}

interface MRData {
    StandingsTable: ConstructorStandingsTable;
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
}

interface ConstructorStandingsTable {
    StandingsLists: ConstructorStandingLists[];
    season: string;   
}

interface ConstructorStandingLists {
    season: string;
    round: string;
    ConstructorStandings: ConstructorStandings[]
}

interface ConstructorStandings {
    Constructor: Constructor;
    position: string;
    positionText: string;
    points: string;
    wins: string;
}

export default new APIClient<ConstructorStandingsData>("constructorStandings.json");