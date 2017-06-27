import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Issue} from '../../common/model';
import Call from './Call';
import { ApplicationState } from '../../redux/root';
import { OutcomeData, submitOutcome } from '../../redux/callState/callThunk';
import { CallState } from '../../redux/callState/reducer';

interface StateProps {
  issues: Issue[];
  callState: CallState;
}

interface DispatchProps {
  onSubmitOutcome: (data: OutcomeData) => void;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    issues: state.remoteDataState.issues,
    callState: state.callState
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {onSubmitOutcome: submitOutcome},
    dispatch);
};

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Call);
