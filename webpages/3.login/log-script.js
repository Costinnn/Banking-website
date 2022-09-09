const logInBtn = document.querySelector("#log-in");
const accountName = document.querySelector("#account-name");
const password = document.querySelector("#password");
const accErr = document.querySelector("#account-error");
const pwErr = document.querySelector("#password-error");

logInBtn.addEventListener("click", () => {
  accErr.style.display = "none";
  pwErr.style.display = "none";

  if (password.value == "admin" && accountName.value == "admin") {
    window.location.href = "../4.account/pers-account.html";
  } else if (password.value != "admin" && accountName.value != "admin") {
    accErr.style.display = "block";
    pwErr.style.display = "block";
  } else if (password.value != "admin") {
    pwErr.style.display = "block";
  } else if (accountName.value != "admin") {
    accErr.style.display = "block";
    pwErr.style.display = "block";
  }
});
