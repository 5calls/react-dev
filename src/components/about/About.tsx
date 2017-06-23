import * as React from 'react';
import * as Constants from '../../common/constants';

/* tslint:disable:max-line-length
    "about": {
      "title": "About $t(common.AppName)",
      "whyCallingWorks": {
        "title": "Why Calling Works",
        "justificationForCalling":
          "Calling members of Congress is the most effective way to have your voice heard.
          Calls are tallied by staffers and the count is given to your representatives, informing them
          how strongly their constituents feel about a current issue.
          The sooner your reach out, the more likely it is that
          <strong>your voice will influence their position</strong>.",
        "justificationArticlesListHeader": "Don’t just take it from us:",
        "article1":
          "<a href='https://www.nytimes.com/2016/11/22/us/politics/heres-why-you-should-call-not-email-your-legislators.html'>'Here’s Why You Should Call, Not Email, Your Legislators'</a> <span className='about__source'>NY Times</span>",
        "article2":"<a href='http://www.vox.com/policy-and-politics/2016/11/15/13641920/trump-resist-congress'>'Don’t just write to your representatives. Call them — and go to town halls.'</a> <span className='about__source'>Vox</span>",
        "article3":"<a href='https://www.washingtonpost.com/powerpost/a-day-of-chaos-at-the-capitol-as-house-republicans-back-down-on-ethics-changes/2017/01/03/50e392ac-d1e6-11e6-9cb0-54ab630851e8_story.html?utm_term=.86c8d3a06832'>'I can tell you the calls we’ve gotten in my district office and here in Washington surprised me, meaning the numbers of calls.'</a> <span className='about__source'> Washington Post</span>",
        "article4":"<a href='https://twitter.com/costareports/status/816373917900161024'>'Most members tell me blizzard of angry constituent calls were most impt factor in getting the House to sideline the amdt'</a> <span className='about__source'>Robert Costa</span>",
        "weDoTheResearch": "$t(common.AppName) does the research for each issue, determining which representatives are most influential for which topic, collecting phone numbers for those offices and writing scripts that clearly articulate a progressive position. You just have to call.",
        "sendYourIssues": "Are we not covering an issue we should be? <a href='mailto:{{contactEmail}}'>Please reach out.</a>"
      },
      "callingTips": {
        "title": "Calling Tips",
        "callTechnique": "Calls should take less than a minute. You’ll be speaking to a staffer, so make your point clearly so they can tally your opinion correctly. The provided scripts are useful but you can add your own words.",
        "callEtiquette": "Be respectful. The staffers that pick up the phone are not looking to challenge you and you should treat them with the same respect you expect from them, regardless of which party they work for."
      },
      "whoIs5Calls": {
        "title": "Who made $t(common.AppName)?",
        "overview": "$t(common.AppName) is a volunteer effort. Founded and run by husband & wife team <a href='https://twitter.com/nickoneill'>Nick</a> and <a href='https://twitter.com/syntheticmethod'>Rebecca</a>, many dedicated volunteers contribute design, code and issues to the site including: <a href='https://twitter.com/monteiro'>@monteiro</a>, <a href='https://twitter.com/stewartsc'>@stewartsc</a>, <a href='https://twitter.com/liamdanger'>@liamdanger</a>, <a href='https://twitter.com/capndesign'>@capndesign</a>, <a href='https://twitter.com/jameshome'>@jameshome</a>, <a href='https://twitter.com/beau'>@beau</a>, <a href='https://twitter.com/cdoremus'>@cdoremus</a>, <a href='https://twitter.com/ocderby'>@ocderby</a>, <a href='https://twitter.com/mr0grog'>@mr0grog</a> and <a href='https://github.com/5calls/5calls/graphs/contributors'>more supporters.</a>",
        "iOSApp": "Our iOS app is made by <a href='https://twitter.com/subdigital'>@subdigital</a>, <a href='https://twitter.com/mccarron'>@mccarron</a>, <a href='https://twitter.com/chrisbrandow'>@chrisbrandow</a> and <a href='https://github.com/5calls/ios/graphs/contributors'>more supporters</a>",
        "androidApp":"Our Android app is made by <a href='https://github.com/dektar'>dektar</a>, gregliest and <a href='https://github.com/5calls/android/graphs/contributors'>more supporters</a>",
        "contentAndSocial": "Our issues, scripts and social team is <a href='https://twitter.com/charmbtrippin'>@charmbtrippin</a>, <a href='https://www.instagram.com/sara.n.g/'>sara.n.g</a>, amanda.l, <a href='https://twitter.com/djpiebob'>@djpiebob</a>, <a href='https://twitter.com/theRati'>@theRati</a>, <a href='https://twitter.com/Lhhargrave'>@lhhargrave</a>, amanda.n, <a href='https://twitter.com/sagerke'>@sagerke</a>, Eleanor Wertman, <a href='https://twitter.com/goldengateblonde'>@goldengateblonde</a>, <a href='https://twitter.com/2girls2dogs1dh'>@2girls2dogs1dh</a> and more contributors.",
        "whyStatement": "We want to make advocacy accessible. We hope $t(common.AppName) will make it effortless for regular people to have a voice when it’s needed most."
      },
      "joinUs": {
        "title": "Join us",
        "contactInvite": "This project is <a href='https://github.com/5calls'>open source</a> and volunteer made. If you’d like to join us in developing useful tools for citizens, please get in touch via <a href='https://twitter.com/make5calls'>Twitter</a> or <a href='mailto:{{contactEmail}'>email</a>."
      }
    },
*/
interface Props {}

