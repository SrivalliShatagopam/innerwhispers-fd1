const uploadBtn =
document.getElementById("uploadBtn");

const avatarInput =
document.getElementById("avatarInput");

const avatarPreview =
document.getElementById("avatarPreview");

const displayName =
document.getElementById("displayName");

const saveBtn =
document.getElementById("saveBtn");

const removeBtn =
document.getElementById("removeBtn");

function updateLetterAvatar() {

    const name =
    displayName.value.trim();

    const firstLetter =
    name ? name.charAt(0).toUpperCase() : "U";

    avatarPreview.innerHTML =
    firstLetter;

    avatarPreview.style.backgroundImage = "";
    avatarPreview.style.backgroundColor = "#E8724A";
    avatarPreview.style.color = "white";
}

updateLetterAvatar();

displayName.addEventListener("input", () => {

    if(
        avatarPreview.style.backgroundImage === ""
    ){
        updateLetterAvatar();
    }

});

uploadBtn.addEventListener("click", () => {

    avatarInput.click();

});

avatarInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        avatarPreview.innerHTML = "";

        avatarPreview.style.backgroundImage =
        `url(${URL.createObjectURL(file)})`;

        avatarPreview.style.backgroundSize =
        "cover";

        avatarPreview.style.backgroundPosition =
        "center";

    }

});

removeBtn.addEventListener("click", () => {

    avatarInput.value = "";

    updateLetterAvatar();

});

saveBtn.addEventListener("click", () => {

    alert("Profile updated successfully!");

});