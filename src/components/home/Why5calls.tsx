import * as React from 'react';
/* tslint:disable
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
      <h2 className="hypothesis__title">MAKE YOUR VOICE HEARD{/* "hypothesis.title" */}</h2>
      <p>
        Turn your passive participation into
        active resistance. Facebook likes and Twitter retweets
        can’t create the change you want to see.
        Calling your Government on the phone can.
        {/*"hypothesis.p1"*/}
      </p>
      <p>
        <strong>Spend 5 minutes, make 5 calls.{/*"hypothesis.p2"*/}</strong>
      </p>
      {/* TODO: Add promotion text/links */}
    </header>
    <div className="hypothesis__text">
      {/* TODO: Finish this section */}
    </div>
      {/* TODO: Add call count */}
  </div>
);

export default Why5calls;
