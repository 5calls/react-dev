import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/root';
import { DonePage } from './index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{id: string}> {}

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
  };
};

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(DonePage);
