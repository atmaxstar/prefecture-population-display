import PopulationResponse from "../ResponseTypes/Population.type"
import { PopulationTypeForChart } from "../hooks/useStorePopulations";

export const mockPopulationData: PopulationTypeForChart = {
    総人口: [{year: 1960},{year: 1965},{year: 1970},{year: 1975},{year: 1980},{year: 1985},{year: 1990},{year: 1995},{year: 2000},{year: 2005},{year: 2010},{year: 2015},{ year: 2020, 愛知県: 1392928 },{year: 2025},{year: 2030},{year: 2035},{year: 2040},{year: 2045}],
    年少人口: [{year: 1960},{year: 1965},{year: 1970},{year: 1975},{year: 1980},{year: 1985},{year: 1990},{year: 1995},{year: 2000},{year: 2005},{year: 2010},{year: 2015},{ year: 2020, 愛知県: 203700 },{year: 2025},{year: 2030},{year: 2035},{year: 2040},{year: 2045}],
    生産年齢人口: [{year: 1960},{year: 1965},{year: 1970},{year: 1975},{year: 1980},{year: 1985},{year: 1990},{year: 1995},{year: 2000},{year: 2005},{year: 2010},{year: 2015},{ year: 2020, 愛知県: 794400 },{year: 2025},{year: 2030},{year: 2035},{year: 2040},{year: 2045}],
    老年人口: [{year: 1960},{year: 1965},{year: 1970},{year: 1975},{year: 1980},{year: 1985},{year: 1990},{year: 1995},{year: 2000},{year: 2005},{year: 2010},{year: 2015},{ year: 2020, 愛知県: 394828 },{year: 2025},{year: 2030},{year: 2035},{year: 2040},{year: 2045}],
};

export const mockPopulationResponseData: PopulationResponse = {
    message: null,
    result: {
        boundaryYear: 2020,
        data: [
            {
                label: '総人口',
                data: [{
                        year: 2020,
                        value: 1392928
                }]
            },
            {
                label: '年少人口',
                data: [{
                        year: 2020,
                        value: 203700
                }]
            },
            {
                label: '生産年齢人口',
                data: [{
                        year: 2020,
                        value: 794400
                }]
            },
            {
                label: '老年人口',
                data: [{
                        year: 2020,
                        value: 394828
                }]
            },
        ]
    }
}