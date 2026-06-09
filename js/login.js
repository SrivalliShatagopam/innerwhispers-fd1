const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const loginBtn = document.getElementById("loginBtn");

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

    if (!valid) {
        return;
    }

    try {

        loginBtn.disabled = true;
        loginBtn.textContent = "Logging in...";

        const result = await loginUser(
            email,
            password
        );

        localStorage.setItem(
            "accessToken",
            result.access_token
        );

        localStorage.setItem(
            "refreshToken",
            result.refresh_token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(result.user)
        );

        alert(
            `Welcome ${result.user.name}`
        );

        window.location.href = "profile.html";

    }

    catch (error) {

        passwordError.textContent =
            error.message;

    }

    finally {

        loginBtn.disabled = false;
        loginBtn.textContent = "Login";

    }

});