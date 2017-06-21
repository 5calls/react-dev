import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CallPage from './components/call/CallPage';
import { getIssues } from './redux/remoteData/apiThunk';
import './components/bundle.css';
import './components/shared/scss/style.css';
import './components/shared/scss/vendor/normalize.css';

const history = createHistory();

const store = createStore({});
// FIXME: Remove hard-coded zip code
store.dispatch(getIssues('04260'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/* <Route path="/" exact={true} render={() => <MainContainer />} /> */}
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/issue" exact={true} component={CallPage} />
        <Route path="/about" exact={true} component={AboutPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
