[![Build Status](https://travis-ci.org/caviarjs/sandbox-env-plugin.svg?branch=master)](https://travis-ci.org/caviarjs/sandbox-env-plugin)
[![Coverage](https://codecov.io/gh/caviarjs/sandbox-env-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/caviarjs/sandbox-env-plugin)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/caviarjs/sandbox-env-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/caviarjs/sandbox-env-plugin)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/@caviar/plugin-sandbox-env.svg)](http://badge.fury.io/js/@caviar/plugin-sandbox-env)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/@caviar/plugin-sandbox-env.svg)](https://www.npmjs.org/package/@caviar/plugin-sandbox-env)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/caviarjs/sandbox-env-plugin.svg)](https://david-dm.org/caviarjs/sandbox-env-plugin)
-->

# @caviar/sandbox-env-plugin

[Caviar](https://github.com/caviarjs/caviar) plugin to allow the sanbox to inherit extra environment variables from the current process

## Install

```sh
$ npm i @caviar/sandbox-env-plugin
```

## Usage

```js
const EnvPlugin = require('@caviar/sandbox-env-plugin')

module.exports = {
  caviar: {
    plugins: [
      // Allow sandbox to inherit `process.env.REDIS_HOST` of the parent process.
      new EnvPlugin(['REDIS_HOST'])
    ]
  }
}
```

## License

MIT
