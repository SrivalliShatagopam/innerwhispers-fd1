const form = document.getElementById("registerForm");

const passwordInput =
    document.getElementById("password");
const strengthText =
    document.getElementById("strengthText");

const strengthBar =
    document.getElementById("strengthBar");
passwordInput.addEventListener("input", () => {

    const password = passwordInput.value;
    if(password === ""){

    strengthText.textContent = "";
    strengthBar.style.width = "0%";
    strengthBar.className =
        "h-2 rounded-full transition-all duration-300";

    return;
}
    let score = 0;

    if(password.length >= 8) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;

    if(score <= 2){

        strengthText.textContent =
            "🔴 Weak Password";

        strengthText.className =
            "text-red-500 text-sm mb-2 font-medium";

        strengthBar.className =
            "h-2 rounded-full bg-red-500";

        strengthBar.style.width = "33%";

    }

    else if(score <= 4){

        strengthText.textContent =
            "🟡 Medium Password";

        strengthText.className =
            "text-yellow-500 text-sm mb-2 font-medium";

        strengthBar.className =
            "h-2 rounded-full bg-yellow-500";

        strengthBar.style.width = "66%";

    }

    else{

        strengthText.textContent =
            "🟢 Strong Password";

        strengthText.className =
            "text-green-500 text-sm mb-2 font-medium";

        strengthBar.className =
            "h-2 rounded-full bg-green-500";

        strengthBar.style.width = "100%";

    }

});
// Real-time Email Validation

const emailInput =
    document.getElementById("email");

emailInput.addEventListener("input", () => {

    const email = emailInput.value.trim();

    const emailError =
        document.getElementById("emailError");

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){

        emailError.textContent =
            "Email is required";
    }

    else if(!emailPattern.test(email)){

        emailError.textContent =
            "Enter a valid email address";
    }

    else{

        emailError.textContent = "";
    }

});


// Real-time Confirm Password Validation

const confirmPasswordInput =
    document.getElementById("confirmPassword");

confirmPasswordInput.addEventListener("input", () => {

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        confirmPasswordInput.value;

    const confirmError =
        document.getElementById("confirmError");

    if(password !== confirmPassword){

        confirmError.textContent =
            "Passwords do not match";
    }

    else{

        confirmError.textContent = "";
    }

});
form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    let valid = true;

    if(name === ""){

        document.getElementById("nameError")
            .textContent = "Full name is required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
            .textContent = "Email is required";

        valid = false;
    }

    if(password === ""){

        document.getElementById("passwordError")
            .textContent = "Password is required";

        valid = false;
    }

    if(password !== confirmPassword){

        document.getElementById("confirmError")
            .textContent = "Passwords do not match";

        valid = false;
    }

    if(valid){

        const btn =
            document.getElementById("registerBtn");

        btn.textContent = "Creating Account...";
        btn.disabled = true;

        setTimeout(() => {

            alert("Registration Successful");

            window.location.href =
                "login.html";

        }, 2000);

    }

});