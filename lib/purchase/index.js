const inquirer = require('inquirer');
const util = require('./../helper/util');
const prettyjson = require('prettyjson');

const helper = require('../helper');

const travelPurchase = require('../api/travel-purchase');
const purchaseClient = new travelPurchase.DefaultApi();

const cardTypes = [
    'Credit Card'
    // 'Debit Card'
]

const paymentMethods = [
    'VISA',
    'Master Card',
    'Discover',
    'American Express'
]

module.exports = {
    /*
     * cardNumber, cardCvv, cardExpireMonth, cardExpireYear, cardType, paymentMethod
     */
    purchaseQuestions: [
        util.createNumericInputQuestion('cardNumber'),
        util.createNumericInputQuestion('cardCvv', 9999),
        util.createNumericInputQuestion('cardExpireMonth', 12),
        util.createNumericInputQuestion('cardExpireYear'),
        {
            type: 'list',
            name: 'paymentMethod',
            message: 'Select payment method:',
            choices: paymentMethods,
        },
        {
            type: 'list',
            name: 'cardType',
            message: 'Select card type:',
            choices: cardTypes,
        },
        {
            type: 'confirm',
            name: 'submitPurchase',
            message: 'Check the information above. Are you ready to submit? Or say no to re-enter payment information:',
            default: true,
        }
    ],
    start: function(customerTravelInfo) {
        const questions = this.purchaseQuestions;
        inquirer.prompt(questions).then(answers => {
            if (!answers.submitPurchase) {
                this.start(customerTravelInfo);
                return;
            }

            answers = Object.assign(answers, customerTravelInfo);

            const request = helper.purchasePolicy(answers);
            purchaseClient.policyissuance(helper.token, 'application/json', 'Pay_Issue', request,
                (err, data, res) => {
                    if (err) {
                        console.error('Error issuing policy', err);
                        console.log('Enter card info again:');
                        this.start(customerTravelInfo);
                        return;
                    }
                    // console.log('Policy Request Information', request['PolicyInformation']);

                    res = JSON.parse(res.text);
                    if (res['RequestStatus'] == 'FAILED') {
                        console.error('Error while attempting to purchase policy');
                        console.log(prettyjson.render(res['messageDetail']['MessageList']));
                        console.log('\nTry entering info again: ');
                        this.start(customerTravelInfo);
                        return;
                    } else {
                        console.log('SUCCESS, purchased policy below:');
                        console.log(prettyjson.render(res));
                    }
                }
            );

        });
    }
}