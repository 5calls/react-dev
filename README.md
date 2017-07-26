# 5 Calls React Port

[![CircleCI](https://circleci.com/gh/5calls/react-dev.svg?style=svg)](https://circleci.com/gh/5calls/react-dev)

This repo holds code for the port of the [5 Calls web site](https://5calls.org) from the [Choo](https://choo.io) front-end framework to [React](https://facebook.github.io/react/) with [Redux](http://redux.js.org/) for state management and [Typescript](https://www.typescriptlang.org/) for type safety and documentation.

The current application build is deployed [here](http://104.236.37.184/).

The code for the Choo version of the 5 Calls front-end is located [here](https://github.com/5calls/5calls).

## Development Notes

To build the application, you need to install [Yarn](https://yarnpkg.com/) and run the following commands:
```
# install dependencies and
#   compile .scss files to .css:
yarn

# Each 'yarn add' to add new dependencies
# will also rebuild the css from the
# .scss files and throw an error
# related to node-sass-chokidar,
# which can be ignored.

# Run unit tests
yarn test

# Run unit tests with a code coverage report
yarn run test:coverage

# start the app running in the
#   webpack development server:
yarn start

# build the app into build folder
#  for server deployment:
yarn build

# any updates to .scss files need
#  to be compiled to css using:
yarn build-css

```


For the best development experience, you should install both the React and Redux Development Tools extensions into your browser. Both browser extensions are available for Chrome and Firefox.

## Contributor Guidelines
Please see the [Contributing.md](https://github.com/5calls/5calls/blob/master/CONTRIBUTING.md) file in the 5calls/5calls repository for information on contributing to this repository.

Initial development in this repository should focus on TODOs identified in [this wiki page](https://github.com/5calls/5calls/wiki/React-Redux-Port-Implementation) in the 5calls/5calls repo.

## Create React App Code Generation

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app) (CRA, react-scripts ver 1.0.0) using [react-scripts-ts](https://github.com/wmonk/create-react-app-typescript) (ver 2.2.0) to add TypeScript support. In addition, the `node-sass-chokidar` library was added for preprocessing of SASS (.scss files) to CSS.

Subsequently, the CRA-created configurations were exposed using the eject command (`yarn eject`). This created the `config` and `scripts` folders and added dependencies and other configurations to `package.json`.


[CRA_README.md](CRA_README.md) is the original README.md file created when the create-react-app command was run.
