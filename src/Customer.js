const {Person}=require("../src/Person")

class Customer extends Person{
    constructor(firstName,lastName) {
        super(firstName, lastName);
    }

}

module.exports  ={
    Customer
}