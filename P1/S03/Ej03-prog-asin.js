const http = require('http');

const PUERTO = 8080;

//-- Servidor: Bucle pprincipal de atención a clientes
const server = http.createServer((req, res) => {

    console.log("MENSAJE A");

    req.on('data', (cuerpo) => {
        console.log("MENSAJE B");
    });

    req.on('end', () => {
        console.log("MENSAJE C");

        //-- Happy server. Generar respuesta
        res.setHeader('Content-Type', 'text/plain');
        res.write("Soy el happy server");
        res.end()
    });

    console.log("Mensaje D");

});

console.log("MENSAJE E");
server.listen(PUERTO);
console.log("MENSAJE F");