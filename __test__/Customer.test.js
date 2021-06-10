const {Customer}=require("../src/Customer")

test("ShouldBeCreateCustomer",()=>{
    let customer;
    customer = new Customer("Ivan", "Ivanov");
    expect(customer).not.toBeNull();
    expect(customer._firstName).toBe("Ivan");
    expect(customer._lastName).toBe("Ivanov");
});