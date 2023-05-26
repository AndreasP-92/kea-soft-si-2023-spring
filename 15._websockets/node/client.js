import WebSocket from "ws";

const websocketClient = new WebSocket("ws://localhost:8082");

websocketClient.on("open", ()=>{
    console.log("Connected to the server");
    websocketClient.send("This messag was send from a client in Node.js")
})