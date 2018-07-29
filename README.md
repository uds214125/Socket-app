## Socket-app
 * A node.js socket app with ES5 syntax.


### Do Installation
  $ npm install

### How to run ?

  $ npm run start	
 

### You can change start settings from package.json file. 

"main": "app.js",
"scripts": {    
  "start":"babel-node app.js"
}


``or,`` 

"scripts": {    
 "start": "nodemon app.js --exec babel-node"
}



``or``

### If you are runngin on live production server

1. Create a file server.js and put these below lins.

1. Install dev dependencies :  

  $ npm install babel-register@latest --save-dev

1. Serve this file on server.

    require('babel-register');
    require('app.js');


