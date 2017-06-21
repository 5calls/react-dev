import * as React from 'react';
import { /*connect,*/ Dispatch } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { submitOutcome, OutcomeData } from '../../redux/callState/callThunk';
import { Issue } from '../../common/model';
/*
  i18n Keys
    "outcomes":{
      "enterYourCallResult":"Enter your call result to get the next call:",
      "unavailable":"Unavailable",
      "voicemail":"Left Voicemail",
      "madeContact":"Made Contact",
      "skip":"Skip",
      "contactsLeft":
        "{{contactsRemaining}} more $t(common.person, {'count': {{contactsRemaining}}}) to call for this issue."
    },
*/

interface Props {
  selectedIssue: Issue;
  currentContactId: string;
  onSubmitOutcome: (outcome: string, payload: OutcomeData) => Function;
  dispatch?: Dispatch<ApplicationState>;
}
interface State {}

class Outcomes extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
  }

  dispatchOutcome(e: React.MouseEvent<HTMLButtonElement>, outcome: string) {
    // tslint:disable-next-line:no-console
    console.log(`Outcomes.dispatchOutcome() called with '${outcome}' outcome event:`, e);
    /* e.target.blur() called in Choo version
      for details on use of currentTarget see:
      https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    */
    e.currentTarget.blur();
    if (outcome === 'skip') {
      // TODO: dispatch Choo skipCallAction

      this.props.onSubmitOutcome(outcome, {issueId: this.props.selectedIssue.id});

      // THIS WORKS WHEN COMPONENT IS WRAPPED IN A CONNECT()
      if (this.props.dispatch) {
        this.props.dispatch(submitOutcome(outcome, {issueId: this.props.selectedIssue.id}));
      }
    } else {
      // TODO: dispatch Choo callCompleteAction
    }
    return true;
  }

  render() {
    return (
      <div className="call__outcomes">
        <h3 className="call__outcomes__header">
          Enter your call result to get the next call: {/*"outcomes.enterYourCallResult"*/}
        </h3>
        <div className="call__outcomes__items">
          <button onClick={(e) => this.dispatchOutcome(e, 'unavailable')}>
            Unavailable {/*"outcomes.unavailable"*/}
          </button>
          <button onClick={(e) => this.dispatchOutcome(e, 'voice_mail')}>
            Left Voicemail {/*"outcomes.voicemail"*/}
          </button>
          <button onClick={(e) => this.dispatchOutcome(e, 'made_contact')}>
            Made Contact {/*"outcomes.madeContact"*/}
          </button>
          <button onClick={(e) => this.dispatchOutcome(e, 'skip')}>
            Skip {/*"outcomes.skip"*/}
          </button>
        </div>
      </div>
    );
  }
}

// export default connect()(Outcomes);
export default Outcomes;
