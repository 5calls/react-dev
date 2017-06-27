import * as React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../common/model';
import Promotion from '../shared/Promotion';
import CallCountContainer from '../shared/CallCountContainer';
/*
    "callComplete": {
      "title":"Great work!",
      "pickAnotherIssue": "Pick another issue to keep calling, or spread the word by sharing your work with friends:",
      "learnWhyCallingIsGreat":
        "<a href='/about'>Learn why calling</a> representatives is the most effective way of making your voice heard."

*/

interface Props {
  selectedIssue: Issue;
}

const Done: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <section className="call">
      <div className="call_complete">
        <h2 className="call__title">Great work!{/*'callComplete.title'*/}</h2>
        {/*impactPreview*/}
        <p className="call__text">
          Pick another issue to keep calling,
          or spread the word by sharing your work with friends:{/*'callComplete.pickAnotherIssue'*/}
        </p>
        {/*promote(state, prev, send)*/}
        <Promotion selectedIssue={props.selectedIssue}/>
        <p className="call__text">
          <Link to="/about">Learn why calling</Link> representatives is the most
          effective way of making your voice heard.{/*'callComplete.learnWhyCallingIsGreat'*/}
          </p>
        {/*townHall(state)*/}
        <strong>TOWN HALL COMPONENT HERE</strong><br/>
        {/* TODO: Finish call count impl */}
        <CallCountContainer />
      </div>
    </section>
  );
};

export default Done;
