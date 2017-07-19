import * as React from 'react';
import { Why5calls } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
  >
    <Why5calls />
  </Layout>
);

export default HomePage;
