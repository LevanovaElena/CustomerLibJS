const { Address } = require("../src/Adress");
const { Customer } = require("../src/Customer");

test("ShouldBeCreateCustomer", () => {
  let customer;
  customer = new Customer("Ivan", "Ivanov");
  customer._addressesList = [new Address()];
  customer._phoneNumber = "+7986456123";
  customer._email = "ivan@gmail.com";
  customer._notes = ["notes"];
  customer._totalPurchasesAmount = 2.3;
  customer._lastPurchaseDate = new Date(2011, 0, 1);
  expect(customer).not.toBeNull();
  expect(customer._firstName).toBe("Ivan");
  expect(customer._lastName).toBe("Ivanov");
  expect(customer._addressesList.length).toBe(1);
  expect(customer._phoneNumber).toBe("+7986456123");
  expect(customer._email).toBe("ivan@gmail.com");
  expect(customer._notes.length).toBe(1);
  expect(customer._totalPurchasesAmount).toBe(2.3);
  expect(customer._lastPurchaseDate.toString()).toBe(
    new Date(2011, 0, 1).toString()
  );
});