var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
let submit = document.getElementsByClassName("create-account");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Password Don't Match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

