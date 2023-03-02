# README

This README would normally document whatever steps are necessary to get your
application up and running.

## What is this repository for?

-   Quick summary
-   Version
-   [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

## How do I get set up?

-   Summary of set up
-   Configuration

### **Dependencies**

Install dependencies

```
yarn
```

To run development build

```
yarn dev
```

To run the styleguide

```
yarn dev:styleguide
```

To watch for development changes

```
yarn watch
```

To run production build

```
yarn build
```

To build a static version of the styleguide
([Storybook](https://storybook.js.org))

```
yarn build:styleguide
```

To run a [Chromatic](https://www.chromatic.com) styleguide build (visual
regression testing)

```
yarn chromatic --project-token=[your-token] --build-script-name=build:styleguide
```

-   Database configuration

### **Running tests**

#### End to end testing

[Cypress](https://docs.cypress.io/) is used for end to end testing.

To run all cypress tests through the CLI (Uses headless electron by default,
this can be configured)

```
yarn test:e2e
```

To run an individual test through the CLI

```
yarn cypress run --spec "cypress/integration/[test-name].spec.js"
```

To open the cypress GUI - from here you can select to run either all or
individual tests through the interface, as well as enabling you to inspect for
errors.

```
yarn cypress open
```

-   Deployment instructions

#### Unit testing

[Mocha](https://mochajs.org/) framework is used for unit testing alongside the
[jest/expect](https://jestjs.io/docs/en/expect.html) asssertion library.

To run all mocha tests through the CLI

```
yarn test:unit
```

## Contribution guidelines

-   Writing tests
-   Code review
-   Other guidelines

## Who do I talk to?

-   Repo owner or admin
-   Other community or team contact
