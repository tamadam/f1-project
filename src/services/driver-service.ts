import APIClient from "./api-client";

export interface DriverData {
    MRData: MRData;
}

interface MRData {
    DriverTable: DriverTable;
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
}

interface DriverTable {
    Drivers: Driver[];
    season: string;
}

export interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}


export default new APIClient<DriverData>("drivers.json");