import { connect } from 'react-redux';
import Why5calls from './Why5calls';
import { Issue } from '../../common/model';

interface StateProps {
  issues: Issue[];
}

function mapStateToProps(state: StateProps): StateProps {
  return {
    issues: state.issues
  };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(Why5calls);
