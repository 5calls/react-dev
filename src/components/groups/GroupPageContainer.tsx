import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationState } from '../../redux/root';
import GroupPage from './GroupPage';
import { Group } from '../../common/model';
import { getIssuesIfNeeded } from '../../redux/remoteData';
import { selectIssueActionCreator, joinGroupActionCreator } from '../../redux/callState';

import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{ id: string }> { }

interface StateProps {
  readonly activeGroup?: Group;
}

interface DispatchProps {
  readonly onSelectIssue: (issueId: string) => void;
  readonly onGetIssuesIfNeeded: () => void;
  readonly onJoinGroup: (group: Group) => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps): StateProps => {
  return {
    activeGroup: state.callState.group
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {
      onSelectIssue: selectIssueActionCreator,
      onGetIssuesIfNeeded: getIssuesIfNeeded,
      onJoinGroup: joinGroupActionCreator,
    },
    dispatch);
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(GroupPage);
