import * as React from 'react';
import About from './About';
import Layout from '../shared/Layout';

interface Props {}

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <About />
  </Layout>
);

export default AboutPage;
