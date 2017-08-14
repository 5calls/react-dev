import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Faq } from './index';
import { LayoutContainer } from '../layout';

interface Props extends RouteComponentProps<{ id: string }> { }

const FaqPage: React.StatelessComponent<Props> = (props: Props) => (
  <LayoutContainer issueId={props.match.params.id}>
    <Faq />
  </LayoutContainer>
);

export default withRouter(FaqPage);
