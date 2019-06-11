module.exports = class EnvPlugin {
  constructor (keys) {
    this._allowedKeys = keys
  }

  get sandbox () {
    return true
  }

  apply (getHooks) {
    getHooks().sandboxEnvironment.tap('EnvPlugin', ({inheritEnv}) => {
      this._allowedKeys.forEach(key => {
        inheritEnv(key)
      })
    })
  }
}
