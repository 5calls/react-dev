import { connect } from 'react-redux';
import Done from './Done';
import { Issue } from '../../common/model';
import { ApplicationState } from '../../redux/root';

interface StateProps {
  selectedIssue: Issue | null;
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    selectedIssue: state.callState.currentIssue
  };
};

export default connect<StateProps, {}, {}>(mapStateToProps)(Done);
