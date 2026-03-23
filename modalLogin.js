const modalWindow = document.getElementById("login");
const modalBtn = document.getElementById("login-btn");

modalBtn.addEventListener("click", function() {
    modalWindow.classList.add("show");
});

window.addEventListener("keydown", function(exitEvent) {
    if (exitEvent.key === "Escape") { 
        modalWindow.classList.remove("show");
    }
});