import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssueActionCreator } from '../../redux/callState';
import { ApplicationState } from '../../redux/root';
import { newLocationLookup, clearAddress } from '../../redux/location';
import { LocationState } from '../../redux/location/reducer';
import { AboutPage } from './index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly locationState: LocationState;
}

interface DispatchProps {
  readonly onSelectIssue: (issueId: string) => void;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
    locationState: state.locationState,
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

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(AboutPage);
