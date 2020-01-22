var express = require("express");
var http = require("http");
var websocket = require("ws");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("splash.html", {root: "./public"});
});

var server = http.createServer(app);

const wss = new websocket.Server({ server });

var playerCount = 0;

wss.on("connection", function(ws) {

    playerCount++;

    ws.send(playerCount);
    
    
    
    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    });
    ws.close();
});



server.listen(port);