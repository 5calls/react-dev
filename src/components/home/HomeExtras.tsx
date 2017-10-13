import * as React from 'react';

export const HomeExtras: React.StatelessComponent = () => {
  return (
  <div className="extras">
    <h3 className="extras__title">
      5 Calls is the easiest and most effective way for citizens to make an impact in national and local politics
    </h3>
    <div className="extras__band explainer">
      <ul>
        <li className="explainer__pick">
          <div className="img-contain"><img src="/img/pick-issue.png" alt="Pick your issue" /></div>
          <br/>Pick your issue
        </li>
        <li className="explainer__call">
          <div className="img-contain"><img src="/img/call-rep.png" alt="Call your rep" /></div>
          <br/>Call your Rep
        </li>
        <li className="explainer__result">
          <div className="img-contain"><img src="/img/record-result.png" alt="Record your result" /></div>
          <br/>Record your result
        </li>
      </ul>
      <div style={{'clear': 'both'}} />
    </div>
    <div className="extras__tweets">
      <ul>
        <li>
          <img src="/img/user-letbeasley.png"/>
          <p>"Thank you! I could not have not spoken up on ACA without your website!"</p>
          <p className="user">@letbeasley</p>
        </li>
        <li>
          <img src="/img/user-suogan.png"/>
          {/*tslint:disable-next-line:max-line-length*/}
          <p>"Made my call to Gov Cuomo. Thank you for making it so easy. Took 5 minutes of my time & I spoke with staff member."</p>
          <p className="user">@suo_gan</p>
        </li>
        <li>
          <img src="/img/user-letbeasley.png"/>
          <p>"Thank you! I could not have not spoken up on ACA without your website!"</p>
          <p className="user">@letbeasley</p>
        </li>
      </ul>
      <div style={{'clear': 'both'}} />
    </div>
    <div className="extras__band articles">
      <ul>
        <li className="">
          <img src="/img/logo-techcrunch.png" alt="TechCrunch" />
        </li>
        <li className="">
          <img src="/img/logo-vogue.png" alt="Vogue" />
        </li>
        <li className="">
          <img src="/img/logo-huffpost.png" alt="HuffPost" />
        </li>
        <li className="">
          <img src="/img/logo-businessweek.png" alt="Bloomberg Businessweek" />
        </li>
      </ul>
      <div style={{'clear': 'both'}} />
    </div>
    <div className="extras__media">
      <ul>
        <li>
          {/*tslint:disable-next-line:max-line-length*/}
          <a href="https://www.youtube.com/watch?v=rsazVtf1HP4" target="_blank"><img src="/img/video-mmoore.png" alt="Michael Moore talking about 5 Calls on MSNBC" /></a>
        </li>
        <li>
          {/*tslint:disable-next-line:max-line-length*/}
          <a href="https://www.youtube.com/watch?v=N62ViRRn61I" target="_blank"><img src="/img/video-app.png" alt="How to use the 5 Calls iPhone App" /></a>
        </li>
        <li>
          {/*tslint:disable-next-line:max-line-length*/}
          <a href="https://www.youtube.com/watch?v=wwoJqYXvh9s" target="_blank"><img src="/img/video-shower.png" alt="When do you make your 5 Calls?" /></a>
        </li>
      </ul>
      <div style={{'clear': 'both'}} />
    </div>
  </div>
  );
};

export default HomeExtras;