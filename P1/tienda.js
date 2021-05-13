const http = require('http');

//-- Definición del puerto
const PUERTO = 9000;

//-- Creación del servidor
const server = http.createServer((req, res) => {

    //-- Mensaje de recepción de petición
    console.log("Petición recibida!");

    //-- Cabecera que indica el tipo de datos del
    //-- del cuerpo de la respuesta: Texto plano
    res.setHeader('Content-Type', 'text/plain');

    //-- Mensaje del cuerpo
    res.write("Bienvenidos a mi tienda\n");

    //-- Terminar la respuesta y enviarla
    res.end();
});

//-- Activar el servidor
server.listen(PUERTO);

console.log("Servidor activo, escuchando en puerto: " + PUERTO);