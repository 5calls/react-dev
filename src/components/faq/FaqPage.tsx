import * as React from 'react';
import { Layout } from '../shared';
import { Faq } from './index';

export interface Props {
}

const FaqPage = (props: Props) => {
    return (
      <Layout>
        <Faq/>
      </Layout>
    );
};

export default FaqPage;
