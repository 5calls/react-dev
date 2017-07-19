import * as React from 'react';
import { Faq } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const FaqPage: React.StatelessComponent<Props> = () => (
  <Layout>
    <Faq />
  </Layout>
);

export default FaqPage;
