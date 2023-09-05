import Axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const API = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default API;
