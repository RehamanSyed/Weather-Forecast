import axios from "axios";

export const Fetcher = axios.create({
  baseURL: "https://foreca-weather.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
});
