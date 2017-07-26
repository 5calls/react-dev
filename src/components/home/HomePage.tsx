import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Why5calls } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';

interface Props extends RouteComponentProps<{ id: string }> {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue: Issue;
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;
}

const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
  >
    <Why5calls totalCount={props.totalCount} currentIssue={props.currentIssue} />
  </Layout>
);

export default HomePage;
