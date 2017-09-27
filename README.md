# 5 Calls React Port

[![CircleCI](https://circleci.com/gh/5calls/react-dev.svg?style=svg)](https://circleci.com/gh/5calls/react-dev)

This repo holds code for the port of the [5 Calls web site](https://5calls.org) from the [Choo](https://choo.io) front-end framework to [React](https://facebook.github.io/react/) with [Redux](http://redux.js.org/) for state management and [Typescript](https://www.typescriptlang.org/) for type safety and documentation.

It was deployed to production on September 7, 2017 replacing the Choo version of the web application.

## Development Notes

To build the application, you need to install [Yarn](https://yarnpkg.com/) and run the following commands:
```
# install dependencies and
#   compile .scss files to .css:
yarn

# Run unit tests in watch mode
yarn test

# Run unit tests with a code coverage report
yarn test:coverage

# start the app running in the
#   webpack development server:
yarn start

# start the app running in https mode
#   (needed for browser geolocation):
yarn start:https

# build the app into build folder
#  for server deployment:
yarn build

# any updates to .scss files need
#  to be compiled to css using:
yarn clean-build-css

```
Using `yarn add` to add new dependencies
will throw an error related to node-sass-chokidar, which can be ignored.

For the best development experience, you should install both the React and Redux Development Tools extensions into your browser. Both browser extensions are available for Chrome and Firefox.

### Unit testing
Unit testing in this repository is done using [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme) in addition to the [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) library to support Redux-related tests.

## Architecture, Data Flow and Strong Typing
A selection of files in this repository include code comments describing the architecture, data flow and strong typing conventions used in developing the React-Redux-TypeScript version of the 5 Calls application. These include files that illustrate the following (see the individual files for more details):

### Use of TypeScript to Strongly Type Request Parameters Passed by React-Router
Also illustrates the use of Redux to loosely couple a component to data passed to its props.<br/>
[CallPageContainer.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/CallPageContainer.tsx)<br/>
[CallPage.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/CallPage.tsx)<br/>

### Data Flow through a Component Heirarcy
Also note the TypeScript conventions used in these files.<br/>
[CallPageContainer.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/CallPageContainer.tsx)<br/>
[CallPage.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/CallPage.tsx)<br/>
[Why5calls.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/Call.tsx)<br/>

### Redux Data Flow

See code comments containing the token 'REDUX DATA FLOW'. Also note the use of TypeScript in these files.<br/>
[CallPageContainer.tsx](https://github.com/5calls/react-dev/blob/master/src/components/call/CallPageContainer.tsx)<br/>
[redux/callState/action.ts](https://github.com/5calls/react-dev/blob/master/src/redux/callState/action.ts)<br/>
[redux/callState/actionCreator.ts](https://github.com/5calls/react-dev/blob/master/src/redux/callState/actionCreator.ts)<br/>
[redux/callState/reducer.ts](https://github.com/5calls/react-dev/blob/master/src/redux/callState/reducer.ts)<br/>

## Contributor Guidelines

Contributions to this repository are welcome. Please see the [Contributing.md](https://github.com/5calls/5calls/blob/master/CONTRIBUTING.md) file in the 5calls/5calls repository for information on contributing to this repository.

Initial development in this repository should focus on TODOs identified in [this wiki page](https://github.com/5calls/5calls/wiki/React-Redux-Port-Implementation) in the 5calls/5calls repo.

## Create React App Code Generation

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app) (CRA, react-scripts ver 1.0.0) using [react-scripts-ts](https://github.com/wmonk/create-react-app-typescript) (ver 2.2.0) to add TypeScript support. In addition, the `node-sass-chokidar` library was added for preprocessing of SASS (.scss files) to CSS.

Subsequently, the CRA-created configurations were exposed using the eject command (`yarn eject`). This created the `config` and `scripts` folders and added dependencies and other configurations to `package.json`.


[CRA_README.md](CRA_README.md) is the original README.md file created when the create-react-app command was run.
