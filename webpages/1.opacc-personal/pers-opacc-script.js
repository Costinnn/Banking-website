const username = document.querySelector("#username");
const password = document.querySelector("#password");
const title = document.querySelector("#title");
const fullName = document.querySelector("#name");
const birthDate = document.querySelector("#birth-date");
const country = document.querySelector("#country");
const currentAdress = document.querySelector("#adress");
const married = document.querySelector("#married");

const idNumber = document.querySelector("#id-number");
const expiryDate = document.querySelector("#expiry-date");
const countryOrigin = document.querySelector("#country-origin");
const birthAdress = document.querySelector("#birth-adress");

const accountType = document.querySelector("#account-type");
const currency = document.querySelector("#currency");
const cardType = document.querySelector("#card-type");
const internetBanking = document.querySelector("#yes");
const other = document.querySelector("#other");

const joinBtn = document.querySelector(".join-button");

class customer {
  constructor(
    username,
    password,
    title,
    fullName,
    birthDate,
    country,
    currentAdress,
    married,
    idNumber,
    expiryDate,
    countryOrigin,
    birthAdress,
    accountType,
    currency,
    cardType,
    internetBanking,
    other
  ) {
    this.username = username;
    this.password = password;
    this.title = title;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.country = country;
    this.currentAdress = currentAdress;
    this.married = married;
    this.idNumber = idNumber;
    this.expiryDate = expiryDate;
    this.countryOrigin = countryOrigin;
    this.birthAdress = birthAdress;
    this.accountType = accountType;
    this.currency = currency;
    this.cardType = cardType;
    this.internetBanking = internetBanking;
    this.other = other;
    this.balance = 0;
    this.accountHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.accountHistory.push(`Deposited ${amount}$.`);
      return `You just deposited ${amount}$ into your account. Your new balance is: ${this.balance}$.`;
    }
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.accountHistory.push(`withdrew ${amount}$.`);
      return `You just withdraw ${amount}$.`;
    } else {
      return `You have insuficient funds, your account balance is: ${this.balance}$.`;
    }
  }

  viewBalance() {
    return `Your account balance is ${this.balance}$.`;
  }
}

joinBtn.addEventListener("click", () => {
  let isMarried = false;
  let isInternetBanking = false;
  if (married.value == "on") {
    isMarried = true;
  }
  if (internetBanking.value == "on") {
    isInternetBanking = true;
  }

  let newCustomer = new customer(
    username.value,
    password.value,
    title.value,
    fullName.value,
    birthDate.value,
    country.value,
    currentAdress.value,
    isMarried,
    Number(idNumber.value),
    expiryDate.value,
    countryOrigin.value,
    birthAdress.value,
    accountType.value,
    currency.value,
    cardType.value,
    isInternetBanking,
    other.value
  );

  localStorage.setItem(`${username.value}`, JSON.stringify(newCustomer));

  window.location.href = "../4.account/pers-account.html";
});
