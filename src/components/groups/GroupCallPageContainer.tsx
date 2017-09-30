import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../../redux/root';
import { CallPage } from '../call/index';
import { Issue, Group } from '../../common/model';
import { getIssue } from '../shared/utils';
import { getGroupIssuesIfNeeded } from '../../redux/remoteData';
import { LocationState } from '../../redux/location/reducer';
import { CallState, OutcomeData, submitOutcome, selectIssueActionCreator } from '../../redux/callState';
import { clearAddress } from '../../redux/location';

import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ groupid: string, issueid: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly activeGroup?: Group;
  readonly callState: CallState;
  readonly locationState: LocationState;
}

interface DispatchProps {
  readonly onSubmitOutcome: (data: OutcomeData) => void;
  readonly onGetIssuesIfNeeded: () => void;
  readonly onSelectIssue: (issueId: string) => void;
  readonly clearLocation: () => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  let groupPageIssues: Issue[] = [];

  // send group issues if they exist, normal active ones if they don't
  if (state.remoteDataState.groupIssues && state.remoteDataState.groupIssues.length !== 0) {
    groupPageIssues = state.remoteDataState.groupIssues;
  } else {
    groupPageIssues = state.remoteDataState.issues;
  }

  const currentIssue: Issue | undefined = getIssue(state.remoteDataState, ownProps.match.params.issueid);

  return {
    activeGroup: state.callState.group,
    issues: groupPageIssues,
    currentIssue: currentIssue,
    callState: state.callState,
    locationState: state.locationState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>, ownProps: OwnProps): DispatchProps => {
  return bindActionCreators(
    {
      onSubmitOutcome: submitOutcome,
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: () => {
        return (nextDispatch: Dispatch<ApplicationState>,
                getState: () => ApplicationState) => {
          dispatch(getGroupIssuesIfNeeded(ownProps.match.params.groupid));
        };
      },
      clearLocation: clearAddress,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CallPage);
