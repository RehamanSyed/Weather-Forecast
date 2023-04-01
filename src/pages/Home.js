import React from "react";
import LocationSearch from "module/Search/components/LocationSearch";
import bgImg from "images/homebg.jpg";
const Home = () => {
  return (
    <>
      {/* <main className="h-screen">
        <div
          className="w-full h-screen bg-cover  p-48 bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="backdrop-brightness-50">
           
          </div>
        </div>
      </main> */}
      <main class="flex h-screen justify-center items-center flex-col">
        <div
          class="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div class="h-screen flex justify-center items-center backdrop-brightness-50 flex-col">
            <h1 className="text-5xl font-bold text-center mb-10 text-white">
              Weather Forecast
            </h1>
            <div className="container mx-auto w-[75%]">
              <LocationSearch />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
