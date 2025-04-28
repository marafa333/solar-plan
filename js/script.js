let menuIcon = document.querySelector("#menu-icon");
let collapsibleMenu = document.querySelector("#nav-menu");
let listLinks = document.querySelectorAll(".list-link"); 

menuIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    collapsibleMenu.classList.toggle("active");

    if (collapsibleMenu.classList.contains("active")) {
        menuIcon.innerHTML = "&times;"; 
    } else {
        menuIcon.innerHTML = "☰";
    }
});

listLinks.forEach(link => {
    link.addEventListener("click", function () {
        collapsibleMenu.classList.remove("active");
        menuIcon.innerHTML = "☰"; 
    });
});

document.addEventListener("click", function (e) {
    if (!menuIcon.contains(e.target) && !collapsibleMenu.contains(e.target)) {
        collapsibleMenu.classList.remove("active");
        menuIcon.innerHTML = "☰";
    }
});

window.addEventListener('scroll', () => {
    collapsibleMenu.classList.remove("active");
    menuIcon.innerHTML = "☰";
});
