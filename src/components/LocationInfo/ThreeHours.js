import React from "react";
import { Link } from "react-router-dom";

const ThreeHours = ({ ThreeHourlyForecastData }) => {
  console.log("ThreeHours", ThreeHourlyForecastData);
  return (
    <div className="grid grid-cols-7 gap-4 mb-10">
      {ThreeHourlyForecastData?.forecast.map((forcast, idx) => {
        return (
          <div className="col-span-1 mt-10 text-white" key={idx}>
            <div className="shadow-lg rounded-lg border p-5 w-full">
              <h1 className="mb-2">{forcast.date || "10-2-2023"}</h1>
              <div>
                <img
                  src={`https://developer.foreca.com/static/images/symbols/${forcast.symbol}.png`}
                  alt="image"
                  width="50px"
                  height="50px"
                />
                <h1 className="text-4xl font-bold">
                  {forcast.temperature || 12}
                  <sup className="text-md">o</sup>
                </h1>
              </div>
              <h1> {forcast.symbolPhrase || "Clear"}</h1>
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

export default ThreeHours;
