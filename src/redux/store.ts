import { createStore, compose } from 'redux';
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
  return createStore(
    rootReducer,
    initialState,
    compose(
      // Call applyMiddleware() here
      // This added for Redux Dev Tools - install Chrome or Firefox extension to use
      // tslint:disable-next-line:max-line-length no-string-literal
      typeof window === 'object' && typeof window['devToolsExtension'] !== 'undefined' ? window['devToolsExtension']() : (f) => f
    ));
};
