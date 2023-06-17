import { TodoRequest, TodoUdateRequest } from "../type/todo";
import API from "./axiosInstance";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token") && req.headers) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const createTodo = (todo: TodoRequest) => API.post("/todos", todo);
export const getTodos = () => API.get("/todos");
export const deleteTodo = (id: number) => API.delete(`/todos/${id}`);
export const updateTodo = (id: number, body: TodoUdateRequest) =>
  API.put(`/todos/${id}`, body);
