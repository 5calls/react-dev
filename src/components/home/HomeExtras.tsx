import * as React from 'react';

export const HomeExtras: React.StatelessComponent = () => (
  <div>
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
      <div style={{"clear": "both"}}></div>
    </div>
    <p>hi</p>
    <div className="extras__band media">
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
      <div style={{"clear": "both"}}></div>
    </div>
    <p>hi</p>
  </div>
  )

export default HomeExtras;