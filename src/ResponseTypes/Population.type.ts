import { CommonResponse } from "./Common.type";

export interface Data {
    year: number;
    value: number;
    rate?: number;
}

export type Populations = [
    {
        label: "総人口";
        data: Data[];
    },
    {
        label: "年少人口";
        data: Data[];
    },
    {
        label: "生産年齢人口";
        data: Data[];
    },
    {
        label: "老年人口";
        data: Data[];
    },
]

export default interface PopulationResponse extends CommonResponse {
    result: {
        boundaryYear: number;
        data: Populations;
    }
}