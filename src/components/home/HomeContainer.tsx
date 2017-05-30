// import {connect, Dispatch} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Why5calls from './Why5calls';

interface StateProps {}

function mapStateToProps(state: StateProps): StateProps {
  return {};
}

// function mapDispatchToProps(dispatch Dispatch<DispatchProps>): DispatchProps {
//   return bindActionCreators({}, dispatch);
// };

export default connect<StateProps, {}, {}>(mapStateToProps)(Why5calls);
