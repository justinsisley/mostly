<p align="center">
  <img alt="mostly" src="https://image.flaticon.com/icons/svg/749/749464.svg" width="100">
</p>

<h3 align="center">
  mostly
</h3>

<p align="center">
  They mostly come at night; mostly.
  <br />
  <a href="https://expressjs.com/" target="_blank">Express</a> + <a href="https://reactjs.org/" target="_blank">React</a> + <a href="https://babeljs.io/" target="_blank">Babel</a> + <a href="https://webpack.js.org/" target="_blank">Webpack</a> + <a href="https://prettier.io/" target="_blank">Prettier</a> + <a href="https://eslint.org/" target="_blank">ESLint</a> + <a href="https://facebook.github.io/jest/" target="_blank">Jest</a> + <a href="https://github.com/GoogleChrome/puppeteer" target="_blank">Puppeteer</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/release/justinsisley/mostly.svg?style=for-the-badge" alt="GitHub release" /> <img src="https://img.shields.io/circleci/project/github/justinsisley/mostly.svg?style=for-the-badge" alt="CircleCI" /> <img src="https://img.shields.io/github/license/justinsisley/mostly.svg?style=for-the-badge" alt="license" />
</p>

---

__mostly__ is a full-stack web application starter kit built on [Node.js](https://nodejs.org/). It uses [Express](https://expressjs.com/) for the server and [React](https://reactjs.org/) for the user interface.

Its purpose is to serve as a lightweight, easy-to-comprehend starting point, with a focus on providing a great developer experience while helping you get high quality and maintainable apps deployed rapidly.

__Nothing is hidden, nothing is magical__, and all of the "plumbing" is accessible and relatively simple.

---

# Table of Contents

- [Features](#features)
- [Documentation](#documentation)
  - [Install](#install)
  - [Develop](#develop)
  - [Test](#test)
    - [Unit Tests](#unit-tests)
    - [Functional Tests](#functional-tests-api-endpoint-tests)
    - [End-to-end Tests](#end-to-end-tests-user-interface-tests)
    - [Test Modes and Options](#test-modes-and-options)
  - [Build](#build)
  - [Production](#production)
  - [Deployment](#deployment)
  - [Pre-commit Hook](#pre-commit-hook)
  - [Continuous Delivery](#continuous-delivery)
- [(in)Frequently Asked Questions](#faq)
- [Releases](https://github.com/justinsisley/mostly/releases)
- [Credits](#credits)

# Features

- __Uses a minimal set of UI development tools__ _(via React and CSS modules)_
- __Uses a familiar Node.js HTTP server library__ _(via Express)_
- __Lets you use the latest and greatest ECMAScript everywhere__ _(via Babel)_
- __Provides a fast development workflow__ _(via hot-reloading on the client and server)_
- __Helps you write unit, functional, and end-to-end tests with ease__ _(via Jest and Puppeteer)_
- __Keeps your code clean and consistent__ _(via Prettier and ESLint)_
- __Gives you simple dev, test, build, and deploy scripts__ _(via NPM and bash)_
- __Runs on Node.js v6+__ _(via Babel runtime)_

# Documentation

## Install

Clone the repository:

```bash
git clone --depth=1 https://github.com/justinsisley/mostly.git your-project-name
```

Initialize your own repository:

```bash
$ cd your-project-name
$ rm -rf .git && git init
```

Install dependencies:

```bash
$ npm install
```

## Develop

Run the application in development mode:

```bash
npm run dev
```

> __Note:__ The dev server runs on port 3320 by default. Feel free to change it in `scripts/config/webpack.dev.js`.

## Test

Run unit and functional tests:

```bash
npm test
```

> __Note__: Both test suites will run concurrently. End-to-end tests will __not__ be run.

### Unit Tests

Run unit tests:

```bash
npm run test:unit
```

> __Note__: Jest will run any file that matches the following pattern: `src/**/__tests__/unit.js`

### Functional Tests (API endpoint tests)

Run functional tests:

```bash
npm run test:func
```

> __Note__: Jest will run any file that matches the following pattern: `src/**/__tests__/func.js`

### End-to-end Tests (user interface tests)

Run end-to-end tests:

```bash
npm run test:e2e
```

> __Note__: Jest/Puppeteer will run any file that matches the following pattern: `src/**/__tests__/e2e.js`

### Test Modes and Options

Run a test suite in watch mode:

```bash
npm run test:unit -- --watch
# or
npm run test:func -- --watch
```

> __Note__: This option is simply passing the `watch` option directly to Jest. End-to-end tests do __not__ support the "watch" option.

Run the unit test suite and generate a coverage report:

```bash
npm run test:unit -- --coverage
```

> __Note__: Like `watch`, this option is passing the `coverage` option directly to Jest. Functional and end-to-end tests do __not__ support the "coverage" option.

## Build

Create a static build:

```bash
npm run build
```

> __Note:__ This script will use Babel and Webpack to compile code within the `src` directory into a `dist` directory.

## Production

Run the application in production mode:

```bash
npm start
```

> __Note:__ This script requires you to first create a build by running `npm run build`.

The production application will run on port _3325_ by default. If you'd like to run it on another port, use the `PORT` environment variable. For example:

```bash
PORT=8080 npm start
```

## Deployment

Deploy to [now.sh](https://zeit.co/now):

```bash
npm run deploy
```

> __Note:__ [now.sh](https://zeit.co/now) is one of the quickest and easiest ways to get your app deployed. Regardless, like every other part of this starter kit, I encourage you to modify `deploy.sh` to suit your needs.

## Pre-commit Hook

This starter kit is pre-configured with a [git pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), which will automatically clean up your staged code using [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/), then execute your unit and functional tests. This is done using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

You can modify the pre-commit workflow using the `.lintstagedrc` and `scripts/precommit.sh` files.

## Continuous Delivery

[CircleCI](https://circleci.com/) was chosen as the continuous integration provider because it's one of the more popular CI's in use across GitHub and it offers a free plan.

No matter which CI you decide to use in the long run, the configuration is code-based, which should make it relatively easy to migrate if and when you decide to use another provider.

For information about setting up your repository in CircleCI, [sign up for a free account](https://circleci.com/signup/), then check out the [documentation](https://circleci.com/docs/2.0/).

Once you've set up your repository in CircleCI, you'll need to [get a token from now.sh](https://zeit.co/account/tokens) in order to automate your deployment. Once you've got your token, add it to your CircleCI project as an environment variable named `NOW_TOKEN`.

Now, when you push new commits, CircleCI will run the `lint`, `test:unit`, `test:func`, and `test:e2e` scripts, then deploy your app to __now.sh__ with zero downtime using the `deploy` script.

It'll be up to you to configure a custom domain, promote from staging to production, etc., but this configuration gets you most of the way there; mostly.

# FAQ

### What's with the name?

This project is the successor of another project, [__clear__](https://github.com/justinsisley/clear). I considered making this the `v2` of __clear__ but decided that because __mostly__ handles client-side web application development as well as server development, it would not be in line with __clear__'s [raison d'être](https://www.merriam-webster.com/dictionary/raison%20d'%C3%AAtre).

It's still "clear", in this context meaning "straightforward", but there's some additional complexity, therefore it's __mostly__ clear.

I told you [at the start of this](#features) that there's no magic, so try not to be too disappointed.

### I don't get the tagline.

That's not a question, but ok. It's a line from the movie [Aliens](https://www.youtube.com/watch?v=B436avtEXzs) and was made humorous by [South Park](https://en.wikipedia.org/wiki/Cat_Orgy).

### Why are you promoting now.sh and CircleCI? Are you getting paid?

No. I have no affiliation with either of those companies. In fact, at the time of first publishing this project, they're both new to me.

__Bottom line:__ they're both free to use until you need to scale, and they're both very easy to work with. That puts them in perfect alignment with the purpose of this project.

### Why are you using Puppeteer instead of Nightwatch.js, TestCafe, Cypress, etc.?

I've used several other end-to-end testing frameworks, and I've used them on one-person "teams", in small and medium-sized startups, and in large engineering organizations. In my experience, I've seen several themes repeat themselves:

- Adding another test framework and/or assertion library does __not__ lend itself to increased velocity or a better developer experience.
- Choosing a single assertion library for all types of tests, if possible, leads to higher-quality testing, as teams build cohesive expertise over time.
- If tests aren't easy to write, they tend to be avoided*.
- If tests are brittle, they tend to be avoided*.

\*__Avoided__, in this context, means not written, not maintained, not trusted, not run regularly, or any combination thereof.

Due to these experiences and observations, I've become a fan of __Jest__, as it contains the test runner, the assertion library, and the code coverage utility all in one easy-to-use package.

I've also become a fan of __Puppeteer__, especially when combined with __jest-puppeteer__, as it allows me to easily automate Chrome while writing the exact same style of assertions I use for my unit and functional tests.

Is __Puppeteer__ perfect? Of course not. For one, it's built on Chrome/Chromium, so you're not getting multi-browser testing like some other libraries. Nevertheless, the API is straightforward and easy-to-use, and when combined with __jest-puppeteer__, it creates a good enough developer experience that I end up writing a more complete end-to-end test suite, which ultimately boils down to a more trustworthy codebase and a more reliable product being delivered to the end user.

### What if there's a better, simpler library out there? Are you willing to switch to it?

Absolutely. It's quite likely that there are better libraries than what this project is using, and if that's the case, please open an [issue](https://github.com/justinsisley/mostly/issues), or better yet, a [PR](https://github.com/justinsisley/mostly/pulls).

If your suggestion truly improves and/or simplifies this project, there's a strong guarantee it will make the cut.

### Why isn't there a CLI? Everything should have a CLI.

For this project, I just don't think it's necessary. The [install steps](#install) are relatively simple, and three shell commands get you the most up-to-date starter kit checked out in a brand new repository.

# Credits
<div>Icon made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>