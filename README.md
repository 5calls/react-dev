# 5 Calls React Port

This repo holds code for the port of the [5 Calls web site](https://5calls.org) from the [Choo](https://choo.io) front-end framework to [React](https://facebook.github.io/react/) with [Redux](http://redux.js.org/) for state management and [Typescript](https://www.typescriptlang.org/) for type safety and documentation.

The current application build is deployed [here](http://104.236.37.184/).

The code for the Choo version of the 5 Calls front-end is located [here](https://github.com/5calls/5calls).

## Development Notes

To build the application, you need to install [Yarn](https://yarnpkg.com/) and run the following commands:
```
# install dependencies and
#   compile .scss files to .css:
yarn

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

## Create React App Code Generation

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app) (CRA) using the [react-scripts-ts](https://github.com/wmonk/create-react-app-typescript) script to add TypeScript support via the following command run from a parent folder:

`create-react-app react-dev --scripts-version=react-scripts-ts`

All files generated from this command were placed in the `react-dev` folder.

The following configurations and modifications to CRA were used:

* **react-scripts-ts:** Used version 2.2.0 to create the app code, which was up-to-date with CRA react-scripts version 1.0.0.
* **node-sass-chokidar:** Added as a dev dependency to allow SASS (scss) preprocessing using the create-react-app `build-css` and `watch-css` scripts in `package.json`. Using this also required adding an import for each generated CSS file into `index.tsx`. One of these scripts needs to be run if there are any modifications to `.scss` files followed by restarting the development server or before the `build` script is run for production deployment. It is anticipated that the `webpack.config.js` will eventually be ejected from creat-react-app (using the eject command). At that point,  webpack.config will need to be updated with loader and plugin information related to SASS and CSS.
* **redux:** Version 3.6.0 of this library was added for state management along with **redux-react** version 5.0.5. Other redux-related libraries used were **redux-logger** version 3.0.6 and **redux-thunk** version 2.2.0 for async state management.
* **react-router-redux:** Version 5 of this library -- currently in alpha -- is used as it is compatible with React Router version 4.0 used in this project. React Router Redux 5.0 is currently being developed in the React Router repository [here](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux). This library facilitates Redux time-travel debugging using the Redux Development Tools browser extension.

[CRA_README.md](CRA_README.md) is the original README.md file created when the create-react-app command was run.
