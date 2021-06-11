class Address {
  constructor(
    addressLine,
    addressLine2,
    typeAddress,
    city,
    postalCode,
    state,
    country
  ) {
    this._addressLine = addressLine;
    this._addressLine2 = addressLine2;
    this._typeAddress = typeAddress;
    this._city = city;
    this._postalCode = postalCode;
    this._state = state;
    this._country = country;
  }
}

module.exports = {
  Address,
};