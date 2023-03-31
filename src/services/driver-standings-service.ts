import { Constructor } from "./constructor-service";
import { Driver } from "./driver-service";
import create from "./http-service";

export interface DriverStanding {
    Constructors: Constructor[];
    Driver: Driver;
    points: string;
}



export default create("driverStandings.json");