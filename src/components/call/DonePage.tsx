import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from '../shared';
import { DoneContainer } from './index';

interface Props extends RouteComponentProps<{}> { }

const DonePage: React.StatelessComponent<Props> = ({match}: Props) => (
  <Layout>
    <DoneContainer />
  </Layout>
);

export default DonePage;
