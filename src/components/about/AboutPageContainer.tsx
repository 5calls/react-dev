import { connect } from 'react-redux';
import AboutPage from './AboutPage';
import { Issue } from '../../common/model';

interface StateProps {
  issues: Issue[];
  callState: callState;
}

function mapStateToProps(state: StateProps): StateProps {
  return {
    issues: state.issues
  };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(HomePage);
