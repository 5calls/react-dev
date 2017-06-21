import * as React from 'react';
import { Issue, Contact } from '../../common/model';
import ContactDetails from './ContactDetails';
import Script from './Script';
import Outcomes from './Outcomes';
import { OutcomeData } from '../../redux/callState/callThunk';
import { CallState } from '../../redux/callState/reducer';

export interface Props {
  issues: Issue[];
  callState: CallState;
  onSubmitOutcome: (outcome: string, payload: OutcomeData) => Function;
}

export interface State {
  issue: Issue;
  currentContact: Contact | undefined;
  currentContactIndex: number;
  numberContactsLeft: number;
}

class Call extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  /**
   * Set state from props when props
   * are initialized or refreshed
   *
   * @param {Props} props
   * @returns {State}
   */
  setStateFromProps(props: Props): State {
    const issue = props.callState.currentIssue;
    let currentContactIndex = 0;
    if (issue && props.callState.contactIds && props.callState.contactIds[issue.id]) {
      currentContactIndex = props.callState.contactIds[issue.id];
    }

    const currentContact = (issue && issue.contacts ? issue.contacts[currentContactIndex] : undefined);
    const numberContactsLeft = issue && issue.contacts ? issue.contacts.length - (currentContactIndex + 1) : 0;

    return {
      currentContact: currentContact,
      currentContactIndex: currentContactIndex,
      numberContactsLeft: numberContactsLeft,
      issue: issue
    };
  }

  componentWillReceiveProps(newProps: Props) {
    // tslint:disable-next-line:no-console
    console.log('Call.componentWillReceiveProps() props: ', newProps);
    this.setState(this.setStateFromProps(newProps));
  }

  render() {
    // TODO: Handle all calls completed use case
    return (
      <section className="call">
        {/* TODO: Move header into a separate component */}
        <header className="call__header">
          <h2 className="call__title">{this.state.issue.name}</h2>
          <div className="call__reason">
            {/* TODO: Split up script lines like this:
             this.props.selectedIssue.reason.split('\n').map((line) => scriptLine(line, state, prev, send)) */}
            {this.state.issue.reason}
          </div>
        </header>
        <ContactDetails selectedIssue={this.state.issue} contactIndex={this.state.currentContactIndex}/>
        <Script issue={this.state.issue} contactIndex={this.state.currentContactIndex} />
        <Outcomes
          selectedIssue={this.state.issue}
          currentContactId={(this.state.currentContact ? this.state.currentContact.id : '')}
          onSubmitOutcome={this.props.onSubmitOutcome}
        />
          {/* TODO: Fix people/person for 1 contact left. Move logic to a function */}
          {this.state.numberContactsLeft > 0 ?
            <h3 aria-live="polite" className="call__contacts__left" >
              {this.state.numberContactsLeft} more people to call for this issue.{/*outcomes.contactsLeft*/}
            </h3> : ''
          }
      </section>
    );
  }
}

export default Call;
