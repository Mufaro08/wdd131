document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        // Switch between ☰ and ✖
        if (navMenu.classList.contains("show")) {
            hamburger.innerHTML = "✖"; // Close icon
        } else {
            hamburger.innerHTML = "&#9776;"; // Hamburger icon
        }
    });
});
