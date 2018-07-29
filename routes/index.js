import {express, Router} from 'express';
const router = new Router();

// import io from 'Socket.IO';
import Server from 'socket.io'; // server api 
const server = new Server();

let sockets = server.listen(3001);

// let sockets = io.listen('http://localhost:3001');

sockets.on('connection',function(client){  
  
  client.on('sendMessage',function(data){
    console.log("----------------",data);
    sockets.to(client.id).emit("ticker",{"tick": "tick tick2 "});
  });
  
});
 

module.exports = router;
 