document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
    } else {
        errorMessage.textContent = "";
        alert("Login successful!");
    }
});
