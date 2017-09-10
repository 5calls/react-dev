import * as React from 'react';
import i18n from '../../services/i18n';
import { Navigation } from './index';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

interface Props {
  readonly t: TranslationFunction;
}

const Footer: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <footer>
      <Navigation
        t={i18n.t}
      />
    </footer>
  );
};

export default translate()(Footer);
