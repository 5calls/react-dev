import * as React from 'react';
import { Navigation } from './index';

export interface Props {
}

const Footer = (props: Props) => {
    return (
      <footer>
        <div className="tinyletter__form">
          {/*tslint:disable-next-line:max-line-length*/}
          <form action="https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1" method="get" target="popupwindow" onSubmit={() => window.open('https://my.sendinblue.com/users/subscribe/js_id/2p22o/id/1', 'popupwindow', 'scrollbars=yes,width=800,height=600')}>
            <label htmlFor="email">Get email alerts once a week{/*t('footer.emailLabel')*/}</label>
            <span className="emailform">
              <input type="text" style={{width: 140}} name="email" id="email" />
              {/*t('footer.subscribe', null, true)*/}
              <input type="submit" value={'Subscribe'} />
            </span>
          </form>
        </div>
        <Navigation />
      </footer>
    );
};

export default Footer;
