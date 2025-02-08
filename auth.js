document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authButton = document.getElementById("auth-button");
    const toggleForm = document.getElementById("toggle-form");

    let isRegistering = false;

    toggleForm.addEventListener("click", function (event) {
        event.preventDefault();
        isRegistering = !isRegistering;

        if (isRegistering) {
            formTitle.textContent = "Register";
            authButton.textContent = "Register";
            toggleForm.innerHTML = 'Already have an account? <a href="#">Login</a>';
        } else {
            formTitle.textContent = "Login";
            authButton.textContent = "Login";
            toggleForm.innerHTML = "Don't have an account? <a href='#'>Register</a>";
        }
    });

    authButton.addEventListener("click", async function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const endpoint = isRegistering ? "register" : "login";
        const response = await fetch(`http://localhost:5000/${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            if (!isRegistering) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userEmail", data.email);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Registration successful! Please log in.");
                toggleForm.click();
            }
        } else {
            alert(data.message);
        }
    });
});
