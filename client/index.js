import { Axios } from "axios";

Axios.baseURL = "https://foreca-weather.p.rapidapi.com";
export const Fetcher = Axios.create();
