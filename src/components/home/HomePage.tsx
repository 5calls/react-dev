import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Why5calls } from './index';
import { Layout } from '../shared';

interface Props extends RouteComponentProps<{}> {
}

const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout>
    <Why5calls />
  </Layout>
);

export default HomePage;
