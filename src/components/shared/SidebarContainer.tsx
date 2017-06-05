import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssueActionCreator } from '../../redux/remoteData/actionCreator';
import { ApplicationState } from '../../redux/root';
import { Issue } from '../../common/model';
import Sidebar from './Sidebar';

interface StateProps {
  issues: Issue[];
}

interface DispatchProps {
  selectIssueActionCreator: (issue: Issue) => void;
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    issues: state.issues
  };
}

function mapDispatchToProps(dispatch: Dispatch<DispatchProps>): DispatchProps {
  return bindActionCreators({ selectIssueActionCreator }, dispatch);
}

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Sidebar);
