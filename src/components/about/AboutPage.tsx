import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AboutTranslatable } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props extends RouteComponentProps<{ id: string }> {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly onSelectIssue: (issueId: string) => Function;
}

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
  >
    <AboutTranslatable />
  </Layout>
);

export default AboutPage;
