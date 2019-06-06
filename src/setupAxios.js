import axios from 'axios';

let axiosInstance;

const setAxiosInstace = () => {
  axiosInstance = axios.create({
    baseURL: 'api'
  });
  return axiosInstance;
};

const getAxios  = () => {
  return axiosInstance || setAxiosInstace();
};

export default getAxios;
