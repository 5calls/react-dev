import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Issue } from '../../common/model';
import { CallPage } from './index';
import { ApplicationState } from '../../redux/root';
import { CallState, OutcomeData, submitOutcome, selectIssueActionCreator } from '../../redux/callState';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly callState: CallState;
  readonly currentIssue?: Issue;
}

interface DispatchProps {
  onSubmitOutcome: (data: OutcomeData) => void;
  onSelectIssue: (issueId: string) => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  let currentIssue = state.remoteDataState.issues.find(i => i.id === ownProps.match.params.id);
  return {
    issues: state.remoteDataState.issues,
    callState: state.callState,
    currentIssue: currentIssue
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    { 
      onSubmitOutcome: submitOutcome, 
      onSelectIssue: selectIssueActionCreator,
     },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CallPage);