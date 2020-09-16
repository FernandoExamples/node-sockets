const express = require('express');
const app = express();
const path = require('path');

const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Crear un servidor necesario para socketIO
let server = http.createServer(app);
module.exports.io = socketIO(server);

require('./sockets/server-socket');

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
