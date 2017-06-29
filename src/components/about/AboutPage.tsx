import * as React from 'react';
import { About } from './index';
import { Layout } from '../shared/index';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> { }

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <About />
  </Layout>
);

export default AboutPage;
