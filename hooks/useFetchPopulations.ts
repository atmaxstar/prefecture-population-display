import { useState } from "react"
import PopulationResponse, { Populations } from "../src/ResponseTypes/Population.type"
import { client } from "../config/client";
import { URL_POPULATION } from "../config/API";

const useFetchPopulations = () => {
    const [status, setStatus] = useState<'loading'|'success'|'error'>('loading');
    const [populations, setPopulations] = useState<Populations>([
        {
            label: "総人口",
            data: [],
        },
        {
            label: "年少人口",
            data: [],
        },
        {
            label: "生産年齢人口",
            data: [],
        },
        {
            label: "老年人口",
            data: [],
        },
    ])

    const fetchPopulations = async () => {
        await client.get<PopulationResponse>(URL_POPULATION)
                    .then(res => {
                        setPopulations(res.data.result.data);
                        setStatus('success');
                    })
                    .catch(err => {
                        console.log(err);
                        setStatus('error');
                    });
    }

    return { status, fetchPopulations, populations };
}

export default useFetchPopulations
