import * as React from 'react';
import { Done } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const DonePage: React.StatelessComponent<Props> = () => (
  <Layout>
    <Done />
  </Layout>
);

export default DonePage;
