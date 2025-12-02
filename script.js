// MOBILE MENU TOGGLE - three line menubar
let menuBtn = document.getElementById("menu-btn");
let navLinks = document.querySelector(".navlinks");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll(".navlinks a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = document.querySelector("header").offsetHeight;

    const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
});





