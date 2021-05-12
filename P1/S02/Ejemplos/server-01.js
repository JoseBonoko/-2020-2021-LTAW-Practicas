const http = require('http');

//--for (p in http){
//--    console.log("Propiedad: " + p);
//--}

//-- Crear el servidor
const server = http.createServer();

//-- Función de retrollamada de petición recibida
//-- Cada vez que un cliente realiza una petición
//-- se llama a esta función
function atender(req, res){
    //-- req: http.IncomingMessage: Mensaje de solicitud
    //-- res: http.ServerResponse: Mensaje de respuesta (vacío)

    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");

    //-- pero no enviamos respuesta (toddavía)
}

//-- Activa la función de retrollamada del servidor
server.on('request', atender);

//-- Activar el servidor a la escucha de peticiones
//-- en el puerto 8080
server.listen(8080);