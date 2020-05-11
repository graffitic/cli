const path = require('path');
const fs = require('fs');

function mkdir(target) {
  const status = fs.existsSync(target);

  if (status) return false;

  try {
    fs.mkdirSync(target);
    return true;
  } catch (error) {
    return false;
  }
}

function write(target, content) {
  try {
    fs.writeFileSync(target, content);
  } catch (error) {
    console.warn(error);
  }
}

const resolve = path.resolve;

module.exports = {
  mkdir,
  write,
  resolve,
};
