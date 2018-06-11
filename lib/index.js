/**
 * Insurance Policy Quote CLI tool - powered by Solartis Rate API's.
 */

'use strict';
const inquirer = require('inquirer');
const travel = require('./travel');

console.log('Hi, welcome to Solartis Insurance CLI');

var selectTypeQuestion = [
  {
    type: 'list',
    name: 'type',
    message: 'What insurance policy are you looking for?',
    choices: ['Travel', 'Renters (coming soon)', 'Professional (coming soon)'],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

inquirer.prompt(selectTypeQuestion).then(answers => {
  const type = answers.type;
  switch(type.split(' ')[0]) {
      case 'travel':
        travel.start();
        break;
      case 'renters':
      case 'professional':
      default:
        console.log('Quote feature Coming Soon')
  }
//   console.log(JSON.stringify(answers, null, '  '));
});