const otpForm =
document.getElementById("otpForm");

otpForm.addEventListener("submit", function(e){

e.preventDefault();

const otp =
document.getElementById("otp").value.trim();

const otpError =
document.getElementById("otpError");

otpError.textContent = "";

if(otp !== "123456"){

otpError.textContent =
"Invalid OTP";

return;
}

window.location.href =
"reset-password.html";

});