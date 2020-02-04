import axios from "axios";

console.log(process.env);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
});

export default api;
