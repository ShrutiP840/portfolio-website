// MOBILE MENU TOGGLE
let menuBtn = document.getElementById("menu-btn");
let navLinks = document.querySelector(".navlinks");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// git
