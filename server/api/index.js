import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import { BASE_CLIENT_URL } from "../constants/CONFIGS.js";

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: BASE_CLIENT_URL,
  },
});

app.get("", (req, res) => {
  res.json({ status: "ok" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
