import * as React from 'react';
import { Issue, Contact } from '../../common/model';
import { ContactDetails, Script, Outcomes } from './index';
import { CallState, OutcomeData } from '../../redux/callState';

export interface Props {
  issue: Issue;
  callState: CallState;
  onSubmitOutcome: (data: OutcomeData) => Function;
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
    let currentContactIndex = 0;
    if (props.issue && props.callState.contactIndexes && props.callState.contactIndexes[props.issue.id]) {
      currentContactIndex = props.callState.contactIndexes[props.issue.id];
    }

    const currentContact = (props.issue && props.issue.contacts 
                                        ? props.issue.contacts[currentContactIndex] 
                                        : undefined);
    const numberContactsLeft = props.issue && props.issue.contacts 
                                            ? props.issue.contacts.length - (currentContactIndex + 1) 
                                            : 0;

    return {
      currentContact: currentContact,
      currentContactIndex: currentContactIndex,
      numberContactsLeft: numberContactsLeft,
      issue: props.issue
    };
  }

  componentWillReceiveProps(newProps: Props) {
    // tslint:disable-next-line:no-console
    console.log('Call.componentWillReceiveProps() props: ', newProps);
    this.setState(this.setStateFromProps(newProps));
  }

  render() {
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
          numberContactsLeft={this.state.numberContactsLeft}
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
