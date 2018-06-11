const Helper = module.exports = function (userName, token) {
    this.userName = userName;
    this.token = token
  };
  
  Helper.prototype.createLeisureRate = function (data) {
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
  
  Helper.prototype.createLeisureCustomer = function (data) {
    return `{
          "ServiceRequestDetail": {
            "ServiceRequestVersion": "1.0",
            "ServiceResponseVersion": "1.0",
            "OwnerId": "15",
            "ResponseType": "JSON",
            "RegionCode": "US",
            "Token": "iMgdpnp436QjuYQ2tn9HU+SgJDsyFW8kDSoLHGwadQKpl/wr4yKoVMjkSfJB/FKqjFqrLmebBUqmHM/dVAMv+DDPaXOt/GY7mjWZXGT2z0ArRvyiojuQz8LrhVYihPok4SNftJWQa7rNrqjh5PWJcVbnbLVHo4e9WNp/4X9Sai/5LrKZ1J99H71yIi/9rXsAKhCk5lGzFaO3SXLwJluxpsUM+5MiljDi4NFM+/K0KPeUOuL8R2FZD9RobXBVvR7xPdH1oZ71jBgOmg59/75ugVgJ/35PRXWc1Emi9SPqQHHEmsD4AoH2xj45UGMY3hjx0sz/uABSHKxNwA8DwPTBS7jaN2XqKLCayPsSWHVH04XW+ZeDaw1iRLb/0euQfXT97fiPQgPQSjtDvxif6cFXZQX/BHYIcAUjZtdcuv098quieEPaIWri6DUFEIzf/uRM7R4itGHIU7/B0cMwwQNFhxjtMVAgSBq7Kw4a8kf5s+2XOip5XV3KeT5U4u8HX6/xdKxhpP8gLng6PoGj0MEnSugWYicqO81QJH2UISAaI3iDgNxzCSFmsAChwURz5g/RRmHqLknkxHh4lvFfjQGlTIfdNwW+CwHbg0EQFt/c/4M6CofYIAQVzElcVRih/j88U7EqGr8v1mrTPel1sBXl+auuXSlODNRoeDVogcqA1Fr9504oM1kbCEmrVIqjUxUmK9a8CWsZEjIYiNuY0KncVKuuXSlODNRoeDVogcqA1Foa9LkTsAlC3ItSy+gbt0NdLaJdXbWS8ClBkbddTRCbeWRNMZNDq/vS1JTb8FKCl5OsniK5MZQnMbZdqNHlqbv2WOw2j+jUU0BThnDgEX6XEjSt7SoS1Xd6+F4DyPRZsQbD7XGhOWwTgbKALHDL6LviA3K4dHjVKHv1xOd8L284LsWKpOWqHf8xYqRIiCHZgQEtSRZCdfQPbklkXKGNaTjD",
            "UserName": "travelagent",
            "LanguageCode": "en"
          },
          "CustomerInformation": {
            "ProductVerID": "706",
            "ProductID": "619",
            "ProductNumber": "ILT",
            "ProductVerNumber": "1.0",
            "ProducerCode": "86201",
            "OwnerId": "15",
            "PlanName": "Air Ticket Protector",
            "PlanCode": "1",
            "PlanType": "Single Trip",
            "DepartureDate": "11/01/2020",
            "ReturnDate": "11/25/2020",
            "DepositDate": "05/31/2017",
            "DestinationCountry": "France",
            "PolicyEffectiveDate": "11/01/2020",
            "StateCode": "GA",
            "StateName": "Georgia",
            "QuoteType": "New Business",
            "EventName": "CreateCustomer",
            "TravelerList": [
              {
                "TravelerDOB": "02/14/1990",
                "TravelCost": "2500",
                "FirstName": "John",
                "LastName": "Doe",
                "AddressLine1": "399 park avenue",
                "City": "Atlanta",
                "State": "Georgia",
                "StateCode": "GA",
                "Country": "United States",
                "Zipcode": "30301",
                "Phone": "4045555512",
                "Email": "test@solartis.net",
                "TravelerIndex": "1"
              }
            ]
          }
        }`;
  };