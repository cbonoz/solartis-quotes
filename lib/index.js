/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
const inquirer = require('inquirer');
const travel = require('./travel');

console.log('Hi, welcome to Solaris Insurance CLI');

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