const About: React.StatelessComponent<Props> = (props: Props) => (
  <section className="about">
      <h2 className="about__title">About {Constants.APP_NAME}{/*t("about.title")*/}</h2>
      <h3 className="about__subtitle">Why Calling Works{/*t("about.whyCallingWorks.title")*/}</h3>
      <p>
        Calling members of Congress is the most effective way to have your voice heard.
          Calls are tallied by staffers and the count is given to your representatives, informing them
          how strongly their constituents feel about a current issue.
          The sooner your reach out, the more likely it is that <strong>your voice will influence their position</strong>.
        {/*t('about.whyCallingWorks.justificationForCalling')*/}
      </p>
      <p>Don’t just take it from us:
        {/*t("about.whyCallingWorks.justificationArticlesListHeader")*/}
      </p>
      <ul>
          <li>
            {/* tslint:disable-next-line:max-line-length*/}
            <a href="https://www.nytimes.com/2016/11/22/us/politics/heres-why-you-should-call-not-email-your-legislators.html">'Here’s Why You Should Call, Not Email, Your Legislators'</a>
              <span className="about__source">NY Times</span>
              {/*t('about.whyCallingWorks.article1')*/}
          </li>
          <li>
            {/* tslint:disable-next-line:max-line-length*/}
            <a href="http://www.vox.com/policy-and-politics/2016/11/15/13641920/trump-resist-congress">'Don’t just write to your representatives. Call them — and go to town halls.'</a> <span className="about__source">Vox</span>
            {/*t('about.whyCallingWorks.article2')*/}
          </li>
          <li>
            {/* tslint:disable-next-line:max-line-length*/}
            <a href="https://www.washingtonpost.com/powerpost/a-day-of-chaos-at-the-capitol-as-house-republicans-back-down-on-ethics-changes/2017/01/03/50e392ac-d1e6-11e6-9cb0-54ab630851e8_story.html?utm_term=.86c8d3a06832">'I can tell you the calls we’ve gotten in my district office and here in Washington surprised me, meaning the numbers of calls.'</a> <span className="about__source"> Washington Post</span>            {/*t('about.whyCallingWorks.article3')*/}
          </li>
          <li>
            {/* tslint:disable-next-line:max-line-length*/}
            <a href="https://twitter.com/costareports/status/816373917900161024">'Most members tell me blizzard of angry constituent calls were most impt factor in getting the House to sideline the amdt'</a> <span className="about__source">Robert Costa</span>            {/*t('about.whyCallingWorks.article4')*/}
          </li>
      </ul>
      <p>
        5 Calls does the research for each issue, determining which representatives are most influential for which topic, collecting phone numbers for those offices and writing scripts that clearly articulate a progressive position. You just have to call.
        {/*t("about.whyCallingWorks.weDoTheResearch")*/}
      </p>
      <p>
        Are we not covering an issue we should be?
        <a href={`mailto:${Constants.contact.email}`}> Please reach out.</a>
        {/*t("about.whyCallingWorks.sendYourIssues", { contactEmail: constants.contact.email})*/}
      </p>
      <h3 className="about__subtitle">Calling Tips{/*("about.callingTips.title")*/}</h3>
      <p>
        Calls should take less than a minute. You’ll be speaking to a staffer, so make your point clearly so they can
        tally your opinion correctly. The provided scripts are useful but you can add
        your own words.
        {/*t("about.callingTips.callTechnique")*/}
      </p>
      <p>
        Be respectful. The staffers that pick up the phone are not looking to challenge you
        and you should treat them with the same respect you expect from them,
        regardless of which party they work for.
        {/*t("about.callingTips.callEtiquette")*/}
      </p>
      <h3 className="about__subtitle">
        Who made {Constants.APP_NAME}?{/*t("about.whoIs5Calls.title")*/}
      </h3>
      <p>
         {Constants.APP_NAME} is a volunteer effort.
         Founded and run by husband &amp; wife team
         <a href="https://twitter.com/nickoneill"> Nick</a> and
         <a href="https://twitter.com/syntheticmethod"> Rebecca</a>,
         many dedicated volunteers contribute design, code and issues
         to the site including: <a href="https://twitter.com/monteiro"> @monteiro</a>,
         <a href="https://twitter.com/stewartsc"> @stewartsc</a>,
         <a href="https://twitter.com/liamdanger"> @liamdanger</a>,
         <a href="https://twitter.com/capndesign"> @capndesign</a>,
         <a href="https://twitter.com/jameshome"> @jameshome</a>,
         <a href="https://twitter.com/beau"> @beau</a>,
         <a href="https://twitter.com/cdoremus"> @cdoremus</a>,
         <a href="https://twitter.com/ocderby"> @ocderby</a>,
         <a href="https://twitter.com/mr0grog"> @mr0grog</a> and
         <a href="https://github.com/5calls/5calls/graphs/contributors"> more supporters.</a>
        {/*t("about.whoIs5Calls.overview")*/}
        </p>
      <p>
        Our iOS app is made by <a href="https://twitter.com/subdigital">@subdigital</a>, <a href="https://twitter.com/mccarron">@mccarron</a>, <a href="https://twitter.com/chrisbrandow">@chrisbrandow</a> and <a href="https://github.com/5calls/ios/graphs/contributors">more supporters</a>
        {/*t("about.whoIs5Calls.iOSApp")*/}
      </p>
      <p>
        Our Android app is made by <a href="https://github.com/dektar">dektar</a>, gregliest and <a href="https://github.com/5calls/android/graphs/contributors">more supporters</a>
        {/*t("about.whoIs5Calls.androidApp")*/}
      </p>
      <p>
        Our issues, scripts and social team is <a href="https://twitter.com/charmbtrippin">@charmbtrippin</a>, <a href="https://www.instagram.com/sara.n.g/">sara.n.g</a>, amanda.l, <a href="https://twitter.com/djpiebob">@djpiebob</a>, <a href="https://twitter.com/theRati">@theRati</a>, <a href="https://twitter.com/Lhhargrave">@lhhargrave</a>, amanda.n, <a href="https://twitter.com/sagerke">@sagerke</a>, Eleanor Wertman, <a href="https://twitter.com/goldengateblonde">@goldengateblonde</a>, <a href="https://twitter.com/2girls2dogs1dh">@2girls2dogs1dh</a> and more contributors.
        {/*t("about.whoIs5Calls.contentAndSocial")*/}
      </p>
      <p>
        We want to make advocacy accessible. We hope {Constants.APP_NAME} will make it
        effortless for regular people to have a voice when it’s needed most.
        {/*t("about.whoIs5Calls.whyStatement")*/}
      </p>

      <h3 className="about__subtitle">Join us{/*t("about.joinUs.title")*/}</h3>
      <p>
        This project is <a href="https://github.com/5calls">open source</a> and volunteer made. If you’d like to join us in developing useful tools for citizens, please get in touch via
        <a href="https://twitter.com/make5calls"> Twitter</a> or <a href={`mailto:${Constants.contact.email}`}> email</a>.
        {/*t("about.joinUs.contactInvite", { contactEmail: constants.contact.email})*/}
      </p>
  </section>

);

export default About;
