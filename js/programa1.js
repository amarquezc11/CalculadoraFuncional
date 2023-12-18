let entradaActual = '';
let operador = '';
let respuesta = '';
const pantalla = document.getElementsByClassName(pantalla);

function limpiarPantalla(){
    let entradaActual = '';
    let operador = '';
    let respuesta = '';
    actualizarPantalla();
}
function borrarUltimodigito(){

}
function calcular(){

}
function asignarOperador(){

}
function agregarNumero(Number){
entradaActual += Number;
actualizarPantalla();
}
function agregarPunto(){

}
function actualizarPantalla(){
pantalla.value = entradaActual;
}