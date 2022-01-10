const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

const esp8266_nsp = io.of("/esp8266");
let deviceStatus = {
  lvFan: "0",
  lvLight: "0",
  kcLight: "1",
  br1Light: "1",
  br2Light: "1",
  bathLight: "1",
  bathWaterHeat: "1",
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
  //io.emit("connected", { msg: "connected" });
  socket.emit("updateStatus", { msg: deviceStatus });
  socket.on("command", (msg) => {
    socket.broadcast.emit("megacommand", msg);
  });
});
//Confirm esp8266 disconnect
let isDisconnect;
function Timer() {
  isDisconnect = setTimeout(function () {
    io.emit("esp8266", "disconnected");
  }, 120000);
}

esp8266_nsp.on("connection", (socket) => {
  clearTimeout(isDisconnect);
  io.emit("esp8266", "connected");
  Timer();
  socket.on("changeStatus", (msg) => {
    msg = msg.replace(/'/g, '"');
  });
  socket.on("connectionSocket", (msg) => {
    console.log(msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
