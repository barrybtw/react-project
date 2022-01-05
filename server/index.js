const { Socket } = require("socket.io");

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connect", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(4000, function () {
  console.log("Port 4000");
});

// doesnt work, is gay cors
