class AddressValidator {
  constructor() {}

  ValidatorAddress(address) {
    let result = [];
    if (!address) return result;
    let allProperty = Object.getOwnPropertyNames(address);
    if (allProperty.length > 0) {
      allProperty.forEach((item) => {
        switch (item) {
          case "_addressLine":
            if (!address._addressLine)
              result.push({
                propertyName: item,
                message: "AddressLine is required.",
              });
            else if (address._addressLine.length > 100)
              result.push({
                propertyName: item,
                message: "AddressLine should maximum 100 lenght.",
              });
            break;
          case "_addressLine2":
            if (address._addressLine2)
              if (address._addressLine2.length > 100)
                result.push({
                  propertyName: item,
                  message: "AddressLine2 should maximum 100 lenght.",
                });
            break;
          case "_typeAddress":
            if (!address._typeAddress)
              result.push({
                propertyName: item,
                message: "TypeAddress is required.",
              });
            else if ([1, 2].indexOf(address._typeAddress) === -1)
              result.push({
                propertyName: item,
                message: "TypeAddress should be 1 or 2.",
              });
            break;
          case "_city":
            if (!address._city)
              result.push({ propertyName: item, message: "City is required." });
            else if (address._city.length > 50)
              result.push({
                propertyName: item,
                message: "City should maximum 50 lenght.",
              });
            break;
          case "_postalCode":
            if (!address._postalCode)
              result.push({
                propertyName: item,
                message: "PostalCode is required.",
              });
            else if (address._postalCode.length > 6)
              result.push({
                propertyName: item,
                message: "PostalCode should maximum 6 lenght.",
              });
            break;
          case "_state":
            if (!address._state)
              result.push({
                propertyName: item,
                message: "State is required.",
              });
            else if (address._state.length > 20)
              result.push({
                propertyName: item,
                message: "State should maximum 6 lenght.",
              });
            break;
          case "_country":
            if (!address._country)
              result.push({
                propertyName: item,
                message: "Country is required.",
              });
            else if (
              ["United States", "Canada"].indexOf(address._country) === -1
            )
              result.push({
                propertyName: item,
                message: "Country should be United States or Canada.",
              });
            break;
        }
      });
    }
    return result;
  }
}

module.exports = {
    AddressValidator
}