import * as React from 'react';
import { LocationState } from '../../redux/location/reducer';
import { Issue } from '../../common/model';
import { Sidebar, Footer } from './index';
import { Location } from '../location';

interface Props {
  readonly children?: {};
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
    <header className="logo__header" role="banner" />
    <div className="layout">
      <aside id="nav" role="contentinfo" className="layout__side">
        <div className="issues">
          <header className="issues__header" role="banner">
            <h1 className="issues__title">
              <a href="/"><img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls</a>
            </h1>
            <div className="issues__location">
              <Location
                locationState={props.locationState}
                setLocation={props.setLocation}
                clearLocation={props.clearLocation}
              />
            </div>
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
    <Footer />
  </div>

);

export default Layout;
