import * as React from 'react';
import { About } from './index';
import { Layout } from '../shared/index';
import { Issue } from '../../common/model';

interface Props {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <About />
  </Layout>
);

export default AboutPage;
