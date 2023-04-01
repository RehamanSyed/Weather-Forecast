import axios, { Axios } from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Tabs from "../shared/Tabs/Tabs";
import bgImg from "images/homebg.jpg";
import { useCurrentWeather } from "module/LocationInfo/hook";
const LocationInfo = () => {
  const { id } = useParams();
  const inpRef = useRef();
  const queryClient = useQueryClient();
  const [searchInp, setSearchInp] = useState();

  const {
    isLoading,
    isError,
    data: currentWeatherData,
    error,
  } = useCurrentWeather(id);

  return (
    <main class="flex h-screen justify-center items-center flex-col">
      <div
        class="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div class="h-screen flex justify-center items-center backdrop-brightness-50 flex-col">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <div className="shadow-lg rounded-lg p-5 w-full text-white">
                {/* <h1 className=" text-3xl font-bold">{data?.name}</h1> */}
                {/* <h3>{data?.country}</h3> */}
                <h1>
                  Feel like: {currentWeatherData?.current?.feelsLikeTemp} O F
                </h1>
                <h1>Humidity : {currentWeatherData?.current?.relHumidity} %</h1>
                <h1>
                  symbolPhrase : {currentWeatherData?.current?.symbolPhrase}
                </h1>

                <h1>Wind: {currentWeatherData?.current?.windSpeed}MPH</h1>
                <h1>Time: {currentWeatherData?.current?.time}</h1>
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-white">
                <img
                  src={`https://developer.foreca.com/static/images/symbols/${currentWeatherData?.current?.symbol}.png`}
                  alt="imagess"
                  width="50px"
                  height="50px"
                />
                <h1 className="text-5xl font-extrabold">
                  {currentWeatherData?.current?.temperature}O F
                </h1>
              </div>
            </div>
          </div>
          <div className="container mx-auto w-[75%] ">
            <div className="grid grid-cols-4 gap-4"></div>
            <div className="col-span-2">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LocationInfo;

{
  /*<main className="bg-black h-screen">
<div className="container mx-auto">
  <div className=" flex justify-center items-center ">
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 my-5">
        <form onSubmit={submitHandler}>
          <div className="flex justify-between space-x-5">
            <input
              ref={inpRef}
              type="text"
              placeholder="Search location"
              className="  rounded-full px-9 shadow-slate-50  text-white border border-gray-200  p-3 w-full bg-black shadow-md"
            />
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
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
  <div className="grid grid-cols-4 gap-4">
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
  </div> 

  <Tabs />
</div>
</main>*/
}
