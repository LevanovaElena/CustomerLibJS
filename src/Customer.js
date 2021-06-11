const { Person } = require("../src/Person");

class Customer extends Person {

  constructor(
    firstName,
    lastName,
    addressesList,
    phoneNumber,
    email,
    notes,
    totalPurchasesAmount,
    lastPurchaseDate
  ) {
    super(firstName, lastName);
    this._addressesList = addressesList;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._notes = notes;
    this._totalPurchasesAmount = totalPurchasesAmount;
    this._lastPurchaseDate = lastPurchaseDate;
  }
}

module.exports = {
    Customer
}