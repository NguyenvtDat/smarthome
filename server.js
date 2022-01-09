const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

let deviceStatus = {
  lvFan: "0",
  lvLight: "0",
  kcLight: "0",
  br1Light: "0",
  br2Light: "0",
  bathLight: "0",
  bathWaterHeat: "0",
};
// for (let key in result) {
//   deviceStatus[key] = result[key];
// }
console.log(deviceStatus);

app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
//Run when client connects
io.on("connection", (socket) => {
  io.emit("connected", { msg: "connected" });
  socket.emit("updateStatus", { msg: deviceStatus });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
