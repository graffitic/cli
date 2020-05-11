#!/usr/bin/env node

const { program } = require('commander');
const config = require('../package.json');

const Graffitic = require('../src');

program
  .command('init')
  .description('initialize the project by template')
  .option('--template', 'specify a template for the created project')
  .action(() => {
    Graffitic.init();
  });

program
  .command('info')
  .description('get information about cli')
  .action(() => {
    console.warn("cli's info");
  });

program.parse(process.argv);
