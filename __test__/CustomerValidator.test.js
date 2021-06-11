const { Customer } = require("../src/Customer");
const { CustomerValidator } = require("../src/CustomerValidator");
const { Address } = require("../src/Adress");

test("ShouldBeCreateValidator", () => {
  let customer;
  customer = new Customer();
  expect(customer).not.toBeNull();

  const customerVal = new CustomerValidator();
  expect(customerVal.ValidatorCustomer(customer).length).toBe(3);
});

test("ShouldBeValidatorForCorrectObject", () => {
  let customer;
  const customerVal = new CustomerValidator();

  customer = new Customer("Ivan", "Ivanov");
  customer._addressesList = [new Address()];
  customer._phoneNumber = "+39869137028";
  customer._email = "ivan@gmail.com";
  customer._notes = ["notes"];
  customer._totalPurchasesAmount = 2.3;
  customer._lastPurchaseDate = new Date(2011, 0, 1);

  expect(customerVal.ValidatorCustomer(customer).length).toBe(0);
});

test("ShouldBeValidatorForErrorDateObject", () => {
  let customer;
  const customerVal = new CustomerValidator();

  customer = new Customer(
    "fdffgdgdfgdfgdfgdfgdgdfgdfgdfdgdfgdfgdfgdgdfdgdfgdfgfdhrterrewrqwdasdasad",
    "fdffgdgdfgdfgdfgdfgdgdfgdfgdfdgdfgdfgdfgdgdfdgdfgdfgfdhrterrewrqwdasdasad"
  );
  customer._addressesList = [];
  customer._phoneNumber = "+39869137";
  customer._email = "ivan@gmail...com";
  customer._notes = [];
  customer._totalPurchasesAmount = "s";
  customer._lastPurchaseDate = "21dffdff220221";

  //console.log(customerVal.ValidatorCustomer(customer));
  expect(customerVal.ValidatorCustomer(customer).length).toBe(8);
});

test("ShouldBeValidatorForNotCorrectValidateObject", () => {
  let objWithOutProp = {};
  const customerVal = new CustomerValidator();
  expect(customerVal.ValidatorCustomer(objWithOutProp).length).toBe(0);
  expect(customerVal.ValidatorCustomer(null).length).toBe(0);
});