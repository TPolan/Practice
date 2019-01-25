const padlockEl = document.getElementById("padlock");
const messageEl = document.getElementById("message");


document.addEventListener('DOMContentLoaded', () => {
    padlockEl.addEventListener("mouseenter", () => {
        messageEl.style.visibility = "visible";
    });
    padlockEl.addEventListener("mouseleave", () => {
        messageEl.style.visibility = "hidden";
    });
});