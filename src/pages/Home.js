import React from "react";
import LocationSearch from "../module/Search/components/LocationSearch";

const Home = () => {
  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center">Weather Forecast</h1>
      <div className="container mx-auto w-[75%]">
        <LocationSearch />
      </div>
    </main>
  );
};
export default Home;
