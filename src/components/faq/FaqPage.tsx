import * as React from 'react';
import { Faq } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const FaqPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
  >
    <Faq />
  </Layout>
);

export default FaqPage;
