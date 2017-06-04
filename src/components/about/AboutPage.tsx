import * as React from 'react';
import About from './About';
import Layout from '../shared/Layout';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> { }

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <About />
  </Layout>
);

export default AboutPage;
