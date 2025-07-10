// requestMethods.js
import axios from "axios";

export const BASE_URL = "https://farmers-backend-iota.vercel.app/api/";

let TOKEN = null;

try {
  const root = localStorage.getItem("persist:root");
  if (root) {
    const user = JSON.parse(JSON.parse(root).user);
    TOKEN = user?.currentUser?.accessToken || null;
  }
} catch (err) {
  console.warn("Token retrieval failed:", err.message);
  TOKEN = null;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: TOKEN ? { token: `Bearer ${TOKEN}` } : {},
});
