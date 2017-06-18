import { connect } from 'react-redux';
import {Issue} from '../../common/model';
import Call from './Call';
import { ApplicationState } from '../../redux/root';
interface StateProps {
  issues: Issue[];
  selectedIssue: Issue;
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    issues: state.issues,
    selectedIssue: state.selectedIssue
  };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(Call);
