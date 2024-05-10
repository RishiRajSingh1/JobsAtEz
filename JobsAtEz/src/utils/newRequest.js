import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://jobsatez.onrender.com/api/",
  // baseURL: "http://localhost:4000/api/",
  withCredentials: true,
});

export default newRequest;
