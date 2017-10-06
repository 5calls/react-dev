import * as React from 'react';
import { Helmet } from 'react-helmet';

import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { Issue } from '../../common/model';
import { SidebarHeader, Sidebar, Footer, Header } from './index';

interface Props {
  readonly children?: {};
  readonly issueId: string;
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly currentGroup?: string;
  readonly completedIssueIds: string[];
  readonly callState: CallState;
  readonly locationState: LocationState;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const Layout: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <Helmet>
      <title>5 Calls: Make your voice heard</title>
    </Helmet>
    <Header />
    <div className="layout">
      <aside id="nav" role="contentinfo" className="layout__side">
        <div className="issues">
          <SidebarHeader
            callState={props.callState}
            locationState={props.locationState}
            setLocation={props.setLocation}
            clearLocation={props.clearLocation}
          />
          <Sidebar
            issues={props.issues}
            currentIssue={props.currentIssue ? props.currentIssue : undefined}
            currentGroup={props.currentGroup}
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
