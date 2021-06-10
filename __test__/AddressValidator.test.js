const {Address }=require("../src/Adress")
const {AddressValidator}=require("../src/AddressValidator")

test("ShouldBeCreateValidator",()=>{
    let address;
    address = new Address ();
    expect(address).not.toBeNull();

    const adrsVal=new AddressValidator();
    expect(adrsVal.ValidatorAddress(address).length).toBe(6);

    //address.AddressLine='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam';
    address._addressLine = "Street 23";
    address._addressLine2 = "Street 25";
    address._city = "Ottava";
    address._postalCode = "234563";
    address._state = "Ontario";
    address._country = "Canada";
    address._typeAddress=1;
    console.log(adrsVal.ValidatorAddress(address));
    expect(adrsVal.ValidatorAddress(address).length).toBe(0);

});

test("ShouldBeValidatorForCorrectObject",()=>{
    let address;
    address = new Address ();

    const adrsVal=new AddressValidator();

    //address.AddressLine='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam';
    address._addressLine = "Street 23";
    address._addressLine2 = "Street 25";
    address._city = "Ottava";
    address._postalCode = "234563";
    address._state = "Ontario";
    address._country = "Canada";
    address._typeAddress=1;
    console.log(adrsVal.ValidatorAddress(address));
    expect(adrsVal.ValidatorAddress(address).length).toBe(0);
});