import axios from "axios";
import { API_KEY, URL_RESAS } from "./API";

export const client = axios.create({
    baseURL: URL_RESAS,
    headers: {
        "X-API-KEY": API_KEY
    }
});
