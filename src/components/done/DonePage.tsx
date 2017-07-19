import * as React from 'react';
import { Done } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue: Issue;
}

const DonePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout 
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    currentIssue={props.currentIssue}
  >
    <Done currentIssue={props.currentIssue} />
  </Layout>
);

export default DonePage;
