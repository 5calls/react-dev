import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { CallCount } from '../shared';
import * as Constants from '../../common/constants';

interface Props {
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const Why5calls: React.StatelessComponent<Props> = (props: Props) => (
  <div className="hypothesis" >
    <header className="hypothesis__header">
      <h2 className="hypothesis__title">{props.t('hypothesis.title')}</h2>
      <p>
        {props.t('hypothesis.p1')}
      </p>
      {/* <p><strong>{props.t('hypothesis.p2')}</strong></p>
      <Promotion
        currentIssue={null}
        t={i18n.t}
      /> */}
    </header>
    <div className="hypothesis__text">
      <CallCount
        totalCount={props.totalCount}
        large={true}
        t={i18n.t}
      />
      <a href={Constants.contact.apps}><img src="/img/5calls-apps.png" className="hypothesis__text__mobile" /></a>
      <p dangerouslySetInnerHTML={{ __html: props.t('hypothesis.p3') }} />
      <div className="subscribe">
        <form action="//5calls.us16.list-manage.com/subscribe/post?u=82a164d5fe7f51f4a4efb1f83&amp;id=624ef52208" method="post" target="popupwindow">
          <label htmlFor="email">{props.t('footer.emailLabel')}</label>
          <span className="emailform">
            <input type="text" placeholder="hello@5calls.org" name="email" id="email" />
            <input type="submit" value={props.t('footer.subscribe')} />
          </span>
        </form>
      </div>
      {/* <p dangerouslySetInnerHTML={{ __html: props.t('hypothesis.contribute') }} /> */}
      {/* <h3 className="hypothesis__subtitle">{props.t('hypothesis.featuresTitle')}</h3> */}
      {/* <ul className="hypothesis__list">
        <li>{props.t('hypothesis.feature1')}</li>
        <li>{props.t('hypothesis.feature2')}</li>
      </ul> */}
    </div>
  </div>
);

export const Why5callsTranslatable = translate()(Why5calls);
