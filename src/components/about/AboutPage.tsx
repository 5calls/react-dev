import * as React from 'react';
import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { RouteComponentProps } from 'react-router-dom';
import { AboutTranslatable } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props extends RouteComponentProps<{ id: string }> {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly onSelectIssue: (issueId: string) => Function;

  // location widget related
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
    locationState={props.locationState}
    setLocation={props.setLocation}
    clearLocation={props.clearLocation}
  >
    <AboutTranslatable
      t={i18n.t}
    />
  </Layout>
);

export default AboutPage;
