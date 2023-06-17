import API from "./axiosInstance";
import { FormData } from "../type/form";

export const signIn = (formData: FormData) =>
  API.post("/auth/signin", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
export const signup = (formData: FormData) =>
  API.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
