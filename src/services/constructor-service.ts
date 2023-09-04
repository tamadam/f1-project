import APIClient from "./api-client";

export interface ConstructorData {
  MRData: MRData;
}

interface MRData {
  ConstructorTable: ConstructorTable;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
}

interface ConstructorTable {
  Constructors: Constructor[];
  season: string;
}

export interface Constructor {
    constructorId: string;
    name: string;
    url: string;
    nationality: string;
}

export default new APIClient<ConstructorData>("constructors.json");