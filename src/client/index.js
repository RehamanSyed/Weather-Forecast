import axios from "axios";

export const Fetcher = axios.create({
  baseURL: "https://foreca-weather.p.rapidapi.com/",

  headers: {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
  },
});
