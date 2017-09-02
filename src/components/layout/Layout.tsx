import * as React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { Issue } from '../../common/model';
import { Sidebar, Footer, Header } from './index';
import { LocationTranslatable } from '../location';

interface Props {
  readonly children?: {};
  readonly issueId: string;
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly locationState: LocationState;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const Layout: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <Header />
    <div className="layout">
      <aside id="nav" role="contentinfo" className="layout__side">
        <div className="issues">
          <header className="issues__header" role="banner">
            <h1 className="issues__title">
              <Link
                to={`/`}
              >
                <img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls
              </Link>
            </h1>
            <div className="issues__location">
              <LocationTranslatable
                locationState={props.locationState}
                setLocation={props.setLocation}
                clearLocation={props.clearLocation}
                t={i18n.t}
              />
            </div>
            <h2>{i18n.t('issues.whatsImportantToYou')}</h2>
          </header>
          <Sidebar
            issues={props.issues}
            currentIssue={props.currentIssue ? props.currentIssue : undefined}
            completedIssueIds={props.completedIssueIds}
            onSelectIssue={props.onSelectIssue}
          />
        </div>
      </aside>
      <main id="content" role="main" aria-live="polite" className="layout__main">
        {props.children}
      </main>
    </div>
    <Footer
      t={i18n.t}
    />
  </div>

);

export default Layout;
