import { applyMiddleware, createStore, compose, Middleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import rootReducer from './root';
// import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import thunk from 'redux-thunk';

// declare var process: { env: { NODE_ENV: string } };
// const env = process.env.NODE_ENV;
const middlewares: Middleware[] = [thunk];

// NOTE: uncomment these to show the redux log statements
// const options: ReduxLoggerOptions = {};
// middlewares.push(createLogger(options));

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate(),
      // This added for Redux Dev Tools - install Chrome or Firefox extension to use
      // tslint:disable-next-line:max-line-length no-string-literal
      typeof window === 'object' && typeof window['devToolsExtension'] !== 'undefined' ? window['devToolsExtension']() : (f) => f
    ));

  // "whitelist" tells the redux-persist middleware which reducer keys(parts of the redux store)
  // we want to persist and then grab back and put into the store upon loading the app the next time.
  // It will write to this localstorage key every time there is a change made to this key in redux.
  persistStore(store, {whitelist: ['locationState']});

  return store;
};
