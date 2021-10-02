import axios from "axios";
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {

  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token

  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response) {
    return response;
  }
}, (error) => {
  //handle errors
  throw error;
});

export default axiosClient;