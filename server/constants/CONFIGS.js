export const BASE_CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_CLIENT_URL
    : "http://localhost:5173";
