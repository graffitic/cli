const inquirer = require('inquirer');

const Template = require('../configs/template');
const FileUtils = require('../utils/file-utils');

const questions = [
  {
    type: 'input',
    message: 'please enter the name of project',
    name: 'name',
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
    name: 'library',
    choices: ['blockly', 'scratch'],
  },
  {
    type: 'input',
    message: 'please write the description of project',
    name: 'description',
  },
];

module.exports = function () {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { name, library, description } = answers;
      const t = Object.assign({}, { name, description });

      const folder = FileUtils.resolve(__dirname, name);
      const status = FileUtils.mkdir(folder);

      if (status) {
        const json = Template.getPackageJSON(library, t);

        FileUtils.write(
          FileUtils.resolve(folder, 'package.json'),
          JSON.stringify(json),
        );
      }
    })
    .catch((error) => {
      console.warn('========================');
      console.warn(error);
      console.warn('========================');
    });
};
