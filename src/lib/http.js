// src/lib/http.js
import axios from "axios";

export const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

// 요청 인터셉터(토큰/공통 헤더)
http.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 인터셉터(에러 메시지 표준화)
http.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(status ? `[${status}] ${message}` : message));
  }
);
