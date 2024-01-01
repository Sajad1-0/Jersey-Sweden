const menuToggle = document.querySelector(".toggle");
const container = document.querySelector(".container");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    container.classList.toggle("active");
});