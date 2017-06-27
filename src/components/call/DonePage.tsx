import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../shared/Layout';
import DoneContainer from './DoneContainer';

interface Props extends RouteComponentProps<{}> { }

const DonePage: React.StatelessComponent<Props> = ({match}: Props) => (
  <Layout>
    <DoneContainer />
  </Layout>
);

export default DonePage;
