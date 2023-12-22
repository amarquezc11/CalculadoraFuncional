let entradaActual = '';
let operador = '';
let respuesta = '';
const pantalla = document.getElementById('pantalla');


function actualizarPantalla(){
pantalla.value = entradaActual;
}

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
 operador = op;
 entradaActual += ' ' + op + ' ';
}
function agregarNumero(number){
    entradaActual += number;
    actualizarPantalla();
}
function agregarPunto(){

}
