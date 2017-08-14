import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './services/i18n';

import registerServiceWorker from './registerServiceWorker';
import { HomePage } from './components/home';
import { AboutPage } from './components/about';
import { FaqPage } from './components/faq';
import { DonePageContainer } from './components/done';
import { CallPageContainer } from './components/call';
import { startup } from './redux/remoteData';
import './components/bundle.css';
import './components/shared/scss/style.css';
import './components/shared/scss/vendor/normalize.css';

const history = createHistory();

const store = createStore({});
store.dispatch(startup());

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/issue/:id" exact={true} component={CallPageContainer} />
          <Route path="/done/:id" exact={true} component={DonePageContainer} />
          <Route path="/faq" exact={true} component={FaqPage} />
          <Route path="/about" exact={true} component={AboutPage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
registerServiceWorker();
