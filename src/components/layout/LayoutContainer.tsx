import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { find } from 'lodash';
import { selectIssueActionCreator } from '../../redux/callState';
import { ApplicationState } from '../../redux/root';
import { newLocationLookup, clearAddress } from '../../redux/location';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { Layout } from './index';
import { Issue } from '../../common/model';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface OwnProps extends RouteProps {
  readonly issueId?: string;
  readonly children?: {};
}

interface StateProps {
  readonly children?: {};
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
  readonly callState: CallState;
  readonly locationState: LocationState;
}

interface DispatchProps {
  readonly onSelectIssue: (issueId: string) => void;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
  let currentIssue: Issue | undefined = undefined;
  if (state.remoteDataState.issues) {
    currentIssue = find(state.remoteDataState.issues, i => i.id === ownProps.issueId);
  }

  let issues: Issue[] = state.remoteDataState.issues;
  if (ownProps.match.path === '/group/:id') {
    const groupID = ownProps.match.params.id;

    if (state.remoteDataState.groupIssues) {
      const groupIssues = state.remoteDataState.groupIssues.get(groupID);
      if (groupIssues !== undefined) {
        issues = groupIssues
      }  
    }
  }

  return {
    issues: issues,
    currentIssue: currentIssue,
    completedIssueIds: state.callState.completedIssueIds,
    callState: state.callState,
    locationState: state.locationState,
    children: ownProps.children,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSelectIssue: selectIssueActionCreator,
      setLocation: newLocationLookup,
      clearLocation: clearAddress,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Layout);
