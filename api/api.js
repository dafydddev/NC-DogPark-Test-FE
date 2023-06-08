import axios from "axios";

const parks = axios.create({
  baseURL: "http://localhost:9090",
});

export default parks;
