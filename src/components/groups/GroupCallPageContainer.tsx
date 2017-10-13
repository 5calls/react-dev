import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../../redux/root';
import { CallPage } from '../call/index';
import { Issue } from '../../common/model';
import { getIssue } from '../shared/utils';
import { getGroupIssuesIfNeeded } from '../../redux/remoteData';
import { LocationState } from '../../redux/location/reducer';
import { CallState, OutcomeData, FlexibleOutcomeData,
  submitFlexibleOutcome, selectIssueActionCreator } from '../../redux/callState';
import { clearAddress } from '../../redux/location';

import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ groupid: string, issueid: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly currentGroupId?: String;
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
    currentGroupId: ownProps.match.params.groupid,
    issues: groupPageIssues,
    currentIssue: currentIssue,
    callState: state.callState,
    locationState: state.locationState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>, ownProps: OwnProps): DispatchProps => {
  return bindActionCreators(
    {
      onSubmitOutcome: (data: FlexibleOutcomeData) => {
        return (nextDispatch: Dispatch<ApplicationState>,
                getState: () => ApplicationState) => {
          // if we're calling from a group page (only case right now, but whatevs)
          // then set the groupid from the page we're on, not any group we've joined
          let adjustedData = data;
          if (ownProps.match.params.groupid) {
            adjustedData.groupId = ownProps.match.params.groupid;
          }

          dispatch(submitFlexibleOutcome(adjustedData));
        };
      },
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: () => {
        return (nextDispatch: Dispatch<ApplicationState>,
                getState: () => ApplicationState) => {
          // this page knows about the path params, and sub-components may not,
          // attach the groupid to this method here
          dispatch(getGroupIssuesIfNeeded(ownProps.match.params.groupid));
        };
      },
      clearLocation: clearAddress,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CallPage);
