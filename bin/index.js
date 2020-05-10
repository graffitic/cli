#!/usr/bin/env node

const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    message: 'please enter the name of project',
    name: 'project',
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
    console.warn('answers: ', answers);
  })
  .catch((error) => {
    console.warn('========================');
    console.warn(error);
    console.warn('========================');
  });
