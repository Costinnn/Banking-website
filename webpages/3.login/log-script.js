
const logInBtn = document.querySelector("#log-in");
const accountName = document.querySelector("#account-name");
const password = document.querySelector("#password");
const accErr = document.querySelector("#account-error");
const pwErr = document.querySelector("#password-error");



logInBtn.addEventListener("click", () => {

  accErr.style.display = "none";
  pwErr.style.display = "none";

  if (typeof localStorage.getItem(`${accountName.value}`) == "object") {
    accErr.style.display = "block";
    pwErr.style.display = "block";
  } else {
     let databaseUser = JSON.parse(
      localStorage.getItem(`${accountName.value}`)
    ).username;
     let databasePw = JSON.parse(
      localStorage.getItem(`${accountName.value}`)
    ).password;

    if (
      databaseUser === accountName.value && // username verify
      databasePw === password.value // password verify
    ) {
      // user = accountName.value;
      window.location.href = "../4.account/pers-account.html";
      
    } else if (
      accountName.value == databaseUser &&
      password.value != databasePw
    ) {
      pwErr.style.display = "block";
    } else if (
      accountName.value != databaseUser &&
      password.value != databasePw
    ) {
      accErr.style.display = "block";
      pwErr.style.display = "block";
    }
  }
});
