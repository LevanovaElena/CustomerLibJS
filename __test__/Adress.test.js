const {Address }=require("../src/Adress")

test("ShouldBeCreateAddress",()=>{
    let address;
    address = new Address ();
    expect(address).not.toBeNull();
    address.AddressLine='Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    expect(address.AddressLine).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
});