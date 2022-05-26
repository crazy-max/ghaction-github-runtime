[![GitHub release](https://img.shields.io/github/release/crazy-max/ghaction-github-runtime.svg?style=flat-square)](https://github.com/crazy-max/ghaction-github-runtime/releases/latest)
[![GitHub marketplace](https://img.shields.io/badge/marketplace-github--runtime-blue?logo=github&style=flat-square)](https://github.com/marketplace/actions/github-runtime)
[![CI workflow](https://img.shields.io/github/workflow/status/crazy-max/ghaction-dockerhub-mirror/ci?label=ci&logo=github&style=flat-square)](https://github.com/crazy-max/ghaction-dockerhub-mirror/actions?workflow=test)
[![Become a sponsor](https://img.shields.io/badge/sponsor-crazy--max-181717.svg?logo=github&style=flat-square)](https://github.com/sponsors/crazy-max)
[![Paypal Donate](https://img.shields.io/badge/donate-paypal-00457c.svg?logo=paypal&style=flat-square)](https://www.paypal.me/crazyws)

## About

GitHub Action to expose GitHub runtime to the workflow

If you are interested, [check out](https://git.io/Je09Y) my other :octocat: GitHub Actions!

___

* [Usage](#usage)
* [Keep up-to-date with GitHub Dependabot](#keep-up-to-date-with-github-dependabot)
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
        uses: crazy-max/ghaction-github-runtime@v1
      -
        name: Env
        run: |
          # ACTIONS_RUNTIME_TOKEN, ACTIONS_RUNTIME_URL should be exposed
          env|sort
```

## Keep up-to-date with GitHub Dependabot

Since [Dependabot](https://docs.github.com/en/github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot)
has [native GitHub Actions support](https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates#package-ecosystem),
to enable it on your GitHub repo all you need to do is add the `.github/dependabot.yml` file:

```yaml
version: 2
updates:
  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
```

## Contributing

Want to contribute? Awesome! The most basic way to show your support is to star the project, or to raise issues. If
you want to open a pull request, please read the [contributing guidelines](.github/CONTRIBUTING.md).

You can also support this project by [**becoming a sponsor on GitHub**](https://github.com/sponsors/crazy-max) or by
making a [Paypal donation](https://www.paypal.me/crazyws) to ensure this journey continues indefinitely!

Thanks again for your support, it is much appreciated! :pray:

## License

MIT. See `LICENSE` for more details.
