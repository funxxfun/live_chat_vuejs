import axios from "axios";

export default () => {
  const API_URL = axios.create({
    baseURL: `${process.env.VUE_APP_API_ORIGIN}`,
  })
  return API_URL;
};
