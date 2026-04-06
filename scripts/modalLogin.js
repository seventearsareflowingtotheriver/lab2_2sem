const modalWindow = document.getElementById("login");
const modalBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");

if (modalBtn) {
    modalBtn.addEventListener("click", function() {
        modalWindow.classList.add("show");
    });
}

window.addEventListener("keydown", function(exitEvent) {
    if (exitEvent.key === "Escape") { 
        modalWindow.classList.remove("show");
    }
});

if (loginForm) {
    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        try {
            let response = await fetch("https://backend-for-students-production.up.railway.app/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            
            let data = await response.json();
            
            if (response.ok) {
                window.token = data.token;
                console.log("Login successful");
                modalWindow.classList.remove("show");
            } else {
                console.log("Login failed", data);
            }
        }
        catch(err){
            console.log(err);
        }
    });
}