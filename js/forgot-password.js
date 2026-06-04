const form = document.getElementById("forgotForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("email").value.trim();

const emailError =
document.getElementById("emailError");

emailError.textContent = "";

if(email === ""){

emailError.textContent =
"Email is required";

return;
}

const btn =
document.getElementById("sendOtpBtn");

btn.textContent = "Sending OTP...";
btn.disabled = true;

setTimeout(() => {

window.location.href = "otp.html";

}, 2000);

});