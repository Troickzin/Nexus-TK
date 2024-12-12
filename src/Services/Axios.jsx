import axios from "axios";

// Axios Interceptor Instance
export const Api = axios.create({
  baseURL: process.env.BASE_URL,
});
