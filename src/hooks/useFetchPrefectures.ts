import { useState } from "react"
import { client } from "../config/client";
import { URL_PREFECTURE } from "../config/API";
import PrefectureResponse, { Prefecture } from "../ResponseTypes/Prefecture.type";

const useFetchPrefectures = () => {
    const [status, setStatus] = useState<'loading'|'idle'|'error'>('loading');
    const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

    const fetchPrefectures = async () => {
        await client.get<PrefectureResponse>(URL_PREFECTURE)
                    .then(res => {
                        setPrefectures(res.data.result);
                        setStatus('idle');
                    })
                    .catch(err => {
                        console.log(err);
                        setStatus('error');
                    });
    }
    
    return { status, fetchPrefectures, prefectures };
}

export default useFetchPrefectures
