import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://jobsatez.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
