const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

//Run when client connects
io.on("connection", (socket) => {
  io.emit("message", "welcome to the server");
  console.log("A new connection");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
