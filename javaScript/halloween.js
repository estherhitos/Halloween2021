/*funciones para utilizar dentro del ejercicio de halloween*/ 
/**una function: es un modulo que define un algoritmo simple */
/**suele tener parametros en este caso imagen 
 * (un parametro es la variable sobre la que actua el modulo) */
/**por otra parte javaScript es orientado a objetos 
 * el OBJETO PRINCIPAL ES DOCUMENT */
function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible";
}

function ocultar(imagen){
    document.getElementById(imagen).style.visibility="hidden";
}

function sonar(sonido){
    document.getElementById(sonido).play();
}

function parar(sonido){
    document.getElementById(sonido).pause();
}