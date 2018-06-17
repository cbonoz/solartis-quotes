const inquirer = require('inquirer');
const travelRate = require('../api/travel-rate')
const util = require('./../helper/util');
const states = require('us-state-codes');
const prettyjson = require('prettyjson');

const helper = require('../helper');

const client = new travelRate.DefaultApi();

const customer = require('../customer');
const purchase = require('../purchase');

const plans = {
    "Air Ticket Protector": 1,
    "Classic Plus": 2,
    "Premier": 3,
    "Premier Annual": 4,
    "Basic Annual": 9,
    "Medical Only Annual": 10,
    "Renter's Collision": 11
}

const cancelOptions = [
    "With Trip Cancellation",
    "Trip Cancellation for Any Reason"
]

module.exports = {
    questions: [
        {
            type: 'list',
            name: 'planName',
            message: 'What travel insurance plan?',
            choices: Object.keys(plans),
        },
        {
            type: 'list',
            name: 'tripCancellationCoverage',
            message: 'What kind of trip cancellation do you need?',
            choices: cancelOptions,
        },
        {
            type: 'input',
            name: 'departureDate',
            message: "What day are you leaving?",
            validate: util.checkDate,
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'returnDate',
            message: "What day are you returning?",
            validate: util.checkDate,
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'destinationCountry',
            message: "Which country are you travelling to?",
            default: 'United States',
            validate: util.isCountry,
            filter: function (val) {
                return util.capitalize(val);
            }
        },
        {
            type: 'confirm',
            name: 'needsCar',
            message: 'Will you need a car?',
            default: false
        },
        {
            type: 'input',
            name: 'rentalCars',
            message: 'How many cars will you need?',
            when: function (answers) {
                return answers.needsCar;
            },
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number
        },
        {
            type: 'input',
            name: 'rentalLimit',
            message: 'What is the rental limit (value of vehicle(s)?',
            when: function (answers) {
                return answers.needsCar;
            },
            validate: util.isMoneyAmount,
            filter: util.moneyToNumber
        },
        {
            type: 'input',
            name: 'rentalStartDate',
            message: "What day will you first rent the vehicles?",
            validate: util.checkDate,
            when: function (answers) {
                return answers.needsCar;
            },
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'rentalEndDate',
            message: "What day will you return the vehicles?",
            when: function (answers) {
                return answers.needsCar;
            },
            validate: util.checkDate,
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'stateCode',
            message: "What is your US state of residence (enter two letter code)?",
            validate: function (val) {
                const res = states.sanitizeStateCode(val);
                if (res != null) {
                    return true;
                }
                return "Only US residents supported right now, Enter a valid 2 digit US state code"
            },
            filter: function (val) {
                return states.sanitizeStateCode(val);
            }
        },
        {
            type: 'input',
            name: 'travelerDOB',
            message: "What is your date of birth?",
            validate: util.checkDate,
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'travelCost',
            message: 'What is the cost of travel (in USD)?',
            validate: util.isMoneyAmount,
            filter: util.moneyToNumber
        },

    ],
    purchaseQuestion: [
        {
            type: 'confirm',
            name: 'willPurchase',
            message: 'Would you like to purchase this policy?',
            default: false
        },
        {
            type: 'confirm',
            name: 'hasCustomerNumber',
            when: function (answers) {
                return answers.willPurchase;
            },
            message: 'Do you have a customer reference number?',
            default: false
        },
        {
            type: 'input',
            name: 'customerNumber',
            when: function (answers) {
                return answers.hasCustomerNumber;
            },
            message: 'Enter your customer reference number',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number
        }
    ],
    start: function () {
        const questions = this.questions;
        inquirer.prompt(questions).then(answers => {
            answers.planCode = plans[answers.planName];
            answers.policyEffectiveDate = answers.departureDate;
            answers.depositDate = answers.departureDate;
            answers.productCode = 86201;
            if (!answers.needsCar) {
                answers.rentalStartDate = "06/25/2017";
                answers.rentalEndDate = "06/30/2017";
                answers.rentalLimit = 3500;
                answers.rentalCars = 0;
            }
            answers.stateName = states.getStateNameByStateCode(answers.stateCode);
            // console.log('answers', answers)
            const body = helper.createTravelRate(answers);
            client.getRates(helper.token, 'application/json', 'InvokeRatingV2', body, (err, data, res) => {
                if (err) {
                    console.error('Error requesting policy', err);
                    return;
                }

                const statusCode = res.statusCode;
                if (statusCode == 203) {
                    console.error('Bad token in request');
                    return;
                }

                // Successful
                res = JSON.parse(res.text);
                console.log("\n" + res['RequestStatus']);
                if (res['RequestStatus'])
                    delete res['RequestStatus'];
                if (res['RuleInformationList'])
                    delete res['RuleInformationList'];
                console.log(prettyjson.render(res));

                inquirer.prompt(this.purchaseQuestion).then(purchaseData => {
                    const willPurchase = purchaseData.willPurchase;
                    const hasCustomerNumber = purchaseData.hasCustomerNumber;
                    if (willPurchase) {
                        answers = Object.assign(answers, purchaseData);
                        if (!hasCustomerNumber) {
                            // Need to create customer.
                            customer.start(answers);
                        } else {
                            // Start purchase process with existing customerNumber.
                            purchase.start(answers);
                        }
                    } else {
                        console.log(util.doneMessage);
                    }
                });
            });
        });
    }
}