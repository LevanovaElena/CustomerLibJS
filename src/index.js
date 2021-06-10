const {Address}=require("../src/Adress")
const {AddressValidator}=require("../src/AddressValidator")

const address=new Address();
address.AddressLine=null;
address.AddressLine='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum necessitatibus porro nam';
console.log(address);

const addressVal=new AddressValidator();
console.log(addressVal.ValidatorAddress(address));