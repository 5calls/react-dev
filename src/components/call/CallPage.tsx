import * as React from 'react';
import CallContainer from './CallContainer';
import Layout from '../shared/Layout';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> { }

const CallPage: React.StatelessComponent<Props> = ({match}: Props) => (
  <Layout>
    <CallContainer />
  </Layout>
);

export default CallPage;
