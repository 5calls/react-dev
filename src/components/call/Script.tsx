import * as React from 'react';
import { Issue } from '../../common/model';

interface Props {
  issue: Issue;
  contactIndex: number;
}

const Script: React.StatelessComponent<Props> = ({issue, contactIndex = 0}: Props) => {
  if (issue && issue.contacts && issue.contacts.length !== 0 ) {
    return (
      <div className="call__script">
        <h3 className="call__script__header">Your script: {/*"script.yourScript"*/}</h3>
        {issue.script}
        {/* TODO: Format script and add issues link */}
        {/* scriptFormat(state, prev, send) */}
        {/* issuesLink(state, prev, send) */}
      </div>
    );
  } else {
    return <span/>;
  }
};

export default Script;
