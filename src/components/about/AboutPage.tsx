import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import i18n from '../../services/i18n';
import { AboutTranslatable } from './index';
import { LayoutContainer } from '../layout';

interface Props extends RouteComponentProps<{ id: string }> { }

const AboutPage: React.StatelessComponent<Props> = (props: Props) => (
  <LayoutContainer issueId={props.match.params.id}>
    <AboutTranslatable
      t={i18n.t}
    />
  </LayoutContainer>
);

export default withRouter(AboutPage);
