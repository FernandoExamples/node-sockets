var socket = io();

socket.on('connect', function () {
  console.log('Estamos conectados al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexion con el servidor');
});

//Emitir informacion al servidor
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Fernando',
    mensaje: 'Hola soy el cliente',
  },
  function (resp) {
    console.log('Respuesta del servidor: ', resp);
  }
);

//Escuchar informacion del servidor
socket.on('enviarMensaje', function (message) {
  console.log('Mensaje del servidor', message);
});
