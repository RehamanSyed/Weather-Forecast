import { Fetcher } from "client";
import { useQuery } from "react-query";

export default function useLocationBySearch(searchInp) {
  console.log(searchInp);
  const { isLoading, isError, data, error } = useQuery(
    ["location", searchInp],
    async () => {
      const { isLoading, isError, data, error } = await Fetcher.get(
        `location/search/${searchInp}`
      );
      console.log(data);
      return data;
    }
  );
  return { isLoading, isError, data, error };
}
