module.exports = class EnvPlugin {
  constructor (keys) {
    this._allowedKeys = keys
  }

  get sandbox () {
    return true
  }

  apply (getHooks) {
    if (process.env.CAVIAR_SANDBOX === 'outer') {
      getHooks().sandboxEnvironment.tap('EnvPlugin', ({inheritEnv}) => {
        this._allowedKeys.forEach(key => {
          inheritEnv(key)
        })
      })
    }
  }
}
