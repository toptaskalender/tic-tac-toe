const CONFIGS = {
  PORT: process.env.PORT || 3000,
  BASE_CLIENT_URL:
    process.env.NODE_ENV === "production"
      ? process.env.BASE_CLIENT_URL
      : "http://localhost:5173",
};

export default CONFIGS;
