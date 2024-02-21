# HDNET prettier-config

This packages defines the strict implementation of the HDNET Code Formatting Guidelines
from the HDNET Standard Recommendations
([HSR-15](https://wiki.hdnet.de/display/OPS/HSR-15%3A+Code-Formatierung)) as npm package
using [prettier](https://prettier.io)
through a [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations).


## Getting started

1. Install dependencies
```bash
$ npm i -D prettier @hdnet/prettier-config
```

2. Create your prettier config file (i.e. `prettier.config.js`) and extend from @hdnet/prettier-config:
```javascript
import hdnetPrettierConfig from '@hdnet/prettier-config'

export default {
  ...hdnetPrettierConfig,
}
```

## Notes
We explicitely parse .json files as JSON which differs from the behavior within prettier itself where certain files are assigned to JSON5 or JSONC.

## Contribute

To setup current node version, you can use [nvm](https://github.com/nvm-sh/nvm)
(in this project a [.nvmrc](./.nvmrc) file is maintained).
