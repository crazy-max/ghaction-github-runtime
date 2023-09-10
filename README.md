[![GitHub release](https://img.shields.io/github/release/crazy-max/ghaction-github-runtime.svg?style=flat-square)](https://github.com/crazy-max/ghaction-github-runtime/releases/latest)
[![GitHub marketplace](https://img.shields.io/badge/marketplace-github--runtime-blue?logo=github&style=flat-square)](https://github.com/marketplace/actions/github-runtime)
[![CI workflow](https://img.shields.io/github/actions/workflow/status/crazy-max/ghaction-github-runtime/ci.yml?branch=master&label=ci&logo=github&style=flat-square)](https://github.com/crazy-max/ghaction-github-runtime/actions?workflow=test)
[![Become a sponsor](https://img.shields.io/badge/sponsor-crazy--max-181717.svg?logo=github&style=flat-square)](https://github.com/sponsors/crazy-max)
[![Paypal Donate](https://img.shields.io/badge/donate-paypal-00457c.svg?logo=paypal&style=flat-square)](https://www.paypal.me/crazyws)

## About

GitHub Action to expose GitHub runtime to the workflow

___

* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Usage

```yaml
name: build

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      -
        name: Expose GitHub Runtime
        uses: crazy-max/ghaction-github-runtime@v3
      -
        name: Env
        run: |
          # ACTIONS_RUNTIME_TOKEN, ACTIONS_RUNTIME_URL should be exposed
          env|sort
```

## Contributing

Want to contribute? Awesome! The most basic way to show your support is to star
the project, or to raise issues. You can also support this project by [**becoming a sponsor on GitHub**](https://github.com/sponsors/crazy-max)
or by making a [PayPal donation](https://www.paypal.me/crazyws) to ensure this
journey continues indefinitely!

Thanks again for your support, it is much appreciated! :pray:

## License

MIT. See `LICENSE` for more details.
