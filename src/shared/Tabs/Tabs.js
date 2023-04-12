import React, { useState } from "react";
import Daily from "../../module/LocationInfo/components/Daily";
import TabContent from "./TabContent";
import TabNavItems from "./TabNavItems";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// import ThreeHours from "../../module/LocationInfo/components/ThreeHours";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const { id: paramid } = useParams();

  const getDailyForecast = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/forecast/daily/${paramid}`,
      {
        params: {
          alt: "0",
          tempunit: "C",
          windunit: "MS",
          tz: "Europe/London",
          periods: "7",
          dataset: "full",
          history: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };
  const { isLoading: dailyLoading, data: DailyForecastData } = useQuery(
    ["getDailyForecast"],
    getDailyForecast
  );
  console.log("daily data", DailyForecastData);

  const getHourlyForecast = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/forecast/hourly/${paramid}`,
      {
        params: {
          alt: "0",
          tempunit: "C",
          windunit: "MS",
          tz: "Europe/London",
          periods: "7",
          dataset: "full",
          history: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };

  const { isLoading: hourlyloading, data: hourlyForecastData } = useQuery(
    ["getHourlyForecast"],
    getHourlyForecast
  );
  const getThreeHourlyForecast = async () => {
    const { data } = await axios.get(
      `https://foreca-weather.p.rapidapi.com/forecast/hourly/${paramid}`,
      {
        params: {
          alt: "0",
          tempunit: "C",
          windunit: "MS",
          tz: "Europe/London",
          periods: "7",
          dataset: "full",
          history: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "31ad9c858dmsh0186b4bf1e5bfd6p16eb16jsn6a428054114a",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      }
    );
    return data;
  };
  const { isLoading: threeHourlyloading, data: ThreeHourlyForecastData } =
    useQuery(["getThreeHourlyForecast"], getThreeHourlyForecast);

  return (
    <div className="my-28">
      <ul className="flex justify-start items-center space-x-4  ">
        <TabNavItems
          title="Daily Forecast"
          id={"daily"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* <TabNavItems
          title="3 Hours Forecast"
          id={"threehours"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        {/* <TabNavItems
          title="Hour"
          id={"hour"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItems
          title="15 Minutes"
          id={"quater"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
      </ul>
      <TabContent id={"daily"} activeTab={activeTab}>
        <Daily DailyForecastData={DailyForecastData} />
      </TabContent>
      {/* <TabContent id={"threehours"} activeTab={activeTab}>
        <ThreeHours ThreeHourlyForecastData={ThreeHourlyForecastData} />
      </TabContent> */}
      {/* <TabContent id={"hour"} activeTab={activeTab}>
        <Hourly hourlyForecastData={hourlyForecastData} />
      </TabContent>
      <TabContent id={"quater"} activeTab={activeTab}>
        <Daily DailyForecastData={DailyForecastData} />
      </TabContent> */}
    </div>
  );
};

export default Tabs;
