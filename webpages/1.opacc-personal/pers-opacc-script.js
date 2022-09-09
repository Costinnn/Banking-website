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
let customerID = 0;

const customersList = [];

class customer {
  constructor(
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
    this.Id = customerID;
    customerID++;
    this.accountHistory = [];
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
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.accountHistory.push(`Deposited ${amount}$.`)
      return `You just deposited ${amount}$ into your account. Your new balance is: ${this.balance}$.`;
    }
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.accountHistory.push(`withdrew ${amount}$.`)
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

  customersList.push(newCustomer);
});
