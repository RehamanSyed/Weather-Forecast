import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useQuery } from "react-query";
const LocationSearch = () => {
  const inpRef = useRef();
  const [inpt, setInpt] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setInpt(inpRef.current.value);
  };

  const fetch = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/location/search/${inpt}`,
      {
        // params: { lang: "en", country: "in" },
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    // console.log(data);
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["location", inpt],
    fetch
  );

  console.log(data);
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="mt-5">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between space-x-5">
          <input
            type="text"
            ref={inpRef}
            placeholder="Search location"
            className="border border-black  p-3 w-full"
          />
          <button type="submit" className="p-3 bg-black text-white">
            Search
          </button>
        </div>
      </form>

      {isLoading ? (
        <h1 className="text-3xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-6">
          {data.locations.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            data?.locations.map((place, idx) => {
              return (
                <div
                  className="shadow-lg rounded-lg border p-5 w-full"
                  key={idx}
                >
                  <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
                  <h3>Country : {place.country}</h3>
                  <h3>TimeZone : {place.timezone}</h3>
                  <h3>Latitude : {place.lat}</h3>
                  <h3>Longitude : {place.lon}</h3>
                  <div className="p-2 mt-3 bg-black text-white text-center">
                    <Link to={`/search/${place.id}`}>view details</Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
