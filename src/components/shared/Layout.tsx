import * as React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import LocationContainer from '../location/LocationContainer';

interface Props {
  readonly children?: {};
}

const Layout: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <header className="logo__header" role="banner" />
    <div className="layout">
      <aside id="nav" role="contentinfo" className="layout__side">
        <div className="issues">
          <header className="issues__header" role="banner">
            <h1 className="issues__title">
              <a href="/"><img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls</a>
            </h1>
            <p className="issues__location">
              <LocationContainer />
          </p>
          </header>
          <Sidebar />
        </div>
      </aside>
      <main id="content" role="main" aria-live="polite" className="layout__main">
        {props.children}
      </main>
    </div>

    <footer>
      REPLACE WITH FOOTER COMPONENT
      <Navigation />
      <div className="colophon">
        <p>5 Calls Civic Action is a 501(c)4 non-profit,
          <a href="https://secure.actblue.com/contribute/page/5calls?refcode=footer">donate today</a></p>
      </div>
    </footer>
  </div>

);

export default Layout;
