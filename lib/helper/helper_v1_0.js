const util = require('../helper/util');

const Helper = module.exports = function (userName, token) {
  this.userName = userName;
  this.token = token
};

// Create a Leisure Rate API request object.
//  
// data {
// productCode: 86201, 
// planName: "Air Ticket Protector",
// planCode: 1, 
// departureDate: "06/25/2017", 
// returnDate: "06/31/2017", 
// depositDate: "06/25/2017", 
// destinationCountry: "France", 
// policyEffectiveDate: "06/25/2017", 
// rentalStartDate: "06/25/2017", 
// rentalEndDate: "06/30/2017", 
// rentalLimit: 3500,
// rentalCars: 1,
// tripCancellationCoverage: "With Trip Cancellation", 
// stateCode: "GA", 
// stateName: "Georgia", 
// travelerDOB: "02/14/1990", 
// travelCost: 2500
// }
Helper.prototype.createTravelRate = function (data) {
  return `{
              "ServiceRequestDetail": {
                "ServiceRequestVersion": "1.0",
                "ServiceResponseVersion": "1.0",
                "OwnerId": "15",
                "ResponseType": "JSON",
                "RegionCode": "US",
                "Token": "${this.token}",
                "UserName": "${this.userName}",
                "LanguageCode": "en"
              },
              "QuoteInformation": {
                "ProductID": "619",
                "ProductVerID": "706",
                "ProductNumber": "ILT",
                "ProductVerNumber": "1.0",
                "ProducerCode": "${data.productCode}",
                "OwnerId": "15",
                "PlanName": "${data.planName}",
                "PlanCode": "${data.planCode}",
                "DepartureDate": "${data.departureDate}",
                "ReturnDate": "${data.returnDate}",
                "DepositDate": "${data.depositDate}",
                "DestinationCountry": "${data.destinationCountry}",
                "PolicyEffectiveDate": "${data.policyEffectiveDate}",
                "RentalStartDate" : "${data.rentalStartDate}",
                "RentalEndDate" : "${data.rentalEndDate}",
                "RentalLimit" : "${data.rentalLimit}",
                "NumberOfRentalCars" : "${data.rentalCars}",
                "TripCancellationCoverage": "${data.tripCancellationCoverage}",
                "StateCode": "${data.stateCode}",
                "QuoteType": "New Business",
                "EventName": "InvokeRatingV2",
                "TravelerList": [
                  {
                    "TravelerDOB": "${data.travelerDOB}",
                    "TravelCost": "${data.travelCost}"
                  }
                ]
              }
            }` ;
};

// Create a customer api request object.
Helper.prototype.createTravelCustomer = function (data) {
  return `{
          "ServiceRequestDetail": {
            "ServiceRequestVersion": "1.0",
            "ServiceResponseVersion": "1.0",
            "OwnerId": "15",
            "ResponseType": "JSON",
            "RegionCode": "US",
            "Token": "${this.token}",
            "UserName": "${this.userName}",
            "LanguageCode": "en"
          },
          "CustomerInformation": {
            "ProductVerID": "706",
            "ProductID": "619",
            "ProductNumber": "ILT",
            "ProductVerNumber": "1.0",
            "ProducerCode": "86201",
            "OwnerId": "15",
            "PlanName": "${data.planName}",
            "PlanCode": "${data.planCode}",
            "PlanType": "Single Trip",
            "DepartureDate": "${data.departureDate}",
            "ReturnDate": "${data.returnDate}",
            "DepositDate": "${data.depositDate}", 
            "DestinationCountry": "${data.destinationCountry}",
            "PolicyEffectiveDate": "${data.policyEffectiveDate}",
            "StateCode": "${data.stateCode}",
            "StateName": "${data.stateName}",
            "QuoteType": "New Business",
            "EventName": "CreateCustomer",
            "TravelerList": [
              {
                "TravelerDOB": "${data.travelerDOB}",
                "TravelCost": "${data.travelCost}",
                "FirstName": "${util.capitalize(data.firstName)}",
                "LastName": "${util.capitalize(data.lastName)}",
                "AddressLine1": "${util.capitalize(data.homeAddress)}",
                "City": "${util.capitalize(data.homeCity)}",
                "State": "${data.stateName}",
                "StateCode": "${data.stateCode}",
                "Country": "United States",
                "Zipcode": "${data.homeZipcode}",
                "Phone": "${data.phone}",
                "Email": "${data.email}",
                "TravelerIndex": "1"
              }
            ]
          }
        }`;
};

Helper.prototype.purchasePolicy = function (data) {

  return `{
    "ServiceRequestDetail": {
      "ServiceRequestVersion": "1.0",
      "ServiceResponseVersion": "1.0",
      "OwnerId": "15",
      "ResponseType": "JSON",
      "RegionCode": "US",
      "Token": "${this.token}",
      "UserName": "${this.userName}",
      "LanguageCode": "en"
    },
    "PolicyInformation": {
      "ProductVerID": "706",
      "ProductID": "619",
      "ProductNumber": "ILT",
      "ProductVerNumber": "1.0",
      "ProducerCode": "86201",
      "OwnerId": "15",
      "CustomerNumber": "${data.customerNumber}",
      "RoleID": "5",
      "RoleName": "Agent",
      "RoleType": "User",
      "EventName": "Pay_Issue",
      "CardNumber": "${data.cardNumber}",
      "CVV": "${data.cardCvv}",
      "ExpiryMonth": "${data.cardExpireMonth}",
      "ExpiryYear": "${data.cardExpireYear}",
      "PayerName": "${data.firstName} ${data.lastName}",
      "PayerAddress1": "${data.homeAddress}",
      "PayerCity": "${data.homeCity}",
      "PayerState": "${data.stateName}",
      "PayerCountry": "US",
      "PayerZipcode": "${data.homeZipcode}",
      "PayerEmail": "${data.email}",
      "PayerPhone": "${data.phone}",
      "PaymentMethod": "${data.paymentMethod}",
      "CardType": "${data.cardType}"
    }
  }`;

}