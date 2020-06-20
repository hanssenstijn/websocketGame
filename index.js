const http = require("http");
const { request } = require("express");
const websocketServer = require("websocket").server;
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening.. on 9090"));

const wsServer = new websocketServer({
  "httpServer": httpServer
});

wsServer.on("request", request => {
  // connect
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("Opened!"));
  connection.on("close", () => console.log("Closed!"));
  connection.on("message", message => {

    // I have recieved a message from the client

  });


})