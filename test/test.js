const sd = require('sugar-date');
const prettyjson = require('prettyjson');
const util = require('../lib/helper/util');
// console.log(sd)

var countries = require('country-list')();
console.log(JSON.stringify(countries.getNames()))


const res = util.isCountry('United States')
console.log(res)

// const alt = util.getStates('US')
// console.log(alt)

// var states = require('us-state-codes');
// const res = states.sanitizeStateCode('asdfsadf')
// console.log(res);

// const TOKEN = process.env.SOLARTIS_TOKEN;

// const travelRate = require('./../lib/api/travel-rate');
// const Helper = require('./../lib/helper/helper_v1_0')
// const queryHelper = new Helper('travelagent', TOKEN)

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

// const body = queryHelper.createLeisureRate(data);
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