import { axiosInstance } from "./../api/axios.config";
import { useQuery } from "react-query";

const getData = async (url) => {
  const { data } = await axiosInstance.get(url);
  return data;
};

const useFetcher = (queryKey, url) => useQuery(queryKey, () => getData(url));

export default useFetcher;
