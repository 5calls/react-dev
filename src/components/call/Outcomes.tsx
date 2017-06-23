import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps, withRouter} from 'react-router-dom';
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
  numberContactsLeft: number;
  onSubmitOutcome: (data: OutcomeData) => Function;
  dispatch?: Dispatch<ApplicationState>;
}
interface State {}

// tslint:disable-next-line:no-any
class Outcomes extends React.Component<Props & RouteComponentProps<any>, State>  {

  dispatchOutcome(e: React.MouseEvent<HTMLButtonElement>, outcome: string) {
    /* e.target.blur() called in Choo version
      for details on use of currentTarget see:
      https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    */
    e.currentTarget.blur();

    // Outomes logic is done in submitOutcome() thunk
    if (this.props.dispatch) {
      this.props.dispatch(submitOutcome(
        {
          outcome,
          numberContactsLeft: this.props.numberContactsLeft,
          issueId: this.props.selectedIssue.id,
          contactId: this.props.currentContactId,
        }));
    }
    // navigate to /done when finished
    if (this.props.numberContactsLeft === 0) {
      if (this.props.history) {
        this.props.history.push('/done');
      }
    }

    window.scroll(1, 1);
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

export default withRouter(connect()(Outcomes));
// export default Outcomes;
