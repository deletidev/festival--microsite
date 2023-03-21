//pop entradas no disponibles
const entradasBtn = document.querySelector(".btentradas");
const entradasPop = document.querySelector(".entradas-pop");
const cerarPop = document.querySelector(".cerrar");
const menuEntradas = document.querySelector(".menu-entradas");
const entradasMovil = document.querySelector(".entradas-movil");
const menuMovil = document.querySelector(".menumov");
const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close");

menuEntradas.addEventListener("click", () => {
  entradasPop.classList.add("active");
  entradasPop.parentNode.classList.add("active");
});

entradasMovil.addEventListener("click", () => {
  entradasPop.classList.add("active");
  entradasPop.parentNode.classList.add("active");
});

entradasBtn.addEventListener("click", () => {
  entradasPop.classList.add("active");
  entradasPop.parentNode.classList.add("active");
});

cerarPop.addEventListener("click", () => {
  entradasPop.classList.remove("active");
  entradasPop.parentNode.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (
    entradasPop.classList.contains("active") &&
    e.target !== entradasPop &&
    e.target.parentNode !== entradasPop &&
    e.target !== entradasBtn &&
    e.target !== cerarPop &&
    e.target !== menuEntradas &&
    e.target !== entradasMovil
  ) {
    entradasPop.classList.remove("active");
    entradasPop.parentNode.classList.remove("active");
  }
});

if (entradasBtn.classList.contains("pro")) {
  entradasPop.firstElementChild.innerText =
    "Programa no disponible actualmente.";
}
