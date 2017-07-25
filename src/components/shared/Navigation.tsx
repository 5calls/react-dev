import * as React from 'react';
import { Link } from 'react-router-dom';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

interface Props {
  readonly t: TranslationFunction;
}

const Navigation: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div className="colophon">
      {props.t('footer.openSource')}
      {props.t('footer.privacy')}
      {props.t('footer.faq')}
      {props.t('footer.about')}
      <Link id="impact__link" to="/impact"><i aria-hidden="true" className="fa fa-line-chart" />
        <span>Your Impact</span>
      </Link>
      <br />
      {props.t('footer.ipGeolocation')}
    </div>
  );
};

export default translate()(Navigation);
