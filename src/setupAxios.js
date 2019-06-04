import axios from 'axios';

let axiosInstance;

const setAxiosInstace = () => {
  axiosInstance = axios.create({
    baseURL: '/v1/public'
  });
  return axiosInstance;
};

export default getAxios = () => {
  return axiosInstance || setAxiosInstace();
}
