import * as React from 'react';
import i18n from '../../services/i18n';
import { AboutTranslatable } from './index';
import { LayoutContainer } from '../layout';

const AboutPage: React.StatelessComponent<{}> = (props: {}) => (
  <LayoutContainer>
    <AboutTranslatable
      t={i18n.t}
    />
  </LayoutContainer>
);

export default AboutPage;
