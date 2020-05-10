#!/usr/bin/env node

const { program } = require('commander');
const config = require('../package.json');

program
  .command('init [project]')
  .description('initialize the project by template')
  .option('--template', 'specify a template for the created project')
  .action((project) => {
    console.warn(project);
  });

program
  .command('info')
  .description('get information about cli')
  .action(() => {
    console.warn("cli's info");
  });

program.parse(process.argv);
