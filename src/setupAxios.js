import axios from 'axios';

let axiosInstance;

const setAxiosInstace = () => {
  axiosInstance = axios.create({
    baseURL: '/v1/public'
  });
  return axiosInstance;
};

const getAxios  = () => {
  return axiosInstance || setAxiosInstace();
};

export default getAxios;
