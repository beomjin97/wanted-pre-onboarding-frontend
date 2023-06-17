import axios from "axios";

const API = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
});

export default API;
