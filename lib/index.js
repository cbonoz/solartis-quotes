/**
 * Insurance Policy Quote CLI tool - powered by Solartis Rate API's.
 */

'use strict';
const inquirer = require('inquirer');
const travel = require('./travel');
const util = require('./helper/util');

console.log('Hi, Welcome to the Solartis Insurance CLI!');
console.log('Buy and browse insurance policies from the command line.');

var selectInsuranceQuestion = [
  {
    type: 'list',
    name: 'type',
    message: 'What insurance policy are you looking for?',
    choices: ['Travel Insurance', 'Renters Insurance (coming soon)', 'Professional Insurance (coming soon)'],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

inquirer.prompt(selectInsuranceQuestion).then(answers => {
  const rawType = answers.type;
  const type = rawType.split(' ')[0];
  switch(type) {
      case 'travel':
        travel.start();
        break;
      case 'renters':
      case 'professional':
      default:
        console.log(util.capitalize(type) + ' Policies Coming Soon');
  }
});