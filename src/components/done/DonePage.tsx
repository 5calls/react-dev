import * as React from 'react';
import { Done } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps extends RouteComponentProps<{id: string}> {}

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue: Issue;
  readonly totalCount: number;
}

const DonePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout 
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    currentIssue={props.currentIssue}
  >
    <Done currentIssue={props.currentIssue} totalCount={props.totalCount} />
  </Layout>
);

export default DonePage;
