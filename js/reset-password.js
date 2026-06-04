const resetForm =
document.getElementById("resetForm");

resetForm.addEventListener("submit", function(e){

e.preventDefault();

const newPassword =
document.getElementById("newPassword").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const passwordError =
document.getElementById("passwordError");

passwordError.textContent = "";

if(newPassword !== confirmPassword){

passwordError.textContent =
"Passwords do not match";

return;
}

alert("Password Reset Successful");

window.location.href =
"login.html";

});