const { Address } = require("../src/Adress");
const { AddressValidator } = require("../src/AddressValidator");

test("ShouldBeCreateValidator", () => {
  let address;
  address = new Address();
  expect(address).not.toBeNull();

  const adrsVal = new AddressValidator();
  expect(adrsVal.ValidatorAddress(address).length).toBe(6);
});

test("ShouldBeValidatorForCorrectObject", () => {
  let address;
  address = new Address();

  const adrsVal = new AddressValidator();

  //address.AddressLine='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam';
  address._addressLine = "Street 23";
  address._addressLine2 = "Street 25";
  address._city = "Ottava";
  address._postalCode = "234563";
  address._state = "Ontario";
  address._country = "United States";
  address._typeAddress = 1;
  expect(adrsVal.ValidatorAddress(address).length).toBe(0);
});

test("ShouldBeValidatorForErrorDateObject", () => {
  let address;
  address = new Address();

  const adrsVal = new AddressValidator();

  address._addressLine =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._addressLine2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._city =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._postalCode =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._state =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._country =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam";
  address._typeAddress = 10;
  expect(adrsVal.ValidatorAddress(address).length).toBe(7);
});

test("ShouldBeValidatorForNotCorrectValidateObject", () => {
  let objWithOutProp = {};
  const adrsVal = new AddressValidator();
  expect(adrsVal.ValidatorAddress(objWithOutProp).length).toBe(0);
  expect(adrsVal.ValidatorAddress(null).length).toBe(0);
});
