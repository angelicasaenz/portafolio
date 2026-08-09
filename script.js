const botonMenu = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
    overlay.classList.toggle("activo");
});