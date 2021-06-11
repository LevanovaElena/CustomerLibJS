const { Address } = require("../src/Adress");
const { AddressValidator } = require("../src/AddressValidator");

test("ShouldBeCreateValidator", () => {
  const address= new Address();
  expect(address).not.toBeNull();

  const addressVal = new AddressValidator();
  expect(addressVal.ValidatorAddress(address).length).toBe(6);
});

test("ShouldBeValidatorForCorrectObject", () => {
  const address = new Address();

  const addressVal = new AddressValidator();

  address._addressLine = "Street 23";
  address._addressLine2 = "Street 25";
  address._city = "Ottawa";
  address._postalCode = "234563";
  address._state = "Ontario";
  address._country = "United States";
  address._typeAddress = 1;
  expect(addressVal.ValidatorAddress(address).length).toBe(0);
});

test("ShouldBeValidatorForErrorDateObject", () => {
  const address = new Address();

  const addressVal = new AddressValidator();

  address._addressLine =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam nam nam";
  address._addressLine2 =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam nam nam";
  address._city =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam";
  address._postalCode =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam";
  address._state =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam";
  address._country =
    "Lorem ipsum dolor sit amet consecrated animistic elite. Molests voluptuous necessitates poor nam";
  address._typeAddress = 10;
  expect(addressVal.ValidatorAddress(address).length).toBe(7);
});

test("ShouldBeValidatorForNotCorrectValidateObject", () => {
  const objWithOutProp = {};
  const addressVal = new AddressValidator();
  expect(addressVal.ValidatorAddress(objWithOutProp).length).toBe(0);
  expect(addressVal.ValidatorAddress(null).length).toBe(0);
});
