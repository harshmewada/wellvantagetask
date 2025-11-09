import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

export const useApi = (axiosConfig: AxiosRequestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const getData = async (extraConfig?: AxiosRequestConfig) => {
    setIsLoading(true);
    await axios({ ...axiosConfig, ...extraConfig })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
        setError(err);
      });
  };

  return {
    isLoading,
    data,
    getData,
    error,
  };
};
