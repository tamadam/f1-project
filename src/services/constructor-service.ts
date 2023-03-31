import create from "./http-service";

export interface Constructor {
    constructorId: string;
    name: string;
    url: string;
    nationality: string;
  }

export default create("constructors.json");