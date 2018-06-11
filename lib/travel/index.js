const inquirer = require('inquirer');
const travelRate = require('../api/travel-rate')
const client = new travelRate.DefaultApi();
const util = require('./../helper/util');
const states = require('us-state-codes');
const helper_v1_0 = require('../helper/helper_v1_0');
const prettyjson = require('prettyjson');

const TOKEN = process.env.SOLARTIS_TOKEN;
const Helper = helper_v1_0;
const queryHelper = new Helper("travelagent", TOKEN);

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
            message: "What is your state of residence (enter two letter code)?",
            validate: function (val) {
                const res = states.sanitizeStateCode(val);
                if (res != null) {
                    return true;
                }
                return "Enter a valid 2 digit US state code"
            },
            filter: function (val) {
                return states.sanitizeStateCode(val);
            }
        },
        {
            type: 'input',
            name: 'travelerDOB',
            message: "What day is your birthday?",
            validate: util.checkDate,
            filter: function (val) {
                return util.convertDate(val);
            }
        },
        {
            type: 'input',
            name: 'travelCost',
            message: 'What is the cost of travel?',
            validate: util.isMoneyAmount,
            filter: util.moneyToNumber
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
            const body = queryHelper.createLeisureRate(answers);
            client.getRates(TOKEN, 'application/json', 'InvokeRatingV2', body, (err, data, res) => {
                if (err) {
                    console.error('err', err);
                } else {
                    res = JSON.parse(res.text);
                    console.log("\n" + res['RequestStatus']);
                    if (res['RequestStatus'])
                        delete res['RequestStatus'];
                    if (res['RuleInformationList'])
                        delete res['RuleInformationList'];
                    console.log(prettyjson.render(res));
                }
            });
        });
    }
}