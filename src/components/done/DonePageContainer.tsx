import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../../redux/root';
import { setAddress, clearAddress } from '../../redux/location';
import { LocationState } from '../../redux/location/reducer';
import { DonePage } from './index';
import { Issue } from '../../common/model';
import { getIssuesIfNeeded } from '../../redux/remoteData';
import { selectIssueActionCreator } from '../../redux/callState';

import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue?: Issue;
  readonly totalCount: number;
  readonly locationState: LocationState;
}

interface DispatchProps {
  readonly onSelectIssue: (issueId: string) => void;
  readonly onGetIssuesIfNeeded: () => void;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  let currentIssue: Issue | undefined = undefined;
  if (state.remoteDataState.issues) {
    currentIssue = state.remoteDataState.issues.find(i => i.id === ownProps.match.params.id);
  }

  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
    currentIssue: currentIssue,
    totalCount: state.remoteDataState.callTotal,
    locationState: state.locationState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: getIssuesIfNeeded,
      setLocation: setAddress,
      clearLocation: clearAddress,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(DonePage);
