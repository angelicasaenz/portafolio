const botonMenu = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
    overlay.classList.toggle("activo");
    botonMenu.classList.toggle("activo");
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener("click", () => {
    menu.classList.remove("activo");
    overlay.classList.remove("activo");
    botonMenu.classList.remove("activo");
    document.body.style.overflow = '';
});

const enlacesMenu = document.querySelectorAll(".nav-menu a");
enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
        botonMenu.classList.remove("activo");
        document.body.style.overflow = '';
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("activo")) {
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
        botonMenu.classList.remove("activo");
        document.body.style.overflow = '';
    }
});