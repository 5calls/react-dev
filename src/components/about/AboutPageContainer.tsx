import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import AboutPage from './AboutPage';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{id: string}> {}

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
  };
}
 
export default connect<StateProps, {}, OwnProps>(mapStateToProps)(AboutPage);
