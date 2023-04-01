import { useQuery } from "react-query";

export default function getLocationBySearch() {
  const { isLoading, isError, data, error } = useQuery(
    ["location", inpt],
    async () => {
      const { data } = await Fetcher.get(
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
    }
  );
}
