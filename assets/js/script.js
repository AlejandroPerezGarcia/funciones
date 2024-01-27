/*Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función

function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar); */

//solucion 2.2

/* 

const ele = document.getElementById("ele1");
ele.addEventListener("click", ()=> pintar(ele));

function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

 */


// solucion 2.3


const pintar = (elemento, color) => elemento.style.backgroundColor = color;

const ele = document.getElementById("ele1");

ele.addEventListener("click", () => pintar(ele, 'yellow'));