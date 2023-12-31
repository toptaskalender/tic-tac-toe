import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import CONFIGS from "./constants/CONFIGS.js";

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: CONFIGS.BASE_CLIENT_URL,
  },
});

app.get("", (_req, res) => {
  res.json({ status: "ok" });
});

io.on("connection", (_socket) => {
  console.log("a user connected");
});

server.listen(CONFIGS.PORT, () => {
  console.log(`server running at http://localhost:${CONFIGS.PORT}`);
});
