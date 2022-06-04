import axios from "axios";
import Api from "./api";

const httpURL = axios.create({
  baseURL: Api.baseURL,
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
httpURL.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      // Accept: "application/json",
      authorization: `${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default httpURL;
