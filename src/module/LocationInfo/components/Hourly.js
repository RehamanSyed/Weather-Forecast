import React from "react";
import { Link } from "react-router-dom";

const Hourly = ({ hourlyForecastData }) => {
  // console.log("hourly Forecast Data", hourlyForecastData);
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-7">
        <h1 className="text-3xl mt-5">Hourly Data</h1>
      </div>
      {hourlyForecastData?.forecast.map((forcast, idx) => {
        return (
          <div className="col-span-1" key={idx}>
            <div className="shadow-lg rounded-lg border p-5 w-full">
              <h1 className="mb-2">{forcast.date}</h1>
              <h1 className="text-4xl font-bold">
                {forcast.maxTemp}
                <sup className="text-md">o</sup>
              </h1>
              <h1> {forcast.symbolPhrase}</h1>
              <Link to="/" className="text-xs text-red-600">
                More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hourly;
