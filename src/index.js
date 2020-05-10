#!/usr/bin/env node

const inquirer = require('inquirer');
const Shape = require('./shape');

const questions = [
  {
    type: 'input',
    message: 'please enter the name of project',
    name: 'project',
    validate: function (value) {
      if (!value) {
        return 'please enter the name !';
      }

      return true;
    },
  },
  {
    type: 'list',
    message: 'please choose your configuration about blockly',
    name: 'unit',
    choices: ['blockly', 'scratch'],
  },
  {
    type: 'input',
    message: 'please write the description of project',
    name: 'description',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    Shape.run(answers);
  })
  .catch((error) => {
    console.warn('========================');
    console.warn(error);
    console.warn('========================');
  });
