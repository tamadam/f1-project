import APIClient from "./api-client";
import { Constructor } from "./constructor-service";
import { Driver } from "./driver-service";


export interface DriverStandingsData {
    MRData: MRData;
}

interface MRData {
    StandingsTable: DriverStandingsTable;
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
}

interface DriverStandingsTable {
    StandingsLists: DriverStandingLists[];
    season: string;   
}

interface DriverStandingLists {
    season: string;
    round: string;
    DriverStandings: DriverStandings[]
}

export interface DriverStandings {
    Constructors: Constructor[];
    Driver: Driver;
    position: string;
    positionText: string;
    points: string;
    wins: string;
}



export default new APIClient<DriverStandingsData>("driverStandings.json");