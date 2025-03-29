import axios from "axios";

const axiosConfig = {
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(axiosConfig);
export default api;
