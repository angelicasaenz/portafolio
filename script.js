const botonMenu = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const cerrarMenu = document.querySelector(".cerrar-menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
    overlay.classList.toggle("activo");
});

cerrarMenu.addEventListener("click", () => {
    menu.classList.remove("activo");
    overlay.classList.remove("activo");
}); 

const enlacesMenu = document.querySelectorAll(".nav-menu a");

enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
    });
});