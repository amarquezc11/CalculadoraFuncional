let entradaActual = '';
let operador = '';
let respuesta = '';
const pantalla = document.getElementById('pantalla');

function limpiarPantalla(){
    entradaActual = '';
    operador = '';
    respuesta = '';
    actualizarPantalla();
}
function borrarUltimodigito() {
    entradaActual = entradaActual.slice(0, -1);
    actualizarPantalla();
}
function calcular(){
    respuesta = eval(entradaActual);
    entradaActual = respuesta;
    operador = '';
    actualizarPantalla();
}
function asignarOperador(op){
    operador = op;
    entradaActual += '' + op + '';
}
function agregarNumero(number){
    entradaActual += number;
    actualizarPantalla();
}
function agregarPunto(){
    if(!entradaActual.includes('.')){
        entradaActual += '.';
        actualizarPantalla();
    }
}
function actualizarPantalla(){
    pantalla.value = entradaActual;
}