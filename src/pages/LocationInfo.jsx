import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Tabs from "../shared/Tabs/Tabs";

const LocationInfo = () => {
  const { id } = useParams();
  const getLocationInfo = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/location/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };
  const { isLoading, data, error, refetch } = useQuery(
    ["getLocationInfo"],
    getLocationInfo
  );
  console.log("data", data);
  const getWeatherStations = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/observation/latest/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };
  const { isLoading: loading, data: stationData } = useQuery(
    ["getWeatherStations"],
    getWeatherStations
  );

  const getCurrentWeather = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/current/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };
  const { isLoading: Currentloading, data: currentWeatherData } = useQuery(
    ["getCurrentWeather"],
    getCurrentWeather
  );

  useEffect(() => {
    if (currentWeatherData) {
      console.log("current weather", currentWeatherData);
    }
  }, [currentWeatherData]);
  return (
    <main className="bg-black h-screen">
      <div className="container mx-auto">
        <div className=" flex justify-center items-center ">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 my-5">
              <form>
                <div className="flex justify-between space-x-5">
                  <input
                    type="text"
                    placeholder="Search location"
                    className="  rounded-full px-9 shadow-slate-50  text-white border border-gray-200  p-3 w-full bg-black shadow-md"
                  />
                </div>
              </form>
            </div>
            <div className="col-span-2">
              <div className="shadow-lg rounded-lg p-5 w-full text-white">
                <h1 className=" text-3xl font-bold">{data?.name}</h1>
                <h3>{data?.country}</h3>
                <h1>
                  Feel like: {currentWeatherData?.current?.feelsLikeTemp} O F
                </h1>
                <h1>Humidity : {currentWeatherData?.current?.relHumidity} %</h1>

                <h1>Wind: {currentWeatherData?.current?.windSpeed}MPH</h1>
                <h1>Time: {currentWeatherData?.current?.time}</h1>
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-white">
                <img
                  src={`https://developer.foreca.com/static/images/symbols/${currentWeatherData?.current?.symbol}.png`}
                  alt="image"
                  width="50px"
                  height="50px"
                />
                <h1 className="text-5xl font-extrabold">
                  {currentWeatherData?.current?.temperature}O F
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-[75%] ">
        {/* <div className="grid grid-cols-4 gap-4">
          {stationData?.observations.map((station, idx) => {
            return (
              <div className="col-span-1" key={idx}>
                <div className="shadow-lg bg-white rounded-lg border p-5 w-full">
                  <h1>Station: {station.station || "Dammam"}</h1>
                  <h1>Distance : {station.distance || "10km"}</h1>
                  <h1>Temperature: {station.temperature || "23"}</h1>
                  <h1>Time: {station.time || "10-2-2020"}</h1>
                </div>
              </div>
            );
          })}
        </div> */}

        <Tabs />
      </div>
    </main>
  );
};

export default LocationInfo;
