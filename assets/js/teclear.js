const letra = document.querySelector("#letra");
const letra2 = document.querySelector("#letra2");

const pintar = (elementoHtml, color) => {
  elementoHtml.style.backgroundColor = color;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    pintar(letra, "pink");
  } else if (event.key === "s") {
    pintar(letra, "orange");
  } else if (event.key === "d") {
    pintar(letra, "skyblue");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "q") {
    pintar(letra2, "purple");
  } else if (event.key === "w") {
    pintar(letra2, "grey");
  } else if (event.key === "e") {
    pintar(letra2, "orange");
  }
});
