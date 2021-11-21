import axios from "axios";

// create an axios instance
const instance = axios.create({
  baseURL: "/api", // api的base_url
  timeout: 5000 // request timeout
});
export const createAPI = (url, method, data) => {
  let config = {};
  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }
  return instance({
    url,
    method,
    ...config
  });
};
