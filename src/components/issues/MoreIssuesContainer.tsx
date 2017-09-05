import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../../redux/root';
import { MoreIssuesPage } from './index';
import { Issue } from '../../common/model';
import { getIssuesIfNeeded } from '../../redux/remoteData';
import { selectIssueActionCreator } from '../../redux/callState';

import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

interface DispatchProps { 
  readonly onSelectIssue: (issueId: string) => void;
  readonly onGetIssuesIfNeeded: () => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  return {
    issues: state.remoteDataState.inactiveIssues,
    completedIssueIds: state.callState.completedIssueIds,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: getIssuesIfNeeded,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(MoreIssuesPage);
