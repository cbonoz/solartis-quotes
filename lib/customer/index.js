const inquirer = require('inquirer');
const util = require('./../helper/util');
const prettyjson = require('prettyjson');

const helper = require('../helper');
const purchase = require('../purchase');
const customerCreate = require('../api/travel-customer');
const customerClient = new customerCreate.DefaultApi();

// {
//     "FirstName": "${data.firstName}",
//     "LastName": "${data.lastName}",
//     "AddressLine1": "${data.homeAddress}",
//     "City": "${data.homeCity}",
//     "StateCode": "${data.homeStateCode}",
//     "Zipcode": "${data.homeZipcode}",
//     "Phone": "${data.phone}",
//     "Email": "${data.email}",
//     "TravelerIndex": "1"
//   }
module.exports = {
    customerQuestions: [
        // TODO: add validation.
        util.createBasicInputQuestion("firstName"),
        util.createBasicInputQuestion("lastName"),
        util.createBasicInputQuestion("homeCity"),
        util.createBasicInputQuestion("homeZipcode"),
        util.createBasicInputQuestion("homeAddress"),
        util.createNumericInputQuestion("phone"),
        util.createBasicInputQuestion("email")
    ],
    start: function(travelInfo) {
        const questions = this.customerQuestions;
        inquirer.prompt(questions).then(answers => {

            answers = Object.assign(answers, travelInfo);

            const request = helper.createTravelCustomer(answers);
            customerClient.createcustomer(helper.token, 'application/json', 'CreateCustomer', request,
                (err, data, res)  => {
                    if (err) {
                        console.error('Error creating customer', err);
                        return;
                    }
                   
                    // console.log('create customer request', request);
                    res = JSON.parse(res.text);
                    console.log('SUCCESS, here is your customer number (please record for future use):');
                    answers.customerNumber = res['CustomerInformation']['CustomerReferenceNumber'];
                    console.log('#: ' + answers.customerNumber);
                    // console.log(prettyjson.render(res));
                    console.log('Now we can complete the purchase process');
                    purchase.start(answers);
                }
            );
        });
    }
}