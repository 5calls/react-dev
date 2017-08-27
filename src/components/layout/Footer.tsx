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
        <form action="//5calls.us16.list-manage.com/subscribe/post?u=82a164d5fe7f51f4a4efb1f83&amp;id=624ef52208" method="post" target="popupwindow">
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
