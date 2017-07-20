import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import { HomePageContainer } from './components/home';
import { AboutPageContainer } from './components/about';
import { FaqPageContainer } from './components/faq';
import { CallPageContainer } from './components/call';
// import { DonePageContainer } from './components/done';
import { fetchLocationByIP, fetchCallCount } from './redux/remoteData';
import './components/bundle.css';
import './components/shared/scss/style.css';
import './components/shared/scss/vendor/normalize.css';

const history = createHistory();

const store = createStore({});
store.dispatch(fetchLocationByIP());
store.dispatch(fetchCallCount());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={HomePageContainer} />
        <Route path="/issue/:id" exact={true} component={CallPageContainer} />
        {/* <Route path="/done/:id" exact={true} component={DonePageContainer} />   */}
        <Route path="/faq" exact={true} component={FaqPageContainer} />
        <Route path="/about" exact={true} component={AboutPageContainer} />
        <Route path="*" component={HomePageContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
