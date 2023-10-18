export const BASE_SERVER_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : import.meta.env.VITE_BASE_SERVER_URL;
