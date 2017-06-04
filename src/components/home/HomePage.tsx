import * as React from 'react';
// import HomeContainer from './HomeContainer';
import Why5calls from './Why5calls';
import Layout from '../shared/Layout';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> { }

const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <Why5calls />
  </Layout>
);

export default HomePage;
