import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import HomePage from './HomePage';
import { Issue } from '../../common/model';

interface StateProps {
  readonly issues: Issue[];
  readonly currentIssue?: string;
  readonly completedIssueIds: string[];
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
  };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(HomePage);
