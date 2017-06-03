import { createStore } from 'redux';
// import { applyMiddleware, createStore, Middleware } from 'redux';
import rootReducer from './root';
// import { createLogger, ReduxLoggerOptions } from 'redux-logger';
// import thunk from 'redux-thunk';

// declare var process: { env: { NODE_ENV: string } };
// const env = process.env.NODE_ENV;
// const middlewares: Middleware[] = [thunk];

// if (env === 'dev') {
//   const options: ReduxLoggerOptions = {};
//   middlewares.push(createLogger(options));
// }

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
