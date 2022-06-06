const btnMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".nav-list");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".nav-item");

allLinks.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
