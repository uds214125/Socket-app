// import {express, Router} from 'express';
// const router = new Router();

// // import io from 'Socket.IO';
// import SocketIO from 'socket.io'; // server api 
// // const server = new Server();

// // let sockets = server.listen(3005);
// // const SocketController = {};

// module.exports = (app)=>{
//   // let sockets = io.listen('http://localhost:3001');
//   let socket = SocketIO(app);
//   socket.on('connection',function(client){  
    
//     client.on('sendMessage',function(data){
//       console.log("--------sendMessage subscribe--------",data);
//       socket.to(client.id).emit("ticker",{"tick": "tick tick2 "});
//     });
//   });
// };
 
// // export default SocketController;
// module.exports = router;


'use strict';
import {express, Router} from 'express';
const router = new Router();

import SocketIO from 'socket.io';
// var app = require('../app');
// var app = require('../bin/www');
import Socket from '../controllers/socket-init';
var app = router.express;
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

(function(){
    // let io = new SocketIO(app);
    console.log('==============Trying===============');
    // io.on('connection',function(client){  
    //     console.log('==============Connected===============');
    // });
    // client.on('sendMessage',function(data){
    //   console.log("--------sendMessage subscribe--------",data);
    //   socket.to(client.id).emit("ticker",{"tick": "tick tick2 "});
    // });
    router.get('/', () =>{
      console.log('========INIT C');
      // res.io.emit("socketToMe", "users");
    });
})();
  

export default router;
 