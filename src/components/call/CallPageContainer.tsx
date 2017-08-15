import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Issue } from '../../common/model';
import { CallPage } from './index';
import { ApplicationState } from '../../redux/root';
import { newLocationLookup, clearAddress } from '../../redux/location';
import { LocationState } from '../../redux/location/reducer';
import { getIssuesIfNeeded } from '../../redux/remoteData';
import { CallState, OutcomeData, submitOutcome, selectIssueActionCreator } from '../../redux/callState';
import { RouteComponentProps } from 'react-router-dom';

// Note the "{id: string}" added to the RouteComponentProps. See CallPage for explanation
interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly callState: CallState;
  readonly currentIssue?: Issue;
  readonly locationState: LocationState;
  readonly splitDistrict: boolean;
}

interface DispatchProps {
  readonly onSubmitOutcome: (data: OutcomeData) => void;
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
    callState: state.callState,
    currentIssue: currentIssue,
    locationState: state.locationState,
    splitDistrict: state.locationState.splitDistrict
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSubmitOutcome: submitOutcome,
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: getIssuesIfNeeded,
      setLocation: newLocationLookup,
      clearLocation: clearAddress,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CallPage);
