import * as React from 'react';
import { Link } from 'react-router-dom';
import { Promotion, CallCount } from '../shared';
import * as Constants from '../../common/constants';

/* tslint:disable:max-line-length
  i18n Keys
    "hypothesis": {
      "title": "Make your voice heard",
      tslint:disable-next-line
      "p1": "Turn your passive participation into active resistance. Facebook likes and Twitter retweets can’t create the change you want to see. Calling your Government on the phone can.",
      "p2": "Spend 5 minutes, make 5 calls.",
      "p3": "Calling is the most effective way to influence your representative.   Read more about <a href='/about'>why calling works.</a>",
      "contribute":"You can contribute to help out with costs associated with running 5 Calls. This project is run by an <strong>all-volunteer team</strong>, and all donations go towards basic expenses like <strong>hosting our site, sending issue alerts and keeping our data updated</strong>.",
      "donateCallout":"Donate to 5 Calls Today",
      "featuresTitle": "$t(common.AppName):",
      "feature1": "provides phone numbers and scripts so calling is quick and easy",
      "feature2": "uses your location to find your local representatives so your calls have more impact",
      "getApp": "Get the $t(common.AppName) app:",
      "onAppStore": "$t(common.AppName) on the App Store",
      "onGooglePlay": "$t(common.AppName) on Google Play"
    },
*/
// tslint: enable
interface Props {}

const Why5calls: React.StatelessComponent<Props>  = (props: Props) => (
  <div className="hypothesis" >
    <header className="hypothesis__header">
      <h2 className="hypothesis__title">Make your voice heard{/* "hypothesis.title" */}</h2>
      <p>
        Turn your passive participation into
        active resistance. Facebook likes and Twitter retweets
        can’t create the change you want to see.
        Calling your Government on the phone can.
        {/*"hypothesis.p1"*/}
      </p>
      <p><strong>Spend 5 minutes, make 5 calls.{/*"hypothesis.p2"*/}</strong></p>
      <Promotion selectedIssue={null}/>
    </header>
    <div className="hypothesis__text">
      <p>Calling is the most effective way to influence your representative. Read more about <Link to='/about'>why calling works.</Link>{/*t('hypothesis.p3')*/}</p>
      <p>You can contribute to help out with costs associated with running 5 Calls. This project is run by an <strong>all-volunteer team</strong>, and all donations go towards basic expenses like <strong>hosting our site, sending issue alerts and keeping our data updated</strong>.{/*t('hypothesis.contribute')*/}</p>
      <p className="hypothesis__callout">
        <a href="https://secure.actblue.com/contribute/page/5calls?refcode=web" target="_blank">
          {`Donate to ${Constants.APP_NAME} Today`} {/*t('hypothesis.donateCallout')*/}
        </a>
      </p>
      <h3 className="hypothesis__subtitle">{Constants.APP_NAME}:{/*t('hypothesis.featuresTitle')*/}</h3>
      <ul className="hypothesis__list">
        <li>provides phone numbers and scripts so calling is quick and easy{/*t('hypothesis.feature1')*/}</li>
        <li>uses your location to find your local representatives so your calls have more impact{/*t('hypothesis.feature2')*/}</li>
      </ul>
      <h3 className="hypothesis__subtitle">
        {`Get the ${Constants.APP_NAME} app:`}{/*t('hypothesis.getApp')*/}
      </h3>
      <ul className="hypothesis__apps">
        <li>
          <a href="https://itunes.apple.com/us/app/5-calls/id1202558609?mt=8" target="_blank">
            {/*alt attribute: t('hypothesis.onAppStore', null, true)*/}
            <img className="ios" src="/img/app-store.svg" alt={`${Constants.APP_NAME} on the App Store`} />
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=org.a5calls.android.a5calls&hl=en" target="_blank">
            {/*alt attribute: t('hypothesis.onGooglePlay', null, true)*/}
            <img className="play" src="/img/google-play-badge.png" alt={`${Constants.APP_NAME} on Google Play`} />
          </a>
        </li>
      </ul>
      <CallCount />
    </div>
  </div>
);

export default Why5calls;
