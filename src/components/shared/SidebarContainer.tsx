import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Issue } from '../../common/model';
import Sidebar from './Sidebar';
import { ApplicationState } from '../../redux/root';
import { selectIssueActionCreator } from '../../redux/callState/actionCreator';

interface StateProps {
  readonly issues: Issue[];
  readonly currentIssue: Issue;
  readonly completedIssueIds: string[];
}

interface DispatchProps {
  readonly setSelectedIssue: (issue: Issue) => void;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    issues: state.remoteDataState.issues,
    currentIssue: state.callState.currentIssue,
    completedIssueIds: state.callState.completedIssueIds
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators({setSelectedIssue: selectIssueActionCreator}, dispatch);
};

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Sidebar);
