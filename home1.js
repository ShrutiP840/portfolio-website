// MOBILE MENU TOGGLE
let menuBtn = document.getElementById("menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// SCROLL ANIMATION
const animateElements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
    animateElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});
