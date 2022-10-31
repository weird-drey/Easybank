let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {
    closeBtn.classList.remove("hidden");
    dropdown.classList.remove("hidden");
    menuBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
    dropdown.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
});