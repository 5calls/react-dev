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
      <div className="tinyletter__form">
        {/*tslint:disable-next-line:max-line-length*/}
        <form action="https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1" method="get" target="popupwindow" onSubmit={() => window.open('https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1', 'popupwindow', 'scrollbars=yes,width=800,height=600')}>
          <label htmlFor="email">{props.t('footer.emailLabel')}</label>
          <span className="emailform">
            <input type="text" style={{ width: 140 }} name="email" id="email" />
            <input type="submit" value={props.t('footer.subscribe')} />
          </span>
        </form>
      </div>
      <Navigation
        t={i18n.t}
      />
    </footer>
  );
};

export default translate()(Footer);
