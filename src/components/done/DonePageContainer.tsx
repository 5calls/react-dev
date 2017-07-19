import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { DonePage } from './index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{id: string}> {}

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue?: Issue;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  let currentIssue = state.remoteDataState.issues.find(i => i.id === ownProps.match.params.id);

  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
    currentIssue: currentIssue
  };
};

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(DonePage);
