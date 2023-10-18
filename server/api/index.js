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

app.get("/api", (req, res) => {
  res.send("<h1>Hi</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
