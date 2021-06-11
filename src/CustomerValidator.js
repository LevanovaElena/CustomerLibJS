class CustomerValidator
{

    constructor() {
    }

    ValidatorCustomer(customer) {
        let result = [];
        if(!customer)return result;
        let allProperty=Object.getOwnPropertyNames(customer);
        if(allProperty.length>0)
        {
            allProperty.forEach(item=>{
                switch (item) {
                    case "_firstName":
                        if(customer._firstName) {
                            if (customer._firstName.length > 50) result.push({
                                propertyName: item,
                                message: "FirstName should maximum 50 lenght."
                            });
                        }
                        break;
                    case "_lastName":
                        if(!customer._lastName)result.push({propertyName:item,message: "LastName is required."});
                         else   if(customer._lastName.length>50)result.push({propertyName:item,message: "LastName should maximum 50 lenght."});
                        break;
                    case "_addressesList":
                        if(!customer._addressesList)result.push({propertyName:item,message: "AddressesList is required."});
                        else if(customer._addressesList.length<=0)result.push({propertyName:item,message: "AddressesList must be at least one address."});
                        break;
                    case "_phoneNumber":
                        if(customer._phoneNumber) {
                            if (customer._phoneNumber.trim().split(" ").join("").match(new RegExp(/^\+[1-9]\d{10,14}$/))===null)
                                result.push({
                                propertyName: item,
                                message: "PhoneNumber accept only E.164 format."
                            });
                        }
                        break;
                    case "_email":
                        if(customer._email) {
                            if (!customer._email.match(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))) result.push({
                                propertyName: item,
                                message: "Email accept only email format."
                            });
                        }
                        break;
                    case "_notes":
                        if(!customer._notes)result.push({propertyName:item,message: "Notes is required."});
                        else if(customer._notes.length<=0)result.push({propertyName:item,message: "Notes must be at least one note."});
                        break;
                    case "_totalPurchasesAmount":
                        if(customer._totalPurchasesAmount) {
                            if (!Number.parseFloat(customer._totalPurchasesAmount) ) result.push({
                                propertyName: item,
                                message: "TotalPurchasesAmount should be number."
                            });
                        }
                        break;
                    case "_lastPurchaseDate":
                        if(customer._lastPurchaseDate) {
                            if (!Date.parse(customer._lastPurchaseDate) ) result.push({
                                propertyName: item,
                                message: "LastPurchaseDate should be datetime."
                            });
                        }
                        break;
                }
            });
        }
        return result;
    }
}

module.exports = {
    CustomerValidator
}