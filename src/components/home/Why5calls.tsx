import * as React from 'react';
import i18n from '../../services/i18n';
import { Link } from 'react-router-dom';
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
      <h1 className="hypothesis__title">{props.t('hypothesis.title')}</h1>
      <h2 className="hypothesis__subtitle">
        {/*tslint:disable-next-line:max-line-length*/}
        5 Calls is the easiest and most effective way for citizens to make an impact in national and local politics
      </h2>
      <p>
        {props.t('hypothesis.p1')}
      </p>
    </header>
    <div className="hypothesis__text">
      <CallCount
        totalCount={props.totalCount}
        large={true}
        t={i18n.t}
      />
      <hr />
      <div className="phonebank-promo">
        <h3 style={{color: '#e53935'}}>Call Voters in Virginia - phone bank for Danica Roem!</h3>
        <p>We're partnering with <a href="https://www.mobilizeamerica.io/" target="_blank">Mobilize America</a> to bring you a phone bank for Danica Roem, candidate for VA House Delegate in District 13.</p>
        <p>Virginia's House of Delegates election is coming up on November 7th. You can help elect progressive candidates by making 5 calls to voters in Virginia today!</p>
        <p>Learn more about <Link to="/team/danicaroem">Danica here and start making calls.</Link></p>
        <Link to="/team/danicaroem"><img src="/img/danica-mobilize-2.png" alt="Danica Roem, VA House Delegate District 13"/></Link>
      </div>
      <hr />
      <a href={Constants.contact.apps}><img src="/img/5calls-apps.png" className="hypothesis__text__mobile" /></a>
      <p dangerouslySetInnerHTML={{ __html: props.t('hypothesis.p3') }} />
      <div className="subscribe">
        {/*tslint:disable-next-line:max-line-length*/}
        <form action="//5calls.us16.list-manage.com/subscribe/post?u=82a164d5fe7f51f4a4efb1f83&amp;id=624ef52208" method="post" target="popupwindow">
          <label htmlFor="email">{props.t('footer.emailLabel')}</label>
          <span className="emailform">
            <input type="text" placeholder="youremail@example.com" name="email" id="email" />
            <input type="submit" value={props.t('footer.subscribe')} />
          </span>
        </form>
      </div>
      <div style={{'clear': 'both'}} />
    </div>
  </div>
);

export const Why5callsTranslatable = translate()(Why5calls);
