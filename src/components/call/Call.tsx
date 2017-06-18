import * as React from 'react';
import {Issue} from '../../common/model';
import ContactDetails from './ContactDetails';
import Script from './Script';
import Outcomes from './Outcomes';

export interface Props {
  issues: Issue[];
  selectedIssue: Issue;
  contactIndex: number;
}

const Call: React.StatelessComponent<Props> = ({issues, selectedIssue, contactIndex = 0}: Props) => {
    // TODO: Handle all calls completed use case
    return (
      <section className="call">
        {/* Move header into a separate component */}
        <header className="call__header">
          <h2 className="call__title">{selectedIssue.name}</h2>
          <div className="call__reason">
            {/* this.props.issue.reason.split('\n').map((line) => scriptLine(line, state, prev, send)) */}
            {selectedIssue.reason}
          </div>
        </header>
        <ContactDetails selectedIssue={selectedIssue} contactIndex={contactIndex}/>
        <Script issue={selectedIssue} contactIndex={contactIndex} />
        <Outcomes />
      </section>
    );
};

export default Call;
