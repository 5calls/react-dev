import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssueActionCreator } from '../../redux/callState';
import { ApplicationState } from '../../redux/root';
import { HomePage } from './index';
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly currentIssue?: Issue;
  readonly totalCount: number;
}

interface DispatchProps {
  readonly onSelectIssue: (issueId: string) => void;
}

function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
  let currentIssue: Issue | undefined = undefined;
  if (state.remoteDataState.issues) {
    currentIssue = state.remoteDataState.issues.find(i => i.id === ownProps.match.params.id);
  }

  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
    currentIssue: currentIssue,
    totalCount: state.remoteDataState.callTotal,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSelectIssue: selectIssueActionCreator,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(HomePage);
