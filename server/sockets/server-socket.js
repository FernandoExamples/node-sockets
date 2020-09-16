const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  //Escuchar informacion del cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log('Mensaje del cliente: ', data);

    client.broadcast.emit('enviarMensaje', data);

    // if (data.mensaje) {
    //   callback({
    //     resp: 'Todo salio correctamente',
    //   });
    // } else {
    //   callback({
    //     resp: 'Todo salio mal!!!!',
    //   });
    // }
  });

  //Enviar informacion al cliente
  client.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola soy el servidor',
  });
});
