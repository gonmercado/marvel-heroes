import axios from 'axios';

let axiosInstance;

const setAxiosInstace = () => {
  axiosInstance = axios.create({
    baseURL: '/api/v1'
  });
  return axiosInstance;
};

export const getAxios = () => {
  return axiosInstance || setAxiosInstace();
}
