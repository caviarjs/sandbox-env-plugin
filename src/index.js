module.exports = class EnvPlugin {
  constructor (keys) {
    this._allowedKeys = keys
  }

  get sandbox () {
    return true
  }

  apply (lifecycle) {
    lifecycle.hooks.sandboxEnvironment.tap('EnvPlugin', sandbox => {
      this._allowedKeys.forEach(key => {
        sandbox.inheritEnv(key)
      })
    })
  }
}
