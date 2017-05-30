import * as React from 'react';

interface Props {
  readonly children?: {};
}

const Layout: React.StatelessComponent<Props> = (props: Props) => (
  <div className="layout">
    <aside id="nav" role="contentinfo" className="layout__side">
      <div className="issues">
        <header className="issues__header" role="banner">
          <h1 className="issues__title">
            <a href="/"><img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls</a>
          </h1>
          <p className="issues__subtitle">
            ISSUE SUBTITLE HERE
          </p>
        </header>
        <ul className="issues-list" role="navigation">
          ISSUE LIST HERE
        </ul>
      </div>
    </aside>
    <main className="container">
      {props.children}
    </main>

    <footer>
      REPLACE WITH FOOTER COMPONENT
      <div className="colophon">
        <p>5 Calls Civic Action is a 501(c)4 non-profit,
          <a href="https://secure.actblue.com/contribute/page/5calls?refcode=footer">donate today</a></p>
      </div>
    </footer>
  </div>

);

export default Layout;
