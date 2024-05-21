import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const csrf = () => api.get("/sanctum/csrf-cookie");
export const login = (credentials) => api.post("/api/login", credentials);
export const register = (user) => api.post("/api/register", user);
export const logout = () => api.post("/api/logout");
export const getUser = () => api.get("/api/user");
