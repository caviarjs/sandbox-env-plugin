[![Build Status](https://travis-ci.org/kaelzhang/caviar-plugin-sandbox-env.svg?branch=master)](https://travis-ci.org/kaelzhang/caviar-plugin-sandbox-env)
[![Coverage](https://codecov.io/gh/kaelzhang/caviar-plugin-sandbox-env/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/caviar-plugin-sandbox-env)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/caviar-plugin-sandbox-env?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/caviar-plugin-sandbox-env)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/@caviar/plugin-sandbox-env.svg)](http://badge.fury.io/js/@caviar/plugin-sandbox-env)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/@caviar/plugin-sandbox-env.svg)](https://www.npmjs.org/package/@caviar/plugin-sandbox-env)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/caviar-plugin-sandbox-env.svg)](https://david-dm.org/kaelzhang/caviar-plugin-sandbox-env)
-->

# @caviar/plugin-sandbox-env

[Caviar](https://github.com/kaelzhang/caviar) plugin to allow the sanbox to inherit extra environment variables from the current process

## Install

```sh
$ npm i @caviar/plugin-sandbox-env
```

## Usage

```js
const EnvPlugin = require('@caviar/plugin-sandbox-env')

module.exports = {
  plugins: [
    // Allow sandbox to inherit `process.env.REDIS_HOST` of the parent process.
    new EnvPlugin(['REDIS_HOST'])
  ]
}
```

## License

MIT
