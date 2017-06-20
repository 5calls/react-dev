import { connect } from 'react-redux';
import {Issue} from '../../common/model';
import Call from './Call';
import { ApplicationState } from '../../redux/root';
import { OutcomePayload, submitOutcome } from '../../redux/callState/callThunk';
import { CallState } from '../../redux/callState/reducer';

interface StateProps {
  issues: Issue[];
  callState: CallState;
  currentContactId: string;
}

interface DispatchProps {
  submitOutcome: (type: 'SUBMIT_OUTCOME', payload: OutcomePayload) => void;
}
const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    issues: state.issues,
    callState: state.callState,
    // tslint:disable-next-line:max-line-length
    currentContactId: (state.callState && state.callState.currentIssue && state.callState.contactIds ? state.callState.contactIds[state.callState.currentIssue.id] : '')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitOutcome: submitOutcome
  };
};

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Call);
