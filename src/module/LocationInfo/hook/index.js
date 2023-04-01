import { Fetcher } from "client";
import { useQuery } from "react-query";
export function useWeatherStations(stationId) {
  console.log(stationId);
  const { isLoading, isError, data, error } = useQuery(
    ["stations", stationId],
    async () => {
      const { isLoading, isError, data, error } = await Fetcher.get(
        `location/search/${stationId}`
      );
      console.log(data);
      return data;
    }
  );
  return { isLoading, isError, data, error };
}
export function useCurrentWeather(locationId) {
  console.log(locationId);
  const { isLoading, isError, data, error } = useQuery(
    ["stations", locationId],
    async () => {
      const { isLoading, isError, data, error } = await Fetcher.get(
        `current/${locationId}`
      );
      console.log(data);
      return data;
    }
  );
  return { isLoading, isError, data, error };
}
// export function useDaily(locationId) {
//   console.log(locationId);
//   const { isLoading, isError, data, error } = useQuery(
//     ["location", locationId],
//     async () => {
//       const { isLoading, isError, data, error } = await Fetcher.get(
//         `observation/latest/${locationId}`
//       );
//       console.log(data);
//       return data;
//     }
//   );
//   return { isLoading, isError, data, error };
// }
// export function useHourly(searchInp) {
//   console.log(searchInp);
//   const { isLoading, isError, data, error } = useQuery(
//     ["location", searchInp],
//     async () => {
//       const { isLoading, isError, data, error } = await Fetcher.get(
//         `location/search/${searchInp}`
//       );
//       console.log(data);
//       return data;
//     }
//   );
//   return { isLoading, isError, data, error };
// }
