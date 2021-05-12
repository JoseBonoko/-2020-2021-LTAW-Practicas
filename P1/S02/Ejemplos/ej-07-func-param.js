//-- Ejemplo de paso de parámetros a funciones  

//-- Recibe dos parámetros y devuelve la suma  
function suma(x,y){
    //-- devolver la suma
    return x + y;
}

//-- Recibe un parámetro y lo imprime por la consola
function mensaje(msg){
    console.log(msg);
}

//-- Función que no recibe parámetros
function saluda(){
    mensaje("HOLA!!");
}

//-- Función que recibe una función como parámetro  
//-- y simplemente la llama
function call(func){
    console.log("--> Funcion recibida");

    //-- Llamar a la funcion pasada como argumento
    func();
}

//-- Llamar a suma
let a = suma(2,3);

//-- Probando la funcion mensaje
mensaje("Prueba")
mensaje(a);

//-- Probando la funcion call
call(saluda);

//-- Se le pasa como parametro una funcion
//-- que se define dentro de los parametros, 
//-- en vez de fuera
call( () => {
    mensaje("HOLI!!")
});