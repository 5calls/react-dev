import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="colophon">
    {/*tslint:disable-next-line:max-line-length*/}
    {/*{t('footer.openSource')*/}
    <a href="https://github.com/5calls/5calls" target="_blank"><i aria-hidden="true" className="fa fa-github"/><span>Open Source</span></a>
    {/*tslint:disable-next-line:max-line-length*/}
    {/*{t('footer.privacy')*/}
    <a href="https://5calls.org/privacy.html" data-no-routing="data-no-routing"><i aria-hidden="true" className="fa fa-shield"/><span>Privacy</span></a>
    {/*{t('footer.faq')*/}
    <Link to="/faq"><i aria-hidden="true" className="fa fa-question-circle"/><span>FAQ / Contact</span></Link>
    {/*{t('footer.about')*/}
    <Link to="/about"><i aria-hidden="true" className="fa fa-heart"/><span>About</span></Link>
    {/* TODO: Implement impact component */}
    {/*tslint:disable-next-line:max-line-length*/}
    <Link id="impact__link" to="/impact"><i aria-hidden="true" className="fa fa-line-chart"/><span>Your Impact</span></Link>
    <br />
    {/*t('footer.ipGeolocation')*/}
    <a href="http://ipinfo.io" target="_blank">IP geolocation by ipinfo.io</a>
  </div>
);

export default Navigation;
