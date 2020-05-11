class Logger {
  static getInstance(store, prefix) {}

  constructor(store, prefix) {
    this.store = store;
    this.prefix = prefix;
  }

  log() {}

  warn() {}

  debug() {}

  error() {}
}

module.exports = Logger;
