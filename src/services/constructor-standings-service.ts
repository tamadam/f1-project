import { Constructor } from "./constructor-service";
import create from "./http-service";

export interface ConstructorStanding {
    Constructor: Constructor;
    points: string;
}

export default create("constructorStandings.json");