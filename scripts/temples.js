const full = document.querySelector("#full");

const today = new Date(document.lastModified);

full.innerHTML = today;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navMenu = document.getElementById("navMenu");

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});