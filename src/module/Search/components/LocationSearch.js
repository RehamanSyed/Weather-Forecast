import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
const LocationSearch = () => {
  const inpRef = useRef();
  const [inpt, setInpt] = useState("");
  const [searchdata, setSearchData] = useState();
  const [searchInp, setSearchInp] = useState("");
  const { isLoading, isError, data, error } = useQuery(
    ["location", searchdata],
    async () => {
      const { data } = await axios.get(
        `https://foreca-weather.p.rapidapi.com/location/search/${searchdata}`,
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
    }
  );

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(searchInp);
  // };

  const handleChange = (value) => {
    setSearchInp(value);
    setSearchData(value);
  };
  console.log(data);
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="max-h-screen top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {/* <form onSubmit={submitHandler}> */}
      <div className="flex justify-between flex-col">
        <div className="w-[500px]">
          <input
            type="text"
            value={searchInp}
            placeholder="Search city"
            className="border border-black rounded-full px-8  p-3 w-full"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div
          className={`max-h-72 mt-2  rounded-xl bg-white scrollbar-thin  scrollbar-thumb-gray-700 scrollbar-track-slate-200 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
        >
          <div className="max-h-64">
            <ul className="">
              {data?.locations.map((place, idx) => {
                return (
                  <li key={idx} className=" p-2 px-5 hover:bg-slate-200">
                    <Link to={`/search/${place.id}`}>
                      <div className="flex justify-between items-center">
                        <h1 className="text-sm font-bold">{place.name}</h1>
                        <h3 className="text-sm font-bold"> {place.country}</h3>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default LocationSearch;
