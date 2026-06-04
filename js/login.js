const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if (valid) {

        const loginBtn = document.getElementById("loginBtn");

        loginBtn.textContent = "Logging in...";
        loginBtn.disabled = true;

        setTimeout(() => {

            alert("Login Successful");

            loginBtn.textContent = "Login";
            loginBtn.disabled = false;

        }, 2000);

    }

});