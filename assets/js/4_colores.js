const azul = document.querySelector("#azul");
const rojo = document.querySelector("#rojo");
const verde = document.querySelector("#verde");
const amarillo = document.querySelector("#amarillo");

const pintarnegro = (elementoHtml, color = "black") => {
  elementoHtml.style.backgroundColor = color;
};

azul.addEventListener("click", () => {
  pintarnegro(azul);
});

rojo.addEventListener("click", () => {
  pintarnegro(rojo);
});

verde.addEventListener("click", () => {
  pintarnegro(verde);
});

amarillo.addEventListener("click", () => {
  pintarnegro(amarillo);
});
