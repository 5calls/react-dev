import * as React from 'react';
import { OutcomeType, OutcomePayload } from '../../redux/callState/callThunk';
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
  submitOutcome: (type: 'SUBMIT_OUTCOME', payload: OutcomePayload) => void;
}
interface State {}

class Outcomes extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
  }

  dispatchOutcome(e: React.MouseEvent<HTMLButtonElement>, outcome: OutcomeType) {
    /* e.target.blur() called in Choo version
      for details on use of currentTarget see:
      https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    */
    e.currentTarget.blur();
    if (outcome === 'skip') {
      // TODO: dispatch skipCallAction
      this.props.submitOutcome('SUBMIT_OUTCOME', {issueId: this.props.selectedIssue.id});
    } else {
      // TODO: dispatch callCompleteAction
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
        {/* contactsLeft > 0 ?
          <h3 aria-live="polite" className="call__contacts__left" >{contactsLeftText}</h3> :
          <span/> */}
      </div>
    );
  }
}

export default Outcomes;
