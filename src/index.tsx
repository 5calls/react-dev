import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { applyMiddleware, createStore, Middleware } from 'redux';
// import { Provider, Store } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createLogger, ReduxLoggerOptions } from 'redux-logger';
// import createHistory from 'history/createBrowserHistory';
// import rootReducer, { ApplicationState } from './redux/root';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/home/HomePage';
// import AboutPage from './components/about/AboutPage';

// const history = createHistory();

// declare var process: {env: {NODE_ENV: string}};
// const env = process.env.NODE_ENV;
// const middlewares: Middleware[] = [ thunk ];

// if (env === 'dev') {
//   const options: ReduxLoggerOptions = {};
//   middlewares.push(createLogger(options));
// }

// const store: Store<ApplicationState> =
//   createStore(rootReducer, {}, applyMiddleware(...middlewares));

/*
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact={true} component={HomePage}/>
        <Route path="/" exact={true} component={AboutPage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
*/


ReactDOM.render(
  <HashRouter>
    <div className="app">
      <Route exact={true} path="/" component={HomePage} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
