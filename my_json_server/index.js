//import json server library in index.js file
const jsonServer = require('json-server')

//create json-server
const mediaPlayerServer = jsonServer.create()

// create PATH to JSON file
const router = jsonServer.router('db.json')

// middleware -  to convert json to js
const middleware = jsonServer.defaults()

// use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for running server
const port = 5000 || process.env.PORT // in case of hosting process.env.PORT takes a free port when 5000 is already occupied in the current server

// for resolving requests from client
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at ${port} and waiting for the request`);
})