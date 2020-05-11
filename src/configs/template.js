const { DefaultPackageVersion } = require('./env');

function getPackageJSON(library, configuration) {
  return Object.assign({}, configuration, {
    version: '0.0.1',
    author: '',
    main: 'index.js',
    scripts: {},
    dependencies: {
      library: DefaultPackageVersion[library],
    },
  });
}

module.exports = {
  getPackageJSON,
};
