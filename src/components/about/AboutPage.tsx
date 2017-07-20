import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { About } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  onSelectIssue: (issueId: string) => Function;
}

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
  >
    <About />
  </Layout>
);

export default AboutPage;
