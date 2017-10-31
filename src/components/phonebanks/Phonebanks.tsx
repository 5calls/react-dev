import * as React from 'react';

export interface Props {
}

export const Phonebanks: React.StatelessComponent<Props> = (props: Props) => (
  <section className="about">
    <h2 className="about__title">Phonebank Tips and FAQs</h2>
    {/*tslint:disable-next-line:max-line-length*/}
    <p>Phone banking is easy to do and is a critically important for effective voter outreach. Thank you for taking the time to help!</p>
    {/*tslint:disable-next-line:max-line-length*/}
    <p>Before you get started, we highly recommend watching this infomative 4 minute video by our friends at DemLabs and Democracy Action.</p>
    {/*tslint:disable-next-line:max-line-length*/}
    <iframe style={{width: '100%'}} width="560" height="315" src="https://www.youtube.com/embed/Z-Y8kn0G1yg?rel=0" frameBorder="0" allowFullScreen={false} />
    <h3>General tips for phone banking:</h3>
    <ul>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>Review all of the materials on the candidate. Nobody expects you to be an expert but you should know the basics. For your reference, the main talking points and stances will above your script when you make calls.</p>
      </li>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>Before making your first call, review the script. The script is a launching point for your calls, you don’t need to read it word for word. This is supposed to be a conversation with a fellow voter, use your own words if you can.</p>
      </li>
      <li>
        <p>Always start your call with “I’m a volunteer...” this helps break the ice. </p>
      </li>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>You’re going to get a lot of unanswered calls. This is ok and normal - think of all the times you’re not available to get your phone ie. work, school, driving, etc.</p>
      </li>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>Please don’t leave voicemail for unanswered calls. We’d rather talk to them than leave a message, we’ll try them again later.</p>
      </li>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>Don’t worry if you’re nervous! This is normal and it gets easier as you make calls! You’ll find that the vast majority of people you speak to are kind and polite.</p>
      </li>
      <li>
        {/*tslint:disable-next-line:max-line-length*/}
        <p>Always remain friendly and polite on a call, even if the person on the other side gets upset. This is rare, but it can happen. Just thank them for their time and move on to your next call.</p>
      </li>
    </ul>
  </section>
);