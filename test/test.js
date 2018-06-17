const sd = require('sugar-date');
const prettyjson = require('prettyjson');
const util = require('../lib/helper/util');
// console.log(sd)

const helper = require('../lib/helper/');
const travelRate = require('./../lib/api/travel-rate');
const travelCustomer = require('./../lib/api/travel-customer');
const travelPurchase = require('./../lib/api/travel-purchase');

// var countries = require('country-list')();
// console.log(JSON.stringify(countries.getNames()))
// const res = util.isCountry('United States')
// console.log(res)

// const alt = util.getStates('US')
// console.log(alt)

// var states = require('us-state-codes');
// const res = states.sanitizeStateCode('asdfsadf')
// console.log(res);

// const TOKEN = process.env.SOLARTIS_TOKEN;

// const travelRate = require('./../lib/api/travel-rate');
// const Helper = require('./../lib/helper/helper_v1_0')
// const helper = new Helper('travelagent', TOKEN)

// const data = {
//     productCode: 86201, 
//     planName: "Air Ticket Protector",
//     planCode: 1, 
//     departureDate: "06/25/2017", 
//     returnDate: "06/31/2017", 
//     depositDate: "06/25/2017", 
//     destinationCountry: "France", 
//     policyEffectiveDate: "06/25/2017", 
//     rentalStartDate: "06/25/2017", 
//     rentalEndDate: "06/30/2017", 
//     rentalLimit: 3500,
//     rentalCars: 1,
//     tripCancellationCoverage: "With Trip Cancellation", 
//     stateCode: "GA", 
//     stateName: "Georgia", 
//     travelerDOB: "02/14/1990", 
//     travelCost: 2500
// }

// const body = helper.createTravelRate(data);
// const client = new travelRate.DefaultApi();
// // travelRate.ApiClient.DefaultApi.getRates
// client.getRates(TOKEN, 'application/json', 'InvokeRatingV2', body, (err, data, res) => {
//     if (err) {
//         console.error('err', err);
//     } else {
//         // console.log('travel data', res.text);
//         res = JSON.parse(res.text);
//         console.log(res['RequestStatus'])
//         if (res['RequestStatus'])
//             delete res['RequestStatus'];
//         if (res['RuleInformationList'])
//             delete res['RuleInformationList'];
//         console.log(prettyjson.render(res));
//     }
// });

const body = `{
    "ServiceRequestDetail": {
      "ServiceRequestVersion": "1.0",
      "ServiceResponseVersion": "1.0",
      "OwnerId": "15",
      "ResponseType": "JSON",
      "RegionCode": "US",
      "Token": "${process.env.SOLARTIS_TOKEN}",
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
      "DepartureDate": "6/18/2018",
      "ReturnDate": "6/29/2018",
      "DepositDate": "6/18/2018",
      "DestinationCountry": "United States",
      "PolicyEffectiveDate": "6/18/2018",
      "StateCode": "GA",
      "StateName": "Georgia",
      "QuoteType": "New Business",
      "EventName": "CreateCustomer",
      "TravelerList": [
        {
          "TravelerDOB": "6/17/1993",
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

  const body2 = `{
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

  const body3=`{
    "ServiceRequestDetail": {
      "ServiceRequestVersion": "1.0",
      "ServiceResponseVersion": "1.0",
      "OwnerId": "15",
      "ResponseType": "JSON",
      "RegionCode": "US",
      "Token": "${process.env.SOLARTIS_TOKEN}",
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
      "DepartureDate": "6/18/2018",
      "ReturnDate": "6/22/2018",
      "DepositDate": "6/18/2018",
      "DestinationCountry": "United States",
      "PolicyEffectiveDate": "6/18/2018",
      "StateCode": "MA",
      "StateName": "Massachusetts",
      "QuoteType": "New Business",
      "EventName": "CreateCustomer",
      "TravelerList": [
        {
          "TravelerDOB": "6/17/1993",
          "TravelCost": "25000",
          "FirstName": "Chris",
          "LastName": "B",
          "AddressLine1": "7509 Rio",
          "City": "Sac",
          "State": "Massachusetts",
          "StateCode": "MA",
          "Country": "United States",
          "Zipcode": "95832",
          "Phone": "5553334444",
          "Email": "test@test.com",
          "TravelerIndex": "1"
        }
      ]
    }
  }`;

  var client = new travelCustomer.DefaultApi();
  client.createcustomer(helper.token, 'application/json', 'CreateCustomer', body3, 
    (err, data, res) => {
        console.log(res.text);
    }
);


