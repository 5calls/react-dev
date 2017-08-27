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
      <a href="https://github.com/5calls/5calls" target="_blank"><i aria-hidden="true" className="fa fa-github" />
        <span>{props.t('footer.openSource')}</span>
      </a>
      {/*tslint:disable-next-line:max-line-length*/}
      <a href="/privacy.html" data-no-routing="data-no-routing"><i aria-hidden="true" className="fa fa-shield" />
        <span>{props.t('footer.privacy')}</span>
      </a>
      <Link to="/faq"><i aria-hidden="true" className="fa fa-question-circle" />
        <span>{props.t('footer.faq')}</span>
      </Link>
      <Link to="/about"><i aria-hidden="true" className="fa fa-heart" />
        <span>{props.t('footer.about')}</span>
      </Link>
      {/* TODO: Implement user stats and impact component */}
      <Link id="impact__link" to="/impact"><i aria-hidden="true" className="fa fa-line-chart" />
        <span>Your Impact</span>
      </Link>
      <br />
      <a href="http://ipinfo.io" target="_blank">{props.t('footer.ipGeolocation')}</a>
    </div>
  );
};

export default translate()(Navigation);
