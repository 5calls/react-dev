import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
// import i18n from '../../services/i18n';
import { Phonebanks } from './index';
import { LayoutContainer } from '../layout';

interface Props extends RouteComponentProps<{ id: string }> { }

const PhonebanksPage: React.StatelessComponent<Props> = (props: Props) => (
  <LayoutContainer issueId={props.match.params.id}>
    <Phonebanks/>
  </LayoutContainer>
);

export default withRouter(PhonebanksPage);
